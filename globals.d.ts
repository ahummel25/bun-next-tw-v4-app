/// <reference types="urlpattern-polyfill" />

interface PatternHandlerResult {
    [key: string]: string | undefined;
}
declare interface RoutePattern
    extends Array<
        [URLPattern, (pathname: URLPatternResult) => PatternHandlerResult]
    > {}
