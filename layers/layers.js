ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-14.609759, 6.326259, -8.428813, 10.526228]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gadm36_SLE_0_1 = new ol.format.GeoJSON();
var features_gadm36_SLE_0_1 = format_gadm36_SLE_0_1.readFeatures(json_gadm36_SLE_0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gadm36_SLE_0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_SLE_0_1.addFeatures(features_gadm36_SLE_0_1);
var lyr_gadm36_SLE_0_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_SLE_0_1, 
                style: style_gadm36_SLE_0_1,
                interactive: true,
                title: '<img src="styles/legend/gadm36_SLE_0_1.png" /> gadm36_SLE_0'
            });
var format_gadm36_SLE_1_2 = new ol.format.GeoJSON();
var features_gadm36_SLE_1_2 = format_gadm36_SLE_1_2.readFeatures(json_gadm36_SLE_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gadm36_SLE_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_SLE_1_2.addFeatures(features_gadm36_SLE_1_2);
var lyr_gadm36_SLE_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_SLE_1_2, 
                style: style_gadm36_SLE_1_2,
                interactive: true,
                title: '<img src="styles/legend/gadm36_SLE_1_2.png" /> gadm36_SLE_1'
            });
var format_gadm36_SLE_2_3 = new ol.format.GeoJSON();
var features_gadm36_SLE_2_3 = format_gadm36_SLE_2_3.readFeatures(json_gadm36_SLE_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gadm36_SLE_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_SLE_2_3.addFeatures(features_gadm36_SLE_2_3);
var lyr_gadm36_SLE_2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_SLE_2_3, 
                style: style_gadm36_SLE_2_3,
                interactive: true,
    title: 'gadm36_SLE_2<br />\
    <img src="styles/legend/gadm36_SLE_2_3_0.png" /> Bo<br />\
    <img src="styles/legend/gadm36_SLE_2_3_1.png" /> Bombali<br />\
    <img src="styles/legend/gadm36_SLE_2_3_2.png" /> Bonthe<br />\
    <img src="styles/legend/gadm36_SLE_2_3_3.png" /> Falaba<br />\
    <img src="styles/legend/gadm36_SLE_2_3_4.png" /> Kailahun<br />\
    <img src="styles/legend/gadm36_SLE_2_3_5.png" /> Kambia<br />\
    <img src="styles/legend/gadm36_SLE_2_3_6.png" /> Kenema<br />\
    <img src="styles/legend/gadm36_SLE_2_3_7.png" /> Koinadugu<br />\
    <img src="styles/legend/gadm36_SLE_2_3_8.png" /> Kono<br />\
    <img src="styles/legend/gadm36_SLE_2_3_9.png" /> Moyamba<br />\
    <img src="styles/legend/gadm36_SLE_2_3_10.png" /> Port Loko<br />\
    <img src="styles/legend/gadm36_SLE_2_3_11.png" /> Pujehun<br />\
    <img src="styles/legend/gadm36_SLE_2_3_12.png" /> Tonkolili<br />\
    <img src="styles/legend/gadm36_SLE_2_3_13.png" /> Western Rural<br />\
    <img src="styles/legend/gadm36_SLE_2_3_14.png" /> Western Urban<br />'
        });
var format_Water_4 = new ol.format.GeoJSON();
var features_Water_4 = format_Water_4.readFeatures(json_Water_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Water_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_4.addFeatures(features_Water_4);
var lyr_Water_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_4, 
                style: style_Water_4,
                interactive: true,
                title: '<img src="styles/legend/Water_4.png" /> Water'
            });
var format_River_5 = new ol.format.GeoJSON();
var features_River_5 = format_River_5.readFeatures(json_River_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_River_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_5.addFeatures(features_River_5);
var lyr_River_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_River_5, 
                style: style_River_5,
                interactive: true,
                title: '<img src="styles/legend/River_5.png" /> River'
            });
var format_Road_6 = new ol.format.GeoJSON();
var features_Road_6 = format_Road_6.readFeatures(json_Road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Road_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_6.addFeatures(features_Road_6);
var lyr_Road_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_6, 
                style: style_Road_6,
                interactive: true,
    title: 'Road<br />\
    <img src="styles/legend/Road_6_0.png" /> primary<br />\
    <img src="styles/legend/Road_6_1.png" /> secondary<br />\
    <img src="styles/legend/Road_6_2.png" /> tertiary<br />'
        });
var format_Settlement_7 = new ol.format.GeoJSON();
var features_Settlement_7 = format_Settlement_7.readFeatures(json_Settlement_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Settlement_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Settlement_7.addFeatures(features_Settlement_7);
var lyr_Settlement_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Settlement_7, 
                style: style_Settlement_7,
                interactive: true,
    title: 'Settlement<br />\
    <img src="styles/legend/Settlement_7_0.png" /> city<br />\
    <img src="styles/legend/Settlement_7_1.png" /> town<br />\
    <img src="styles/legend/Settlement_7_2.png" /> village<br />'
        });
var format_projects_2020_road_8 = new ol.format.GeoJSON();
var features_projects_2020_road_8 = format_projects_2020_road_8.readFeatures(json_projects_2020_road_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_projects_2020_road_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projects_2020_road_8.addFeatures(features_projects_2020_road_8);
var lyr_projects_2020_road_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_projects_2020_road_8, 
                style: style_projects_2020_road_8,
                interactive: true,
                title: '<img src="styles/legend/projects_2020_road_8.png" /> projects_2020_road'
            });
var format_projects_2021_road_9 = new ol.format.GeoJSON();
var features_projects_2021_road_9 = format_projects_2021_road_9.readFeatures(json_projects_2021_road_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_projects_2021_road_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projects_2021_road_9.addFeatures(features_projects_2021_road_9);
var lyr_projects_2021_road_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_projects_2021_road_9, 
                style: style_projects_2021_road_9,
                interactive: true,
                title: '<img src="styles/legend/projects_2021_road_9.png" /> projects_2021_road'
            });
var format_projects_2020_bridge_10 = new ol.format.GeoJSON();
var features_projects_2020_bridge_10 = format_projects_2020_bridge_10.readFeatures(json_projects_2020_bridge_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_projects_2020_bridge_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projects_2020_bridge_10.addFeatures(features_projects_2020_bridge_10);
var lyr_projects_2020_bridge_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_projects_2020_bridge_10, 
                style: style_projects_2020_bridge_10,
                interactive: true,
                title: '<img src="styles/legend/projects_2020_bridge_10.png" /> projects_2020_bridge'
            });
var format_projects_2021_bridge_11 = new ol.format.GeoJSON();
var features_projects_2021_bridge_11 = format_projects_2021_bridge_11.readFeatures(json_projects_2021_bridge_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_projects_2021_bridge_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projects_2021_bridge_11.addFeatures(features_projects_2021_bridge_11);
var lyr_projects_2021_bridge_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_projects_2021_bridge_11, 
                style: style_projects_2021_bridge_11,
                interactive: true,
                title: '<img src="styles/legend/projects_2021_bridge_11.png" /> projects_2021_bridge'
            });
var format_projects_2021_grainstore_12 = new ol.format.GeoJSON();
var features_projects_2021_grainstore_12 = format_projects_2021_grainstore_12.readFeatures(json_projects_2021_grainstore_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_projects_2021_grainstore_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projects_2021_grainstore_12.addFeatures(features_projects_2021_grainstore_12);
var lyr_projects_2021_grainstore_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_projects_2021_grainstore_12, 
                style: style_projects_2021_grainstore_12,
                interactive: true,
                title: '<img src="styles/legend/projects_2021_grainstore_12.png" /> projects_2021_grainstore'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_gadm36_SLE_0_1.setVisible(false);lyr_gadm36_SLE_1_2.setVisible(false);lyr_gadm36_SLE_2_3.setVisible(true);lyr_Water_4.setVisible(true);lyr_River_5.setVisible(true);lyr_Road_6.setVisible(true);lyr_Settlement_7.setVisible(true);lyr_projects_2020_road_8.setVisible(true);lyr_projects_2021_road_9.setVisible(true);lyr_projects_2020_bridge_10.setVisible(true);lyr_projects_2021_bridge_11.setVisible(true);lyr_projects_2021_grainstore_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gadm36_SLE_0_1,lyr_gadm36_SLE_1_2,lyr_gadm36_SLE_2_3,lyr_Water_4,lyr_River_5,lyr_Road_6,lyr_Settlement_7,lyr_projects_2020_road_8,lyr_projects_2021_road_9,lyr_projects_2020_bridge_10,lyr_projects_2021_bridge_11,lyr_projects_2021_grainstore_12];
lyr_gadm36_SLE_0_1.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_gadm36_SLE_1_2.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_gadm36_SLE_2_3.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Water_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_River_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_Road_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Settlement_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', 'Draw': 'Draw', });
lyr_projects_2020_road_8.set('fieldAliases', {'fid': 'fid', 'no': 'no', 'Project_ID': 'Project_ID', 'km': 'km', 'Draw': 'Draw', 'id': 'id', 'District': 'District', });
lyr_projects_2021_road_9.set('fieldAliases', {'fid': 'fid', 'ID_RA': 'ID_RA', 'Length_km': 'Length_km', 'Draw': 'Draw', 'District': 'District', });
lyr_projects_2020_bridge_10.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'Project_ID': 'Project_ID', 'Span': 'Span', });
lyr_projects_2021_bridge_11.set('fieldAliases', {'fid': 'fid', 'ID_RA': 'ID_RA', 'Comments': 'Comments', 'Photo_1': 'Photo_1', 'Photo_2': 'Photo_2', 'Long': 'Long', 'Lat': 'Lat', 'Date': 'Date', 'Draw': 'Draw', 'District': 'District', });
lyr_projects_2021_grainstore_12.set('fieldAliases', {'fid': 'fid', 'project_ID': 'project_ID', 'Village': 'Village', 'Long': 'Long', 'Lat': 'Lat', 'District': 'District', });
lyr_gadm36_SLE_0_1.set('fieldImages', {'fid': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_gadm36_SLE_1_2.set('fieldImages', {'fid': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', });
lyr_gadm36_SLE_2_3.set('fieldImages', {'fid': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_Water_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_River_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_Road_6.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Settlement_7.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', 'Draw': '', });
lyr_projects_2020_road_8.set('fieldImages', {'fid': 'TextEdit', 'no': 'TextEdit', 'Project_ID': 'TextEdit', 'km': 'TextEdit', 'Draw': 'Range', 'id': 'Range', 'District': 'TextEdit', });
lyr_projects_2021_road_9.set('fieldImages', {'fid': 'TextEdit', 'ID_RA': 'TextEdit', 'Length_km': 'TextEdit', 'Draw': 'Range', 'District': 'TextEdit', });
lyr_projects_2020_bridge_10.set('fieldImages', {'fid': 'TextEdit', 'No': 'Range', 'Project_ID': 'TextEdit', 'Span': 'Range', });
lyr_projects_2021_bridge_11.set('fieldImages', {'fid': 'TextEdit', 'ID_RA': 'TextEdit', 'Comments': 'TextEdit', 'Photo_1': 'TextEdit', 'Photo_2': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Date': 'DateTime', 'Draw': 'Range', 'District': 'TextEdit', });
lyr_projects_2021_grainstore_12.set('fieldImages', {'fid': 'TextEdit', 'project_ID': 'TextEdit', 'Village': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'District': 'TextEdit', });
lyr_gadm36_SLE_0_1.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_gadm36_SLE_1_2.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', });
lyr_gadm36_SLE_2_3.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'header label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_Water_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_River_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_Road_6.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Settlement_7.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'population': 'no label', 'name': 'inline label', 'Draw': 'no label', });
lyr_projects_2020_road_8.set('fieldLabels', {'fid': 'no label', 'no': 'no label', 'Project_ID': 'inline label', 'km': 'inline label', 'Draw': 'no label', 'id': 'no label', 'District': 'inline label', });
lyr_projects_2021_road_9.set('fieldLabels', {'fid': 'no label', 'ID_RA': 'inline label', 'Length_km': 'inline label', 'Draw': 'no label', 'District': 'inline label', });
lyr_projects_2020_bridge_10.set('fieldLabels', {'fid': 'no label', 'No': 'no label', 'Project_ID': 'inline label', 'Span': 'inline label', });
lyr_projects_2021_bridge_11.set('fieldLabels', {'fid': 'no label', 'ID_RA': 'inline label', 'Comments': 'inline label', 'Photo_1': 'no label', 'Photo_2': 'no label', 'Long': 'inline label', 'Lat': 'inline label', 'Date': 'no label', 'Draw': 'no label', 'District': 'inline label', });
lyr_projects_2021_grainstore_12.set('fieldLabels', {'fid': 'no label', 'project_ID': 'inline label', 'Village': 'inline label', 'Long': 'inline label', 'Lat': 'inline label', 'District': 'inline label', });
lyr_projects_2021_grainstore_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});