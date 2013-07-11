# geojson-topojson

A simple (perhaps dumb) web interface to quickly convert between GeoJSON and TopoJSON. Basically, a web interface for Mike Bostock's [topojson](https://github.com/mbostock/topojson) library.

## Use

Available online at [www.geojson-topojson.org](http://www.geojson-topojson.org/).

## Why

So folks can just use a simple web interface to quickly convert some data without having to install anything. Perhaps as a first step to trying out TopoJSON.

Users looking to convert lots of data programmatically should use the [topojson](https://github.com/mbostock/topojson) library locally ([directions](http://gis.stackexchange.com/questions/45138/convert-geojson-to-topojson)).

## Limitations

Right now, converting TopoJSON to GeoJSON requires the geo object to be under `<objectName>.objects.collection`. Also, it's not recommened to convert between formats multiple times in a row as it will introduce rounding / floating-point arithmetic errors.
