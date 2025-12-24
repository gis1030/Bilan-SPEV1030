/**
 * GeoData Optimization Library
 * Implements Factory Pattern and Utilities to reduce code duplication.
 */

const StyleFactory = {
    /**
     * Creates a style function based on a property switch or default style.
     * @param {Object} config - Configuration object
     * @param {string} [config.property] - Property name to switch styles on
     * @param {Object} [config.styles] - Map of property values to style objects
     * @param {Object} config.default - Default style object
     * @returns {Function} Leaflet style function
     */
    create: function(config) {
        return function(feature) {
            if (config.property && config.styles) {
                const value = String(feature.properties[config.property]);
                // Check exact match
                if (config.styles[value]) {
                    return { ...config.default, ...config.styles[value] };
                }
            }
            return config.default;
        };
    },

    /**
     * Creates a simple static style function
     * @param {Object} styleObj
     */
    simple: function(styleObj) {
        return function() {
            return styleObj;
        };
    }
};

const ClusterGenerator = {
    /**
     * Generator for MarkerClusterGroup
     * @param {Object} options - Cluster options
     */
    create: function(options) {
        if (typeof L.markerClusterGroup !== 'function') {
            console.warn('L.markerClusterGroup is not available');
            return null;
        }
        return new L.markerClusterGroup(options);
    }
};

const DOMHelper = {
    /**
     * Clears content of multiple elements by ID
     * @param {string[]} ids - Array of element IDs
     */
    clearFields: function(ids) {
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = '';
        });
    }
};
