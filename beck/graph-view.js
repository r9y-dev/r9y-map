class ReliabilityGraph {
    constructor() {
        this.data = [];
        this.nodes = [];
        this.connections = [];
        this.svg = null;
        this.g = null;
        this.zoom = null;
        this.showConnections = true;
        this.tooltip = d3.select('#tooltip');
        
        this.margins = { top: 100, right: 100, bottom: 100, left: 100 };
        this.nodeRadius = 25;
        this.gridSpacing = { x: 120, y: 80 };
        
        this.sectionColors = {
            'Development': '#e74c3c',
            'Infrastructure': '#3498db', 
            'Operations': '#f39c12',
            'Observability': '#2ecc71',
            'People': '#9b59b6',
            'Era': '#34495e'
        };
        
        this.init();
    }
    
    async init() {
        await this.loadData();
        this.setupSVG();
        this.processData();
        this.createGraph();
        this.setupEventListeners();
    }
    
    async loadData() {
        try {
            const response = await fetch('beck-map-topology.csv');
            const csvText = await response.text();
            this.data = d3.csvParse(csvText);
            console.log('Loaded data:', this.data.length, 'items');
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }
    
    setupSVG() {
        const container = d3.select('#graph-container');
        const containerRect = container.node().getBoundingClientRect();
        
        this.svg = d3.select('#graph-svg')
            .attr('width', containerRect.width)
            .attr('height', containerRect.height);
            
        // Setup zoom behavior
        this.zoom = d3.zoom()
            .scaleExtent([0.1, 3])
            .on('zoom', (event) => {
                this.g.attr('transform', event.transform);
            });
            
        this.svg.call(this.zoom);
        
        // Main group for all graph elements
        this.g = this.svg.append('g');
    }
    
    processData() {
        // Filter out empty rows and process data
        this.nodes = this.data
            .filter(d => d.Name && d.Name.trim() !== '')
            .map((d, i) => {
                const section = this.extractSection(d.Section);
                const level = parseInt(d.Level) || 1;
                
                return {
                    id: i,
                    name: d.Name,
                    section: section,
                    level: level,
                    type: d.Type || 'Unknown',
                    notes: d.Notes || '',
                    directConnections: d.DirectConnections || '',
                    moreInfoLink: d['More Info Link'] || '',
                    originalData: d
                };
            });
            
        // Create connections based on DirectConnections field
        this.connections = this.createConnections();
        
        console.log('Processed nodes:', this.nodes.length);
        console.log('Processed connections:', this.connections.length);
    }
    
    extractSection(sectionStr) {
        if (!sectionStr) return 'Unknown';
        
        if (sectionStr.includes('Era')) return 'Era';
        if (sectionStr.includes('Development')) return 'Development';
        if (sectionStr.includes('Infrastructure')) return 'Infrastructure';
        if (sectionStr.includes('Operations')) return 'Operations';
        if (sectionStr.includes('Observability')) return 'Observability';
        if (sectionStr.includes('People')) return 'People';
        
        return 'Unknown';
    }
    
    createConnections() {
        const connections = [];
        
        this.nodes.forEach(node => {
            if (node.directConnections) {
                const connectionNames = node.directConnections
                    .split(',')
                    .map(name => name.trim())
                    .filter(name => name.length > 0);
                    
                connectionNames.forEach(connName => {
                    const targetNode = this.nodes.find(n => 
                        n.name.toLowerCase() === connName.toLowerCase()
                    );
                    
                    if (targetNode) {
                        connections.push({
                            source: node.id,
                            target: targetNode.id,
                            sourceNode: node,
                            targetNode: targetNode
                        });
                    }
                });
            }
        });
        
        return connections;
    }
    
    calculateNodePositions() {
        // Group nodes by section and level
        const sections = ['Era', 'Development', 'Infrastructure', 'Operations', 'Observability', 'People'];
        const maxLevel = Math.max(...this.nodes.map(n => n.level));
        
        // Calculate grid dimensions
        const sectionWidth = this.gridSpacing.x * (maxLevel + 2);
        const totalWidth = sectionWidth * sections.length;
        const totalHeight = this.gridSpacing.y * (maxLevel + 2);
        
        // Position nodes
        this.nodes.forEach(node => {
            const sectionIndex = sections.indexOf(node.section);
            const baseX = this.margins.left + sectionIndex * sectionWidth;
            const baseY = this.margins.top + node.level * this.gridSpacing.y;
            
            // Add some randomness to avoid overlapping nodes at same level
            const nodesAtSameLevel = this.nodes.filter(n => 
                n.section === node.section && n.level === node.level
            );
            const nodeIndex = nodesAtSameLevel.indexOf(node);
            const offsetX = (nodeIndex - nodesAtSameLevel.length / 2) * 40;
            
            node.x = baseX + offsetX;
            node.y = baseY;
        });
        
        return { totalWidth, totalHeight };
    }
    
    createGraph() {
        const { totalWidth, totalHeight } = this.calculateNodePositions();
        
        // Set SVG viewBox to encompass all content
        this.svg.attr('viewBox', `0 0 ${totalWidth + this.margins.left + this.margins.right} ${totalHeight + this.margins.top + this.margins.bottom}`);
        
        // Draw section labels
        this.drawSectionLabels();
        
        // Draw level indicators
        this.drawLevelIndicators();
        
        // Draw connections first (so they appear behind nodes)
        this.drawConnections();
        
        // Draw nodes
        this.drawNodes();
        
        // Initial zoom to fit content
        this.fitToContent();
    }
    
    drawSectionLabels() {
        const sections = ['Era', 'Development', 'Infrastructure', 'Operations', 'Observability', 'People'];
        const maxLevel = Math.max(...this.nodes.map(n => n.level));
        const sectionWidth = this.gridSpacing.x * (maxLevel + 2);
        
        this.g.selectAll('.section-label')
            .data(sections)
            .enter()
            .append('text')
            .attr('class', 'section-label')
            .attr('x', (d, i) => this.margins.left + i * sectionWidth + sectionWidth / 2)
            .attr('y', this.margins.top - 20)
            .text(d => d)
            .style('fill', d => this.sectionColors[d] || '#2c3e50');
    }
    
    drawLevelIndicators() {
        const maxLevel = Math.max(...this.nodes.map(n => n.level));
        const levels = Array.from({length: maxLevel}, (_, i) => i + 1);
        
        this.g.selectAll('.level-indicator')
            .data(levels)
            .enter()
            .append('text')
            .attr('class', 'level-indicator')
            .attr('x', this.margins.left - 20)
            .attr('y', (d) => this.margins.top + d * this.gridSpacing.y)
            .text(d => `L${d}`)
            .attr('text-anchor', 'end');
    }
    
    drawConnections() {
        const connectionGroup = this.g.append('g').attr('class', 'connections');
        
        connectionGroup.selectAll('.connection')
            .data(this.connections)
            .enter()
            .append('line')
            .attr('class', 'connection')
            .attr('x1', d => this.nodes[d.source].x)
            .attr('y1', d => this.nodes[d.source].y)
            .attr('x2', d => this.nodes[d.target].x)
            .attr('y2', d => this.nodes[d.target].y)
            .style('opacity', this.showConnections ? 0.6 : 0);
    }
    
    drawNodes() {
        const nodeGroup = this.g.append('g').attr('class', 'nodes');
        
        const nodeElements = nodeGroup.selectAll('.node')
            .data(this.nodes)
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${d.x}, ${d.y})`);
            
        // Node circles
        nodeElements.append('circle')
            .attr('class', d => `node-circle ${d.section.toLowerCase()}`)
            .attr('r', this.nodeRadius)
            .style('fill', d => this.sectionColors[d.section] || '#95a5a6');
            
        // Node text (abbreviated names)
        nodeElements.append('text')
            .attr('class', 'node-text')
            .attr('dy', '0.35em')
            .text(d => this.abbreviateName(d.name))
            .each(function(d) {
                // Wrap text if too long
                const self = d3.select(this);
                const words = d.name.split(/\s+/);
                if (words.length > 2) {
                    self.text('');
                    words.slice(0, 2).forEach((word, i) => {
                        self.append('tspan')
                            .attr('x', 0)
                            .attr('dy', i === 0 ? '-0.2em' : '1em')
                            .text(word);
                    });
                }
            });
            
        // Event listeners for nodes
        nodeElements
            .on('mouseover', (event, d) => this.showTooltip(event, d))
            .on('mouseout', () => this.hideTooltip())
            .on('click', (event, d) => this.handleNodeClick(event, d));
    }
    
    abbreviateName(name) {
        if (name.length <= 15) return name;
        
        const words = name.split(' ');
        if (words.length === 1) {
            return name.substring(0, 12) + '...';
        }
        
        // Try to create abbreviation from first letters
        if (words.length > 2) {
            return words.map(w => w.charAt(0).toUpperCase()).join('');
        }
        
        return words[0] + ' ' + words[1].substring(0, 8) + '...';
    }
    
    showTooltip(event, node) {
        const connections = this.connections
            .filter(c => c.source === node.id || c.target === node.id)
            .map(c => c.source === node.id ? c.targetNode.name : c.sourceNode.name);
            
        this.tooltip.select('#tooltip-title').text(node.name);
        this.tooltip.select('#tooltip-section').html(`<strong>Section:</strong> ${node.section}`);
        this.tooltip.select('#tooltip-level').html(`<strong>Level:</strong> ${node.level}`);
        this.tooltip.select('#tooltip-type').html(`<strong>Type:</strong> ${node.type}`);
        this.tooltip.select('#tooltip-notes').html(node.notes ? `<strong>Notes:</strong> ${node.notes}` : '');
        
        const connectionsDiv = this.tooltip.select('#tooltip-connections');
        if (connections.length > 0) {
            connectionsDiv.html(`
                <h4>Connected to:</h4>
                <ul>
                    ${connections.map(c => `<li>${c}</li>`).join('')}
                </ul>
            `);
        } else {
            connectionsDiv.html('');
        }
        
        this.tooltip
            .classed('hidden', false)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px');
            
        // Highlight connections
        this.highlightConnections(node.id);
    }
    
    hideTooltip() {
        this.tooltip.classed('hidden', true);
        this.clearHighlights();
    }
    
    highlightConnections(nodeId) {
        this.g.selectAll('.connection')
            .classed('highlighted', d => d.source === nodeId || d.target === nodeId);
    }
    
    clearHighlights() {
        this.g.selectAll('.connection').classed('highlighted', false);
    }
    
    handleNodeClick(event, node) {
        if (node.moreInfoLink) {
            window.open(node.moreInfoLink, '_blank');
        }
    }
    
    toggleConnections() {
        this.showConnections = !this.showConnections;
        this.g.selectAll('.connection')
            .transition()
            .duration(300)
            .style('opacity', this.showConnections ? 0.6 : 0);
    }
    
    fitToContent() {
        const bounds = this.g.node().getBBox();
        const fullWidth = this.svg.node().clientWidth;
        const fullHeight = this.svg.node().clientHeight;
        
        const width = bounds.width;
        const height = bounds.height;
        
        const midX = bounds.x + width / 2;
        const midY = bounds.y + height / 2;
        
        const scale = 0.8 / Math.max(width / fullWidth, height / fullHeight);
        const translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY];
        
        this.svg.transition()
            .duration(750)
            .call(this.zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
    }
    
    setupEventListeners() {
        // Reset zoom button
        d3.select('#resetZoom').on('click', () => {
            this.fitToContent();
        });
        
        // Toggle connections button
        d3.select('#toggleConnections').on('click', () => {
            this.toggleConnections();
        });
        
        // Window resize handler
        window.addEventListener('resize', () => {
            const container = d3.select('#graph-container');
            const containerRect = container.node().getBoundingClientRect();
            this.svg
                .attr('width', containerRect.width)
                .attr('height', containerRect.height);
        });
    }
}

// Initialize the graph when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ReliabilityGraph();
});