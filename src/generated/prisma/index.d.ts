
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Attribute
 * 
 */
export type Attribute = $Result.DefaultSelection<Prisma.$AttributePayload>
/**
 * Model AttributeOption
 * 
 */
export type AttributeOption = $Result.DefaultSelection<Prisma.$AttributeOptionPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model Variant
 * 
 */
export type Variant = $Result.DefaultSelection<Prisma.$VariantPayload>
/**
 * Model VariantAttribute
 * 
 */
export type VariantAttribute = $Result.DefaultSelection<Prisma.$VariantAttributePayload>
/**
 * Model VariantImage
 * 
 */
export type VariantImage = $Result.DefaultSelection<Prisma.$VariantImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const VariantStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  OUT_OF_STOCK: 'OUT_OF_STOCK'
};

export type VariantStatus = (typeof VariantStatus)[keyof typeof VariantStatus]

}

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type VariantStatus = $Enums.VariantStatus

export const VariantStatus: typeof $Enums.VariantStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attribute`: Exposes CRUD operations for the **Attribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attributes
    * const attributes = await prisma.attribute.findMany()
    * ```
    */
  get attribute(): Prisma.AttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attributeOption`: Exposes CRUD operations for the **AttributeOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributeOptions
    * const attributeOptions = await prisma.attributeOption.findMany()
    * ```
    */
  get attributeOption(): Prisma.AttributeOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **Variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.VariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variantAttribute`: Exposes CRUD operations for the **VariantAttribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariantAttributes
    * const variantAttributes = await prisma.variantAttribute.findMany()
    * ```
    */
  get variantAttribute(): Prisma.VariantAttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variantImage`: Exposes CRUD operations for the **VariantImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariantImages
    * const variantImages = await prisma.variantImage.findMany()
    * ```
    */
  get variantImage(): Prisma.VariantImageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    Attribute: 'Attribute',
    AttributeOption: 'AttributeOption',
    Product: 'Product',
    ProductImage: 'ProductImage',
    Variant: 'Variant',
    VariantAttribute: 'VariantAttribute',
    VariantImage: 'VariantImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "attribute" | "attributeOption" | "product" | "productImage" | "variant" | "variantAttribute" | "variantImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Attribute: {
        payload: Prisma.$AttributePayload<ExtArgs>
        fields: Prisma.AttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findFirst: {
            args: Prisma.AttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findMany: {
            args: Prisma.AttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          create: {
            args: Prisma.AttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          createMany: {
            args: Prisma.AttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          delete: {
            args: Prisma.AttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          update: {
            args: Prisma.AttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          deleteMany: {
            args: Prisma.AttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          upsert: {
            args: Prisma.AttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          aggregate: {
            args: Prisma.AttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttribute>
          }
          groupBy: {
            args: Prisma.AttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeCountAggregateOutputType> | number
          }
        }
      }
      AttributeOption: {
        payload: Prisma.$AttributeOptionPayload<ExtArgs>
        fields: Prisma.AttributeOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          findFirst: {
            args: Prisma.AttributeOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          findMany: {
            args: Prisma.AttributeOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>[]
          }
          create: {
            args: Prisma.AttributeOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          createMany: {
            args: Prisma.AttributeOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>[]
          }
          delete: {
            args: Prisma.AttributeOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          update: {
            args: Prisma.AttributeOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          deleteMany: {
            args: Prisma.AttributeOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>[]
          }
          upsert: {
            args: Prisma.AttributeOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          aggregate: {
            args: Prisma.AttributeOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttributeOption>
          }
          groupBy: {
            args: Prisma.AttributeOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeOptionCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeOptionCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      Variant: {
        payload: Prisma.$VariantPayload<ExtArgs>
        fields: Prisma.VariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findFirst: {
            args: Prisma.VariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findMany: {
            args: Prisma.VariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          create: {
            args: Prisma.VariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          createMany: {
            args: Prisma.VariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          delete: {
            args: Prisma.VariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          update: {
            args: Prisma.VariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          deleteMany: {
            args: Prisma.VariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          upsert: {
            args: Prisma.VariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          aggregate: {
            args: Prisma.VariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariant>
          }
          groupBy: {
            args: Prisma.VariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantCountArgs<ExtArgs>
            result: $Utils.Optional<VariantCountAggregateOutputType> | number
          }
        }
      }
      VariantAttribute: {
        payload: Prisma.$VariantAttributePayload<ExtArgs>
        fields: Prisma.VariantAttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantAttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantAttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload>
          }
          findFirst: {
            args: Prisma.VariantAttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantAttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload>
          }
          findMany: {
            args: Prisma.VariantAttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload>[]
          }
          create: {
            args: Prisma.VariantAttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload>
          }
          createMany: {
            args: Prisma.VariantAttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantAttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload>[]
          }
          delete: {
            args: Prisma.VariantAttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload>
          }
          update: {
            args: Prisma.VariantAttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload>
          }
          deleteMany: {
            args: Prisma.VariantAttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantAttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantAttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload>[]
          }
          upsert: {
            args: Prisma.VariantAttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributePayload>
          }
          aggregate: {
            args: Prisma.VariantAttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariantAttribute>
          }
          groupBy: {
            args: Prisma.VariantAttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantAttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantAttributeCountArgs<ExtArgs>
            result: $Utils.Optional<VariantAttributeCountAggregateOutputType> | number
          }
        }
      }
      VariantImage: {
        payload: Prisma.$VariantImagePayload<ExtArgs>
        fields: Prisma.VariantImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          findFirst: {
            args: Prisma.VariantImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          findMany: {
            args: Prisma.VariantImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>[]
          }
          create: {
            args: Prisma.VariantImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          createMany: {
            args: Prisma.VariantImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>[]
          }
          delete: {
            args: Prisma.VariantImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          update: {
            args: Prisma.VariantImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          deleteMany: {
            args: Prisma.VariantImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>[]
          }
          upsert: {
            args: Prisma.VariantImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          aggregate: {
            args: Prisma.VariantImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariantImage>
          }
          groupBy: {
            args: Prisma.VariantImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantImageCountArgs<ExtArgs>
            result: $Utils.Optional<VariantImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    attribute?: AttributeOmit
    attributeOption?: AttributeOptionOmit
    product?: ProductOmit
    productImage?: ProductImageOmit
    variant?: VariantOmit
    variantAttribute?: VariantAttributeOmit
    variantImage?: VariantImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    products: number
    attributes: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
    attributes?: boolean | CategoryCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
  }


  /**
   * Count Type AttributeCountOutputType
   */

  export type AttributeCountOutputType = {
    options: number
    VariantAttribute: number
  }

  export type AttributeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | AttributeCountOutputTypeCountOptionsArgs
    VariantAttribute?: boolean | AttributeCountOutputTypeCountVariantAttributeArgs
  }

  // Custom InputTypes
  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeCountOutputType
     */
    select?: AttributeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeOptionWhereInput
  }

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountVariantAttributeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantAttributeWhereInput
  }


  /**
   * Count Type AttributeOptionCountOutputType
   */

  export type AttributeOptionCountOutputType = {
    VariantAttribute: number
  }

  export type AttributeOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VariantAttribute?: boolean | AttributeOptionCountOutputTypeCountVariantAttributeArgs
  }

  // Custom InputTypes
  /**
   * AttributeOptionCountOutputType without action
   */
  export type AttributeOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOptionCountOutputType
     */
    select?: AttributeOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeOptionCountOutputType without action
   */
  export type AttributeOptionCountOutputTypeCountVariantAttributeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantAttributeWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    images: number
    variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
  }


  /**
   * Count Type VariantCountOutputType
   */

  export type VariantCountOutputType = {
    attributes: number
    images: number
  }

  export type VariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | VariantCountOutputTypeCountAttributesArgs
    images?: boolean | VariantCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantCountOutputType
     */
    select?: VariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantAttributeWhereInput
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    parentId: number | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    attributes?: boolean | Category$attributesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    attributes?: boolean | Category$attributesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      children: Prisma.$CategoryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      attributes: Prisma.$AttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      parentId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attributes<T extends Category$attributesArgs<ExtArgs> = {}>(args?: Subset<T, Category$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.attributes
   */
  export type Category$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    cursor?: AttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Attribute
   */

  export type AggregateAttribute = {
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  export type AttributeAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    displayOrder: number | null
  }

  export type AttributeSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    displayOrder: number | null
  }

  export type AttributeMinAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
    isFilterable: boolean | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
    isFilterable: boolean | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    isFilterable: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttributeAvgAggregateInputType = {
    id?: true
    categoryId?: true
    displayOrder?: true
  }

  export type AttributeSumAggregateInputType = {
    id?: true
    categoryId?: true
    displayOrder?: true
  }

  export type AttributeMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    isFilterable?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    isFilterable?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    isFilterable?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attribute to aggregate.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attributes
    **/
    _count?: true | AttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeMaxAggregateInputType
  }

  export type GetAttributeAggregateType<T extends AttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttribute[P]>
      : GetScalarType<T[P], AggregateAttribute[P]>
  }




  export type AttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithAggregationInput | AttributeOrderByWithAggregationInput[]
    by: AttributeScalarFieldEnum[] | AttributeScalarFieldEnum
    having?: AttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeCountAggregateInputType | true
    _avg?: AttributeAvgAggregateInputType
    _sum?: AttributeSumAggregateInputType
    _min?: AttributeMinAggregateInputType
    _max?: AttributeMaxAggregateInputType
  }

  export type AttributeGroupByOutputType = {
    id: number
    name: string
    categoryId: number
    isFilterable: boolean
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  type GetAttributeGroupByPayload<T extends AttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeGroupByOutputType[P]>
        }
      >
    >


  export type AttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    isFilterable?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    options?: boolean | Attribute$optionsArgs<ExtArgs>
    VariantAttribute?: boolean | Attribute$VariantAttributeArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    isFilterable?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    isFilterable?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectScalar = {
    id?: boolean
    name?: boolean
    categoryId?: boolean
    isFilterable?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoryId" | "isFilterable" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["attribute"]>
  export type AttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    options?: boolean | Attribute$optionsArgs<ExtArgs>
    VariantAttribute?: boolean | Attribute$VariantAttributeArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type AttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $AttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attribute"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      options: Prisma.$AttributeOptionPayload<ExtArgs>[]
      VariantAttribute: Prisma.$VariantAttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      categoryId: number
      isFilterable: boolean
      displayOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attribute"]>
    composites: {}
  }

  type AttributeGetPayload<S extends boolean | null | undefined | AttributeDefaultArgs> = $Result.GetResult<Prisma.$AttributePayload, S>

  type AttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeCountAggregateInputType | true
    }

  export interface AttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attribute'], meta: { name: 'Attribute' } }
    /**
     * Find zero or one Attribute that matches the filter.
     * @param {AttributeFindUniqueArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeFindUniqueArgs>(args: SelectSubset<T, AttributeFindUniqueArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeFindUniqueOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeFindFirstArgs>(args?: SelectSubset<T, AttributeFindFirstArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attributes
     * const attributes = await prisma.attribute.findMany()
     * 
     * // Get first 10 Attributes
     * const attributes = await prisma.attribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeWithIdOnly = await prisma.attribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeFindManyArgs>(args?: SelectSubset<T, AttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attribute.
     * @param {AttributeCreateArgs} args - Arguments to create a Attribute.
     * @example
     * // Create one Attribute
     * const Attribute = await prisma.attribute.create({
     *   data: {
     *     // ... data to create a Attribute
     *   }
     * })
     * 
     */
    create<T extends AttributeCreateArgs>(args: SelectSubset<T, AttributeCreateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attributes.
     * @param {AttributeCreateManyArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeCreateManyArgs>(args?: SelectSubset<T, AttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attributes and returns the data saved in the database.
     * @param {AttributeCreateManyAndReturnArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attribute.
     * @param {AttributeDeleteArgs} args - Arguments to delete one Attribute.
     * @example
     * // Delete one Attribute
     * const Attribute = await prisma.attribute.delete({
     *   where: {
     *     // ... filter to delete one Attribute
     *   }
     * })
     * 
     */
    delete<T extends AttributeDeleteArgs>(args: SelectSubset<T, AttributeDeleteArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attribute.
     * @param {AttributeUpdateArgs} args - Arguments to update one Attribute.
     * @example
     * // Update one Attribute
     * const attribute = await prisma.attribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeUpdateArgs>(args: SelectSubset<T, AttributeUpdateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attributes.
     * @param {AttributeDeleteManyArgs} args - Arguments to filter Attributes to delete.
     * @example
     * // Delete a few Attributes
     * const { count } = await prisma.attribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeDeleteManyArgs>(args?: SelectSubset<T, AttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeUpdateManyArgs>(args: SelectSubset<T, AttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes and returns the data updated in the database.
     * @param {AttributeUpdateManyAndReturnArgs} args - Arguments to update many Attributes.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attribute.
     * @param {AttributeUpsertArgs} args - Arguments to update or create a Attribute.
     * @example
     * // Update or create a Attribute
     * const attribute = await prisma.attribute.upsert({
     *   create: {
     *     // ... data to create a Attribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attribute we want to update
     *   }
     * })
     */
    upsert<T extends AttributeUpsertArgs>(args: SelectSubset<T, AttributeUpsertArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeCountArgs} args - Arguments to filter Attributes to count.
     * @example
     * // Count the number of Attributes
     * const count = await prisma.attribute.count({
     *   where: {
     *     // ... the filter for the Attributes we want to count
     *   }
     * })
    **/
    count<T extends AttributeCountArgs>(
      args?: Subset<T, AttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttributeAggregateArgs>(args: Subset<T, AttributeAggregateArgs>): Prisma.PrismaPromise<GetAttributeAggregateType<T>>

    /**
     * Group by Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeGroupByArgs['orderBy'] }
        : { orderBy?: AttributeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attribute model
   */
  readonly fields: AttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Attribute$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    VariantAttribute<T extends Attribute$VariantAttributeArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$VariantAttributeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attribute model
   */
  interface AttributeFieldRefs {
    readonly id: FieldRef<"Attribute", 'Int'>
    readonly name: FieldRef<"Attribute", 'String'>
    readonly categoryId: FieldRef<"Attribute", 'Int'>
    readonly isFilterable: FieldRef<"Attribute", 'Boolean'>
    readonly displayOrder: FieldRef<"Attribute", 'Int'>
    readonly createdAt: FieldRef<"Attribute", 'DateTime'>
    readonly updatedAt: FieldRef<"Attribute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attribute findUnique
   */
  export type AttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findUniqueOrThrow
   */
  export type AttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findFirst
   */
  export type AttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findFirstOrThrow
   */
  export type AttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findMany
   */
  export type AttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute create
   */
  export type AttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attribute.
     */
    data: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
  }

  /**
   * Attribute createMany
   */
  export type AttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attribute createManyAndReturn
   */
  export type AttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attribute update
   */
  export type AttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attribute.
     */
    data: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
    /**
     * Choose, which Attribute to update.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute updateMany
   */
  export type AttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
  }

  /**
   * Attribute updateManyAndReturn
   */
  export type AttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attribute upsert
   */
  export type AttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attribute to update in case it exists.
     */
    where: AttributeWhereUniqueInput
    /**
     * In case the Attribute found by the `where` argument doesn't exist, create a new Attribute with this data.
     */
    create: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
    /**
     * In case the Attribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
  }

  /**
   * Attribute delete
   */
  export type AttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter which Attribute to delete.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute deleteMany
   */
  export type AttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attributes to delete
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to delete.
     */
    limit?: number
  }

  /**
   * Attribute.options
   */
  export type Attribute$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    where?: AttributeOptionWhereInput
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    cursor?: AttributeOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * Attribute.VariantAttribute
   */
  export type Attribute$VariantAttributeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    where?: VariantAttributeWhereInput
    orderBy?: VariantAttributeOrderByWithRelationInput | VariantAttributeOrderByWithRelationInput[]
    cursor?: VariantAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantAttributeScalarFieldEnum | VariantAttributeScalarFieldEnum[]
  }

  /**
   * Attribute without action
   */
  export type AttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
  }


  /**
   * Model AttributeOption
   */

  export type AggregateAttributeOption = {
    _count: AttributeOptionCountAggregateOutputType | null
    _avg: AttributeOptionAvgAggregateOutputType | null
    _sum: AttributeOptionSumAggregateOutputType | null
    _min: AttributeOptionMinAggregateOutputType | null
    _max: AttributeOptionMaxAggregateOutputType | null
  }

  export type AttributeOptionAvgAggregateOutputType = {
    id: number | null
    attributeId: number | null
  }

  export type AttributeOptionSumAggregateOutputType = {
    id: number | null
    attributeId: number | null
  }

  export type AttributeOptionMinAggregateOutputType = {
    id: number | null
    value: string | null
    attributeId: number | null
    createdAt: Date | null
  }

  export type AttributeOptionMaxAggregateOutputType = {
    id: number | null
    value: string | null
    attributeId: number | null
    createdAt: Date | null
  }

  export type AttributeOptionCountAggregateOutputType = {
    id: number
    value: number
    attributeId: number
    createdAt: number
    _all: number
  }


  export type AttributeOptionAvgAggregateInputType = {
    id?: true
    attributeId?: true
  }

  export type AttributeOptionSumAggregateInputType = {
    id?: true
    attributeId?: true
  }

  export type AttributeOptionMinAggregateInputType = {
    id?: true
    value?: true
    attributeId?: true
    createdAt?: true
  }

  export type AttributeOptionMaxAggregateInputType = {
    id?: true
    value?: true
    attributeId?: true
    createdAt?: true
  }

  export type AttributeOptionCountAggregateInputType = {
    id?: true
    value?: true
    attributeId?: true
    createdAt?: true
    _all?: true
  }

  export type AttributeOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeOption to aggregate.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributeOptions
    **/
    _count?: true | AttributeOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributeOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributeOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeOptionMaxAggregateInputType
  }

  export type GetAttributeOptionAggregateType<T extends AttributeOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributeOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributeOption[P]>
      : GetScalarType<T[P], AggregateAttributeOption[P]>
  }




  export type AttributeOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeOptionWhereInput
    orderBy?: AttributeOptionOrderByWithAggregationInput | AttributeOptionOrderByWithAggregationInput[]
    by: AttributeOptionScalarFieldEnum[] | AttributeOptionScalarFieldEnum
    having?: AttributeOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeOptionCountAggregateInputType | true
    _avg?: AttributeOptionAvgAggregateInputType
    _sum?: AttributeOptionSumAggregateInputType
    _min?: AttributeOptionMinAggregateInputType
    _max?: AttributeOptionMaxAggregateInputType
  }

  export type AttributeOptionGroupByOutputType = {
    id: number
    value: string
    attributeId: number
    createdAt: Date
    _count: AttributeOptionCountAggregateOutputType | null
    _avg: AttributeOptionAvgAggregateOutputType | null
    _sum: AttributeOptionSumAggregateOutputType | null
    _min: AttributeOptionMinAggregateOutputType | null
    _max: AttributeOptionMaxAggregateOutputType | null
  }

  type GetAttributeOptionGroupByPayload<T extends AttributeOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeOptionGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeOptionGroupByOutputType[P]>
        }
      >
    >


  export type AttributeOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    attributeId?: boolean
    createdAt?: boolean
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    VariantAttribute?: boolean | AttributeOption$VariantAttributeArgs<ExtArgs>
    _count?: boolean | AttributeOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeOption"]>

  export type AttributeOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    attributeId?: boolean
    createdAt?: boolean
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeOption"]>

  export type AttributeOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    attributeId?: boolean
    createdAt?: boolean
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeOption"]>

  export type AttributeOptionSelectScalar = {
    id?: boolean
    value?: boolean
    attributeId?: boolean
    createdAt?: boolean
  }

  export type AttributeOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "attributeId" | "createdAt", ExtArgs["result"]["attributeOption"]>
  export type AttributeOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    VariantAttribute?: boolean | AttributeOption$VariantAttributeArgs<ExtArgs>
    _count?: boolean | AttributeOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }
  export type AttributeOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }

  export type $AttributeOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributeOption"
    objects: {
      attribute: Prisma.$AttributePayload<ExtArgs>
      VariantAttribute: Prisma.$VariantAttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: string
      attributeId: number
      createdAt: Date
    }, ExtArgs["result"]["attributeOption"]>
    composites: {}
  }

  type AttributeOptionGetPayload<S extends boolean | null | undefined | AttributeOptionDefaultArgs> = $Result.GetResult<Prisma.$AttributeOptionPayload, S>

  type AttributeOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeOptionCountAggregateInputType | true
    }

  export interface AttributeOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributeOption'], meta: { name: 'AttributeOption' } }
    /**
     * Find zero or one AttributeOption that matches the filter.
     * @param {AttributeOptionFindUniqueArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeOptionFindUniqueArgs>(args: SelectSubset<T, AttributeOptionFindUniqueArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttributeOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeOptionFindUniqueOrThrowArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionFindFirstArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeOptionFindFirstArgs>(args?: SelectSubset<T, AttributeOptionFindFirstArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionFindFirstOrThrowArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttributeOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributeOptions
     * const attributeOptions = await prisma.attributeOption.findMany()
     * 
     * // Get first 10 AttributeOptions
     * const attributeOptions = await prisma.attributeOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeOptionWithIdOnly = await prisma.attributeOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeOptionFindManyArgs>(args?: SelectSubset<T, AttributeOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttributeOption.
     * @param {AttributeOptionCreateArgs} args - Arguments to create a AttributeOption.
     * @example
     * // Create one AttributeOption
     * const AttributeOption = await prisma.attributeOption.create({
     *   data: {
     *     // ... data to create a AttributeOption
     *   }
     * })
     * 
     */
    create<T extends AttributeOptionCreateArgs>(args: SelectSubset<T, AttributeOptionCreateArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttributeOptions.
     * @param {AttributeOptionCreateManyArgs} args - Arguments to create many AttributeOptions.
     * @example
     * // Create many AttributeOptions
     * const attributeOption = await prisma.attributeOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeOptionCreateManyArgs>(args?: SelectSubset<T, AttributeOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttributeOptions and returns the data saved in the database.
     * @param {AttributeOptionCreateManyAndReturnArgs} args - Arguments to create many AttributeOptions.
     * @example
     * // Create many AttributeOptions
     * const attributeOption = await prisma.attributeOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttributeOptions and only return the `id`
     * const attributeOptionWithIdOnly = await prisma.attributeOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttributeOption.
     * @param {AttributeOptionDeleteArgs} args - Arguments to delete one AttributeOption.
     * @example
     * // Delete one AttributeOption
     * const AttributeOption = await prisma.attributeOption.delete({
     *   where: {
     *     // ... filter to delete one AttributeOption
     *   }
     * })
     * 
     */
    delete<T extends AttributeOptionDeleteArgs>(args: SelectSubset<T, AttributeOptionDeleteArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttributeOption.
     * @param {AttributeOptionUpdateArgs} args - Arguments to update one AttributeOption.
     * @example
     * // Update one AttributeOption
     * const attributeOption = await prisma.attributeOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeOptionUpdateArgs>(args: SelectSubset<T, AttributeOptionUpdateArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttributeOptions.
     * @param {AttributeOptionDeleteManyArgs} args - Arguments to filter AttributeOptions to delete.
     * @example
     * // Delete a few AttributeOptions
     * const { count } = await prisma.attributeOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeOptionDeleteManyArgs>(args?: SelectSubset<T, AttributeOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributeOptions
     * const attributeOption = await prisma.attributeOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeOptionUpdateManyArgs>(args: SelectSubset<T, AttributeOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeOptions and returns the data updated in the database.
     * @param {AttributeOptionUpdateManyAndReturnArgs} args - Arguments to update many AttributeOptions.
     * @example
     * // Update many AttributeOptions
     * const attributeOption = await prisma.attributeOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttributeOptions and only return the `id`
     * const attributeOptionWithIdOnly = await prisma.attributeOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttributeOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttributeOption.
     * @param {AttributeOptionUpsertArgs} args - Arguments to update or create a AttributeOption.
     * @example
     * // Update or create a AttributeOption
     * const attributeOption = await prisma.attributeOption.upsert({
     *   create: {
     *     // ... data to create a AttributeOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributeOption we want to update
     *   }
     * })
     */
    upsert<T extends AttributeOptionUpsertArgs>(args: SelectSubset<T, AttributeOptionUpsertArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttributeOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionCountArgs} args - Arguments to filter AttributeOptions to count.
     * @example
     * // Count the number of AttributeOptions
     * const count = await prisma.attributeOption.count({
     *   where: {
     *     // ... the filter for the AttributeOptions we want to count
     *   }
     * })
    **/
    count<T extends AttributeOptionCountArgs>(
      args?: Subset<T, AttributeOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributeOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttributeOptionAggregateArgs>(args: Subset<T, AttributeOptionAggregateArgs>): Prisma.PrismaPromise<GetAttributeOptionAggregateType<T>>

    /**
     * Group by AttributeOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttributeOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeOptionGroupByArgs['orderBy'] }
        : { orderBy?: AttributeOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttributeOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributeOption model
   */
  readonly fields: AttributeOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributeOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attribute<T extends AttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeDefaultArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    VariantAttribute<T extends AttributeOption$VariantAttributeArgs<ExtArgs> = {}>(args?: Subset<T, AttributeOption$VariantAttributeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttributeOption model
   */
  interface AttributeOptionFieldRefs {
    readonly id: FieldRef<"AttributeOption", 'Int'>
    readonly value: FieldRef<"AttributeOption", 'String'>
    readonly attributeId: FieldRef<"AttributeOption", 'Int'>
    readonly createdAt: FieldRef<"AttributeOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttributeOption findUnique
   */
  export type AttributeOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption findUniqueOrThrow
   */
  export type AttributeOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption findFirst
   */
  export type AttributeOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeOptions.
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeOptions.
     */
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption findFirstOrThrow
   */
  export type AttributeOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeOptions.
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeOptions.
     */
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption findMany
   */
  export type AttributeOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOptions to fetch.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributeOptions.
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption create
   */
  export type AttributeOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributeOption.
     */
    data: XOR<AttributeOptionCreateInput, AttributeOptionUncheckedCreateInput>
  }

  /**
   * AttributeOption createMany
   */
  export type AttributeOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributeOptions.
     */
    data: AttributeOptionCreateManyInput | AttributeOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttributeOption createManyAndReturn
   */
  export type AttributeOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * The data used to create many AttributeOptions.
     */
    data: AttributeOptionCreateManyInput | AttributeOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributeOption update
   */
  export type AttributeOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributeOption.
     */
    data: XOR<AttributeOptionUpdateInput, AttributeOptionUncheckedUpdateInput>
    /**
     * Choose, which AttributeOption to update.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption updateMany
   */
  export type AttributeOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributeOptions.
     */
    data: XOR<AttributeOptionUpdateManyMutationInput, AttributeOptionUncheckedUpdateManyInput>
    /**
     * Filter which AttributeOptions to update
     */
    where?: AttributeOptionWhereInput
    /**
     * Limit how many AttributeOptions to update.
     */
    limit?: number
  }

  /**
   * AttributeOption updateManyAndReturn
   */
  export type AttributeOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * The data used to update AttributeOptions.
     */
    data: XOR<AttributeOptionUpdateManyMutationInput, AttributeOptionUncheckedUpdateManyInput>
    /**
     * Filter which AttributeOptions to update
     */
    where?: AttributeOptionWhereInput
    /**
     * Limit how many AttributeOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributeOption upsert
   */
  export type AttributeOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributeOption to update in case it exists.
     */
    where: AttributeOptionWhereUniqueInput
    /**
     * In case the AttributeOption found by the `where` argument doesn't exist, create a new AttributeOption with this data.
     */
    create: XOR<AttributeOptionCreateInput, AttributeOptionUncheckedCreateInput>
    /**
     * In case the AttributeOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeOptionUpdateInput, AttributeOptionUncheckedUpdateInput>
  }

  /**
   * AttributeOption delete
   */
  export type AttributeOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter which AttributeOption to delete.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption deleteMany
   */
  export type AttributeOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeOptions to delete
     */
    where?: AttributeOptionWhereInput
    /**
     * Limit how many AttributeOptions to delete.
     */
    limit?: number
  }

  /**
   * AttributeOption.VariantAttribute
   */
  export type AttributeOption$VariantAttributeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    where?: VariantAttributeWhereInput
    orderBy?: VariantAttributeOrderByWithRelationInput | VariantAttributeOrderByWithRelationInput[]
    cursor?: VariantAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantAttributeScalarFieldEnum | VariantAttributeScalarFieldEnum[]
  }

  /**
   * AttributeOption without action
   */
  export type AttributeOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    basePrice: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    basePrice: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    brand: string | null
    basePrice: number | null
    status: $Enums.ProductStatus | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    brand: string | null
    basePrice: number | null
    status: $Enums.ProductStatus | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    brand: number
    basePrice: number
    status: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    basePrice?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    basePrice?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    brand?: true
    basePrice?: true
    status?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    brand?: true
    basePrice?: true
    status?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    brand?: true
    basePrice?: true
    status?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    slug: string | null
    description: string | null
    brand: string
    basePrice: number
    status: $Enums.ProductStatus
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    brand?: boolean
    basePrice?: boolean
    status?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    brand?: boolean
    basePrice?: boolean
    status?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    brand?: boolean
    basePrice?: boolean
    status?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    brand?: boolean
    basePrice?: boolean
    status?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "brand" | "basePrice" | "status" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      images: Prisma.$ProductImagePayload<ExtArgs>[]
      variants: Prisma.$VariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string | null
      description: string | null
      brand: string
      basePrice: number
      status: $Enums.ProductStatus
      categoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly basePrice: FieldRef<"Product", 'Float'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    id: number | null
    order: number | null
    productId: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    id: number | null
    order: number | null
    productId: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    altText: string | null
    isThumbnail: boolean | null
    order: number | null
    productId: number | null
    createdAt: Date | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    altText: string | null
    isThumbnail: boolean | null
    order: number | null
    productId: number | null
    createdAt: Date | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    url: number
    altText: number
    isThumbnail: number
    order: number
    productId: number
    createdAt: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    id?: true
    order?: true
    productId?: true
  }

  export type ProductImageSumAggregateInputType = {
    id?: true
    order?: true
    productId?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    isThumbnail?: true
    order?: true
    productId?: true
    createdAt?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    isThumbnail?: true
    order?: true
    productId?: true
    createdAt?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    isThumbnail?: true
    order?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: number
    url: string
    altText: string | null
    isThumbnail: boolean
    order: number
    productId: number
    createdAt: Date
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    isThumbnail?: boolean
    order?: boolean
    productId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    isThumbnail?: boolean
    order?: boolean
    productId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    isThumbnail?: boolean
    order?: boolean
    productId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectScalar = {
    id?: boolean
    url?: boolean
    altText?: boolean
    isThumbnail?: boolean
    order?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "altText" | "isThumbnail" | "order" | "productId" | "createdAt", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      altText: string | null
      isThumbnail: boolean
      order: number
      productId: number
      createdAt: Date
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImageCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages and returns the data updated in the database.
     * @param {ProductImageUpdateManyAndReturnArgs} args - Arguments to update many ProductImages.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'Int'>
    readonly url: FieldRef<"ProductImage", 'String'>
    readonly altText: FieldRef<"ProductImage", 'String'>
    readonly isThumbnail: FieldRef<"ProductImage", 'Boolean'>
    readonly order: FieldRef<"ProductImage", 'Int'>
    readonly productId: FieldRef<"ProductImage", 'Int'>
    readonly createdAt: FieldRef<"ProductImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage createManyAndReturn
   */
  export type ProductImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage updateManyAndReturn
   */
  export type ProductImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model Variant
   */

  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    productId: number | null
  }

  export type VariantSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    productId: number | null
  }

  export type VariantMinAggregateOutputType = {
    id: number | null
    sku: string | null
    price: number | null
    stock: number | null
    status: $Enums.VariantStatus | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantMaxAggregateOutputType = {
    id: number | null
    sku: string | null
    price: number | null
    stock: number | null
    status: $Enums.VariantStatus | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantCountAggregateOutputType = {
    id: number
    sku: number
    price: number
    stock: number
    status: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VariantAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    productId?: true
  }

  export type VariantSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    productId?: true
  }

  export type VariantMinAggregateInputType = {
    id?: true
    sku?: true
    price?: true
    stock?: true
    status?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariantMaxAggregateInputType = {
    id?: true
    sku?: true
    price?: true
    stock?: true
    status?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariantCountAggregateInputType = {
    id?: true
    sku?: true
    price?: true
    stock?: true
    status?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variant to aggregate.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type VariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithAggregationInput | VariantOrderByWithAggregationInput[]
    by: VariantScalarFieldEnum[] | VariantScalarFieldEnum
    having?: VariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _avg?: VariantAvgAggregateInputType
    _sum?: VariantSumAggregateInputType
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }

  export type VariantGroupByOutputType = {
    id: number
    sku: string
    price: number
    stock: number
    status: $Enums.VariantStatus
    productId: number
    createdAt: Date
    updatedAt: Date
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type VariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attributes?: boolean | Variant$attributesArgs<ExtArgs>
    images?: boolean | Variant$imagesArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectScalar = {
    id?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "price" | "stock" | "status" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["variant"]>
  export type VariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attributes?: boolean | Variant$attributesArgs<ExtArgs>
    images?: boolean | Variant$imagesArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type VariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $VariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      attributes: Prisma.$VariantAttributePayload<ExtArgs>[]
      images: Prisma.$VariantImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sku: string
      price: number
      stock: number
      status: $Enums.VariantStatus
      productId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["variant"]>
    composites: {}
  }

  type VariantGetPayload<S extends boolean | null | undefined | VariantDefaultArgs> = $Result.GetResult<Prisma.$VariantPayload, S>

  type VariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantCountAggregateInputType | true
    }

  export interface VariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variant'], meta: { name: 'Variant' } }
    /**
     * Find zero or one Variant that matches the filter.
     * @param {VariantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantFindUniqueArgs>(args: SelectSubset<T, VariantFindUniqueArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantFindFirstArgs>(args?: SelectSubset<T, VariantFindFirstArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantWithIdOnly = await prisma.variant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariantFindManyArgs>(args?: SelectSubset<T, VariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variant.
     * @param {VariantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
     */
    create<T extends VariantCreateArgs>(args: SelectSubset<T, VariantCreateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variants.
     * @param {VariantCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantCreateManyArgs>(args?: SelectSubset<T, VariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variants and returns the data saved in the database.
     * @param {VariantCreateManyAndReturnArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variant.
     * @param {VariantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
     */
    delete<T extends VariantDeleteArgs>(args: SelectSubset<T, VariantDeleteArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variant.
     * @param {VariantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantUpdateArgs>(args: SelectSubset<T, VariantUpdateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variants.
     * @param {VariantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantDeleteManyArgs>(args?: SelectSubset<T, VariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantUpdateManyArgs>(args: SelectSubset<T, VariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants and returns the data updated in the database.
     * @param {VariantUpdateManyAndReturnArgs} args - Arguments to update many Variants.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VariantUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variant.
     * @param {VariantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
     */
    upsert<T extends VariantUpsertArgs>(args: SelectSubset<T, VariantUpsertArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantCountArgs>(
      args?: Subset<T, VariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantGroupByArgs['orderBy'] }
        : { orderBy?: VariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variant model
   */
  readonly fields: VariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attributes<T extends Variant$attributesArgs<ExtArgs> = {}>(args?: Subset<T, Variant$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Variant$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Variant$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Variant model
   */
  interface VariantFieldRefs {
    readonly id: FieldRef<"Variant", 'Int'>
    readonly sku: FieldRef<"Variant", 'String'>
    readonly price: FieldRef<"Variant", 'Float'>
    readonly stock: FieldRef<"Variant", 'Int'>
    readonly status: FieldRef<"Variant", 'VariantStatus'>
    readonly productId: FieldRef<"Variant", 'Int'>
    readonly createdAt: FieldRef<"Variant", 'DateTime'>
    readonly updatedAt: FieldRef<"Variant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Variant findUnique
   */
  export type VariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findUniqueOrThrow
   */
  export type VariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findFirst
   */
  export type VariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findFirstOrThrow
   */
  export type VariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findMany
   */
  export type VariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant create
   */
  export type VariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to create a Variant.
     */
    data: XOR<VariantCreateInput, VariantUncheckedCreateInput>
  }

  /**
   * Variant createMany
   */
  export type VariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variant createManyAndReturn
   */
  export type VariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variant update
   */
  export type VariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to update a Variant.
     */
    data: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
    /**
     * Choose, which Variant to update.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant updateMany
   */
  export type VariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to update.
     */
    limit?: number
  }

  /**
   * Variant updateManyAndReturn
   */
  export type VariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variant upsert
   */
  export type VariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The filter to search for the Variant to update in case it exists.
     */
    where: VariantWhereUniqueInput
    /**
     * In case the Variant found by the `where` argument doesn't exist, create a new Variant with this data.
     */
    create: XOR<VariantCreateInput, VariantUncheckedCreateInput>
    /**
     * In case the Variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
  }

  /**
   * Variant delete
   */
  export type VariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter which Variant to delete.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant deleteMany
   */
  export type VariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to delete.
     */
    limit?: number
  }

  /**
   * Variant.attributes
   */
  export type Variant$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    where?: VariantAttributeWhereInput
    orderBy?: VariantAttributeOrderByWithRelationInput | VariantAttributeOrderByWithRelationInput[]
    cursor?: VariantAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantAttributeScalarFieldEnum | VariantAttributeScalarFieldEnum[]
  }

  /**
   * Variant.images
   */
  export type Variant$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    where?: VariantImageWhereInput
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    cursor?: VariantImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantImageScalarFieldEnum | VariantImageScalarFieldEnum[]
  }

  /**
   * Variant without action
   */
  export type VariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
  }


  /**
   * Model VariantAttribute
   */

  export type AggregateVariantAttribute = {
    _count: VariantAttributeCountAggregateOutputType | null
    _avg: VariantAttributeAvgAggregateOutputType | null
    _sum: VariantAttributeSumAggregateOutputType | null
    _min: VariantAttributeMinAggregateOutputType | null
    _max: VariantAttributeMaxAggregateOutputType | null
  }

  export type VariantAttributeAvgAggregateOutputType = {
    variantId: number | null
    attributeId: number | null
    optionId: number | null
  }

  export type VariantAttributeSumAggregateOutputType = {
    variantId: number | null
    attributeId: number | null
    optionId: number | null
  }

  export type VariantAttributeMinAggregateOutputType = {
    variantId: number | null
    attributeId: number | null
    optionId: number | null
    createdAt: Date | null
  }

  export type VariantAttributeMaxAggregateOutputType = {
    variantId: number | null
    attributeId: number | null
    optionId: number | null
    createdAt: Date | null
  }

  export type VariantAttributeCountAggregateOutputType = {
    variantId: number
    attributeId: number
    optionId: number
    createdAt: number
    _all: number
  }


  export type VariantAttributeAvgAggregateInputType = {
    variantId?: true
    attributeId?: true
    optionId?: true
  }

  export type VariantAttributeSumAggregateInputType = {
    variantId?: true
    attributeId?: true
    optionId?: true
  }

  export type VariantAttributeMinAggregateInputType = {
    variantId?: true
    attributeId?: true
    optionId?: true
    createdAt?: true
  }

  export type VariantAttributeMaxAggregateInputType = {
    variantId?: true
    attributeId?: true
    optionId?: true
    createdAt?: true
  }

  export type VariantAttributeCountAggregateInputType = {
    variantId?: true
    attributeId?: true
    optionId?: true
    createdAt?: true
    _all?: true
  }

  export type VariantAttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantAttribute to aggregate.
     */
    where?: VariantAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantAttributes to fetch.
     */
    orderBy?: VariantAttributeOrderByWithRelationInput | VariantAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariantAttributes
    **/
    _count?: true | VariantAttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantAttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantAttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantAttributeMaxAggregateInputType
  }

  export type GetVariantAttributeAggregateType<T extends VariantAttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateVariantAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariantAttribute[P]>
      : GetScalarType<T[P], AggregateVariantAttribute[P]>
  }




  export type VariantAttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantAttributeWhereInput
    orderBy?: VariantAttributeOrderByWithAggregationInput | VariantAttributeOrderByWithAggregationInput[]
    by: VariantAttributeScalarFieldEnum[] | VariantAttributeScalarFieldEnum
    having?: VariantAttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantAttributeCountAggregateInputType | true
    _avg?: VariantAttributeAvgAggregateInputType
    _sum?: VariantAttributeSumAggregateInputType
    _min?: VariantAttributeMinAggregateInputType
    _max?: VariantAttributeMaxAggregateInputType
  }

  export type VariantAttributeGroupByOutputType = {
    variantId: number
    attributeId: number
    optionId: number
    createdAt: Date
    _count: VariantAttributeCountAggregateOutputType | null
    _avg: VariantAttributeAvgAggregateOutputType | null
    _sum: VariantAttributeSumAggregateOutputType | null
    _min: VariantAttributeMinAggregateOutputType | null
    _max: VariantAttributeMaxAggregateOutputType | null
  }

  type GetVariantAttributeGroupByPayload<T extends VariantAttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantAttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantAttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantAttributeGroupByOutputType[P]>
            : GetScalarType<T[P], VariantAttributeGroupByOutputType[P]>
        }
      >
    >


  export type VariantAttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    attributeId?: boolean
    optionId?: boolean
    createdAt?: boolean
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantAttribute"]>

  export type VariantAttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    attributeId?: boolean
    optionId?: boolean
    createdAt?: boolean
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantAttribute"]>

  export type VariantAttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    attributeId?: boolean
    optionId?: boolean
    createdAt?: boolean
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantAttribute"]>

  export type VariantAttributeSelectScalar = {
    variantId?: boolean
    attributeId?: boolean
    optionId?: boolean
    createdAt?: boolean
  }

  export type VariantAttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"variantId" | "attributeId" | "optionId" | "createdAt", ExtArgs["result"]["variantAttribute"]>
  export type VariantAttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }
  export type VariantAttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }
  export type VariantAttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }

  export type $VariantAttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariantAttribute"
    objects: {
      variant: Prisma.$VariantPayload<ExtArgs>
      attribute: Prisma.$AttributePayload<ExtArgs>
      option: Prisma.$AttributeOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      variantId: number
      attributeId: number
      optionId: number
      createdAt: Date
    }, ExtArgs["result"]["variantAttribute"]>
    composites: {}
  }

  type VariantAttributeGetPayload<S extends boolean | null | undefined | VariantAttributeDefaultArgs> = $Result.GetResult<Prisma.$VariantAttributePayload, S>

  type VariantAttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantAttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantAttributeCountAggregateInputType | true
    }

  export interface VariantAttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariantAttribute'], meta: { name: 'VariantAttribute' } }
    /**
     * Find zero or one VariantAttribute that matches the filter.
     * @param {VariantAttributeFindUniqueArgs} args - Arguments to find a VariantAttribute
     * @example
     * // Get one VariantAttribute
     * const variantAttribute = await prisma.variantAttribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantAttributeFindUniqueArgs>(args: SelectSubset<T, VariantAttributeFindUniqueArgs<ExtArgs>>): Prisma__VariantAttributeClient<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VariantAttribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantAttributeFindUniqueOrThrowArgs} args - Arguments to find a VariantAttribute
     * @example
     * // Get one VariantAttribute
     * const variantAttribute = await prisma.variantAttribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantAttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantAttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantAttributeClient<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantAttribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeFindFirstArgs} args - Arguments to find a VariantAttribute
     * @example
     * // Get one VariantAttribute
     * const variantAttribute = await prisma.variantAttribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantAttributeFindFirstArgs>(args?: SelectSubset<T, VariantAttributeFindFirstArgs<ExtArgs>>): Prisma__VariantAttributeClient<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantAttribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeFindFirstOrThrowArgs} args - Arguments to find a VariantAttribute
     * @example
     * // Get one VariantAttribute
     * const variantAttribute = await prisma.variantAttribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantAttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantAttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantAttributeClient<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VariantAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariantAttributes
     * const variantAttributes = await prisma.variantAttribute.findMany()
     * 
     * // Get first 10 VariantAttributes
     * const variantAttributes = await prisma.variantAttribute.findMany({ take: 10 })
     * 
     * // Only select the `variantId`
     * const variantAttributeWithVariantIdOnly = await prisma.variantAttribute.findMany({ select: { variantId: true } })
     * 
     */
    findMany<T extends VariantAttributeFindManyArgs>(args?: SelectSubset<T, VariantAttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VariantAttribute.
     * @param {VariantAttributeCreateArgs} args - Arguments to create a VariantAttribute.
     * @example
     * // Create one VariantAttribute
     * const VariantAttribute = await prisma.variantAttribute.create({
     *   data: {
     *     // ... data to create a VariantAttribute
     *   }
     * })
     * 
     */
    create<T extends VariantAttributeCreateArgs>(args: SelectSubset<T, VariantAttributeCreateArgs<ExtArgs>>): Prisma__VariantAttributeClient<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VariantAttributes.
     * @param {VariantAttributeCreateManyArgs} args - Arguments to create many VariantAttributes.
     * @example
     * // Create many VariantAttributes
     * const variantAttribute = await prisma.variantAttribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantAttributeCreateManyArgs>(args?: SelectSubset<T, VariantAttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VariantAttributes and returns the data saved in the database.
     * @param {VariantAttributeCreateManyAndReturnArgs} args - Arguments to create many VariantAttributes.
     * @example
     * // Create many VariantAttributes
     * const variantAttribute = await prisma.variantAttribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VariantAttributes and only return the `variantId`
     * const variantAttributeWithVariantIdOnly = await prisma.variantAttribute.createManyAndReturn({
     *   select: { variantId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantAttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantAttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VariantAttribute.
     * @param {VariantAttributeDeleteArgs} args - Arguments to delete one VariantAttribute.
     * @example
     * // Delete one VariantAttribute
     * const VariantAttribute = await prisma.variantAttribute.delete({
     *   where: {
     *     // ... filter to delete one VariantAttribute
     *   }
     * })
     * 
     */
    delete<T extends VariantAttributeDeleteArgs>(args: SelectSubset<T, VariantAttributeDeleteArgs<ExtArgs>>): Prisma__VariantAttributeClient<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VariantAttribute.
     * @param {VariantAttributeUpdateArgs} args - Arguments to update one VariantAttribute.
     * @example
     * // Update one VariantAttribute
     * const variantAttribute = await prisma.variantAttribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantAttributeUpdateArgs>(args: SelectSubset<T, VariantAttributeUpdateArgs<ExtArgs>>): Prisma__VariantAttributeClient<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VariantAttributes.
     * @param {VariantAttributeDeleteManyArgs} args - Arguments to filter VariantAttributes to delete.
     * @example
     * // Delete a few VariantAttributes
     * const { count } = await prisma.variantAttribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantAttributeDeleteManyArgs>(args?: SelectSubset<T, VariantAttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariantAttributes
     * const variantAttribute = await prisma.variantAttribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantAttributeUpdateManyArgs>(args: SelectSubset<T, VariantAttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantAttributes and returns the data updated in the database.
     * @param {VariantAttributeUpdateManyAndReturnArgs} args - Arguments to update many VariantAttributes.
     * @example
     * // Update many VariantAttributes
     * const variantAttribute = await prisma.variantAttribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VariantAttributes and only return the `variantId`
     * const variantAttributeWithVariantIdOnly = await prisma.variantAttribute.updateManyAndReturn({
     *   select: { variantId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VariantAttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantAttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VariantAttribute.
     * @param {VariantAttributeUpsertArgs} args - Arguments to update or create a VariantAttribute.
     * @example
     * // Update or create a VariantAttribute
     * const variantAttribute = await prisma.variantAttribute.upsert({
     *   create: {
     *     // ... data to create a VariantAttribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariantAttribute we want to update
     *   }
     * })
     */
    upsert<T extends VariantAttributeUpsertArgs>(args: SelectSubset<T, VariantAttributeUpsertArgs<ExtArgs>>): Prisma__VariantAttributeClient<$Result.GetResult<Prisma.$VariantAttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VariantAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeCountArgs} args - Arguments to filter VariantAttributes to count.
     * @example
     * // Count the number of VariantAttributes
     * const count = await prisma.variantAttribute.count({
     *   where: {
     *     // ... the filter for the VariantAttributes we want to count
     *   }
     * })
    **/
    count<T extends VariantAttributeCountArgs>(
      args?: Subset<T, VariantAttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantAttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariantAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantAttributeAggregateArgs>(args: Subset<T, VariantAttributeAggregateArgs>): Prisma.PrismaPromise<GetVariantAttributeAggregateType<T>>

    /**
     * Group by VariantAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantAttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantAttributeGroupByArgs['orderBy'] }
        : { orderBy?: VariantAttributeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantAttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariantAttribute model
   */
  readonly fields: VariantAttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariantAttribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantAttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends VariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariantDefaultArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attribute<T extends AttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeDefaultArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends AttributeOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeOptionDefaultArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VariantAttribute model
   */
  interface VariantAttributeFieldRefs {
    readonly variantId: FieldRef<"VariantAttribute", 'Int'>
    readonly attributeId: FieldRef<"VariantAttribute", 'Int'>
    readonly optionId: FieldRef<"VariantAttribute", 'Int'>
    readonly createdAt: FieldRef<"VariantAttribute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VariantAttribute findUnique
   */
  export type VariantAttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttribute to fetch.
     */
    where: VariantAttributeWhereUniqueInput
  }

  /**
   * VariantAttribute findUniqueOrThrow
   */
  export type VariantAttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttribute to fetch.
     */
    where: VariantAttributeWhereUniqueInput
  }

  /**
   * VariantAttribute findFirst
   */
  export type VariantAttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttribute to fetch.
     */
    where?: VariantAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantAttributes to fetch.
     */
    orderBy?: VariantAttributeOrderByWithRelationInput | VariantAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantAttributes.
     */
    cursor?: VariantAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantAttributes.
     */
    distinct?: VariantAttributeScalarFieldEnum | VariantAttributeScalarFieldEnum[]
  }

  /**
   * VariantAttribute findFirstOrThrow
   */
  export type VariantAttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttribute to fetch.
     */
    where?: VariantAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantAttributes to fetch.
     */
    orderBy?: VariantAttributeOrderByWithRelationInput | VariantAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantAttributes.
     */
    cursor?: VariantAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantAttributes.
     */
    distinct?: VariantAttributeScalarFieldEnum | VariantAttributeScalarFieldEnum[]
  }

  /**
   * VariantAttribute findMany
   */
  export type VariantAttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttributes to fetch.
     */
    where?: VariantAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantAttributes to fetch.
     */
    orderBy?: VariantAttributeOrderByWithRelationInput | VariantAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariantAttributes.
     */
    cursor?: VariantAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantAttributes.
     */
    skip?: number
    distinct?: VariantAttributeScalarFieldEnum | VariantAttributeScalarFieldEnum[]
  }

  /**
   * VariantAttribute create
   */
  export type VariantAttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a VariantAttribute.
     */
    data: XOR<VariantAttributeCreateInput, VariantAttributeUncheckedCreateInput>
  }

  /**
   * VariantAttribute createMany
   */
  export type VariantAttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariantAttributes.
     */
    data: VariantAttributeCreateManyInput | VariantAttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VariantAttribute createManyAndReturn
   */
  export type VariantAttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * The data used to create many VariantAttributes.
     */
    data: VariantAttributeCreateManyInput | VariantAttributeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantAttribute update
   */
  export type VariantAttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a VariantAttribute.
     */
    data: XOR<VariantAttributeUpdateInput, VariantAttributeUncheckedUpdateInput>
    /**
     * Choose, which VariantAttribute to update.
     */
    where: VariantAttributeWhereUniqueInput
  }

  /**
   * VariantAttribute updateMany
   */
  export type VariantAttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariantAttributes.
     */
    data: XOR<VariantAttributeUpdateManyMutationInput, VariantAttributeUncheckedUpdateManyInput>
    /**
     * Filter which VariantAttributes to update
     */
    where?: VariantAttributeWhereInput
    /**
     * Limit how many VariantAttributes to update.
     */
    limit?: number
  }

  /**
   * VariantAttribute updateManyAndReturn
   */
  export type VariantAttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * The data used to update VariantAttributes.
     */
    data: XOR<VariantAttributeUpdateManyMutationInput, VariantAttributeUncheckedUpdateManyInput>
    /**
     * Filter which VariantAttributes to update
     */
    where?: VariantAttributeWhereInput
    /**
     * Limit how many VariantAttributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantAttribute upsert
   */
  export type VariantAttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the VariantAttribute to update in case it exists.
     */
    where: VariantAttributeWhereUniqueInput
    /**
     * In case the VariantAttribute found by the `where` argument doesn't exist, create a new VariantAttribute with this data.
     */
    create: XOR<VariantAttributeCreateInput, VariantAttributeUncheckedCreateInput>
    /**
     * In case the VariantAttribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantAttributeUpdateInput, VariantAttributeUncheckedUpdateInput>
  }

  /**
   * VariantAttribute delete
   */
  export type VariantAttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
    /**
     * Filter which VariantAttribute to delete.
     */
    where: VariantAttributeWhereUniqueInput
  }

  /**
   * VariantAttribute deleteMany
   */
  export type VariantAttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantAttributes to delete
     */
    where?: VariantAttributeWhereInput
    /**
     * Limit how many VariantAttributes to delete.
     */
    limit?: number
  }

  /**
   * VariantAttribute without action
   */
  export type VariantAttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttribute
     */
    select?: VariantAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttribute
     */
    omit?: VariantAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeInclude<ExtArgs> | null
  }


  /**
   * Model VariantImage
   */

  export type AggregateVariantImage = {
    _count: VariantImageCountAggregateOutputType | null
    _avg: VariantImageAvgAggregateOutputType | null
    _sum: VariantImageSumAggregateOutputType | null
    _min: VariantImageMinAggregateOutputType | null
    _max: VariantImageMaxAggregateOutputType | null
  }

  export type VariantImageAvgAggregateOutputType = {
    id: number | null
    order: number | null
    variantId: number | null
  }

  export type VariantImageSumAggregateOutputType = {
    id: number | null
    order: number | null
    variantId: number | null
  }

  export type VariantImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    order: number | null
    variantId: number | null
    createdAt: Date | null
  }

  export type VariantImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    order: number | null
    variantId: number | null
    createdAt: Date | null
  }

  export type VariantImageCountAggregateOutputType = {
    id: number
    url: number
    order: number
    variantId: number
    createdAt: number
    _all: number
  }


  export type VariantImageAvgAggregateInputType = {
    id?: true
    order?: true
    variantId?: true
  }

  export type VariantImageSumAggregateInputType = {
    id?: true
    order?: true
    variantId?: true
  }

  export type VariantImageMinAggregateInputType = {
    id?: true
    url?: true
    order?: true
    variantId?: true
    createdAt?: true
  }

  export type VariantImageMaxAggregateInputType = {
    id?: true
    url?: true
    order?: true
    variantId?: true
    createdAt?: true
  }

  export type VariantImageCountAggregateInputType = {
    id?: true
    url?: true
    order?: true
    variantId?: true
    createdAt?: true
    _all?: true
  }

  export type VariantImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantImage to aggregate.
     */
    where?: VariantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantImages to fetch.
     */
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariantImages
    **/
    _count?: true | VariantImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantImageMaxAggregateInputType
  }

  export type GetVariantImageAggregateType<T extends VariantImageAggregateArgs> = {
        [P in keyof T & keyof AggregateVariantImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariantImage[P]>
      : GetScalarType<T[P], AggregateVariantImage[P]>
  }




  export type VariantImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantImageWhereInput
    orderBy?: VariantImageOrderByWithAggregationInput | VariantImageOrderByWithAggregationInput[]
    by: VariantImageScalarFieldEnum[] | VariantImageScalarFieldEnum
    having?: VariantImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantImageCountAggregateInputType | true
    _avg?: VariantImageAvgAggregateInputType
    _sum?: VariantImageSumAggregateInputType
    _min?: VariantImageMinAggregateInputType
    _max?: VariantImageMaxAggregateInputType
  }

  export type VariantImageGroupByOutputType = {
    id: number
    url: string
    order: number
    variantId: number
    createdAt: Date
    _count: VariantImageCountAggregateOutputType | null
    _avg: VariantImageAvgAggregateOutputType | null
    _sum: VariantImageSumAggregateOutputType | null
    _min: VariantImageMinAggregateOutputType | null
    _max: VariantImageMaxAggregateOutputType | null
  }

  type GetVariantImageGroupByPayload<T extends VariantImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantImageGroupByOutputType[P]>
            : GetScalarType<T[P], VariantImageGroupByOutputType[P]>
        }
      >
    >


  export type VariantImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    order?: boolean
    variantId?: boolean
    createdAt?: boolean
    variant?: boolean | VariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantImage"]>

  export type VariantImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    order?: boolean
    variantId?: boolean
    createdAt?: boolean
    variant?: boolean | VariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantImage"]>

  export type VariantImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    order?: boolean
    variantId?: boolean
    createdAt?: boolean
    variant?: boolean | VariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantImage"]>

  export type VariantImageSelectScalar = {
    id?: boolean
    url?: boolean
    order?: boolean
    variantId?: boolean
    createdAt?: boolean
  }

  export type VariantImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "order" | "variantId" | "createdAt", ExtArgs["result"]["variantImage"]>
  export type VariantImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | VariantDefaultArgs<ExtArgs>
  }
  export type VariantImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | VariantDefaultArgs<ExtArgs>
  }
  export type VariantImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | VariantDefaultArgs<ExtArgs>
  }

  export type $VariantImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariantImage"
    objects: {
      variant: Prisma.$VariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      order: number
      variantId: number
      createdAt: Date
    }, ExtArgs["result"]["variantImage"]>
    composites: {}
  }

  type VariantImageGetPayload<S extends boolean | null | undefined | VariantImageDefaultArgs> = $Result.GetResult<Prisma.$VariantImagePayload, S>

  type VariantImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantImageCountAggregateInputType | true
    }

  export interface VariantImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariantImage'], meta: { name: 'VariantImage' } }
    /**
     * Find zero or one VariantImage that matches the filter.
     * @param {VariantImageFindUniqueArgs} args - Arguments to find a VariantImage
     * @example
     * // Get one VariantImage
     * const variantImage = await prisma.variantImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantImageFindUniqueArgs>(args: SelectSubset<T, VariantImageFindUniqueArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VariantImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantImageFindUniqueOrThrowArgs} args - Arguments to find a VariantImage
     * @example
     * // Get one VariantImage
     * const variantImage = await prisma.variantImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantImageFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageFindFirstArgs} args - Arguments to find a VariantImage
     * @example
     * // Get one VariantImage
     * const variantImage = await prisma.variantImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantImageFindFirstArgs>(args?: SelectSubset<T, VariantImageFindFirstArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageFindFirstOrThrowArgs} args - Arguments to find a VariantImage
     * @example
     * // Get one VariantImage
     * const variantImage = await prisma.variantImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantImageFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VariantImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariantImages
     * const variantImages = await prisma.variantImage.findMany()
     * 
     * // Get first 10 VariantImages
     * const variantImages = await prisma.variantImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantImageWithIdOnly = await prisma.variantImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariantImageFindManyArgs>(args?: SelectSubset<T, VariantImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VariantImage.
     * @param {VariantImageCreateArgs} args - Arguments to create a VariantImage.
     * @example
     * // Create one VariantImage
     * const VariantImage = await prisma.variantImage.create({
     *   data: {
     *     // ... data to create a VariantImage
     *   }
     * })
     * 
     */
    create<T extends VariantImageCreateArgs>(args: SelectSubset<T, VariantImageCreateArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VariantImages.
     * @param {VariantImageCreateManyArgs} args - Arguments to create many VariantImages.
     * @example
     * // Create many VariantImages
     * const variantImage = await prisma.variantImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantImageCreateManyArgs>(args?: SelectSubset<T, VariantImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VariantImages and returns the data saved in the database.
     * @param {VariantImageCreateManyAndReturnArgs} args - Arguments to create many VariantImages.
     * @example
     * // Create many VariantImages
     * const variantImage = await prisma.variantImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VariantImages and only return the `id`
     * const variantImageWithIdOnly = await prisma.variantImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantImageCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VariantImage.
     * @param {VariantImageDeleteArgs} args - Arguments to delete one VariantImage.
     * @example
     * // Delete one VariantImage
     * const VariantImage = await prisma.variantImage.delete({
     *   where: {
     *     // ... filter to delete one VariantImage
     *   }
     * })
     * 
     */
    delete<T extends VariantImageDeleteArgs>(args: SelectSubset<T, VariantImageDeleteArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VariantImage.
     * @param {VariantImageUpdateArgs} args - Arguments to update one VariantImage.
     * @example
     * // Update one VariantImage
     * const variantImage = await prisma.variantImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantImageUpdateArgs>(args: SelectSubset<T, VariantImageUpdateArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VariantImages.
     * @param {VariantImageDeleteManyArgs} args - Arguments to filter VariantImages to delete.
     * @example
     * // Delete a few VariantImages
     * const { count } = await prisma.variantImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantImageDeleteManyArgs>(args?: SelectSubset<T, VariantImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariantImages
     * const variantImage = await prisma.variantImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantImageUpdateManyArgs>(args: SelectSubset<T, VariantImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantImages and returns the data updated in the database.
     * @param {VariantImageUpdateManyAndReturnArgs} args - Arguments to update many VariantImages.
     * @example
     * // Update many VariantImages
     * const variantImage = await prisma.variantImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VariantImages and only return the `id`
     * const variantImageWithIdOnly = await prisma.variantImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VariantImageUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VariantImage.
     * @param {VariantImageUpsertArgs} args - Arguments to update or create a VariantImage.
     * @example
     * // Update or create a VariantImage
     * const variantImage = await prisma.variantImage.upsert({
     *   create: {
     *     // ... data to create a VariantImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariantImage we want to update
     *   }
     * })
     */
    upsert<T extends VariantImageUpsertArgs>(args: SelectSubset<T, VariantImageUpsertArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VariantImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageCountArgs} args - Arguments to filter VariantImages to count.
     * @example
     * // Count the number of VariantImages
     * const count = await prisma.variantImage.count({
     *   where: {
     *     // ... the filter for the VariantImages we want to count
     *   }
     * })
    **/
    count<T extends VariantImageCountArgs>(
      args?: Subset<T, VariantImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariantImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantImageAggregateArgs>(args: Subset<T, VariantImageAggregateArgs>): Prisma.PrismaPromise<GetVariantImageAggregateType<T>>

    /**
     * Group by VariantImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantImageGroupByArgs['orderBy'] }
        : { orderBy?: VariantImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariantImage model
   */
  readonly fields: VariantImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariantImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends VariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariantDefaultArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VariantImage model
   */
  interface VariantImageFieldRefs {
    readonly id: FieldRef<"VariantImage", 'Int'>
    readonly url: FieldRef<"VariantImage", 'String'>
    readonly order: FieldRef<"VariantImage", 'Int'>
    readonly variantId: FieldRef<"VariantImage", 'Int'>
    readonly createdAt: FieldRef<"VariantImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VariantImage findUnique
   */
  export type VariantImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImage to fetch.
     */
    where: VariantImageWhereUniqueInput
  }

  /**
   * VariantImage findUniqueOrThrow
   */
  export type VariantImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImage to fetch.
     */
    where: VariantImageWhereUniqueInput
  }

  /**
   * VariantImage findFirst
   */
  export type VariantImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImage to fetch.
     */
    where?: VariantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantImages to fetch.
     */
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantImages.
     */
    cursor?: VariantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantImages.
     */
    distinct?: VariantImageScalarFieldEnum | VariantImageScalarFieldEnum[]
  }

  /**
   * VariantImage findFirstOrThrow
   */
  export type VariantImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImage to fetch.
     */
    where?: VariantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantImages to fetch.
     */
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantImages.
     */
    cursor?: VariantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantImages.
     */
    distinct?: VariantImageScalarFieldEnum | VariantImageScalarFieldEnum[]
  }

  /**
   * VariantImage findMany
   */
  export type VariantImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImages to fetch.
     */
    where?: VariantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantImages to fetch.
     */
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariantImages.
     */
    cursor?: VariantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantImages.
     */
    skip?: number
    distinct?: VariantImageScalarFieldEnum | VariantImageScalarFieldEnum[]
  }

  /**
   * VariantImage create
   */
  export type VariantImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * The data needed to create a VariantImage.
     */
    data: XOR<VariantImageCreateInput, VariantImageUncheckedCreateInput>
  }

  /**
   * VariantImage createMany
   */
  export type VariantImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariantImages.
     */
    data: VariantImageCreateManyInput | VariantImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VariantImage createManyAndReturn
   */
  export type VariantImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * The data used to create many VariantImages.
     */
    data: VariantImageCreateManyInput | VariantImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantImage update
   */
  export type VariantImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * The data needed to update a VariantImage.
     */
    data: XOR<VariantImageUpdateInput, VariantImageUncheckedUpdateInput>
    /**
     * Choose, which VariantImage to update.
     */
    where: VariantImageWhereUniqueInput
  }

  /**
   * VariantImage updateMany
   */
  export type VariantImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariantImages.
     */
    data: XOR<VariantImageUpdateManyMutationInput, VariantImageUncheckedUpdateManyInput>
    /**
     * Filter which VariantImages to update
     */
    where?: VariantImageWhereInput
    /**
     * Limit how many VariantImages to update.
     */
    limit?: number
  }

  /**
   * VariantImage updateManyAndReturn
   */
  export type VariantImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * The data used to update VariantImages.
     */
    data: XOR<VariantImageUpdateManyMutationInput, VariantImageUncheckedUpdateManyInput>
    /**
     * Filter which VariantImages to update
     */
    where?: VariantImageWhereInput
    /**
     * Limit how many VariantImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantImage upsert
   */
  export type VariantImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * The filter to search for the VariantImage to update in case it exists.
     */
    where: VariantImageWhereUniqueInput
    /**
     * In case the VariantImage found by the `where` argument doesn't exist, create a new VariantImage with this data.
     */
    create: XOR<VariantImageCreateInput, VariantImageUncheckedCreateInput>
    /**
     * In case the VariantImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantImageUpdateInput, VariantImageUncheckedUpdateInput>
  }

  /**
   * VariantImage delete
   */
  export type VariantImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter which VariantImage to delete.
     */
    where: VariantImageWhereUniqueInput
  }

  /**
   * VariantImage deleteMany
   */
  export type VariantImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantImages to delete
     */
    where?: VariantImageWhereInput
    /**
     * Limit how many VariantImages to delete.
     */
    limit?: number
  }

  /**
   * VariantImage without action
   */
  export type VariantImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const AttributeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId',
    isFilterable: 'isFilterable',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttributeScalarFieldEnum = (typeof AttributeScalarFieldEnum)[keyof typeof AttributeScalarFieldEnum]


  export const AttributeOptionScalarFieldEnum: {
    id: 'id',
    value: 'value',
    attributeId: 'attributeId',
    createdAt: 'createdAt'
  };

  export type AttributeOptionScalarFieldEnum = (typeof AttributeOptionScalarFieldEnum)[keyof typeof AttributeOptionScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    brand: 'brand',
    basePrice: 'basePrice',
    status: 'status',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    altText: 'altText',
    isThumbnail: 'isThumbnail',
    order: 'order',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    price: 'price',
    stock: 'stock',
    status: 'status',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  export const VariantAttributeScalarFieldEnum: {
    variantId: 'variantId',
    attributeId: 'attributeId',
    optionId: 'optionId',
    createdAt: 'createdAt'
  };

  export type VariantAttributeScalarFieldEnum = (typeof VariantAttributeScalarFieldEnum)[keyof typeof VariantAttributeScalarFieldEnum]


  export const VariantImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    order: 'order',
    variantId: 'variantId',
    createdAt: 'createdAt'
  };

  export type VariantImageScalarFieldEnum = (typeof VariantImageScalarFieldEnum)[keyof typeof VariantImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'VariantStatus'
   */
  export type EnumVariantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VariantStatus'>
    


  /**
   * Reference to a field of type 'VariantStatus[]'
   */
  export type ListEnumVariantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VariantStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    parentId?: IntNullableFilter<"Category"> | number | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    products?: ProductListRelationFilter
    attributes?: AttributeListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: CategoryOrderByWithRelationInput
    children?: CategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    attributes?: AttributeOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    parentId?: IntNullableFilter<"Category"> | number | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    products?: ProductListRelationFilter
    attributes?: AttributeListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    parentId?: IntNullableWithAggregatesFilter<"Category"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type AttributeWhereInput = {
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    id?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    categoryId?: IntFilter<"Attribute"> | number
    isFilterable?: BoolFilter<"Attribute"> | boolean
    displayOrder?: IntFilter<"Attribute"> | number
    createdAt?: DateTimeFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeFilter<"Attribute"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    options?: AttributeOptionListRelationFilter
    VariantAttribute?: VariantAttributeListRelationFilter
  }

  export type AttributeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    isFilterable?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    options?: AttributeOptionOrderByRelationAggregateInput
    VariantAttribute?: VariantAttributeOrderByRelationAggregateInput
  }

  export type AttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    name?: StringFilter<"Attribute"> | string
    categoryId?: IntFilter<"Attribute"> | number
    isFilterable?: BoolFilter<"Attribute"> | boolean
    displayOrder?: IntFilter<"Attribute"> | number
    createdAt?: DateTimeFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeFilter<"Attribute"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    options?: AttributeOptionListRelationFilter
    VariantAttribute?: VariantAttributeListRelationFilter
  }, "id">

  export type AttributeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    isFilterable?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttributeCountOrderByAggregateInput
    _avg?: AttributeAvgOrderByAggregateInput
    _max?: AttributeMaxOrderByAggregateInput
    _min?: AttributeMinOrderByAggregateInput
    _sum?: AttributeSumOrderByAggregateInput
  }

  export type AttributeScalarWhereWithAggregatesInput = {
    AND?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    OR?: AttributeScalarWhereWithAggregatesInput[]
    NOT?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attribute"> | number
    name?: StringWithAggregatesFilter<"Attribute"> | string
    categoryId?: IntWithAggregatesFilter<"Attribute"> | number
    isFilterable?: BoolWithAggregatesFilter<"Attribute"> | boolean
    displayOrder?: IntWithAggregatesFilter<"Attribute"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attribute"> | Date | string
  }

  export type AttributeOptionWhereInput = {
    AND?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    OR?: AttributeOptionWhereInput[]
    NOT?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    id?: IntFilter<"AttributeOption"> | number
    value?: StringFilter<"AttributeOption"> | string
    attributeId?: IntFilter<"AttributeOption"> | number
    createdAt?: DateTimeFilter<"AttributeOption"> | Date | string
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    VariantAttribute?: VariantAttributeListRelationFilter
  }

  export type AttributeOptionOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
    createdAt?: SortOrder
    attribute?: AttributeOrderByWithRelationInput
    VariantAttribute?: VariantAttributeOrderByRelationAggregateInput
  }

  export type AttributeOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    OR?: AttributeOptionWhereInput[]
    NOT?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    value?: StringFilter<"AttributeOption"> | string
    attributeId?: IntFilter<"AttributeOption"> | number
    createdAt?: DateTimeFilter<"AttributeOption"> | Date | string
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    VariantAttribute?: VariantAttributeListRelationFilter
  }, "id">

  export type AttributeOptionOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
    createdAt?: SortOrder
    _count?: AttributeOptionCountOrderByAggregateInput
    _avg?: AttributeOptionAvgOrderByAggregateInput
    _max?: AttributeOptionMaxOrderByAggregateInput
    _min?: AttributeOptionMinOrderByAggregateInput
    _sum?: AttributeOptionSumOrderByAggregateInput
  }

  export type AttributeOptionScalarWhereWithAggregatesInput = {
    AND?: AttributeOptionScalarWhereWithAggregatesInput | AttributeOptionScalarWhereWithAggregatesInput[]
    OR?: AttributeOptionScalarWhereWithAggregatesInput[]
    NOT?: AttributeOptionScalarWhereWithAggregatesInput | AttributeOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttributeOption"> | number
    value?: StringWithAggregatesFilter<"AttributeOption"> | string
    attributeId?: IntWithAggregatesFilter<"AttributeOption"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AttributeOption"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    brand?: StringFilter<"Product"> | string
    basePrice?: FloatFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    categoryId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ProductImageListRelationFilter
    variants?: VariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    brand?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    images?: ProductImageOrderByRelationAggregateInput
    variants?: VariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    brand?: StringFilter<"Product"> | string
    basePrice?: FloatFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    categoryId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ProductImageListRelationFilter
    variants?: VariantListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    brand?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringNullableWithAggregatesFilter<"Product"> | string | null
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    brand?: StringWithAggregatesFilter<"Product"> | string
    basePrice?: FloatWithAggregatesFilter<"Product"> | number
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    url?: StringFilter<"ProductImage"> | string
    altText?: StringNullableFilter<"ProductImage"> | string | null
    isThumbnail?: BoolFilter<"ProductImage"> | boolean
    order?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    isThumbnail?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    url?: StringFilter<"ProductImage"> | string
    altText?: StringNullableFilter<"ProductImage"> | string | null
    isThumbnail?: BoolFilter<"ProductImage"> | boolean
    order?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    isThumbnail?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductImage"> | number
    url?: StringWithAggregatesFilter<"ProductImage"> | string
    altText?: StringNullableWithAggregatesFilter<"ProductImage"> | string | null
    isThumbnail?: BoolWithAggregatesFilter<"ProductImage"> | boolean
    order?: IntWithAggregatesFilter<"ProductImage"> | number
    productId?: IntWithAggregatesFilter<"ProductImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductImage"> | Date | string
  }

  export type VariantWhereInput = {
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    id?: IntFilter<"Variant"> | number
    sku?: StringFilter<"Variant"> | string
    price?: FloatFilter<"Variant"> | number
    stock?: IntFilter<"Variant"> | number
    status?: EnumVariantStatusFilter<"Variant"> | $Enums.VariantStatus
    productId?: IntFilter<"Variant"> | number
    createdAt?: DateTimeFilter<"Variant"> | Date | string
    updatedAt?: DateTimeFilter<"Variant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    attributes?: VariantAttributeListRelationFilter
    images?: VariantImageListRelationFilter
  }

  export type VariantOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    attributes?: VariantAttributeOrderByRelationAggregateInput
    images?: VariantImageOrderByRelationAggregateInput
  }

  export type VariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    price?: FloatFilter<"Variant"> | number
    stock?: IntFilter<"Variant"> | number
    status?: EnumVariantStatusFilter<"Variant"> | $Enums.VariantStatus
    productId?: IntFilter<"Variant"> | number
    createdAt?: DateTimeFilter<"Variant"> | Date | string
    updatedAt?: DateTimeFilter<"Variant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    attributes?: VariantAttributeListRelationFilter
    images?: VariantImageListRelationFilter
  }, "id" | "sku">

  export type VariantOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VariantCountOrderByAggregateInput
    _avg?: VariantAvgOrderByAggregateInput
    _max?: VariantMaxOrderByAggregateInput
    _min?: VariantMinOrderByAggregateInput
    _sum?: VariantSumOrderByAggregateInput
  }

  export type VariantScalarWhereWithAggregatesInput = {
    AND?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    OR?: VariantScalarWhereWithAggregatesInput[]
    NOT?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Variant"> | number
    sku?: StringWithAggregatesFilter<"Variant"> | string
    price?: FloatWithAggregatesFilter<"Variant"> | number
    stock?: IntWithAggregatesFilter<"Variant"> | number
    status?: EnumVariantStatusWithAggregatesFilter<"Variant"> | $Enums.VariantStatus
    productId?: IntWithAggregatesFilter<"Variant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Variant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Variant"> | Date | string
  }

  export type VariantAttributeWhereInput = {
    AND?: VariantAttributeWhereInput | VariantAttributeWhereInput[]
    OR?: VariantAttributeWhereInput[]
    NOT?: VariantAttributeWhereInput | VariantAttributeWhereInput[]
    variantId?: IntFilter<"VariantAttribute"> | number
    attributeId?: IntFilter<"VariantAttribute"> | number
    optionId?: IntFilter<"VariantAttribute"> | number
    createdAt?: DateTimeFilter<"VariantAttribute"> | Date | string
    variant?: XOR<VariantScalarRelationFilter, VariantWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    option?: XOR<AttributeOptionScalarRelationFilter, AttributeOptionWhereInput>
  }

  export type VariantAttributeOrderByWithRelationInput = {
    variantId?: SortOrder
    attributeId?: SortOrder
    optionId?: SortOrder
    createdAt?: SortOrder
    variant?: VariantOrderByWithRelationInput
    attribute?: AttributeOrderByWithRelationInput
    option?: AttributeOptionOrderByWithRelationInput
  }

  export type VariantAttributeWhereUniqueInput = Prisma.AtLeast<{
    variantId_attributeId?: VariantAttributeVariantIdAttributeIdCompoundUniqueInput
    AND?: VariantAttributeWhereInput | VariantAttributeWhereInput[]
    OR?: VariantAttributeWhereInput[]
    NOT?: VariantAttributeWhereInput | VariantAttributeWhereInput[]
    variantId?: IntFilter<"VariantAttribute"> | number
    attributeId?: IntFilter<"VariantAttribute"> | number
    optionId?: IntFilter<"VariantAttribute"> | number
    createdAt?: DateTimeFilter<"VariantAttribute"> | Date | string
    variant?: XOR<VariantScalarRelationFilter, VariantWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    option?: XOR<AttributeOptionScalarRelationFilter, AttributeOptionWhereInput>
  }, "variantId_attributeId">

  export type VariantAttributeOrderByWithAggregationInput = {
    variantId?: SortOrder
    attributeId?: SortOrder
    optionId?: SortOrder
    createdAt?: SortOrder
    _count?: VariantAttributeCountOrderByAggregateInput
    _avg?: VariantAttributeAvgOrderByAggregateInput
    _max?: VariantAttributeMaxOrderByAggregateInput
    _min?: VariantAttributeMinOrderByAggregateInput
    _sum?: VariantAttributeSumOrderByAggregateInput
  }

  export type VariantAttributeScalarWhereWithAggregatesInput = {
    AND?: VariantAttributeScalarWhereWithAggregatesInput | VariantAttributeScalarWhereWithAggregatesInput[]
    OR?: VariantAttributeScalarWhereWithAggregatesInput[]
    NOT?: VariantAttributeScalarWhereWithAggregatesInput | VariantAttributeScalarWhereWithAggregatesInput[]
    variantId?: IntWithAggregatesFilter<"VariantAttribute"> | number
    attributeId?: IntWithAggregatesFilter<"VariantAttribute"> | number
    optionId?: IntWithAggregatesFilter<"VariantAttribute"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VariantAttribute"> | Date | string
  }

  export type VariantImageWhereInput = {
    AND?: VariantImageWhereInput | VariantImageWhereInput[]
    OR?: VariantImageWhereInput[]
    NOT?: VariantImageWhereInput | VariantImageWhereInput[]
    id?: IntFilter<"VariantImage"> | number
    url?: StringFilter<"VariantImage"> | string
    order?: IntFilter<"VariantImage"> | number
    variantId?: IntFilter<"VariantImage"> | number
    createdAt?: DateTimeFilter<"VariantImage"> | Date | string
    variant?: XOR<VariantScalarRelationFilter, VariantWhereInput>
  }

  export type VariantImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    variantId?: SortOrder
    createdAt?: SortOrder
    variant?: VariantOrderByWithRelationInput
  }

  export type VariantImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VariantImageWhereInput | VariantImageWhereInput[]
    OR?: VariantImageWhereInput[]
    NOT?: VariantImageWhereInput | VariantImageWhereInput[]
    url?: StringFilter<"VariantImage"> | string
    order?: IntFilter<"VariantImage"> | number
    variantId?: IntFilter<"VariantImage"> | number
    createdAt?: DateTimeFilter<"VariantImage"> | Date | string
    variant?: XOR<VariantScalarRelationFilter, VariantWhereInput>
  }, "id">

  export type VariantImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    variantId?: SortOrder
    createdAt?: SortOrder
    _count?: VariantImageCountOrderByAggregateInput
    _avg?: VariantImageAvgOrderByAggregateInput
    _max?: VariantImageMaxOrderByAggregateInput
    _min?: VariantImageMinOrderByAggregateInput
    _sum?: VariantImageSumOrderByAggregateInput
  }

  export type VariantImageScalarWhereWithAggregatesInput = {
    AND?: VariantImageScalarWhereWithAggregatesInput | VariantImageScalarWhereWithAggregatesInput[]
    OR?: VariantImageScalarWhereWithAggregatesInput[]
    NOT?: VariantImageScalarWhereWithAggregatesInput | VariantImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VariantImage"> | number
    url?: StringWithAggregatesFilter<"VariantImage"> | string
    order?: IntWithAggregatesFilter<"VariantImage"> | number
    variantId?: IntWithAggregatesFilter<"VariantImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VariantImage"> | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    attributes?: AttributeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    attributes?: AttributeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    attributes?: AttributeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    attributes?: AttributeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeCreateInput = {
    name: string
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttributesInput
    options?: AttributeOptionCreateNestedManyWithoutAttributeInput
    VariantAttribute?: VariantAttributeCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateInput = {
    id?: number
    name: string
    categoryId: number
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: AttributeOptionUncheckedCreateNestedManyWithoutAttributeInput
    VariantAttribute?: VariantAttributeUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttributesNestedInput
    options?: AttributeOptionUpdateManyWithoutAttributeNestedInput
    VariantAttribute?: VariantAttributeUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: AttributeOptionUncheckedUpdateManyWithoutAttributeNestedInput
    VariantAttribute?: VariantAttributeUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeCreateManyInput = {
    id?: number
    name: string
    categoryId: number
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeOptionCreateInput = {
    value: string
    createdAt?: Date | string
    attribute: AttributeCreateNestedOneWithoutOptionsInput
    VariantAttribute?: VariantAttributeCreateNestedManyWithoutOptionInput
  }

  export type AttributeOptionUncheckedCreateInput = {
    id?: number
    value: string
    attributeId: number
    createdAt?: Date | string
    VariantAttribute?: VariantAttributeUncheckedCreateNestedManyWithoutOptionInput
  }

  export type AttributeOptionUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attribute?: AttributeUpdateOneRequiredWithoutOptionsNestedInput
    VariantAttribute?: VariantAttributeUpdateManyWithoutOptionNestedInput
  }

  export type AttributeOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    attributeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VariantAttribute?: VariantAttributeUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type AttributeOptionCreateManyInput = {
    id?: number
    value: string
    attributeId: number
    createdAt?: Date | string
  }

  export type AttributeOptionUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    attributeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateInput = {
    url: string
    altText?: string | null
    isThumbnail?: boolean
    order?: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: number
    url: string
    altText?: string | null
    isThumbnail?: boolean
    order?: number
    productId: number
    createdAt?: Date | string
  }

  export type ProductImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateManyInput = {
    id?: number
    url: string
    altText?: string | null
    isThumbnail?: boolean
    order?: number
    productId: number
    createdAt?: Date | string
  }

  export type ProductImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantCreateInput = {
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    attributes?: VariantAttributeCreateNestedManyWithoutVariantInput
    images?: VariantImageCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateInput = {
    id?: number
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: VariantAttributeUncheckedCreateNestedManyWithoutVariantInput
    images?: VariantImageUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    attributes?: VariantAttributeUpdateManyWithoutVariantNestedInput
    images?: VariantImageUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: VariantAttributeUncheckedUpdateManyWithoutVariantNestedInput
    images?: VariantImageUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantCreateManyInput = {
    id?: number
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantUpdateManyMutationInput = {
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeCreateInput = {
    createdAt?: Date | string
    variant: VariantCreateNestedOneWithoutAttributesInput
    attribute: AttributeCreateNestedOneWithoutVariantAttributeInput
    option: AttributeOptionCreateNestedOneWithoutVariantAttributeInput
  }

  export type VariantAttributeUncheckedCreateInput = {
    variantId: number
    attributeId: number
    optionId: number
    createdAt?: Date | string
  }

  export type VariantAttributeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: VariantUpdateOneRequiredWithoutAttributesNestedInput
    attribute?: AttributeUpdateOneRequiredWithoutVariantAttributeNestedInput
    option?: AttributeOptionUpdateOneRequiredWithoutVariantAttributeNestedInput
  }

  export type VariantAttributeUncheckedUpdateInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeCreateManyInput = {
    variantId: number
    attributeId: number
    optionId: number
    createdAt?: Date | string
  }

  export type VariantAttributeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeUncheckedUpdateManyInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageCreateInput = {
    url: string
    order?: number
    createdAt?: Date | string
    variant: VariantCreateNestedOneWithoutImagesInput
  }

  export type VariantImageUncheckedCreateInput = {
    id?: number
    url: string
    order?: number
    variantId: number
    createdAt?: Date | string
  }

  export type VariantImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: VariantUpdateOneRequiredWithoutImagesNestedInput
  }

  export type VariantImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageCreateManyInput = {
    id?: number
    url: string
    order?: number
    variantId: number
    createdAt?: Date | string
  }

  export type VariantImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type AttributeListRelationFilter = {
    every?: AttributeWhereInput
    some?: AttributeWhereInput
    none?: AttributeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type AttributeOptionListRelationFilter = {
    every?: AttributeOptionWhereInput
    some?: AttributeOptionWhereInput
    none?: AttributeOptionWhereInput
  }

  export type VariantAttributeListRelationFilter = {
    every?: VariantAttributeWhereInput
    some?: VariantAttributeWhereInput
    none?: VariantAttributeWhereInput
  }

  export type AttributeOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantAttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    isFilterable?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    displayOrder?: SortOrder
  }

  export type AttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    isFilterable?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    isFilterable?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    displayOrder?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AttributeScalarRelationFilter = {
    is?: AttributeWhereInput
    isNot?: AttributeWhereInput
  }

  export type AttributeOptionCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttributeOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    attributeId?: SortOrder
  }

  export type AttributeOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttributeOptionMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttributeOptionSumOrderByAggregateInput = {
    id?: SortOrder
    attributeId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type VariantListRelationFilter = {
    every?: VariantWhereInput
    some?: VariantWhereInput
    none?: VariantWhereInput
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    categoryId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    isThumbnail?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    isThumbnail?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    isThumbnail?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    productId?: SortOrder
  }

  export type EnumVariantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VariantStatus | EnumVariantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VariantStatus[] | ListEnumVariantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VariantStatus[] | ListEnumVariantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVariantStatusFilter<$PrismaModel> | $Enums.VariantStatus
  }

  export type VariantImageListRelationFilter = {
    every?: VariantImageWhereInput
    some?: VariantImageWhereInput
    none?: VariantImageWhereInput
  }

  export type VariantImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }

  export type VariantMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }

  export type EnumVariantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VariantStatus | EnumVariantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VariantStatus[] | ListEnumVariantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VariantStatus[] | ListEnumVariantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVariantStatusWithAggregatesFilter<$PrismaModel> | $Enums.VariantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVariantStatusFilter<$PrismaModel>
    _max?: NestedEnumVariantStatusFilter<$PrismaModel>
  }

  export type VariantScalarRelationFilter = {
    is?: VariantWhereInput
    isNot?: VariantWhereInput
  }

  export type AttributeOptionScalarRelationFilter = {
    is?: AttributeOptionWhereInput
    isNot?: AttributeOptionWhereInput
  }

  export type VariantAttributeVariantIdAttributeIdCompoundUniqueInput = {
    variantId: number
    attributeId: number
  }

  export type VariantAttributeCountOrderByAggregateInput = {
    variantId?: SortOrder
    attributeId?: SortOrder
    optionId?: SortOrder
    createdAt?: SortOrder
  }

  export type VariantAttributeAvgOrderByAggregateInput = {
    variantId?: SortOrder
    attributeId?: SortOrder
    optionId?: SortOrder
  }

  export type VariantAttributeMaxOrderByAggregateInput = {
    variantId?: SortOrder
    attributeId?: SortOrder
    optionId?: SortOrder
    createdAt?: SortOrder
  }

  export type VariantAttributeMinOrderByAggregateInput = {
    variantId?: SortOrder
    attributeId?: SortOrder
    optionId?: SortOrder
    createdAt?: SortOrder
  }

  export type VariantAttributeSumOrderByAggregateInput = {
    variantId?: SortOrder
    attributeId?: SortOrder
    optionId?: SortOrder
  }

  export type VariantImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    variantId?: SortOrder
    createdAt?: SortOrder
  }

  export type VariantImageAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    variantId?: SortOrder
  }

  export type VariantImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    variantId?: SortOrder
    createdAt?: SortOrder
  }

  export type VariantImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    variantId?: SortOrder
    createdAt?: SortOrder
  }

  export type VariantImageSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    variantId?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type AttributeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput> | AttributeCreateWithoutCategoryInput[] | AttributeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutCategoryInput | AttributeCreateOrConnectWithoutCategoryInput[]
    createMany?: AttributeCreateManyCategoryInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type AttributeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput> | AttributeCreateWithoutCategoryInput[] | AttributeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutCategoryInput | AttributeCreateOrConnectWithoutCategoryInput[]
    createMany?: AttributeCreateManyCategoryInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type AttributeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput> | AttributeCreateWithoutCategoryInput[] | AttributeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutCategoryInput | AttributeCreateOrConnectWithoutCategoryInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutCategoryInput | AttributeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AttributeCreateManyCategoryInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutCategoryInput | AttributeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutCategoryInput | AttributeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type AttributeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput> | AttributeCreateWithoutCategoryInput[] | AttributeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutCategoryInput | AttributeCreateOrConnectWithoutCategoryInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutCategoryInput | AttributeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AttributeCreateManyCategoryInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutCategoryInput | AttributeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutCategoryInput | AttributeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutAttributesInput = {
    create?: XOR<CategoryCreateWithoutAttributesInput, CategoryUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAttributesInput
    connect?: CategoryWhereUniqueInput
  }

  export type AttributeOptionCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput> | AttributeOptionCreateWithoutAttributeInput[] | AttributeOptionUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutAttributeInput | AttributeOptionCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributeOptionCreateManyAttributeInputEnvelope
    connect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
  }

  export type VariantAttributeCreateNestedManyWithoutAttributeInput = {
    create?: XOR<VariantAttributeCreateWithoutAttributeInput, VariantAttributeUncheckedCreateWithoutAttributeInput> | VariantAttributeCreateWithoutAttributeInput[] | VariantAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutAttributeInput | VariantAttributeCreateOrConnectWithoutAttributeInput[]
    createMany?: VariantAttributeCreateManyAttributeInputEnvelope
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
  }

  export type AttributeOptionUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput> | AttributeOptionCreateWithoutAttributeInput[] | AttributeOptionUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutAttributeInput | AttributeOptionCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributeOptionCreateManyAttributeInputEnvelope
    connect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
  }

  export type VariantAttributeUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: XOR<VariantAttributeCreateWithoutAttributeInput, VariantAttributeUncheckedCreateWithoutAttributeInput> | VariantAttributeCreateWithoutAttributeInput[] | VariantAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutAttributeInput | VariantAttributeCreateOrConnectWithoutAttributeInput[]
    createMany?: VariantAttributeCreateManyAttributeInputEnvelope
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategoryUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<CategoryCreateWithoutAttributesInput, CategoryUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAttributesInput
    upsert?: CategoryUpsertWithoutAttributesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAttributesInput, CategoryUpdateWithoutAttributesInput>, CategoryUncheckedUpdateWithoutAttributesInput>
  }

  export type AttributeOptionUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput> | AttributeOptionCreateWithoutAttributeInput[] | AttributeOptionUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutAttributeInput | AttributeOptionCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput | AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributeOptionCreateManyAttributeInputEnvelope
    set?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    disconnect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    delete?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    connect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    update?: AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput | AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributeOptionUpdateManyWithWhereWithoutAttributeInput | AttributeOptionUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributeOptionScalarWhereInput | AttributeOptionScalarWhereInput[]
  }

  export type VariantAttributeUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<VariantAttributeCreateWithoutAttributeInput, VariantAttributeUncheckedCreateWithoutAttributeInput> | VariantAttributeCreateWithoutAttributeInput[] | VariantAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutAttributeInput | VariantAttributeCreateOrConnectWithoutAttributeInput[]
    upsert?: VariantAttributeUpsertWithWhereUniqueWithoutAttributeInput | VariantAttributeUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: VariantAttributeCreateManyAttributeInputEnvelope
    set?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    disconnect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    delete?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    update?: VariantAttributeUpdateWithWhereUniqueWithoutAttributeInput | VariantAttributeUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: VariantAttributeUpdateManyWithWhereWithoutAttributeInput | VariantAttributeUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: VariantAttributeScalarWhereInput | VariantAttributeScalarWhereInput[]
  }

  export type AttributeOptionUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput> | AttributeOptionCreateWithoutAttributeInput[] | AttributeOptionUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutAttributeInput | AttributeOptionCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput | AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributeOptionCreateManyAttributeInputEnvelope
    set?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    disconnect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    delete?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    connect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    update?: AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput | AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributeOptionUpdateManyWithWhereWithoutAttributeInput | AttributeOptionUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributeOptionScalarWhereInput | AttributeOptionScalarWhereInput[]
  }

  export type VariantAttributeUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<VariantAttributeCreateWithoutAttributeInput, VariantAttributeUncheckedCreateWithoutAttributeInput> | VariantAttributeCreateWithoutAttributeInput[] | VariantAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutAttributeInput | VariantAttributeCreateOrConnectWithoutAttributeInput[]
    upsert?: VariantAttributeUpsertWithWhereUniqueWithoutAttributeInput | VariantAttributeUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: VariantAttributeCreateManyAttributeInputEnvelope
    set?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    disconnect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    delete?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    update?: VariantAttributeUpdateWithWhereUniqueWithoutAttributeInput | VariantAttributeUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: VariantAttributeUpdateManyWithWhereWithoutAttributeInput | VariantAttributeUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: VariantAttributeScalarWhereInput | VariantAttributeScalarWhereInput[]
  }

  export type AttributeCreateNestedOneWithoutOptionsInput = {
    create?: XOR<AttributeCreateWithoutOptionsInput, AttributeUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutOptionsInput
    connect?: AttributeWhereUniqueInput
  }

  export type VariantAttributeCreateNestedManyWithoutOptionInput = {
    create?: XOR<VariantAttributeCreateWithoutOptionInput, VariantAttributeUncheckedCreateWithoutOptionInput> | VariantAttributeCreateWithoutOptionInput[] | VariantAttributeUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutOptionInput | VariantAttributeCreateOrConnectWithoutOptionInput[]
    createMany?: VariantAttributeCreateManyOptionInputEnvelope
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
  }

  export type VariantAttributeUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<VariantAttributeCreateWithoutOptionInput, VariantAttributeUncheckedCreateWithoutOptionInput> | VariantAttributeCreateWithoutOptionInput[] | VariantAttributeUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutOptionInput | VariantAttributeCreateOrConnectWithoutOptionInput[]
    createMany?: VariantAttributeCreateManyOptionInputEnvelope
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
  }

  export type AttributeUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<AttributeCreateWithoutOptionsInput, AttributeUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutOptionsInput
    upsert?: AttributeUpsertWithoutOptionsInput
    connect?: AttributeWhereUniqueInput
    update?: XOR<XOR<AttributeUpdateToOneWithWhereWithoutOptionsInput, AttributeUpdateWithoutOptionsInput>, AttributeUncheckedUpdateWithoutOptionsInput>
  }

  export type VariantAttributeUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VariantAttributeCreateWithoutOptionInput, VariantAttributeUncheckedCreateWithoutOptionInput> | VariantAttributeCreateWithoutOptionInput[] | VariantAttributeUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutOptionInput | VariantAttributeCreateOrConnectWithoutOptionInput[]
    upsert?: VariantAttributeUpsertWithWhereUniqueWithoutOptionInput | VariantAttributeUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VariantAttributeCreateManyOptionInputEnvelope
    set?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    disconnect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    delete?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    update?: VariantAttributeUpdateWithWhereUniqueWithoutOptionInput | VariantAttributeUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VariantAttributeUpdateManyWithWhereWithoutOptionInput | VariantAttributeUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VariantAttributeScalarWhereInput | VariantAttributeScalarWhereInput[]
  }

  export type VariantAttributeUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VariantAttributeCreateWithoutOptionInput, VariantAttributeUncheckedCreateWithoutOptionInput> | VariantAttributeCreateWithoutOptionInput[] | VariantAttributeUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutOptionInput | VariantAttributeCreateOrConnectWithoutOptionInput[]
    upsert?: VariantAttributeUpsertWithWhereUniqueWithoutOptionInput | VariantAttributeUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VariantAttributeCreateManyOptionInputEnvelope
    set?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    disconnect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    delete?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    update?: VariantAttributeUpdateWithWhereUniqueWithoutOptionInput | VariantAttributeUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VariantAttributeUpdateManyWithWhereWithoutOptionInput | VariantAttributeUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VariantAttributeScalarWhereInput | VariantAttributeScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type VariantCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type VariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type VariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type VariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type VariantAttributeCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantAttributeCreateWithoutVariantInput, VariantAttributeUncheckedCreateWithoutVariantInput> | VariantAttributeCreateWithoutVariantInput[] | VariantAttributeUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutVariantInput | VariantAttributeCreateOrConnectWithoutVariantInput[]
    createMany?: VariantAttributeCreateManyVariantInputEnvelope
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
  }

  export type VariantImageCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput> | VariantImageCreateWithoutVariantInput[] | VariantImageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantImageCreateOrConnectWithoutVariantInput | VariantImageCreateOrConnectWithoutVariantInput[]
    createMany?: VariantImageCreateManyVariantInputEnvelope
    connect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
  }

  export type VariantAttributeUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantAttributeCreateWithoutVariantInput, VariantAttributeUncheckedCreateWithoutVariantInput> | VariantAttributeCreateWithoutVariantInput[] | VariantAttributeUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutVariantInput | VariantAttributeCreateOrConnectWithoutVariantInput[]
    createMany?: VariantAttributeCreateManyVariantInputEnvelope
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
  }

  export type VariantImageUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput> | VariantImageCreateWithoutVariantInput[] | VariantImageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantImageCreateOrConnectWithoutVariantInput | VariantImageCreateOrConnectWithoutVariantInput[]
    createMany?: VariantImageCreateManyVariantInputEnvelope
    connect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
  }

  export type EnumVariantStatusFieldUpdateOperationsInput = {
    set?: $Enums.VariantStatus
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type VariantAttributeUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantAttributeCreateWithoutVariantInput, VariantAttributeUncheckedCreateWithoutVariantInput> | VariantAttributeCreateWithoutVariantInput[] | VariantAttributeUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutVariantInput | VariantAttributeCreateOrConnectWithoutVariantInput[]
    upsert?: VariantAttributeUpsertWithWhereUniqueWithoutVariantInput | VariantAttributeUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantAttributeCreateManyVariantInputEnvelope
    set?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    disconnect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    delete?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    update?: VariantAttributeUpdateWithWhereUniqueWithoutVariantInput | VariantAttributeUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantAttributeUpdateManyWithWhereWithoutVariantInput | VariantAttributeUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantAttributeScalarWhereInput | VariantAttributeScalarWhereInput[]
  }

  export type VariantImageUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput> | VariantImageCreateWithoutVariantInput[] | VariantImageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantImageCreateOrConnectWithoutVariantInput | VariantImageCreateOrConnectWithoutVariantInput[]
    upsert?: VariantImageUpsertWithWhereUniqueWithoutVariantInput | VariantImageUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantImageCreateManyVariantInputEnvelope
    set?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    disconnect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    delete?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    connect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    update?: VariantImageUpdateWithWhereUniqueWithoutVariantInput | VariantImageUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantImageUpdateManyWithWhereWithoutVariantInput | VariantImageUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantImageScalarWhereInput | VariantImageScalarWhereInput[]
  }

  export type VariantAttributeUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantAttributeCreateWithoutVariantInput, VariantAttributeUncheckedCreateWithoutVariantInput> | VariantAttributeCreateWithoutVariantInput[] | VariantAttributeUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantAttributeCreateOrConnectWithoutVariantInput | VariantAttributeCreateOrConnectWithoutVariantInput[]
    upsert?: VariantAttributeUpsertWithWhereUniqueWithoutVariantInput | VariantAttributeUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantAttributeCreateManyVariantInputEnvelope
    set?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    disconnect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    delete?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    connect?: VariantAttributeWhereUniqueInput | VariantAttributeWhereUniqueInput[]
    update?: VariantAttributeUpdateWithWhereUniqueWithoutVariantInput | VariantAttributeUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantAttributeUpdateManyWithWhereWithoutVariantInput | VariantAttributeUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantAttributeScalarWhereInput | VariantAttributeScalarWhereInput[]
  }

  export type VariantImageUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput> | VariantImageCreateWithoutVariantInput[] | VariantImageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantImageCreateOrConnectWithoutVariantInput | VariantImageCreateOrConnectWithoutVariantInput[]
    upsert?: VariantImageUpsertWithWhereUniqueWithoutVariantInput | VariantImageUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantImageCreateManyVariantInputEnvelope
    set?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    disconnect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    delete?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    connect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    update?: VariantImageUpdateWithWhereUniqueWithoutVariantInput | VariantImageUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantImageUpdateManyWithWhereWithoutVariantInput | VariantImageUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantImageScalarWhereInput | VariantImageScalarWhereInput[]
  }

  export type VariantCreateNestedOneWithoutAttributesInput = {
    create?: XOR<VariantCreateWithoutAttributesInput, VariantUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: VariantCreateOrConnectWithoutAttributesInput
    connect?: VariantWhereUniqueInput
  }

  export type AttributeCreateNestedOneWithoutVariantAttributeInput = {
    create?: XOR<AttributeCreateWithoutVariantAttributeInput, AttributeUncheckedCreateWithoutVariantAttributeInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutVariantAttributeInput
    connect?: AttributeWhereUniqueInput
  }

  export type AttributeOptionCreateNestedOneWithoutVariantAttributeInput = {
    create?: XOR<AttributeOptionCreateWithoutVariantAttributeInput, AttributeOptionUncheckedCreateWithoutVariantAttributeInput>
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutVariantAttributeInput
    connect?: AttributeOptionWhereUniqueInput
  }

  export type VariantUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<VariantCreateWithoutAttributesInput, VariantUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: VariantCreateOrConnectWithoutAttributesInput
    upsert?: VariantUpsertWithoutAttributesInput
    connect?: VariantWhereUniqueInput
    update?: XOR<XOR<VariantUpdateToOneWithWhereWithoutAttributesInput, VariantUpdateWithoutAttributesInput>, VariantUncheckedUpdateWithoutAttributesInput>
  }

  export type AttributeUpdateOneRequiredWithoutVariantAttributeNestedInput = {
    create?: XOR<AttributeCreateWithoutVariantAttributeInput, AttributeUncheckedCreateWithoutVariantAttributeInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutVariantAttributeInput
    upsert?: AttributeUpsertWithoutVariantAttributeInput
    connect?: AttributeWhereUniqueInput
    update?: XOR<XOR<AttributeUpdateToOneWithWhereWithoutVariantAttributeInput, AttributeUpdateWithoutVariantAttributeInput>, AttributeUncheckedUpdateWithoutVariantAttributeInput>
  }

  export type AttributeOptionUpdateOneRequiredWithoutVariantAttributeNestedInput = {
    create?: XOR<AttributeOptionCreateWithoutVariantAttributeInput, AttributeOptionUncheckedCreateWithoutVariantAttributeInput>
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutVariantAttributeInput
    upsert?: AttributeOptionUpsertWithoutVariantAttributeInput
    connect?: AttributeOptionWhereUniqueInput
    update?: XOR<XOR<AttributeOptionUpdateToOneWithWhereWithoutVariantAttributeInput, AttributeOptionUpdateWithoutVariantAttributeInput>, AttributeOptionUncheckedUpdateWithoutVariantAttributeInput>
  }

  export type VariantCreateNestedOneWithoutImagesInput = {
    create?: XOR<VariantCreateWithoutImagesInput, VariantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: VariantCreateOrConnectWithoutImagesInput
    connect?: VariantWhereUniqueInput
  }

  export type VariantUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<VariantCreateWithoutImagesInput, VariantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: VariantCreateOrConnectWithoutImagesInput
    upsert?: VariantUpsertWithoutImagesInput
    connect?: VariantWhereUniqueInput
    update?: XOR<XOR<VariantUpdateToOneWithWhereWithoutImagesInput, VariantUpdateWithoutImagesInput>, VariantUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedEnumVariantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VariantStatus | EnumVariantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VariantStatus[] | ListEnumVariantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VariantStatus[] | ListEnumVariantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVariantStatusFilter<$PrismaModel> | $Enums.VariantStatus
  }

  export type NestedEnumVariantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VariantStatus | EnumVariantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VariantStatus[] | ListEnumVariantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VariantStatus[] | ListEnumVariantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVariantStatusWithAggregatesFilter<$PrismaModel> | $Enums.VariantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVariantStatusFilter<$PrismaModel>
    _max?: NestedEnumVariantStatusFilter<$PrismaModel>
  }

  export type CategoryCreateWithoutChildrenInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    attributes?: AttributeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    slug: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    attributes?: AttributeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryCreateWithoutParentInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    attributes?: AttributeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    attributes?: AttributeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageCreateNestedManyWithoutProductInput
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AttributeCreateWithoutCategoryInput = {
    name: string
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: AttributeOptionCreateNestedManyWithoutAttributeInput
    VariantAttribute?: VariantAttributeCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: AttributeOptionUncheckedCreateNestedManyWithoutAttributeInput
    VariantAttribute?: VariantAttributeUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutCategoryInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput>
  }

  export type AttributeCreateManyCategoryInputEnvelope = {
    data: AttributeCreateManyCategoryInput | AttributeCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    attributes?: AttributeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    attributes?: AttributeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    parentId?: IntNullableFilter<"Category"> | number | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    brand?: StringFilter<"Product"> | string
    basePrice?: FloatFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    categoryId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type AttributeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutCategoryInput, AttributeUncheckedUpdateWithoutCategoryInput>
    create: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutCategoryInput, AttributeUncheckedUpdateWithoutCategoryInput>
  }

  export type AttributeUpdateManyWithWhereWithoutCategoryInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AttributeScalarWhereInput = {
    AND?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    OR?: AttributeScalarWhereInput[]
    NOT?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    id?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    categoryId?: IntFilter<"Attribute"> | number
    isFilterable?: BoolFilter<"Attribute"> | boolean
    displayOrder?: IntFilter<"Attribute"> | number
    createdAt?: DateTimeFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeFilter<"Attribute"> | Date | string
  }

  export type CategoryCreateWithoutAttributesInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutAttributesInput = {
    id?: number
    name: string
    slug: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutAttributesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAttributesInput, CategoryUncheckedCreateWithoutAttributesInput>
  }

  export type AttributeOptionCreateWithoutAttributeInput = {
    value: string
    createdAt?: Date | string
    VariantAttribute?: VariantAttributeCreateNestedManyWithoutOptionInput
  }

  export type AttributeOptionUncheckedCreateWithoutAttributeInput = {
    id?: number
    value: string
    createdAt?: Date | string
    VariantAttribute?: VariantAttributeUncheckedCreateNestedManyWithoutOptionInput
  }

  export type AttributeOptionCreateOrConnectWithoutAttributeInput = {
    where: AttributeOptionWhereUniqueInput
    create: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput>
  }

  export type AttributeOptionCreateManyAttributeInputEnvelope = {
    data: AttributeOptionCreateManyAttributeInput | AttributeOptionCreateManyAttributeInput[]
    skipDuplicates?: boolean
  }

  export type VariantAttributeCreateWithoutAttributeInput = {
    createdAt?: Date | string
    variant: VariantCreateNestedOneWithoutAttributesInput
    option: AttributeOptionCreateNestedOneWithoutVariantAttributeInput
  }

  export type VariantAttributeUncheckedCreateWithoutAttributeInput = {
    variantId: number
    optionId: number
    createdAt?: Date | string
  }

  export type VariantAttributeCreateOrConnectWithoutAttributeInput = {
    where: VariantAttributeWhereUniqueInput
    create: XOR<VariantAttributeCreateWithoutAttributeInput, VariantAttributeUncheckedCreateWithoutAttributeInput>
  }

  export type VariantAttributeCreateManyAttributeInputEnvelope = {
    data: VariantAttributeCreateManyAttributeInput | VariantAttributeCreateManyAttributeInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutAttributesInput = {
    update: XOR<CategoryUpdateWithoutAttributesInput, CategoryUncheckedUpdateWithoutAttributesInput>
    create: XOR<CategoryCreateWithoutAttributesInput, CategoryUncheckedCreateWithoutAttributesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAttributesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAttributesInput, CategoryUncheckedUpdateWithoutAttributesInput>
  }

  export type CategoryUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput = {
    where: AttributeOptionWhereUniqueInput
    update: XOR<AttributeOptionUpdateWithoutAttributeInput, AttributeOptionUncheckedUpdateWithoutAttributeInput>
    create: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput>
  }

  export type AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput = {
    where: AttributeOptionWhereUniqueInput
    data: XOR<AttributeOptionUpdateWithoutAttributeInput, AttributeOptionUncheckedUpdateWithoutAttributeInput>
  }

  export type AttributeOptionUpdateManyWithWhereWithoutAttributeInput = {
    where: AttributeOptionScalarWhereInput
    data: XOR<AttributeOptionUpdateManyMutationInput, AttributeOptionUncheckedUpdateManyWithoutAttributeInput>
  }

  export type AttributeOptionScalarWhereInput = {
    AND?: AttributeOptionScalarWhereInput | AttributeOptionScalarWhereInput[]
    OR?: AttributeOptionScalarWhereInput[]
    NOT?: AttributeOptionScalarWhereInput | AttributeOptionScalarWhereInput[]
    id?: IntFilter<"AttributeOption"> | number
    value?: StringFilter<"AttributeOption"> | string
    attributeId?: IntFilter<"AttributeOption"> | number
    createdAt?: DateTimeFilter<"AttributeOption"> | Date | string
  }

  export type VariantAttributeUpsertWithWhereUniqueWithoutAttributeInput = {
    where: VariantAttributeWhereUniqueInput
    update: XOR<VariantAttributeUpdateWithoutAttributeInput, VariantAttributeUncheckedUpdateWithoutAttributeInput>
    create: XOR<VariantAttributeCreateWithoutAttributeInput, VariantAttributeUncheckedCreateWithoutAttributeInput>
  }

  export type VariantAttributeUpdateWithWhereUniqueWithoutAttributeInput = {
    where: VariantAttributeWhereUniqueInput
    data: XOR<VariantAttributeUpdateWithoutAttributeInput, VariantAttributeUncheckedUpdateWithoutAttributeInput>
  }

  export type VariantAttributeUpdateManyWithWhereWithoutAttributeInput = {
    where: VariantAttributeScalarWhereInput
    data: XOR<VariantAttributeUpdateManyMutationInput, VariantAttributeUncheckedUpdateManyWithoutAttributeInput>
  }

  export type VariantAttributeScalarWhereInput = {
    AND?: VariantAttributeScalarWhereInput | VariantAttributeScalarWhereInput[]
    OR?: VariantAttributeScalarWhereInput[]
    NOT?: VariantAttributeScalarWhereInput | VariantAttributeScalarWhereInput[]
    variantId?: IntFilter<"VariantAttribute"> | number
    attributeId?: IntFilter<"VariantAttribute"> | number
    optionId?: IntFilter<"VariantAttribute"> | number
    createdAt?: DateTimeFilter<"VariantAttribute"> | Date | string
  }

  export type AttributeCreateWithoutOptionsInput = {
    name: string
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttributesInput
    VariantAttribute?: VariantAttributeCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutOptionsInput = {
    id?: number
    name: string
    categoryId: number
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    VariantAttribute?: VariantAttributeUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutOptionsInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutOptionsInput, AttributeUncheckedCreateWithoutOptionsInput>
  }

  export type VariantAttributeCreateWithoutOptionInput = {
    createdAt?: Date | string
    variant: VariantCreateNestedOneWithoutAttributesInput
    attribute: AttributeCreateNestedOneWithoutVariantAttributeInput
  }

  export type VariantAttributeUncheckedCreateWithoutOptionInput = {
    variantId: number
    attributeId: number
    createdAt?: Date | string
  }

  export type VariantAttributeCreateOrConnectWithoutOptionInput = {
    where: VariantAttributeWhereUniqueInput
    create: XOR<VariantAttributeCreateWithoutOptionInput, VariantAttributeUncheckedCreateWithoutOptionInput>
  }

  export type VariantAttributeCreateManyOptionInputEnvelope = {
    data: VariantAttributeCreateManyOptionInput | VariantAttributeCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type AttributeUpsertWithoutOptionsInput = {
    update: XOR<AttributeUpdateWithoutOptionsInput, AttributeUncheckedUpdateWithoutOptionsInput>
    create: XOR<AttributeCreateWithoutOptionsInput, AttributeUncheckedCreateWithoutOptionsInput>
    where?: AttributeWhereInput
  }

  export type AttributeUpdateToOneWithWhereWithoutOptionsInput = {
    where?: AttributeWhereInput
    data: XOR<AttributeUpdateWithoutOptionsInput, AttributeUncheckedUpdateWithoutOptionsInput>
  }

  export type AttributeUpdateWithoutOptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttributesNestedInput
    VariantAttribute?: VariantAttributeUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VariantAttribute?: VariantAttributeUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type VariantAttributeUpsertWithWhereUniqueWithoutOptionInput = {
    where: VariantAttributeWhereUniqueInput
    update: XOR<VariantAttributeUpdateWithoutOptionInput, VariantAttributeUncheckedUpdateWithoutOptionInput>
    create: XOR<VariantAttributeCreateWithoutOptionInput, VariantAttributeUncheckedCreateWithoutOptionInput>
  }

  export type VariantAttributeUpdateWithWhereUniqueWithoutOptionInput = {
    where: VariantAttributeWhereUniqueInput
    data: XOR<VariantAttributeUpdateWithoutOptionInput, VariantAttributeUncheckedUpdateWithoutOptionInput>
  }

  export type VariantAttributeUpdateManyWithWhereWithoutOptionInput = {
    where: VariantAttributeScalarWhereInput
    data: XOR<VariantAttributeUpdateManyMutationInput, VariantAttributeUncheckedUpdateManyWithoutOptionInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    attributes?: AttributeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    slug: string
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    attributes?: AttributeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductImageCreateWithoutProductInput = {
    url: string
    altText?: string | null
    isThumbnail?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: number
    url: string
    altText?: string | null
    isThumbnail?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type VariantCreateWithoutProductInput = {
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: VariantAttributeCreateNestedManyWithoutVariantInput
    images?: VariantImageCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutProductInput = {
    id?: number
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: VariantAttributeUncheckedCreateNestedManyWithoutVariantInput
    images?: VariantImageUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutProductInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantCreateManyProductInputEnvelope = {
    data: VariantCreateManyProductInput | VariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    attributes?: AttributeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    attributes?: AttributeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    url?: StringFilter<"ProductImage"> | string
    altText?: StringNullableFilter<"ProductImage"> | string | null
    isThumbnail?: BoolFilter<"ProductImage"> | boolean
    order?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
  }

  export type VariantUpsertWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
  }

  export type VariantUpdateManyWithWhereWithoutProductInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutProductInput>
  }

  export type VariantScalarWhereInput = {
    AND?: VariantScalarWhereInput | VariantScalarWhereInput[]
    OR?: VariantScalarWhereInput[]
    NOT?: VariantScalarWhereInput | VariantScalarWhereInput[]
    id?: IntFilter<"Variant"> | number
    sku?: StringFilter<"Variant"> | string
    price?: FloatFilter<"Variant"> | number
    stock?: IntFilter<"Variant"> | number
    status?: EnumVariantStatusFilter<"Variant"> | $Enums.VariantStatus
    productId?: IntFilter<"Variant"> | number
    createdAt?: DateTimeFilter<"Variant"> | Date | string
    updatedAt?: DateTimeFilter<"Variant"> | Date | string
  }

  export type ProductCreateWithoutImagesInput = {
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutVariantsInput = {
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: number
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type VariantAttributeCreateWithoutVariantInput = {
    createdAt?: Date | string
    attribute: AttributeCreateNestedOneWithoutVariantAttributeInput
    option: AttributeOptionCreateNestedOneWithoutVariantAttributeInput
  }

  export type VariantAttributeUncheckedCreateWithoutVariantInput = {
    attributeId: number
    optionId: number
    createdAt?: Date | string
  }

  export type VariantAttributeCreateOrConnectWithoutVariantInput = {
    where: VariantAttributeWhereUniqueInput
    create: XOR<VariantAttributeCreateWithoutVariantInput, VariantAttributeUncheckedCreateWithoutVariantInput>
  }

  export type VariantAttributeCreateManyVariantInputEnvelope = {
    data: VariantAttributeCreateManyVariantInput | VariantAttributeCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type VariantImageCreateWithoutVariantInput = {
    url: string
    order?: number
    createdAt?: Date | string
  }

  export type VariantImageUncheckedCreateWithoutVariantInput = {
    id?: number
    url: string
    order?: number
    createdAt?: Date | string
  }

  export type VariantImageCreateOrConnectWithoutVariantInput = {
    where: VariantImageWhereUniqueInput
    create: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput>
  }

  export type VariantImageCreateManyVariantInputEnvelope = {
    data: VariantImageCreateManyVariantInput | VariantImageCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VariantAttributeUpsertWithWhereUniqueWithoutVariantInput = {
    where: VariantAttributeWhereUniqueInput
    update: XOR<VariantAttributeUpdateWithoutVariantInput, VariantAttributeUncheckedUpdateWithoutVariantInput>
    create: XOR<VariantAttributeCreateWithoutVariantInput, VariantAttributeUncheckedCreateWithoutVariantInput>
  }

  export type VariantAttributeUpdateWithWhereUniqueWithoutVariantInput = {
    where: VariantAttributeWhereUniqueInput
    data: XOR<VariantAttributeUpdateWithoutVariantInput, VariantAttributeUncheckedUpdateWithoutVariantInput>
  }

  export type VariantAttributeUpdateManyWithWhereWithoutVariantInput = {
    where: VariantAttributeScalarWhereInput
    data: XOR<VariantAttributeUpdateManyMutationInput, VariantAttributeUncheckedUpdateManyWithoutVariantInput>
  }

  export type VariantImageUpsertWithWhereUniqueWithoutVariantInput = {
    where: VariantImageWhereUniqueInput
    update: XOR<VariantImageUpdateWithoutVariantInput, VariantImageUncheckedUpdateWithoutVariantInput>
    create: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput>
  }

  export type VariantImageUpdateWithWhereUniqueWithoutVariantInput = {
    where: VariantImageWhereUniqueInput
    data: XOR<VariantImageUpdateWithoutVariantInput, VariantImageUncheckedUpdateWithoutVariantInput>
  }

  export type VariantImageUpdateManyWithWhereWithoutVariantInput = {
    where: VariantImageScalarWhereInput
    data: XOR<VariantImageUpdateManyMutationInput, VariantImageUncheckedUpdateManyWithoutVariantInput>
  }

  export type VariantImageScalarWhereInput = {
    AND?: VariantImageScalarWhereInput | VariantImageScalarWhereInput[]
    OR?: VariantImageScalarWhereInput[]
    NOT?: VariantImageScalarWhereInput | VariantImageScalarWhereInput[]
    id?: IntFilter<"VariantImage"> | number
    url?: StringFilter<"VariantImage"> | string
    order?: IntFilter<"VariantImage"> | number
    variantId?: IntFilter<"VariantImage"> | number
    createdAt?: DateTimeFilter<"VariantImage"> | Date | string
  }

  export type VariantCreateWithoutAttributesInput = {
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    images?: VariantImageCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutAttributesInput = {
    id?: number
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VariantImageUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutAttributesInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutAttributesInput, VariantUncheckedCreateWithoutAttributesInput>
  }

  export type AttributeCreateWithoutVariantAttributeInput = {
    name: string
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttributesInput
    options?: AttributeOptionCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutVariantAttributeInput = {
    id?: number
    name: string
    categoryId: number
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: AttributeOptionUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutVariantAttributeInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutVariantAttributeInput, AttributeUncheckedCreateWithoutVariantAttributeInput>
  }

  export type AttributeOptionCreateWithoutVariantAttributeInput = {
    value: string
    createdAt?: Date | string
    attribute: AttributeCreateNestedOneWithoutOptionsInput
  }

  export type AttributeOptionUncheckedCreateWithoutVariantAttributeInput = {
    id?: number
    value: string
    attributeId: number
    createdAt?: Date | string
  }

  export type AttributeOptionCreateOrConnectWithoutVariantAttributeInput = {
    where: AttributeOptionWhereUniqueInput
    create: XOR<AttributeOptionCreateWithoutVariantAttributeInput, AttributeOptionUncheckedCreateWithoutVariantAttributeInput>
  }

  export type VariantUpsertWithoutAttributesInput = {
    update: XOR<VariantUpdateWithoutAttributesInput, VariantUncheckedUpdateWithoutAttributesInput>
    create: XOR<VariantCreateWithoutAttributesInput, VariantUncheckedCreateWithoutAttributesInput>
    where?: VariantWhereInput
  }

  export type VariantUpdateToOneWithWhereWithoutAttributesInput = {
    where?: VariantWhereInput
    data: XOR<VariantUpdateWithoutAttributesInput, VariantUncheckedUpdateWithoutAttributesInput>
  }

  export type VariantUpdateWithoutAttributesInput = {
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    images?: VariantImageUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VariantImageUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type AttributeUpsertWithoutVariantAttributeInput = {
    update: XOR<AttributeUpdateWithoutVariantAttributeInput, AttributeUncheckedUpdateWithoutVariantAttributeInput>
    create: XOR<AttributeCreateWithoutVariantAttributeInput, AttributeUncheckedCreateWithoutVariantAttributeInput>
    where?: AttributeWhereInput
  }

  export type AttributeUpdateToOneWithWhereWithoutVariantAttributeInput = {
    where?: AttributeWhereInput
    data: XOR<AttributeUpdateWithoutVariantAttributeInput, AttributeUncheckedUpdateWithoutVariantAttributeInput>
  }

  export type AttributeUpdateWithoutVariantAttributeInput = {
    name?: StringFieldUpdateOperationsInput | string
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttributesNestedInput
    options?: AttributeOptionUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutVariantAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: AttributeOptionUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeOptionUpsertWithoutVariantAttributeInput = {
    update: XOR<AttributeOptionUpdateWithoutVariantAttributeInput, AttributeOptionUncheckedUpdateWithoutVariantAttributeInput>
    create: XOR<AttributeOptionCreateWithoutVariantAttributeInput, AttributeOptionUncheckedCreateWithoutVariantAttributeInput>
    where?: AttributeOptionWhereInput
  }

  export type AttributeOptionUpdateToOneWithWhereWithoutVariantAttributeInput = {
    where?: AttributeOptionWhereInput
    data: XOR<AttributeOptionUpdateWithoutVariantAttributeInput, AttributeOptionUncheckedUpdateWithoutVariantAttributeInput>
  }

  export type AttributeOptionUpdateWithoutVariantAttributeInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attribute?: AttributeUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type AttributeOptionUncheckedUpdateWithoutVariantAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    attributeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantCreateWithoutImagesInput = {
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    attributes?: VariantAttributeCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutImagesInput = {
    id?: number
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: VariantAttributeUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutImagesInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutImagesInput, VariantUncheckedCreateWithoutImagesInput>
  }

  export type VariantUpsertWithoutImagesInput = {
    update: XOR<VariantUpdateWithoutImagesInput, VariantUncheckedUpdateWithoutImagesInput>
    create: XOR<VariantCreateWithoutImagesInput, VariantUncheckedCreateWithoutImagesInput>
    where?: VariantWhereInput
  }

  export type VariantUpdateToOneWithWhereWithoutImagesInput = {
    where?: VariantWhereInput
    data: XOR<VariantUpdateWithoutImagesInput, VariantUncheckedUpdateWithoutImagesInput>
  }

  export type VariantUpdateWithoutImagesInput = {
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    attributes?: VariantAttributeUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: VariantAttributeUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type CategoryCreateManyParentInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    slug?: string | null
    description?: string | null
    brand: string
    basePrice: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeCreateManyCategoryInput = {
    id?: number
    name: string
    isFilterable?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    attributes?: AttributeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    attributes?: AttributeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUpdateManyWithoutProductNestedInput
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: AttributeOptionUpdateManyWithoutAttributeNestedInput
    VariantAttribute?: VariantAttributeUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: AttributeOptionUncheckedUpdateManyWithoutAttributeNestedInput
    VariantAttribute?: VariantAttributeUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isFilterable?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeOptionCreateManyAttributeInput = {
    id?: number
    value: string
    createdAt?: Date | string
  }

  export type VariantAttributeCreateManyAttributeInput = {
    variantId: number
    optionId: number
    createdAt?: Date | string
  }

  export type AttributeOptionUpdateWithoutAttributeInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VariantAttribute?: VariantAttributeUpdateManyWithoutOptionNestedInput
  }

  export type AttributeOptionUncheckedUpdateWithoutAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VariantAttribute?: VariantAttributeUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type AttributeOptionUncheckedUpdateManyWithoutAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeUpdateWithoutAttributeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: VariantUpdateOneRequiredWithoutAttributesNestedInput
    option?: AttributeOptionUpdateOneRequiredWithoutVariantAttributeNestedInput
  }

  export type VariantAttributeUncheckedUpdateWithoutAttributeInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeUncheckedUpdateManyWithoutAttributeInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeCreateManyOptionInput = {
    variantId: number
    attributeId: number
    createdAt?: Date | string
  }

  export type VariantAttributeUpdateWithoutOptionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: VariantUpdateOneRequiredWithoutAttributesNestedInput
    attribute?: AttributeUpdateOneRequiredWithoutVariantAttributeNestedInput
  }

  export type VariantAttributeUncheckedUpdateWithoutOptionInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeUncheckedUpdateManyWithoutOptionInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateManyProductInput = {
    id?: number
    url: string
    altText?: string | null
    isThumbnail?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type VariantCreateManyProductInput = {
    id?: number
    sku: string
    price: number
    stock?: number
    status?: $Enums.VariantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageUpdateWithoutProductInput = {
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantUpdateWithoutProductInput = {
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: VariantAttributeUpdateManyWithoutVariantNestedInput
    images?: VariantImageUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: VariantAttributeUncheckedUpdateManyWithoutVariantNestedInput
    images?: VariantImageUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumVariantStatusFieldUpdateOperationsInput | $Enums.VariantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeCreateManyVariantInput = {
    attributeId: number
    optionId: number
    createdAt?: Date | string
  }

  export type VariantImageCreateManyVariantInput = {
    id?: number
    url: string
    order?: number
    createdAt?: Date | string
  }

  export type VariantAttributeUpdateWithoutVariantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attribute?: AttributeUpdateOneRequiredWithoutVariantAttributeNestedInput
    option?: AttributeOptionUpdateOneRequiredWithoutVariantAttributeNestedInput
  }

  export type VariantAttributeUncheckedUpdateWithoutVariantInput = {
    attributeId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeUncheckedUpdateManyWithoutVariantInput = {
    attributeId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageUpdateWithoutVariantInput = {
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}