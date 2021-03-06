/**
 * @module ol/render/VectorContext
 */

/**
 * @classdesc
 * Context for drawing geometries.  A vector context is available on render
 * events and does not need to be constructed directly.
 * @api
 */
class VectorContext {
  /**
   * Render a geometry with a custom renderer.
   *
   * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../Feature.js").default|import("./Feature.js").default} feature Feature.
   * @param {Function} renderer Renderer.
   */
  drawCustom(geometry, feature, renderer) {}

  /**
   * Render a geometry.
   *
   * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
   */
  drawGeometry(geometry) {}

  /**
   * Set the rendering style.
   *
   * @param {import("../style/Style.js").default} style The rendering style.
   */
  setStyle(style) {}

  /**
   * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../Feature.js").default} feature Feature.
   */
  drawCircle(circleGeometry, feature) {}

  /**
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("../style/Style.js").default} style Style.
   */
  drawFeature(feature, style) {}

  /**
   * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
   * @param {import("../Feature.js").default} feature Feature.
   */
  drawGeometryCollection(geometryCollectionGeometry, feature) {}

  /**
   * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../Feature.js").default|import("./Feature.js").default} feature Feature.
   */
  drawLineString(lineStringGeometry, feature) {}

  /**
   * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../Feature.js").default|import("./Feature.js").default} feature Feature.
   */
  drawMultiLineString(multiLineStringGeometry, feature) {}

  /**
   * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../Feature.js").default|import("./Feature.js").default} feature Feature.
   */
  drawMultiPoint(multiPointGeometry, feature) {}

  /**
   * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../Feature.js").default|import("./Feature.js").default} feature Feature.
   */
  drawMultiPolygon(multiPolygonGeometry, feature) {}

  /**
   * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
   * @param {import("../Feature.js").default|import("./Feature.js").default} feature Feature.
   */
  drawPoint(pointGeometry, feature) {}

  /**
   * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../Feature.js").default|import("./Feature.js").default} feature Feature.
   */
  drawPolygon(polygonGeometry, feature) {}

  /**
   * @param {import("../geom/Geometry.js").default|import("./Feature.js").default} geometry Geometry.
   * @param {import("../Feature.js").default|import("./Feature.js").default} feature Feature.
   */
  drawText(geometry, feature) {}

  /**
   * @param {import("../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(fillStyle, strokeStyle) {}

  /**
   * @param {import("../style/Image.js").default} imageStyle Image style.
   * @param {import("./canvas.js").DeclutterGroup=} opt_declutterGroup Declutter.
   */
  setImageStyle(imageStyle, opt_declutterGroup) {}

  /**
   * @param {import("../style/Text.js").default} textStyle Text style.
   * @param {import("./canvas.js").DeclutterGroup=} opt_declutterGroup Declutter.
   */
  setTextStyle(textStyle, opt_declutterGroup) {}
}

export default VectorContext;
