/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/common/src/constant/index.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/constant/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UPLOAD_PATH = exports.accessKeyName = void 0;
exports.accessKeyName = "accessKey";
exports.UPLOAD_PATH = "uploads";


/***/ }),

/***/ "./libs/common/src/dtos/auth.dto.ts":
/*!******************************************!*\
  !*** ./libs/common/src/dtos/auth.dto.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginUserDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginUserDTO {
}
exports.LoginUserDTO = LoginUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'rehmat.sayani@gmail.com',
        required: true,
        name: "email"
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        name: "pwd"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "pwd", void 0);


/***/ }),

/***/ "./libs/common/src/dtos/index.ts":
/*!***************************************!*\
  !*** ./libs/common/src/dtos/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./nomenclature.dto */ "./libs/common/src/dtos/nomenclature.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./nomenclaturedata.dto */ "./libs/common/src/dtos/nomenclaturedata.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth.dto */ "./libs/common/src/dtos/auth.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dtos/nomenclature.dto.ts":
/*!**************************************************!*\
  !*** ./libs/common/src/dtos/nomenclature.dto.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateNomenclatureDto = exports.CreateNomenclatureDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
class CreateNomenclatureDto {
}
exports.CreateNomenclatureDto = CreateNomenclatureDto;
class UpdateNomenclatureDto extends (0, mapped_types_1.PartialType)(CreateNomenclatureDto) {
}
exports.UpdateNomenclatureDto = UpdateNomenclatureDto;


/***/ }),

/***/ "./libs/common/src/dtos/nomenclaturedata.dto.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/dtos/nomenclaturedata.dto.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateNomenclatureDataDto = exports.CreateNomenclatureDataDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
class CreateNomenclatureDataDto {
}
exports.CreateNomenclatureDataDto = CreateNomenclatureDataDto;
class UpdateNomenclatureDataDto extends (0, mapped_types_1.PartialType)(CreateNomenclatureDataDto) {
}
exports.UpdateNomenclatureDataDto = UpdateNomenclatureDataDto;


/***/ }),

/***/ "./libs/common/src/helpers/index.ts":
/*!******************************************!*\
  !*** ./libs/common/src/helpers/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateSearchQuery = exports.Public = exports.IS_PUBLIC_KEY = void 0;
exports.returnSuccess = returnSuccess;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function returnSuccess(data, message = 'success') {
    let d = await data;
    return {
        data: d,
        message,
    };
}
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;
const generateSearchQuery = (searchObj = {}) => {
    let res = {};
    Object.entries(searchObj).forEach(([key, value]) => {
        if (!value) {
            return;
        }
        if (["id", "_id"].includes(key)) {
            res = {
                ...res,
                [key]: value,
            };
        }
        res = {
            ...res,
            [key]: new RegExp(value, 'i'),
        };
    });
    return res;
};
exports.generateSearchQuery = generateSearchQuery;


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./types */ "./libs/common/src/types/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./dtos */ "./libs/common/src/dtos/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./schemas */ "./libs/common/src/schemas/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./repository */ "./libs/common/src/repository/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./constant */ "./libs/common/src/constant/index.ts"), exports);


/***/ }),

/***/ "./libs/common/src/repository/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/repository/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityRepository = void 0;
const helpers_1 = __webpack_require__(/*! ../helpers */ "./libs/common/src/helpers/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class EntityRepository {
    constructor(entityModel) {
        this.entityModel = entityModel;
    }
    async findOne(entityFilterQuery, projection) {
        try {
            return (0, helpers_1.returnSuccess)(this.entityModel
                .findOne(entityFilterQuery, {
                _id: 0,
                __v: 0,
                ...projection,
            })
                .exec());
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: error.message,
            }, common_1.HttpStatus.NOT_FOUND, {
                cause: error,
            });
        }
    }
    async find(entityFilterQuery, projection, skipSearch) {
        try {
            return (0, helpers_1.returnSuccess)(this.entityModel.find(skipSearch ? entityFilterQuery : (0, helpers_1.generateSearchQuery)(entityFilterQuery), {
                __v: 0,
                ...projection,
            }));
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: error.message,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    async create(createEntityData) {
        try {
            const data = await this.entityModel.create(createEntityData);
            return (0, helpers_1.returnSuccess)(data);
        }
        catch (error) {
            if (error.code === 11000) {
                let err = new Error('Data already exist');
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.FORBIDDEN,
                    error: err.message,
                }, common_1.HttpStatus.FORBIDDEN, {
                    cause: err,
                });
            }
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error.message,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    async update(entityFilterQuery, updateEntityData) {
        try {
            return (0, helpers_1.returnSuccess)(this.entityModel.findOneAndUpdate(entityFilterQuery, updateEntityData, {
                new: true,
            }));
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error.message,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    async delete(entityFilterQuery) {
        try {
            return (0, helpers_1.returnSuccess)(this.entityModel.deleteMany(entityFilterQuery));
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error.message,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
}
exports.EntityRepository = EntityRepository;


/***/ }),

/***/ "./libs/common/src/schemas/file.schema.ts":
/*!************************************************!*\
  !*** ./libs/common/src/schemas/file.schema.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileSchema = exports.File = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let File = class File {
};
exports.File = File;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], File.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], File.prototype, "mimetype", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], File.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], File.prototype, "gcloudId", void 0);
exports.File = File = __decorate([
    (0, mongoose_1.Schema)()
], File);
exports.FileSchema = mongoose_1.SchemaFactory.createForClass(File);


/***/ }),

/***/ "./libs/common/src/schemas/index.ts":
/*!******************************************!*\
  !*** ./libs/common/src/schemas/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./file.schema */ "./libs/common/src/schemas/file.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./profile.schema */ "./libs/common/src/schemas/profile.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.schema */ "./libs/common/src/schemas/user.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./nomenclature.schema */ "./libs/common/src/schemas/nomenclature.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./nomenclaturedata.schema */ "./libs/common/src/schemas/nomenclaturedata.schema.ts"), exports);


/***/ }),

/***/ "./libs/common/src/schemas/nomenclature.schema.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/schemas/nomenclature.schema.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NomenclatureSchema = exports.Nomenclature = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let Nomenclature = class Nomenclature {
};
exports.Nomenclature = Nomenclature;
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true }),
    __metadata("design:type", String)
], Nomenclature.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Nomenclature.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, immutable: true, unique: true }),
    __metadata("design:type", String)
], Nomenclature.prototype, "accessKey", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Nomenclature.prototype, "cols", void 0);
exports.Nomenclature = Nomenclature = __decorate([
    (0, mongoose_1.Schema)()
], Nomenclature);
exports.NomenclatureSchema = mongoose_1.SchemaFactory.createForClass(Nomenclature);


/***/ }),

/***/ "./libs/common/src/schemas/nomenclaturedata.schema.ts":
/*!************************************************************!*\
  !*** ./libs/common/src/schemas/nomenclaturedata.schema.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NomenclatureDataSchema = exports.NomenclatureData = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const nomenclature_schema_1 = __webpack_require__(/*! ./nomenclature.schema */ "./libs/common/src/schemas/nomenclature.schema.ts");
let NomenclatureData = class NomenclatureData {
};
exports.NomenclatureData = NomenclatureData;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nomenclature',
        required: true,
        immutable: true,
    }),
    __metadata("design:type", typeof (_a = typeof nomenclature_schema_1.Nomenclature !== "undefined" && nomenclature_schema_1.Nomenclature) === "function" ? _a : Object)
], NomenclatureData.prototype, "nomen", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: {} }),
    __metadata("design:type", Object)
], NomenclatureData.prototype, "data", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, immutable: true }),
    __metadata("design:type", String)
], NomenclatureData.prototype, "accessKey", void 0);
exports.NomenclatureData = NomenclatureData = __decorate([
    (0, mongoose_1.Schema)()
], NomenclatureData);
exports.NomenclatureDataSchema = mongoose_1.SchemaFactory.createForClass(NomenclatureData);


/***/ }),

/***/ "./libs/common/src/schemas/profile.schema.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/schemas/profile.schema.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileSchema = exports.Profile = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Profile = class Profile {
};
exports.Profile = Profile;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Profile.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'NomenclatureData' }),
    __metadata("design:type", Array)
], Profile.prototype, "actions", void 0);
exports.Profile = Profile = __decorate([
    (0, mongoose_1.Schema)()
], Profile);
exports.ProfileSchema = mongoose_1.SchemaFactory.createForClass(Profile);
exports.ProfileSchema.statics.findActions = function (query) {
    return this.find(query).populate({ path: "actions", select: "data.key" });
};


/***/ }),

/***/ "./libs/common/src/schemas/user.schema.ts":
/*!************************************************!*\
  !*** ./libs/common/src/schemas/user.schema.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const utils_1 = __webpack_require__(/*! ../utils */ "./libs/common/src/utils/index.ts");
const profile_schema_1 = __webpack_require__(/*! ./profile.schema */ "./libs/common/src/schemas/profile.schema.ts");
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "fname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "lname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ lowercase: true, unique: true, required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "pwd", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Profile' }),
    __metadata("design:type", typeof (_a = typeof profile_schema_1.Profile !== "undefined" && profile_schema_1.Profile) === "function" ? _a : Object)
], User.prototype, "profile", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date(), immutable: true }),
    __metadata("design:type", String)
], User.prototype, "created", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: () => new Date() }),
    __metadata("design:type", String)
], User.prototype, "updated", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.statics.verifyUser = async function (email, password) {
    try {
        let user = await this.findOne({ email }).populate({ path: "profile", populate: { path: "actions", select: "data.key" } });
        if (user) {
            let isMatch = await (0, utils_1.compareHash)(password, user.pwd);
            if (isMatch) {
                return Promise.resolve(user);
            }
        }
        throw new Error('Invalid User');
    }
    catch (error) {
        return Promise.reject(null);
    }
};
exports.UserSchema.pre("save", async function (next) {
    if (this.isNew) {
        this.pwd = await (0, utils_1.hashString)(this.pwd);
        next();
    }
    else {
        next();
    }
});
exports.UserSchema.statics.findUserProfile = async function (query) {
    return this.find(query, { pwd: 0 }).populate({ path: 'profile', populate: { path: "actions", select: "data.key" }, select: "actions" });
};


/***/ }),

/***/ "./libs/common/src/types/index.ts":
/*!****************************************!*\
  !*** ./libs/common/src/types/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/utils/index.ts":
/*!****************************************!*\
  !*** ./libs/common/src/utils/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encryptText = encryptText;
exports.decryptText = decryptText;
exports.hashString = hashString;
exports.compareHash = compareHash;
const config_1 = __webpack_require__(/*! @app/config */ "./libs/config/src/index.ts");
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
function encryptText(text) {
    let cipher = (0, crypto_1.createCipheriv)('aes-256-cbc', config_1.ENCRYPTION_KEY, config_1.ENCRYPTION_IV);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('base64');
}
function decryptText(text) {
    let encryptedText = Buffer.from(text, 'base64');
    let decipher = (0, crypto_1.createDecipheriv)('aes-256-cbc', config_1.ENCRYPTION_KEY, config_1.ENCRYPTION_IV);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
async function hashString(text) {
    return "hash";
}
async function compareHash(text, hash) {
    return "";
}


/***/ }),

/***/ "./libs/config/src/index.ts":
/*!**********************************!*\
  !*** ./libs/config/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SALT_ROUNDS = exports.ENCRYPTION_IV = exports.ENCRYPTION_KEY = exports.MONGODB_URL = exports.JWT_SECRET = exports.MAILDEV_INCOMING_PASS = exports.MAILDEV_INCOMING_USER = void 0;
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
exports.MAILDEV_INCOMING_USER = "danny";
exports.MAILDEV_INCOMING_PASS = "pass1234";
exports.JWT_SECRET = 'IIededeasasASSK';
exports.MONGODB_URL = 'mongodb://localhost:27017/backend-starter';
exports.ENCRYPTION_KEY = (0, crypto_1.createHash)('sha512')
    .update('LATi88ShjT7_', 'utf-8')
    .digest('hex')
    .substring(0, 32);
exports.ENCRYPTION_IV = (0, crypto_1.createHash)('sha512')
    .update('Pas123', 'utf-8')
    .digest('hex')
    .substring(0, 16);
exports.SALT_ROUNDS = 10;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const files_module_1 = __webpack_require__(/*! ./modules/files/files.module */ "./src/modules/files/files.module.ts");
const users_module_1 = __webpack_require__(/*! ./modules/users/users.module */ "./src/modules/users/users.module.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const config_1 = __webpack_require__(/*! @app/config */ "./libs/config/src/index.ts");
const auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
const profile_module_1 = __webpack_require__(/*! ./modules/profile/profile.module */ "./src/modules/profile/profile.module.ts");
const nomenclature_module_1 = __webpack_require__(/*! ./modules/nomenclature/nomenclature.module */ "./src/modules/nomenclature/nomenclature.module.ts");
const nomendata_module_1 = __webpack_require__(/*! ./modules/nomendata/nomendata.module */ "./src/modules/nomendata/nomendata.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(config_1.MONGODB_URL),
            auth_module_1.AuthModule,
            files_module_1.FilesModule,
            users_module_1.UsersModule,
            profile_module_1.ProfileModule,
            nomenclature_module_1.NomenclatureModule,
            nomendata_module_1.NomendataModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);


/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const helpers_1 = __webpack_require__(/*! @app/common/helpers */ "./libs/common/src/helpers/index.ts");
const create_user_dto_1 = __webpack_require__(/*! ../users/dto/create-user.dto */ "./src/modules/users/dto/create-user.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(user) {
        return this.authService.loginUser(user);
    }
    register(user) {
        return this.authService.create(user);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, helpers_1.Public)(),
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: common_2.LoginUserDTO,
        description: 'The record has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof common_2.LoginUserDTO !== "undefined" && common_2.LoginUserDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, helpers_1.Public)(),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./src/modules/auth/jwt.strategy.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const jwt_auth_guard_1 = __webpack_require__(/*! ./jwt-auth.guard */ "./src/modules/auth/jwt-auth.guard.ts");
const config_1 = __webpack_require__(/*! @app/config */ "./libs/config/src/index.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/modules/users/users.module.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const roles_guard_1 = __webpack_require__(/*! ./roles.guard */ "./src/modules/auth/roles.guard.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: config_1.JWT_SECRET,
                signOptions: { expiresIn: '60s' },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: common_2.User.name, schema: common_2.UserSchema }]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @app/config */ "./libs/config/src/index.ts");
let AuthService = class AuthService extends common_1.EntityRepository {
    constructor(userModel, jwtService) {
        super(userModel);
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async loginUser(user) {
        try {
            let authUser = await this.userModel.verifyUser(user.email, user.pwd);
            let actions = authUser.profile?.actions?.map((action) => action.data.key) || [];
            const payload = { userID: authUser._id };
            return {
                message: 'Login successful',
                status: 'success',
                data: {
                    access_token: this.jwtService.sign(payload, { secret: config_1.JWT_SECRET, expiresIn: '1h' }),
                    user: {
                        fname: authUser.fname,
                        lname: authUser.lname,
                        email: authUser.email,
                        permissions: actions
                    },
                }
            };
        }
        catch (error) {
            return { message: 'Incorrect credentials', status: 'error' };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_1.User.name)),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], AuthService);


/***/ }),

/***/ "./src/modules/auth/jwt-auth.guard.ts":
/*!********************************************!*\
  !*** ./src/modules/auth/jwt-auth.guard.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const helpers_1 = __webpack_require__(/*! @app/common/helpers */ "./libs/common/src/helpers/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(helpers_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], JwtAuthGuard);


/***/ }),

/***/ "./src/modules/auth/jwt.strategy.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/jwt.strategy.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const config_1 = __webpack_require__(/*! @app/config */ "./libs/config/src/index.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(userModel) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config_1.JWT_SECRET,
        });
        this.userModel = userModel;
    }
    async validate(payload) {
        const user = await this.userModel.findUserProfile({ _id: payload.userID }, { pwd: 0 });
        if (user.length === 0)
            return null;
        let _user = user[0];
        let actions = _user.profile?.actions?.map((action) => action.data.key) || [];
        return { ..._user, actions };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.User.name)),
    __metadata("design:paramtypes", [Object])
], JwtStrategy);


/***/ }),

/***/ "./src/modules/auth/roles.decorator.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/roles.decorator.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = exports.Role = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
})(Role || (exports.Role = Role = {}));
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),

/***/ "./src/modules/auth/roles.guard.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/roles.guard.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const roles_decorator_1 = __webpack_require__(/*! ./roles.decorator */ "./src/modules/auth/roles.decorator.ts");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.actions?.includes(role));
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


/***/ }),

/***/ "./src/modules/files/files.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/files/files.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const multer_1 = __webpack_require__(/*! multer */ "multer");
const path_1 = __webpack_require__(/*! path */ "path");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const files_service_1 = __webpack_require__(/*! ./files.service */ "./src/modules/files/files.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../auth/jwt-auth.guard */ "./src/modules/auth/jwt-auth.guard.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const storage = (0, multer_1.diskStorage)({
    destination: (_, __, cb) => {
        try {
            if (!(0, fs_1.existsSync)(common_2.UPLOAD_PATH)) {
                (0, fs_1.mkdirSync)(common_2.UPLOAD_PATH);
            }
            const uploadDestination = (0, path_1.join)(common_2.UPLOAD_PATH);
            cb(null, uploadDestination);
        }
        catch (error) {
            cb(error, null);
        }
    },
    filename: (_, file, cb) => {
        let name = file.originalname;
        cb(null, name);
    },
});
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    async uploadFile(file) {
    }
    async uploadFiles(files) {
        return {};
    }
    getFiles() {
        return this.filesService.find();
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10, { storage })),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getFiles", null);
exports.FilesController = FilesController = __decorate([
    (0, swagger_1.ApiTags)("Files"),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [typeof (_a = typeof files_service_1.FilesService !== "undefined" && files_service_1.FilesService) === "function" ? _a : Object])
], FilesController);


/***/ }),

/***/ "./src/modules/files/files.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/files/files.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const files_controller_1 = __webpack_require__(/*! ./files.controller */ "./src/modules/files/files.controller.ts");
const files_service_1 = __webpack_require__(/*! ./files.service */ "./src/modules/files/files.service.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
let FilesModule = class FilesModule {
};
exports.FilesModule = FilesModule;
exports.FilesModule = FilesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: common_2.File.name, schema: common_2.FileSchema }])],
        controllers: [files_controller_1.FilesController],
        providers: [files_service_1.FilesService]
    })
], FilesModule);


/***/ }),

/***/ "./src/modules/files/files.service.ts":
/*!********************************************!*\
  !*** ./src/modules/files/files.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let FilesService = class FilesService extends common_2.EntityRepository {
    constructor(fileModel) {
        super(fileModel);
        this.fileModel = fileModel;
    }
    async findAll() {
        return [];
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.File.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], FilesService);


/***/ }),

/***/ "./src/modules/nomenclature/nomenclature.controller.ts":
/*!*************************************************************!*\
  !*** ./src/modules/nomenclature/nomenclature.controller.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NomenclatureController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nomenclature_service_1 = __webpack_require__(/*! ./nomenclature.service */ "./src/modules/nomenclature/nomenclature.service.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let NomenclatureController = class NomenclatureController {
    constructor(nomenclatureService) {
        this.nomenclatureService = nomenclatureService;
    }
    create(createNomenclatureDto) {
        return this.nomenclatureService.create(createNomenclatureDto);
    }
    findAll() {
        return this.nomenclatureService.find();
    }
    getNomenByCode(code) {
        return this.nomenclatureService.getNomenByCode(code);
    }
    update(updateNomenclatureDto, id) {
        return this.nomenclatureService.update({ _id: id }, updateNomenclatureDto);
    }
    remove(id) {
        return this.nomenclatureService.delete({ _id: id });
    }
};
exports.NomenclatureController = NomenclatureController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof common_2.CreateNomenclatureDto !== "undefined" && common_2.CreateNomenclatureDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], NomenclatureController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NomenclatureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NomenclatureController.prototype, "getNomenByCode", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof common_2.UpdateNomenclatureDto !== "undefined" && common_2.UpdateNomenclatureDto) === "function" ? _c : Object, String]),
    __metadata("design:returntype", void 0)
], NomenclatureController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NomenclatureController.prototype, "remove", null);
exports.NomenclatureController = NomenclatureController = __decorate([
    (0, swagger_1.ApiTags)('Nomenclature'),
    (0, common_1.Controller)('nomen'),
    __metadata("design:paramtypes", [typeof (_a = typeof nomenclature_service_1.NomenclatureService !== "undefined" && nomenclature_service_1.NomenclatureService) === "function" ? _a : Object])
], NomenclatureController);


/***/ }),

/***/ "./src/modules/nomenclature/nomenclature.module.ts":
/*!*********************************************************!*\
  !*** ./src/modules/nomenclature/nomenclature.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NomenclatureModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nomenclature_service_1 = __webpack_require__(/*! ./nomenclature.service */ "./src/modules/nomenclature/nomenclature.service.ts");
const nomenclature_controller_1 = __webpack_require__(/*! ./nomenclature.controller */ "./src/modules/nomenclature/nomenclature.controller.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
let NomenclatureModule = class NomenclatureModule {
};
exports.NomenclatureModule = NomenclatureModule;
exports.NomenclatureModule = NomenclatureModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: common_2.Nomenclature.name, schema: common_2.NomenclatureSchema }])],
        controllers: [nomenclature_controller_1.NomenclatureController],
        providers: [nomenclature_service_1.NomenclatureService],
        exports: [nomenclature_service_1.NomenclatureService]
    })
], NomenclatureModule);


/***/ }),

/***/ "./src/modules/nomenclature/nomenclature.service.ts":
/*!**********************************************************!*\
  !*** ./src/modules/nomenclature/nomenclature.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NomenclatureService = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const helpers_1 = __webpack_require__(/*! @app/common/helpers */ "./libs/common/src/helpers/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let NomenclatureService = class NomenclatureService extends common_1.EntityRepository {
    constructor(nomenclatureModel) {
        super(nomenclatureModel);
        this.nomenclatureModel = nomenclatureModel;
    }
    async getNomenByCode(code) {
        return (0, helpers_1.returnSuccess)(this.nomenclatureModel.findOne({ code }));
    }
};
exports.NomenclatureService = NomenclatureService;
exports.NomenclatureService = NomenclatureService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_1.Nomenclature.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], NomenclatureService);


/***/ }),

/***/ "./src/modules/nomendata/nomendata.controller.ts":
/*!*******************************************************!*\
  !*** ./src/modules/nomendata/nomendata.controller.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NomendataController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nomendata_service_1 = __webpack_require__(/*! ./nomendata.service */ "./src/modules/nomendata/nomendata.service.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const nomenclature_service_1 = __webpack_require__(/*! ../nomenclature/nomenclature.service */ "./src/modules/nomenclature/nomenclature.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let NomendataController = class NomendataController {
    constructor(nomendataService, nomenclatureService) {
        this.nomendataService = nomendataService;
        this.nomenclatureService = nomenclatureService;
    }
    async create(createNomendatumDto, code) {
        let nomen = await this.nomenclatureService.getNomenByCode(code);
        let accessKey = createNomendatumDto.data[common_2.accessKeyName];
        delete createNomendatumDto.data[common_2.accessKeyName];
        return this.nomendataService.create({
            nomen: nomen.data._id,
            data: createNomendatumDto.data,
            [common_2.accessKeyName]: accessKey,
        });
    }
    async findAll(code) {
        let nomen = await this.nomenclatureService.getNomenByCode(code);
        return this.nomendataService.find({ nomen: nomen.data._id }, {}, true);
    }
    async update(id, updateNomendatumDto) {
        return this.nomendataService.update({ _id: id }, updateNomendatumDto);
    }
    remove(id) {
        return this.nomendataService.delete({ _id: id });
    }
};
exports.NomendataController = NomendataController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof common_2.CreateNomenclatureDataDto !== "undefined" && common_2.CreateNomenclatureDataDto) === "function" ? _c : Object, String]),
    __metadata("design:returntype", Promise)
], NomendataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NomendataController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof common_2.UpdateNomenclatureDataDto !== "undefined" && common_2.UpdateNomenclatureDataDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], NomendataController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NomendataController.prototype, "remove", null);
exports.NomendataController = NomendataController = __decorate([
    (0, swagger_1.ApiTags)('Nomenclature Data'),
    (0, common_1.Controller)('nomen/:code/data'),
    __metadata("design:paramtypes", [typeof (_a = typeof nomendata_service_1.NomendataService !== "undefined" && nomendata_service_1.NomendataService) === "function" ? _a : Object, typeof (_b = typeof nomenclature_service_1.NomenclatureService !== "undefined" && nomenclature_service_1.NomenclatureService) === "function" ? _b : Object])
], NomendataController);


/***/ }),

/***/ "./src/modules/nomendata/nomendata.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/nomendata/nomendata.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NomendataModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nomendata_service_1 = __webpack_require__(/*! ./nomendata.service */ "./src/modules/nomendata/nomendata.service.ts");
const nomendata_controller_1 = __webpack_require__(/*! ./nomendata.controller */ "./src/modules/nomendata/nomendata.controller.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const nomenclaturedata_schema_1 = __webpack_require__(/*! @app/common/schemas/nomenclaturedata.schema */ "./libs/common/src/schemas/nomenclaturedata.schema.ts");
const nomenclature_module_1 = __webpack_require__(/*! ../nomenclature/nomenclature.module */ "./src/modules/nomenclature/nomenclature.module.ts");
let NomendataModule = class NomendataModule {
};
exports.NomendataModule = NomendataModule;
exports.NomendataModule = NomendataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: nomenclaturedata_schema_1.NomenclatureData.name, schema: nomenclaturedata_schema_1.NomenclatureDataSchema },
            ]),
            nomenclature_module_1.NomenclatureModule
        ],
        controllers: [nomendata_controller_1.NomendataController],
        providers: [nomendata_service_1.NomendataService],
    })
], NomendataModule);


/***/ }),

/***/ "./src/modules/nomendata/nomendata.service.ts":
/*!****************************************************!*\
  !*** ./src/modules/nomendata/nomendata.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NomendataService = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_3 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let NomendataService = class NomendataService extends common_1.EntityRepository {
    constructor(nomenclatureModel) {
        super(nomenclatureModel);
        this.nomenclatureModel = nomenclatureModel;
    }
};
exports.NomendataService = NomendataService;
exports.NomendataService = NomendataService = __decorate([
    (0, common_3.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.NomenclatureData.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], NomendataService);


/***/ }),

/***/ "./src/modules/profile/dto/create-profile.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/profile/dto/create-profile.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProfileDto = void 0;
class CreateProfileDto {
}
exports.CreateProfileDto = CreateProfileDto;


/***/ }),

/***/ "./src/modules/profile/dto/update-profile.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/profile/dto/update-profile.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProfileDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_profile_dto_1 = __webpack_require__(/*! ./create-profile.dto */ "./src/modules/profile/dto/create-profile.dto.ts");
class UpdateProfileDto extends (0, mapped_types_1.PartialType)(create_profile_dto_1.CreateProfileDto) {
}
exports.UpdateProfileDto = UpdateProfileDto;


/***/ }),

/***/ "./src/modules/profile/profile.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/profile/profile.controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const profile_service_1 = __webpack_require__(/*! ./profile.service */ "./src/modules/profile/profile.service.ts");
const create_profile_dto_1 = __webpack_require__(/*! ./dto/create-profile.dto */ "./src/modules/profile/dto/create-profile.dto.ts");
const update_profile_dto_1 = __webpack_require__(/*! ./dto/update-profile.dto */ "./src/modules/profile/dto/update-profile.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const roles_decorator_1 = __webpack_require__(/*! ../auth/roles.decorator */ "./src/modules/auth/roles.decorator.ts");
let ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    create(createProfileDto) {
        return this.profileService.create(createProfileDto);
    }
    findAll() {
        return this.profileService.find();
    }
    findOne(id) {
        return this.profileService.findOne({ _id: id });
    }
    update(id, updateProfileDto) {
        return this.profileService.update({ _id: id }, updateProfileDto);
    }
    remove(id) {
        return this.profileService.delete({ _id: id });
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, roles_decorator_1.Roles)('profile.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_profile_dto_1.CreateProfileDto !== "undefined" && create_profile_dto_1.CreateProfileDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)('profile.read'),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)('profile.read'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)('profile.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_profile_dto_1.UpdateProfileDto !== "undefined" && update_profile_dto_1.UpdateProfileDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)('profile.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "remove", null);
exports.ProfileController = ProfileController = __decorate([
    (0, swagger_1.ApiTags)("Profiles"),
    (0, common_1.Controller)('profiles'),
    __metadata("design:paramtypes", [typeof (_a = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" ? _a : Object])
], ProfileController);


/***/ }),

/***/ "./src/modules/profile/profile.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/profile/profile.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const profile_service_1 = __webpack_require__(/*! ./profile.service */ "./src/modules/profile/profile.service.ts");
const profile_controller_1 = __webpack_require__(/*! ./profile.controller */ "./src/modules/profile/profile.controller.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
let ProfileModule = class ProfileModule {
};
exports.ProfileModule = ProfileModule;
exports.ProfileModule = ProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: common_2.Profile.name, schema: common_2.ProfileSchema },
            ]),
        ],
        controllers: [profile_controller_1.ProfileController],
        providers: [profile_service_1.ProfileService],
    })
], ProfileModule);


/***/ }),

/***/ "./src/modules/profile/profile.service.ts":
/*!************************************************!*\
  !*** ./src/modules/profile/profile.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const helpers_1 = __webpack_require__(/*! @app/common/helpers */ "./libs/common/src/helpers/index.ts");
let ProfileService = class ProfileService extends common_2.EntityRepository {
    constructor(profileModel) {
        super(profileModel);
        this.profileModel = profileModel;
    }
    async find() {
        return (0, helpers_1.returnSuccess)(this.profileModel.findActions().exec());
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.Profile.name)),
    __metadata("design:paramtypes", [Object])
], ProfileService);


/***/ }),

/***/ "./src/modules/users/dto/create-user.dto.ts":
/*!**************************************************!*\
  !*** ./src/modules/users/dto/create-user.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "fname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lname", void 0);
__decorate([
    (0, class_validator_1.IsPhoneNumber)('CM'),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "pwd", void 0);


/***/ }),

/***/ "./src/modules/users/dto/update-user.dto.ts":
/*!**************************************************!*\
  !*** ./src/modules/users/dto/update-user.dto.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_user_dto_1 = __webpack_require__(/*! ./create-user.dto */ "./src/modules/users/dto/create-user.dto.ts");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./src/modules/users/users.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/users/users.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./src/modules/users/dto/create-user.dto.ts");
const update_user_dto_1 = __webpack_require__(/*! ./dto/update-user.dto */ "./src/modules/users/dto/update-user.dto.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll(query) {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne({ _id: id });
    }
    update(id, updateUserDto) {
        return this.usersService.update({ _id: id }, updateUserDto);
    }
    remove(id) {
        return this.usersService.delete({ _id: id });
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof common_2.User !== "undefined" && common_2.User) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiBearerAuth)("Auth"),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),

/***/ "./src/modules/users/users.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/users/users.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/users/users.controller.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: common_2.User.name, schema: common_2.UserSchema }]),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),

/***/ "./src/modules/users/users.service.ts":
/*!********************************************!*\
  !*** ./src/modules/users/users.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const helpers_1 = __webpack_require__(/*! @app/common/helpers */ "./libs/common/src/helpers/index.ts");
let UsersService = class UsersService extends common_2.EntityRepository {
    constructor(userModel) {
        super(userModel);
        this.userModel = userModel;
    }
    async findAll() {
        return (0, helpers_1.returnSuccess)(this.userModel.find({}, { pwd: 0 }).populate({ path: "profile", select: "name" }));
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(common_2.User.name)),
    __metadata("design:paramtypes", [Object])
], UsersService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: ["verbose"] });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Backend Starter')
        .setDescription('This is a starter templete for a backend API')
        .setVersion('1.0')
        .addServer('http://localhost:8000/', "Local Environment")
        .addServer('http://localhost:8000/', "Network Environment")
        .addBearerAuth({ type: "http" }, "Auth")
        .addTag('Backend')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(8000);
}
bootstrap();

})();

/******/ })()
;