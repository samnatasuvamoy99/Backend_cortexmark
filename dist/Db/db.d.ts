import mongoose from "mongoose";
export declare const UserModel: mongoose.Model<{
    password?: string | null;
    username?: string | null;
    email?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    password?: string | null;
    username?: string | null;
    email?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    password?: string | null;
    username?: string | null;
    email?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password?: string | null;
    username?: string | null;
    email?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    password?: string | null;
    username?: string | null;
    email?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    password?: string | null;
    username?: string | null;
    email?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const TagModel: mongoose.Model<{
    title?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    title?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    title?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const ContentModel: mongoose.Model<{
    tags: mongoose.Types.DocumentArray<{
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }> & {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }>;
    type?: unknown;
    link?: unknown;
    title?: unknown;
    userId?: {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    } | null;
    createdAt?: {
        toJSON?: {} | null;
        [Symbol.toPrimitive]?: {} | null;
        toString?: {} | null;
        toLocaleString?: {} | null;
        toDateString?: {} | null;
        toTimeString?: {} | null;
        toLocaleDateString?: {} | null;
        toLocaleTimeString?: {} | null;
        getTime?: {} | null;
        getFullYear?: {} | null;
        getUTCFullYear?: {} | null;
        getMonth?: {} | null;
        getUTCMonth?: {} | null;
        getDate?: {} | null;
        getUTCDate?: {} | null;
        getDay?: {} | null;
        getUTCDay?: {} | null;
        getHours?: {} | null;
        getUTCHours?: {} | null;
        getMinutes?: {} | null;
        getUTCMinutes?: {} | null;
        getSeconds?: {} | null;
        getUTCSeconds?: {} | null;
        getMilliseconds?: {} | null;
        getUTCMilliseconds?: {} | null;
        getTimezoneOffset?: {} | null;
        setTime?: {} | null;
        setMilliseconds?: {} | null;
        setUTCMilliseconds?: {} | null;
        setSeconds?: {} | null;
        setUTCSeconds?: {} | null;
        setMinutes?: {} | null;
        setUTCMinutes?: {} | null;
        setHours?: {} | null;
        setUTCHours?: {} | null;
        setDate?: {} | null;
        setUTCDate?: {} | null;
        setMonth?: {} | null;
        setUTCMonth?: {} | null;
        setFullYear?: {} | null;
        setUTCFullYear?: {} | null;
        toUTCString?: {} | null;
        toISOString?: {} | null;
        getVarDate?: {} | null;
        valueOf?: {} | null;
    } | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.DocumentArray<{
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }> & {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }>;
    type?: unknown;
    link?: unknown;
    title?: unknown;
    userId?: {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    } | null;
    createdAt?: {
        toJSON?: {} | null;
        [Symbol.toPrimitive]?: {} | null;
        toString?: {} | null;
        toLocaleString?: {} | null;
        toDateString?: {} | null;
        toTimeString?: {} | null;
        toLocaleDateString?: {} | null;
        toLocaleTimeString?: {} | null;
        getTime?: {} | null;
        getFullYear?: {} | null;
        getUTCFullYear?: {} | null;
        getMonth?: {} | null;
        getUTCMonth?: {} | null;
        getDate?: {} | null;
        getUTCDate?: {} | null;
        getDay?: {} | null;
        getUTCDay?: {} | null;
        getHours?: {} | null;
        getUTCHours?: {} | null;
        getMinutes?: {} | null;
        getUTCMinutes?: {} | null;
        getSeconds?: {} | null;
        getUTCSeconds?: {} | null;
        getMilliseconds?: {} | null;
        getUTCMilliseconds?: {} | null;
        getTimezoneOffset?: {} | null;
        setTime?: {} | null;
        setMilliseconds?: {} | null;
        setUTCMilliseconds?: {} | null;
        setSeconds?: {} | null;
        setUTCSeconds?: {} | null;
        setMinutes?: {} | null;
        setUTCMinutes?: {} | null;
        setHours?: {} | null;
        setUTCHours?: {} | null;
        setDate?: {} | null;
        setUTCDate?: {} | null;
        setMonth?: {} | null;
        setUTCMonth?: {} | null;
        setFullYear?: {} | null;
        setUTCFullYear?: {} | null;
        toUTCString?: {} | null;
        toISOString?: {} | null;
        getVarDate?: {} | null;
        valueOf?: {} | null;
    } | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    tags: mongoose.Types.DocumentArray<{
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }> & {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }>;
    type?: unknown;
    link?: unknown;
    title?: unknown;
    userId?: {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    } | null;
    createdAt?: {
        toJSON?: {} | null;
        [Symbol.toPrimitive]?: {} | null;
        toString?: {} | null;
        toLocaleString?: {} | null;
        toDateString?: {} | null;
        toTimeString?: {} | null;
        toLocaleDateString?: {} | null;
        toLocaleTimeString?: {} | null;
        getTime?: {} | null;
        getFullYear?: {} | null;
        getUTCFullYear?: {} | null;
        getMonth?: {} | null;
        getUTCMonth?: {} | null;
        getDate?: {} | null;
        getUTCDate?: {} | null;
        getDay?: {} | null;
        getUTCDay?: {} | null;
        getHours?: {} | null;
        getUTCHours?: {} | null;
        getMinutes?: {} | null;
        getUTCMinutes?: {} | null;
        getSeconds?: {} | null;
        getUTCSeconds?: {} | null;
        getMilliseconds?: {} | null;
        getUTCMilliseconds?: {} | null;
        getTimezoneOffset?: {} | null;
        setTime?: {} | null;
        setMilliseconds?: {} | null;
        setUTCMilliseconds?: {} | null;
        setSeconds?: {} | null;
        setUTCSeconds?: {} | null;
        setMinutes?: {} | null;
        setUTCMinutes?: {} | null;
        setHours?: {} | null;
        setUTCHours?: {} | null;
        setDate?: {} | null;
        setUTCDate?: {} | null;
        setMonth?: {} | null;
        setUTCMonth?: {} | null;
        setFullYear?: {} | null;
        setUTCFullYear?: {} | null;
        toUTCString?: {} | null;
        toISOString?: {} | null;
        getVarDate?: {} | null;
        valueOf?: {} | null;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tags: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    }[];
    userId: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    createdAt: NativeDate;
    type?: string | null;
    link?: string | null;
    title?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    tags: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    }[];
    userId: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    createdAt: NativeDate;
    type?: string | null;
    link?: string | null;
    title?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    tags: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    }[];
    userId: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    createdAt: NativeDate;
    type?: string | null;
    link?: string | null;
    title?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const LinkModel: mongoose.Model<{
    userId: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    userId: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    userId: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    userId: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map