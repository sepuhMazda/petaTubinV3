ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([110.226250, -7.923026, 110.255247, -7.907105]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dusun_Sidorejo2_1 = new ol.format.GeoJSON();
var features_Dusun_Sidorejo2_1 = format_Dusun_Sidorejo2_1.readFeatures(json_Dusun_Sidorejo2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dusun_Sidorejo2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dusun_Sidorejo2_1.addFeatures(features_Dusun_Sidorejo2_1);
var lyr_Dusun_Sidorejo2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dusun_Sidorejo2_1, 
                style: style_Dusun_Sidorejo2_1,
                popuplayertitle: "Dusun_Sidorejo2",
                interactive: true,
                title: '<img src="styles/legend/Dusun_Sidorejo2_1.png" /> Dusun_Sidorejo2'
            });
var format_RT_Tubin_2 = new ol.format.GeoJSON();
var features_RT_Tubin_2 = format_RT_Tubin_2.readFeatures(json_RT_Tubin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RT_Tubin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_Tubin_2.addFeatures(features_RT_Tubin_2);
var lyr_RT_Tubin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_Tubin_2, 
                style: style_RT_Tubin_2,
                popuplayertitle: "RT_Tubin",
                interactive: true,
    title: 'RT_Tubin<br />\
    <img src="styles/legend/RT_Tubin_2_0.png" /> 33<br />\
    <img src="styles/legend/RT_Tubin_2_1.png" /> 34<br />\
    <img src="styles/legend/RT_Tubin_2_2.png" /> 35<br />\
    <img src="styles/legend/RT_Tubin_2_3.png" /> 36<br />\
    <img src="styles/legend/RT_Tubin_2_4.png" /> 37<br />\
    <img src="styles/legend/RT_Tubin_2_5.png" /> 38<br />\
    <img src="styles/legend/RT_Tubin_2_6.png" /> <br />'
        });
var format_jalan_tubin2_3 = new ol.format.GeoJSON();
var features_jalan_tubin2_3 = format_jalan_tubin2_3.readFeatures(json_jalan_tubin2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_jalan_tubin2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_tubin2_3.addFeatures(features_jalan_tubin2_3);
var lyr_jalan_tubin2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_tubin2_3, 
                style: style_jalan_tubin2_3,
                popuplayertitle: "jalan_tubin2",
                interactive: true,
                title: '<img src="styles/legend/jalan_tubin2_3.png" /> jalan_tubin2'
            });
var format_tambahan_rumah_tubin_basis_gmap_4 = new ol.format.GeoJSON();
var features_tambahan_rumah_tubin_basis_gmap_4 = format_tambahan_rumah_tubin_basis_gmap_4.readFeatures(json_tambahan_rumah_tubin_basis_gmap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tambahan_rumah_tubin_basis_gmap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambahan_rumah_tubin_basis_gmap_4.addFeatures(features_tambahan_rumah_tubin_basis_gmap_4);
var lyr_tambahan_rumah_tubin_basis_gmap_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambahan_rumah_tubin_basis_gmap_4, 
                style: style_tambahan_rumah_tubin_basis_gmap_4,
                popuplayertitle: "tambahan_rumah_tubin_basis_gmap",
                interactive: true,
                title: '<img src="styles/legend/tambahan_rumah_tubin_basis_gmap_4.png" /> tambahan_rumah_tubin_basis_gmap'
            });
var format_tag_lokasi_5 = new ol.format.GeoJSON();
var features_tag_lokasi_5 = format_tag_lokasi_5.readFeatures(json_tag_lokasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tag_lokasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tag_lokasi_5.addFeatures(features_tag_lokasi_5);
var lyr_tag_lokasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tag_lokasi_5, 
                style: style_tag_lokasi_5,
                popuplayertitle: "tag_lokasi",
                interactive: true,
                title: '<img src="styles/legend/tag_lokasi_5.png" /> tag_lokasi'
            });
var format_Clipped_6 = new ol.format.GeoJSON();
var features_Clipped_6 = format_Clipped_6.readFeatures(json_Clipped_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Clipped_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_6.addFeatures(features_Clipped_6);
var lyr_Clipped_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_6, 
                style: style_Clipped_6,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_6.png" /> Clipped'
            });
var format_CakrukPosRonda_7 = new ol.format.GeoJSON();
var features_CakrukPosRonda_7 = format_CakrukPosRonda_7.readFeatures(json_CakrukPosRonda_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CakrukPosRonda_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CakrukPosRonda_7.addFeatures(features_CakrukPosRonda_7);
var lyr_CakrukPosRonda_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CakrukPosRonda_7, 
                style: style_CakrukPosRonda_7,
                popuplayertitle: "Cakruk Pos Ronda",
                interactive: true,
                title: '<img src="styles/legend/CakrukPosRonda_7.png" /> Cakruk Pos Ronda'
            });
var format_titikTempatIbadah_8 = new ol.format.GeoJSON();
var features_titikTempatIbadah_8 = format_titikTempatIbadah_8.readFeatures(json_titikTempatIbadah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_titikTempatIbadah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikTempatIbadah_8.addFeatures(features_titikTempatIbadah_8);
var lyr_titikTempatIbadah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titikTempatIbadah_8, 
                style: style_titikTempatIbadah_8,
                popuplayertitle: "titikTempatIbadah",
                interactive: true,
                title: '<img src="styles/legend/titikTempatIbadah_8.png" /> titikTempatIbadah'
            });
var format_LapanganVoli_9 = new ol.format.GeoJSON();
var features_LapanganVoli_9 = format_LapanganVoli_9.readFeatures(json_LapanganVoli_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LapanganVoli_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganVoli_9.addFeatures(features_LapanganVoli_9);
var lyr_LapanganVoli_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganVoli_9, 
                style: style_LapanganVoli_9,
                popuplayertitle: "Lapangan Voli",
                interactive: true,
                title: '<img src="styles/legend/LapanganVoli_9.png" /> Lapangan Voli'
            });
var format_titikPendidikan_10 = new ol.format.GeoJSON();
var features_titikPendidikan_10 = format_titikPendidikan_10.readFeatures(json_titikPendidikan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_titikPendidikan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikPendidikan_10.addFeatures(features_titikPendidikan_10);
var lyr_titikPendidikan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titikPendidikan_10, 
                style: style_titikPendidikan_10,
                popuplayertitle: "titikPendidikan",
                interactive: true,
                title: '<img src="styles/legend/titikPendidikan_10.png" /> titikPendidikan'
            });
var format_rumahDukuh_11 = new ol.format.GeoJSON();
var features_rumahDukuh_11 = format_rumahDukuh_11.readFeatures(json_rumahDukuh_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rumahDukuh_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahDukuh_11.addFeatures(features_rumahDukuh_11);
var lyr_rumahDukuh_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahDukuh_11, 
                style: style_rumahDukuh_11,
                popuplayertitle: "rumahDukuh",
                interactive: true,
                title: '<img src="styles/legend/rumahDukuh_11.png" /> rumahDukuh'
            });
var format_gedungSeni_12 = new ol.format.GeoJSON();
var features_gedungSeni_12 = format_gedungSeni_12.readFeatures(json_gedungSeni_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gedungSeni_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gedungSeni_12.addFeatures(features_gedungSeni_12);
var lyr_gedungSeni_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gedungSeni_12, 
                style: style_gedungSeni_12,
                popuplayertitle: "gedungSeni",
                interactive: true,
                title: '<img src="styles/legend/gedungSeni_12.png" /> gedungSeni'
            });
var format_titikMakam_13 = new ol.format.GeoJSON();
var features_titikMakam_13 = format_titikMakam_13.readFeatures(json_titikMakam_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_titikMakam_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikMakam_13.addFeatures(features_titikMakam_13);
var lyr_titikMakam_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titikMakam_13, 
                style: style_titikMakam_13,
                popuplayertitle: "titikMakam",
                interactive: true,
                title: '<img src="styles/legend/titikMakam_13.png" /> titikMakam'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Dusun_Sidorejo2_1.setVisible(true);lyr_RT_Tubin_2.setVisible(true);lyr_jalan_tubin2_3.setVisible(true);lyr_tambahan_rumah_tubin_basis_gmap_4.setVisible(true);lyr_tag_lokasi_5.setVisible(true);lyr_Clipped_6.setVisible(true);lyr_CakrukPosRonda_7.setVisible(true);lyr_titikTempatIbadah_8.setVisible(true);lyr_LapanganVoli_9.setVisible(true);lyr_titikPendidikan_10.setVisible(true);lyr_rumahDukuh_11.setVisible(true);lyr_gedungSeni_12.setVisible(true);lyr_titikMakam_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Dusun_Sidorejo2_1,lyr_RT_Tubin_2,lyr_jalan_tubin2_3,lyr_tambahan_rumah_tubin_basis_gmap_4,lyr_tag_lokasi_5,lyr_Clipped_6,lyr_CakrukPosRonda_7,lyr_titikTempatIbadah_8,lyr_LapanganVoli_9,lyr_titikPendidikan_10,lyr_rumahDukuh_11,lyr_gedungSeni_12,lyr_titikMakam_13];
lyr_Dusun_Sidorejo2_1.set('fieldAliases', {'KAL_KEL': 'KAL_KEL', 'KEC_KAPN': 'KEC_KAPN', 'KAB_KOTA': 'KAB_KOTA', 'DUSUN': 'DUSUN', });
lyr_RT_Tubin_2.set('fieldAliases', {'id': 'id', });
lyr_jalan_tubin2_3.set('fieldAliases', {'id': 'id', });
lyr_tambahan_rumah_tubin_basis_gmap_4.set('fieldAliases', {'id': 'id', });
lyr_tag_lokasi_5.set('fieldAliases', {'Nama_lokas': 'Nama_lokas', });
lyr_Clipped_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'building': 'building', 'addr_house': 'addr_house', 'roof_mater': 'roof_mater', 'building_m': 'building_m', 'access_roo': 'access_roo', 'name': 'name', });
lyr_CakrukPosRonda_7.set('fieldAliases', {'nama': 'nama', });
lyr_titikTempatIbadah_8.set('fieldAliases', {'id': 'id', });
lyr_LapanganVoli_9.set('fieldAliases', {'id': 'id', });
lyr_titikPendidikan_10.set('fieldAliases', {'id': 'id', });
lyr_rumahDukuh_11.set('fieldAliases', {'id': 'id', });
lyr_gedungSeni_12.set('fieldAliases', {'id': 'id', });
lyr_titikMakam_13.set('fieldAliases', {'id': 'id', });
lyr_Dusun_Sidorejo2_1.set('fieldImages', {'KAL_KEL': 'TextEdit', 'KEC_KAPN': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'DUSUN': 'TextEdit', });
lyr_RT_Tubin_2.set('fieldImages', {'id': 'TextEdit', });
lyr_jalan_tubin2_3.set('fieldImages', {'id': 'TextEdit', });
lyr_tambahan_rumah_tubin_basis_gmap_4.set('fieldImages', {'id': 'TextEdit', });
lyr_tag_lokasi_5.set('fieldImages', {'Nama_lokas': 'TextEdit', });
lyr_Clipped_6.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_stree': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'roof_mater': 'TextEdit', 'building_m': 'TextEdit', 'access_roo': 'TextEdit', 'name': 'TextEdit', });
lyr_CakrukPosRonda_7.set('fieldImages', {'nama': 'TextEdit', });
lyr_titikTempatIbadah_8.set('fieldImages', {'id': 'TextEdit', });
lyr_LapanganVoli_9.set('fieldImages', {'id': 'TextEdit', });
lyr_titikPendidikan_10.set('fieldImages', {'id': 'TextEdit', });
lyr_rumahDukuh_11.set('fieldImages', {'id': 'TextEdit', });
lyr_gedungSeni_12.set('fieldImages', {'id': 'TextEdit', });
lyr_titikMakam_13.set('fieldImages', {'id': 'TextEdit', });
lyr_Dusun_Sidorejo2_1.set('fieldLabels', {'KAL_KEL': 'no label', 'KEC_KAPN': 'no label', 'KAB_KOTA': 'no label', 'DUSUN': 'no label', });
lyr_RT_Tubin_2.set('fieldLabels', {'id': 'no label', });
lyr_jalan_tubin2_3.set('fieldLabels', {'id': 'no label', });
lyr_tambahan_rumah_tubin_basis_gmap_4.set('fieldLabels', {'id': 'no label', });
lyr_tag_lokasi_5.set('fieldLabels', {'Nama_lokas': 'no label', });
lyr_Clipped_6.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'addr_house': 'no label', 'roof_mater': 'no label', 'building_m': 'no label', 'access_roo': 'no label', 'name': 'no label', });
lyr_CakrukPosRonda_7.set('fieldLabels', {'nama': 'no label', });
lyr_titikTempatIbadah_8.set('fieldLabels', {'id': 'no label', });
lyr_LapanganVoli_9.set('fieldLabels', {'id': 'no label', });
lyr_titikPendidikan_10.set('fieldLabels', {'id': 'no label', });
lyr_rumahDukuh_11.set('fieldLabels', {'id': 'no label', });
lyr_gedungSeni_12.set('fieldLabels', {'id': 'no label', });
lyr_titikMakam_13.set('fieldLabels', {'id': 'no label', });
lyr_titikMakam_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});