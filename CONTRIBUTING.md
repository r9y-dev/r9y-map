# How to Contribute to the r9y-map

## Contributor License Agreement

Contributions to this project must be accompanied by a Contributor License Agreement (CLA). You (or your employer) retain the copyright to your contribution; this simply gives us permission to use and redistribute your contributions as part of the project. Head over to https://cla.developers.google.com/ to see your current agreements on file or to sign a new one.

You generally only need to submit a CLA once, so if you've already submitted one (even if it was for a different project), you probably don't need to do it again.

## Community Guidelines
This project follows Google's Open Source Community Guidelines as well as the included Code of Conduct.


## Code Reviews
All submissions, including submissions by project members, require review. We use GitHub pull requests for this purpose. Consult GitHub Help for more information on using pull requests.

We recommend making suggestions to a Pull Request to collaboratively fix problems.

## General Guidance
* The map is meant to be a browsable view of capabilities, not tied to a particular provider.
* Try to provide rationalization for placement, especially in terms of which Era (how many 9s)
* Fill in details in the accompanying file in `docs/`

## Changing the Map
The map was first generated with a tool internal to google.com, but you do not need that tool to change it.

`beck/map.html` is a static page. The `rows: [...]` list near the top of the file is the map's data, and each entry in it is one box on the map. Edit that list by hand and open a PR.

To add a capability:

1. Copy an existing entry from the same lane and era, and paste it where the new box should appear. Order matters: entries are drawn left to right, and a new line of boxes starts whenever an entry's `Level` is not higher than the entry before it.
2. Set these fields and leave the others as they are:
   * `Name`: the label shown on the map.
   * `Section`: `<Lane>-<Era>`, eg `Observability-Reactive`. The lanes are Development, Infrastructure, Operations, Observability and People. The eras are Demo, Deterministic, Reactive, Proactive and Autonomic.
   * `Level`: the column, from 1 to 15. Each era has three: Demo 1-3, Deterministic 4-6, Reactive 7-9, Proactive 10-12, Autonomic 13-15.
   * `Type`: the icon. Each lane uses one: `Form` (Development), `VM` (Infrastructure), `Dashboard` (Operations), `Visualization` (Observability), `Timeline` (People).
   * `MoreInfoLink`: `../docs/Your_Page.html`.
   * `DirectConnections`: the `Name` of each capability this one leads to, separated by a comma and a space. Names must match exactly, including capital letters. A name that does not match is skipped without any error, and no line is drawn.
3. Add the page as `docs/Your_Page.md`, starting from `empty_topic.md`, and add it to `docs/index.md`.

To check your change, serve the repository with any static web server and open the map. Jekyll is only needed to preview the pages in `docs/`.

```bash
python3 -m http.server 4000
```

Then visit [http://localhost:4000/beck/map.html](http://localhost:4000/beck/map.html).

## Updating details in `docs/`
* PRs are welcome from anyone!


## Etc
* If you represent a vendor, please feel free to note what capabilities your products provide by updating files in `docs/`
