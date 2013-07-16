# geojson-topojson

A simple (perhaps dumb) web interface to quickly convert between GeoJSON and TopoJSON. Basically, a web interface for Mike Bostock's [topojson](https://github.com/mbostock/topojson) library.

## Use

Available online at [jeffpaine.github.io/geojson-topojson/](http://jeffpaine.github.io/geojson-topojson/).

## Why

So folks can just use a simple web interface to quickly convert some data without having to install anything. Perhaps as a first step to trying out TopoJSON.

Users looking to convert lots of data programmatically should use the [topojson](https://github.com/mbostock/topojson) library locally ([directions](http://gis.stackexchange.com/questions/45138/convert-geojson-to-topojson)).

## Limitations

Right now, converting TopoJSON to GeoJSON requires the geo object to be under `<objectName>.objects.collection`. Also, it's probably best to not convert back and forth between formats multiple times as it could introduce rounding / floating-point arithmetic errors.
