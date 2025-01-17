"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.GET = void 0;
var server_1 = require("next/server");
var promises_1 = require("fs/promises");
var path_1 = require("path");
// 模擬外部 API 調用
function fetchFromExternalAPI(path) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // 這裡應該是實際的 API 調用
            // 現在我們模擬一個失敗的 API 調用
            throw new Error('API unavailable');
        });
    });
}
function GET(req) {
    return __awaiter(this, void 0, void 0, function () {
        var requestPath, apiData, apiError_1, fileName, filePath, fileContent, pageData, fileError_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestPath = req.nextUrl.searchParams.get('path');
                    if (requestPath === null) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: 'Path parameter is required' }, { status: 400 })];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 9]);
                    return [4 /*yield*/, fetchFromExternalAPI(requestPath)];
                case 2:
                    apiData = _a.sent();
                    return [2 /*return*/, server_1.NextResponse.json(apiData)];
                case 3:
                    apiError_1 = _a.sent();
                    console.log('External API failed, falling back to local JSON file');
                    fileName = void 0;
                    if (requestPath === '/' || requestPath === '') {
                        fileName = 'index.json';
                    }
                    else {
                        fileName = requestPath.replace(/\//g, '-').replace(/^-/, '') + '.json';
                    }
                    filePath = path_1["default"].join(process.cwd(), 'src', 'data', 'demo', 'page', fileName);
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 7, , 8]);
                    // 模擬一些處理時間
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                case 5:
                    // 模擬一些處理時間
                    _a.sent();
                    return [4 /*yield*/, promises_1["default"].readFile(filePath, 'utf-8')];
                case 6:
                    fileContent = _a.sent();
                    pageData = JSON.parse(fileContent);
                    // 返回頁面數據
                    return [2 /*return*/, server_1.NextResponse.json(pageData)];
                case 7:
                    fileError_1 = _a.sent();
                    console.error("Error reading file: " + filePath, fileError_1);
                    return [2 /*return*/, server_1.NextResponse.json({ error: 'Page not found' }, { status: 404 })];
                case 8: return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.GET = GET;
