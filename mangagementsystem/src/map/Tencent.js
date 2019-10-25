import React from 'react';
import ReactQMap from 'react-qmap';

const getContianer = (dom) => {
    const middleControl = document.createElement('div');
    middleControl.style.cssText =
        'width: 22px;height: 30px;position: absolute;left: 50%;top: 50%;z-index: 999;margin-left: -23px;margin-top: -23px;';
    middleControl.innerHTML = `<img src="${require('./spot_location.png')}" style="width: 100%;height: 100%;" />`;
    dom.appendChild(middleControl);
};

export default () => (
    <ReactQMap
        center={{ latitude: 40.123649, longitude:116.257172 }}
        initialOptions={{ zoomControl: true, mapTypeControl: true }}
        apiKey="UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE"
        style={{ height: 500 }}
        mySpot={{ latitude: 40.123649, longitude: 116.257172}}
        getContainer={getContianer}
    />
);
// 116.258306,40.124909
// 116.257172,40.123649