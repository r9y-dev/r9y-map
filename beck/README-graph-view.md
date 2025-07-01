# Reliability Engineering Maturity Model - Graph View

This is a new interactive graph-based visualization of the Reliability Engineering Maturity Model that displays documents as nodes arranged in a grid layout.

## Features

### Visual Organization
- **Grid Layout**: Documents are arranged in rows and columns based on their section and maturity level
- **Color Coding**: Each section has a distinct color:
  - 🔴 Development (Red)
  - 🔵 Infrastructure (Blue) 
  - 🟡 Operations (Orange)
  - 🟢 Observability (Green)
  - 🟣 People (Purple)
  - ⚫ Era (Dark Gray)

### Interactive Elements
- **Hover Tooltips**: Detailed information about each document including connections
- **Clickable Nodes**: Click to open external documentation links
- **Connection Highlighting**: Hover over nodes to see their relationships
- **Zoom & Pan**: Navigate the large graph with mouse controls
- **Toggle Connections**: Show/hide relationship lines between documents

### Layout Structure
- **Columns**: Represent different sections (Era, Development, Infrastructure, Operations, Observability, People)
- **Rows**: Represent maturity levels (1-15)
- **Node Size**: Consistent circular nodes for easy identification
- **Spacing**: Optimized for readability and navigation

## Usage

### Navigation
- **Mouse Wheel**: Zoom in/out
- **Click & Drag**: Pan around the graph
- **Reset View**: Click the "Reset View" button to fit all content
- **Toggle Connections**: Click to show/hide relationship lines

### Information Access
- **Hover**: Move mouse over any node to see detailed information
- **Click**: Click on nodes to open external documentation (if available)
- **Connections**: See which documents are related to each other

## Technical Implementation

### Files
- `graph-view.html`: Main HTML structure
- `graph-view.css`: Styling and responsive design
- `graph-view.js`: JavaScript logic and D3.js visualization
- `beck-map-topology.csv`: Data source

### Dependencies
- D3.js v7 (loaded from CDN)
- Modern web browser with ES6 support

### Data Processing
The visualization automatically:
1. Loads data from the CSV file
2. Parses document relationships
3. Calculates optimal positioning
4. Renders interactive elements
5. Enables navigation controls

## Comparison with Original View

### Advantages of Graph View
- **Better Overview**: See all documents and their relationships at once
- **Intuitive Navigation**: Standard graph interaction patterns
- **Clearer Relationships**: Visual connection lines between related documents
- **Modern UI**: Clean, responsive design with smooth animations
- **Accessibility**: Better color contrast and hover states

### When to Use Each View
- **Graph View**: For exploring relationships and getting an overview
- **Original View**: For detailed reading and linear progression through maturity levels

## Browser Compatibility
- Chrome/Edge 80+
- Firefox 75+
- Safari 13+

## Performance
- Optimized for up to 500+ nodes
- Smooth animations and interactions
- Responsive design for mobile devices