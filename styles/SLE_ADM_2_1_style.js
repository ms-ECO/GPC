var size = 0;
var placement = 'point';
function categories_SLE_ADM_2_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'true':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(79,79,79,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(185,204,183,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'false':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(79,79,79,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(232,232,232,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SLE_ADM_2_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("GPC_III");
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Calibri\', sans-serif";
    var labelFill = "#4f4f4f";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NAME_2") !== null) {
        labelText = String(feature.get("NAME_2"));
    }
    
var style = categories_SLE_ADM_2_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
