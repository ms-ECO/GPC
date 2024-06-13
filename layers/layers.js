var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            //'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_SLE_ADM_2_1 = new ol.format.GeoJSON();
var features_SLE_ADM_2_1 = format_SLE_ADM_2_1.readFeatures(json_SLE_ADM_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLE_ADM_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLE_ADM_2_1.addFeatures(features_SLE_ADM_2_1);
var lyr_SLE_ADM_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLE_ADM_2_1, 
                style: style_SLE_ADM_2_1,
                popuplayertitle: "SLE_ADM_2",
                interactive: true,
    title: 'SLE_ADM_2<br />\
    <img src="styles/legend/SLE_ADM_2_1_0.png" /> GPC III district<br />\
    <img src="styles/legend/SLE_ADM_2_1_1.png" /> districts<br />'
        });
var format_SLE_ADM_2_GPCYE_2 = new ol.format.GeoJSON();
var features_SLE_ADM_2_GPCYE_2 = format_SLE_ADM_2_GPCYE_2.readFeatures(json_SLE_ADM_2_GPCYE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLE_ADM_2_GPCYE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLE_ADM_2_GPCYE_2.addFeatures(features_SLE_ADM_2_GPCYE_2);
var lyr_SLE_ADM_2_GPCYE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLE_ADM_2_GPCYE_2, 
                style: style_SLE_ADM_2_GPCYE_2,
                popuplayertitle: "SLE_ADM_2_GPCYE",
                interactive: true,
    title: 'SLE_ADM_2_GPCYE<br />\
    <img src="styles/legend/SLE_ADM_2_GPCYE_2_0.png" /> GPCYE districts<br />\
    <img src="styles/legend/SLE_ADM_2_GPCYE_2_1.png" /> <br />'
        });
var format_SLE_ADM_3_3 = new ol.format.GeoJSON();
var features_SLE_ADM_3_3 = format_SLE_ADM_3_3.readFeatures(json_SLE_ADM_3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLE_ADM_3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLE_ADM_3_3.addFeatures(features_SLE_ADM_3_3);
var lyr_SLE_ADM_3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLE_ADM_3_3, 
                style: style_SLE_ADM_3_3,
                popuplayertitle: "SLE_ADM_3",
                interactive: true,
    title: 'SLE_ADM_3<br />\
    <img src="styles/legend/SLE_ADM_3_3_0.png" /> GPCYE chiefdoms<br />\
    <img src="styles/legend/SLE_ADM_3_3_1.png" /> <br />'
        });
var format_SLE_roads_4 = new ol.format.GeoJSON();
var features_SLE_roads_4 = format_SLE_roads_4.readFeatures(json_SLE_roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLE_roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLE_roads_4.addFeatures(features_SLE_roads_4);
var lyr_SLE_roads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLE_roads_4, 
                style: style_SLE_roads_4,
                popuplayertitle: "SLE_roads",
                interactive: true,
                title: 'SLE_roads'
            });
var format_SLE_location_5 = new ol.format.GeoJSON();
var features_SLE_location_5 = format_SLE_location_5.readFeatures(json_SLE_location_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLE_location_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLE_location_5.addFeatures(features_SLE_location_5);
var lyr_SLE_location_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLE_location_5, 
                style: style_SLE_location_5,
                popuplayertitle: "SLE_location",
                interactive: true,
                title: 'SLE_location'
            });
var format_FR_6 = new ol.format.GeoJSON();
var features_FR_6 = format_FR_6.readFeatures(json_FR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FR_6.addFeatures(features_FR_6);
var lyr_FR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FR_6, 
                style: style_FR_6,
                popuplayertitle: "FR",
                interactive: true,
    title: 'FR<br />\
    <img src="styles/legend/FR_6_0.png" /> 2020<br />\
    <img src="styles/legend/FR_6_1.png" /> 2021<br />\
    <img src="styles/legend/FR_6_2.png" /> 2022<br />\
    <img src="styles/legend/FR_6_3.png" /> 2023<br />'
        });
var format_BC_7 = new ol.format.GeoJSON();
var features_BC_7 = format_BC_7.readFeatures(json_BC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BC_7.addFeatures(features_BC_7);
var lyr_BC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BC_7, 
                style: style_BC_7,
                popuplayertitle: "BC",
                interactive: true,
    title: 'BC<br />\
    <img src="styles/legend/BC_7_0.png" /> 2022<br />\
    <img src="styles/legend/BC_7_1.png" /> 2023<br />'
        });
var format_BR_8 = new ol.format.GeoJSON();
var features_BR_8 = format_BR_8.readFeatures(json_BR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BR_8.addFeatures(features_BR_8);
var lyr_BR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BR_8, 
                style: style_BR_8,
                popuplayertitle: "BR",
                interactive: true,
    title: 'BR<br />\
    <img src="styles/legend/BR_8_0.png" /> 2020<br />\
    <img src="styles/legend/BR_8_1.png" /> 2021<br />\
    <img src="styles/legend/BR_8_2.png" /> 2022<br />\
    <img src="styles/legend/BR_8_3.png" /> 2023<br />'
        });
var format_IGF_9 = new ol.format.GeoJSON();
var features_IGF_9 = format_IGF_9.readFeatures(json_IGF_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IGF_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGF_9.addFeatures(features_IGF_9);
var lyr_IGF_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IGF_9, 
                style: style_IGF_9,
                popuplayertitle: "IGF",
                interactive: true,
    title: 'IGF<br />\
    <img src="styles/legend/IGF_9_0.png" /> 2020<br />\
    <img src="styles/legend/IGF_9_1.png" /> 2021<br />\
    <img src="styles/legend/IGF_9_2.png" /> 2022<br />\
    <img src="styles/legend/IGF_9_3.png" /> 2023<br />\
    <img src="styles/legend/IGF_9_4.png" /> 2024<br />'
        });
var format_IGF_10 = new ol.format.GeoJSON();
var features_IGF_10 = format_IGF_10.readFeatures(json_IGF_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IGF_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGF_10.addFeatures(features_IGF_10);
var lyr_IGF_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IGF_10, 
                style: style_IGF_10,
                popuplayertitle: "IGF",
                interactive: true,
    title: 'IGF<br />\
    <img src="styles/legend/IGF_10_0.png" /> 2024<br />'
        });
var group_GPCYE = new ol.layer.Group({
                                layers: [lyr_IGF_10,],
                                fold: "open",
                                title: "GPCYE"});
var group_GPCIII = new ol.layer.Group({
                                layers: [lyr_FR_6,lyr_BC_7,lyr_BR_8,lyr_IGF_9,],
                                fold: "open",
                                title: "GPC-III"});

lyr_OpenTopoMap_0.setVisible(true);lyr_SLE_ADM_2_1.setVisible(true);lyr_SLE_ADM_2_GPCYE_2.setVisible(true);lyr_SLE_ADM_3_3.setVisible(true);lyr_SLE_roads_4.setVisible(true);lyr_SLE_location_5.setVisible(true);lyr_FR_6.setVisible(true);lyr_BC_7.setVisible(true);lyr_BR_8.setVisible(true);lyr_IGF_9.setVisible(true);lyr_IGF_10.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_SLE_ADM_2_1,lyr_SLE_ADM_2_GPCYE_2,lyr_SLE_ADM_3_3,lyr_SLE_roads_4,lyr_SLE_location_5,group_GPCIII,group_GPCYE];
lyr_SLE_ADM_2_1.set('fieldAliases', {'id': 'id', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'GPC_I': 'GPC_I', 'GPC_II': 'GPC_II', 'GPC_III': 'GPC_III', 'GPCYE': 'GPCYE', 'GPCYE_prop': 'GPCYE_prop', });
lyr_SLE_ADM_2_GPCYE_2.set('fieldAliases', {'id': 'id', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'GPC_I': 'GPC_I', 'GPC_II': 'GPC_II', 'GPC_III': 'GPC_III', 'GPCYE': 'GPCYE', 'GPCYE_prop': 'GPCYE_prop', });
lyr_SLE_ADM_3_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'GPCYE': 'GPCYE', });
lyr_SLE_roads_4.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_SLE_location_5.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', 'GPC_location': 'GPC_location', });
lyr_FR_6.set('fieldAliases', {'id': 'id', 'Project_ID': 'Project_ID', 'km': 'km', 'District': 'District', 'Year': 'Year', 'show_label': 'show_label', 'path2pdf': 'path2pdf', });
lyr_BC_7.set('fieldAliases', {'id': 'id', 'ID_RA': 'ID_RA', 'Comments': 'Comments', 'BC_units': 'BC_units', 'Long': 'Long', 'Lat': 'Lat', 'District': 'District', 'Year': 'Year', });
lyr_BR_8.set('fieldAliases', {'id': 'id', 'Project Code': 'Project Code', 'District': 'District', 'Project Name': 'Project Name', 'm': 'm', 'Long': 'Long', 'Lat': 'Lat', 'Year': 'Year', 'show_label': 'show_label', 'path2pdf': 'path2pdf', });
lyr_IGF_9.set('fieldAliases', {'id': 'id', 'project_ID': 'project_ID', 'Village': 'Village', 'IGF_type': 'IGF_type', 'Long': 'Long', 'Lat': 'Lat', 'District': 'District', 'Year': 'Year', 'show_label': 'show_label', 'path2pdf': 'path2pdf', });
lyr_IGF_10.set('fieldAliases', {'id': 'id', 'project_ID': 'project_ID', 'Village': 'Village', 'IGF_type': 'IGF_type', 'Long': 'Long', 'Lat': 'Lat', 'District': 'District', 'Year': 'Year', 'show_label': 'show_label', 'path2pdf': 'path2pdf', });
lyr_SLE_ADM_2_1.set('fieldImages', {'id': '', 'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'VARNAME_2': '', 'NL_NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'CC_2': '', 'HASC_2': '', 'GPC_I': '', 'GPC_II': '', 'GPC_III': '', 'GPCYE': '', 'GPCYE_prop': '', });
lyr_SLE_ADM_2_GPCYE_2.set('fieldImages', {'id': '', 'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'VARNAME_2': '', 'NL_NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'CC_2': '', 'HASC_2': '', 'GPC_I': '', 'GPC_II': '', 'GPC_III': '', 'GPCYE': '', 'GPCYE_prop': '', });
lyr_SLE_ADM_3_3.set('fieldImages', {'id': '', 'fid': '', 'GID_3': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', 'GPCYE': '', });
lyr_SLE_roads_4.set('fieldImages', {'id': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_SLE_location_5.set('fieldImages', {'id': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', 'GPC_location': '', });
lyr_FR_6.set('fieldImages', {'id': 'TextEdit', 'Project_ID': 'TextEdit', 'km': 'TextEdit', 'District': 'TextEdit', 'Year': 'Range', 'show_label': 'CheckBox', 'path2pdf': 'TextEdit', });
lyr_BC_7.set('fieldImages', {'id': '', 'ID_RA': '', 'Comments': '', 'BC_units': '', 'Long': '', 'Lat': '', 'District': '', 'Year': '', });
lyr_BR_8.set('fieldImages', {'id': '', 'Project Code': '', 'District': '', 'Project Name': '', 'm': '', 'Long': '', 'Lat': '', 'Year': '', 'show_label': '', 'path2pdf': '', });
lyr_IGF_9.set('fieldImages', {'id': '', 'project_ID': '', 'Village': '', 'IGF_type': '', 'Long': '', 'Lat': '', 'District': '', 'Year': '', 'show_label': '', 'path2pdf': '', });
lyr_IGF_10.set('fieldImages', {'id': '', 'project_ID': '', 'Village': '', 'IGF_type': '', 'Long': '', 'Lat': '', 'District': '', 'Year': '', 'show_label': '', 'path2pdf': '', });
lyr_SLE_ADM_2_1.set('fieldLabels', {'id': 'hidden field', 'GID_0': 'hidden field', 'NAME_0': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'inline label - always visible', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'GPC_I': 'hidden field', 'GPC_II': 'hidden field', 'GPC_III': 'hidden field', 'GPCYE': 'hidden field', 'GPCYE_prop': 'hidden field', });
lyr_SLE_ADM_2_GPCYE_2.set('fieldLabels', {'id': 'hidden field', 'GID_0': 'hidden field', 'NAME_0': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'inline label - always visible', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'GPC_I': 'inline label - always visible', 'GPC_II': 'inline label - always visible', 'GPC_III': 'inline label - always visible', 'GPCYE': 'inline label - always visible', 'GPCYE_prop': 'no label', });
lyr_SLE_ADM_3_3.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'GID_3': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'NAME_3': 'inline label - always visible', 'VARNAME_3': 'hidden field', 'NL_NAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'CC_3': 'hidden field', 'HASC_3': 'hidden field', 'GPCYE': 'hidden field', });
lyr_SLE_roads_4.set('fieldLabels', {'id': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_SLE_location_5.set('fieldLabels', {'id': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'population': 'hidden field', 'name': 'inline label - always visible', 'GPC_location': 'hidden field', });
lyr_FR_6.set('fieldLabels', {'id': 'hidden field', 'Project_ID': 'inline label - always visible', 'km': 'inline label - always visible', 'District': 'inline label - always visible', 'Year': 'inline label - always visible', 'show_label': 'hidden field', 'path2pdf': 'hidden field', });
lyr_BC_7.set('fieldLabels', {'id': 'hidden field', 'ID_RA': 'inline label - always visible', 'Comments': 'hidden field', 'BC_units': 'inline label - always visible', 'Long': 'inline label - always visible', 'Lat': 'inline label - always visible', 'District': 'inline label - always visible', 'Year': 'inline label - always visible', });
lyr_BR_8.set('fieldLabels', {'id': 'hidden field', 'Project Code': 'inline label - always visible', 'District': 'inline label - always visible', 'Project Name': 'inline label - always visible', 'm': 'inline label - always visible', 'Long': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Year': 'inline label - always visible', 'show_label': 'hidden field', 'path2pdf': 'hidden field', });
lyr_IGF_9.set('fieldLabels', {'id': 'hidden field', 'project_ID': 'inline label - always visible', 'Village': 'inline label - always visible', 'IGF_type': 'inline label - always visible', 'Long': 'inline label - always visible', 'Lat': 'inline label - always visible', 'District': 'inline label - always visible', 'Year': 'inline label - always visible', 'show_label': 'hidden field', 'path2pdf': 'hidden field', });
lyr_IGF_10.set('fieldLabels', {'id': 'hidden field', 'project_ID': 'inline label - always visible', 'Village': 'inline label - always visible', 'IGF_type': 'inline label - always visible', 'Long': 'inline label - always visible', 'Lat': 'inline label - always visible', 'District': 'inline label - always visible', 'Year': 'inline label - always visible', 'show_label': 'no label', 'path2pdf': 'no label', });
lyr_IGF_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});