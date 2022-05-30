var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var FileMD5Original = /** @class */ (function (_super) {
    __extends(FileMD5Original, _super);
    function FileMD5Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileMD5Original.prototype.file = function (fileEntry) { return cordova(this, "file", {}, arguments); };
    FileMD5Original.pluginName = "FileMD5";
    FileMD5Original.plugin = "cordova-plugin-file-md5";
    FileMD5Original.pluginRef = "md5chksum";
    FileMD5Original.repo = "https://github.com/mramonlopez/cordova-plugin-file-md5";
    FileMD5Original.platforms = ["Android", "iOS"];
    return FileMD5Original;
}(AwesomeCordovaNativePlugin));
var FileMD5 = new FileMD5Original();
export { FileMD5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1tZDUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEIvRCwyQkFBMEI7Ozs7SUFRckQsc0JBQUksYUFBQyxTQUFjOzs7Ozs7a0JBdkNyQjtFQStCNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEZpbGUgTUQ1XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHJlYWRzIGxhcmdlIGZpbGVzIGluIGNodW5rcyBhbmQgYnVpbGQgdGhlIG1kNXN1bSBpbmNyZW1lbnRhbGx5LlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaWxlTUQ1IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbGUtbWQ1JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlTUQ1OiBGaWxlTUQ1KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5maWxlTUQ1LmZpbGUoZmlsZUVudHJ5KVxuICogICAudGhlbigobWQ1c3VtOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKG1kNXN1bSkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVNRDUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlLW1kNScsXG4gIHBsdWdpblJlZjogJ21kNWNoa3N1bScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbXJhbW9ubG9wZXovY29yZG92YS1wbHVnaW4tZmlsZS1tZDUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTUQ1IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IE1ENSBjaGVja3N1bSBmcm9tIGEgZmlsZVxuICAgKiBcbiAgICogQHBhcmFtIGZpbGVFbnRyeSB7RmlsZUVudHJ5fSBGaWxlIGVudHJ5IGlzIGEgb3JnLmFwYWNoZS5jb3Jkb3ZhLmZpbGUuRmlsZUVudHJ5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2Ugd2l0aCBtZDVzdW1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmlsZShmaWxlRW50cnk6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=