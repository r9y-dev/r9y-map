/**
 * Lane filter for the r9y map.
 *
 * Lets a viewer hide swimlanes (Development, Infrastructure, Operations, ...)
 * so one area of the map can be discussed without the rest on screen.
 *
 * The visible lanes live in the URL, so a focused view can be shared:
 *
 *   map.html                              every lane
 *   map.html?lanes=observability          only the Observability lane
 *   map.html?lanes=operations,people      two lanes
 *
 * The row of eras (the nines) is always shown.
 *
 * How it works: the bundled renderer lays the map out once and cannot
 * re-render in place, so this script wraps window.isoMap.render and filters
 * the rows before that first render. Every control in the panel is a plain
 * link to the same page with a different ?lanes= value.
 *
 * Load it after iso_map.bundled.js and before the call to isoMap.render().
 */
(function () {
  'use strict';

  var PARAM = 'lanes';
  var ERA_SECTION = 'Era';

  var isoMap = window.isoMap;
  if (!isoMap || typeof isoMap.render !== 'function') {
    return;
  }

  // A section is "<Lane>-<Era>", for example "Observability-Reactive".
  function laneOf(section) {
    return String(section).split('-')[0];
  }

  function isEra(row) {
    return row.Section === ERA_SECTION;
  }

  // Sections in the order they first appear. The renderer hands out
  // sectionColors in this same order.
  function sectionsOf(rows) {
    var seen = {};
    var sections = [];
    rows.forEach(function (row) {
      if (!seen[row.Section]) {
        seen[row.Section] = true;
        sections.push(row.Section);
      }
    });
    return sections;
  }

  function lanesOf(rows) {
    var seen = {};
    var lanes = [];
    rows.forEach(function (row) {
      var lane = laneOf(row.Section);
      if (!isEra(row) && !seen[lane]) {
        seen[lane] = true;
        lanes.push(lane);
      }
    });
    return lanes;
  }

  // Returns the lanes to show, in map order, or null when nothing is hidden.
  // Unknown names are ignored. A value that matches no lane shows everything.
  function readSelection(lanes) {
    var params = new URLSearchParams(window.location.search);
    if (!params.has(PARAM)) {
      return null;
    }
    var wanted = {};
    params.getAll(PARAM).forEach(function (value) {
      value.split(',').forEach(function (name) {
        wanted[name.trim().toLowerCase()] = true;
      });
    });
    var visible = lanes.filter(function (lane) {
      return wanted[lane.toLowerCase()];
    });
    if (visible.length === 0 || visible.length === lanes.length) {
      return null;
    }
    return visible;
  }

  function hrefFor(visible, lanes) {
    var params = new URLSearchParams(window.location.search);
    params.delete(PARAM);
    if (visible.length > 0 && visible.length < lanes.length) {
      params.set(
        PARAM,
        visible
          .map(function (lane) {
            return lane.toLowerCase();
          })
          .join(',')
      );
    }
    // Keep the commas readable in the address bar.
    var query = params.toString().replace(/%2C/gi, ',');
    return window.location.pathname + (query ? '?' + query : '');
  }

  // Keeps each section's colour the same as on the full map.
  function filterData(data, visible) {
    var shown = {};
    visible.forEach(function (lane) {
      shown[lane] = true;
    });

    var rows = data.rows.filter(function (row) {
      return isEra(row) || shown[laneOf(row.Section)];
    });

    var filtered = {};
    Object.keys(data).forEach(function (key) {
      filtered[key] = data[key];
    });
    filtered.rows = rows;

    if (data.sectionColors) {
      var allSections = sectionsOf(data.rows);
      filtered.sectionColors = sectionsOf(rows).map(function (section) {
        return data.sectionColors[allSections.indexOf(section) % data.sectionColors.length];
      });
    }
    return filtered;
  }

  function laneColors(data, lanes) {
    var colors = {};
    if (!data.sectionColors) {
      return colors;
    }
    sectionsOf(data.rows).forEach(function (section, index) {
      var lane = laneOf(section);
      if (lanes.indexOf(lane) !== -1 && !colors[lane]) {
        colors[lane] = data.sectionColors[index % data.sectionColors.length];
      }
    });
    return colors;
  }

  var CSS = [
    '#laneFilter {',
    '  position: fixed; top: 12px; left: 12px; z-index: 90;',
    '  display: flex; flex-wrap: wrap; align-items: center; gap: 4px 6px;',
    '  max-width: calc(100vw - 24px); box-sizing: border-box;',
    '  margin: 0; padding: 6px 10px;',
    '  background: rgba(255, 255, 255, 0.94);',
    '  border: 1px solid #dadce0; border-radius: 4px;',
    '  box-shadow: 0 1px 3px rgba(60, 64, 67, 0.2);',
    "  font-family: 'Google Sans', Roboto, 'Open Sans', sans-serif;",
    '  font-size: 13px; line-height: 20px; color: #202124; cursor: default;',
    '}',
    '#laneFilter .lf-title {',
    '  margin-right: 4px; font-size: 11px; letter-spacing: 0.08em;',
    '  text-transform: uppercase; color: #5f6368;',
    '}',
    '#laneFilter ul { display: contents; margin: 0; padding: 0; list-style: none; }',
    '#laneFilter li {',
    '  display: inline-flex; align-items: center; margin: 0; padding: 0;',
    '  border: 1px solid #dadce0; border-radius: 12px; background: #fff;',
    '}',
    '#laneFilter a { color: inherit; text-decoration: none; border-radius: 12px; }',
    '#laneFilter a:focus-visible { outline: 2px solid #1a73e8; outline-offset: 1px; }',
    '#laneFilter .lf-toggle {',
    '  display: inline-flex; align-items: center; gap: 6px; padding: 1px 8px 1px 6px;',
    '}',
    '#laneFilter .lf-box {',
    '  display: inline-block; width: 10px; height: 10px; box-sizing: border-box;',
    '  border: 2px solid var(--lane); border-radius: 2px; background: var(--lane);',
    '}',
    '#laneFilter li.lf-hidden .lf-toggle { color: #80868b; }',
    '#laneFilter li.lf-hidden .lf-box { background: transparent; }',
    '#laneFilter a.lf-toggle[href]:hover { background: #f1f3f4; }',
    '#laneFilter .lf-only, #laneFilter .lf-all {',
    '  padding: 1px 8px; font-size: 11px; color: #1a73e8;',
    '}',
    '#laneFilter .lf-only { border-left: 1px solid #dadce0; border-radius: 0 12px 12px 0; }',
    '#laneFilter .lf-only:hover, #laneFilter .lf-all:hover { text-decoration: underline; }',
    '@media print { #laneFilter { display: none; } }',
  ].join('\n');

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text) {
      node.textContent = text;
    }
    return node;
  }

  function buildPanel(lanes, visible, colors) {
    var style = element('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var panel = element('nav');
    panel.id = 'laneFilter';
    panel.setAttribute('aria-label', 'Show or hide map lanes');
    panel.appendChild(element('span', 'lf-title', 'Lanes'));

    var list = element('ul');
    lanes.forEach(function (lane) {
      var isVisible = visible.indexOf(lane) !== -1;
      var isLastVisible = isVisible && visible.length === 1;
      var item = element('li', isVisible ? '' : 'lf-hidden');
      item.style.setProperty('--lane', colors[lane] || '#5f6368');

      var toggle = element('a', 'lf-toggle');
      toggle.appendChild(element('span', 'lf-box'));
      toggle.appendChild(document.createTextNode(lane));
      if (isLastVisible) {
        // Hiding the only visible lane would leave an empty map.
        toggle.setAttribute('aria-disabled', 'true');
        toggle.title = lane + ' is the only lane shown';
      } else {
        var next = lanes.filter(function (other) {
          var otherVisible = visible.indexOf(other) !== -1;
          return other === lane ? !isVisible : otherVisible;
        });
        toggle.href = hrefFor(next, lanes);
        toggle.title = (isVisible ? 'Hide the ' : 'Show the ') + lane + ' lane';
        toggle.setAttribute('aria-label', toggle.title);
      }
      item.appendChild(toggle);

      if (!isLastVisible) {
        var only = element('a', 'lf-only', 'only');
        only.href = hrefFor([lane], lanes);
        only.title = 'Show only the ' + lane + ' lane';
        only.setAttribute('aria-label', only.title);
        item.appendChild(only);
      }
      list.appendChild(item);
    });
    panel.appendChild(list);

    if (visible.length < lanes.length) {
      var all = element('a', 'lf-all', 'Show all');
      all.href = hrefFor(lanes, lanes);
      panel.appendChild(all);
    }

    // Appended to <body>, outside #isoMap, so the renderer's drag handlers and
    // its innerHTML reset of that container leave the panel alone.
    document.body.appendChild(panel);
  }

  var render = isoMap.render;
  isoMap.render = function (data) {
    var lanes = lanesOf(data.rows);
    var selection = lanes.length > 1 ? readSelection(lanes) : null;
    render.call(isoMap, selection ? filterData(data, selection) : data);
    if (lanes.length > 1) {
      buildPanel(lanes, selection || lanes, laneColors(data, lanes));
    }
  };
})();
