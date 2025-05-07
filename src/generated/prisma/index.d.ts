
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
 * Model AREAS
 * 
 */
export type AREAS = $Result.DefaultSelection<Prisma.$AREASPayload>
/**
 * Model FOOD_TYPES
 * 
 */
export type FOOD_TYPES = $Result.DefaultSelection<Prisma.$FOOD_TYPESPayload>
/**
 * Model MISSIONS
 * 
 */
export type MISSIONS = $Result.DefaultSelection<Prisma.$MISSIONSPayload>
/**
 * Model REVIEWS
 * 
 */
export type REVIEWS = $Result.DefaultSelection<Prisma.$REVIEWSPayload>
/**
 * Model STORES
 * 
 */
export type STORES = $Result.DefaultSelection<Prisma.$STORESPayload>
/**
 * Model USERS
 * 
 */
export type USERS = $Result.DefaultSelection<Prisma.$USERSPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AREAS
 * const aREAS = await prisma.aREAS.findMany()
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
   * // Fetch zero or more AREAS
   * const aREAS = await prisma.aREAS.findMany()
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
   * `prisma.aREAS`: Exposes CRUD operations for the **AREAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AREAS
    * const aREAS = await prisma.aREAS.findMany()
    * ```
    */
  get aREAS(): Prisma.AREASDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fOOD_TYPES`: Exposes CRUD operations for the **FOOD_TYPES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FOOD_TYPES
    * const fOOD_TYPES = await prisma.fOOD_TYPES.findMany()
    * ```
    */
  get fOOD_TYPES(): Prisma.FOOD_TYPESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mISSIONS`: Exposes CRUD operations for the **MISSIONS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MISSIONS
    * const mISSIONS = await prisma.mISSIONS.findMany()
    * ```
    */
  get mISSIONS(): Prisma.MISSIONSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rEVIEWS`: Exposes CRUD operations for the **REVIEWS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REVIEWS
    * const rEVIEWS = await prisma.rEVIEWS.findMany()
    * ```
    */
  get rEVIEWS(): Prisma.REVIEWSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sTORES`: Exposes CRUD operations for the **STORES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more STORES
    * const sTORES = await prisma.sTORES.findMany()
    * ```
    */
  get sTORES(): Prisma.STORESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uSERS`: Exposes CRUD operations for the **USERS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USERS
    * const uSERS = await prisma.uSERS.findMany()
    * ```
    */
  get uSERS(): Prisma.USERSDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    AREAS: 'AREAS',
    FOOD_TYPES: 'FOOD_TYPES',
    MISSIONS: 'MISSIONS',
    REVIEWS: 'REVIEWS',
    STORES: 'STORES',
    USERS: 'USERS'
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
      modelProps: "aREAS" | "fOOD_TYPES" | "mISSIONS" | "rEVIEWS" | "sTORES" | "uSERS"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AREAS: {
        payload: Prisma.$AREASPayload<ExtArgs>
        fields: Prisma.AREASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AREASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AREASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREASPayload>
          }
          findFirst: {
            args: Prisma.AREASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AREASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREASPayload>
          }
          findMany: {
            args: Prisma.AREASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREASPayload>[]
          }
          create: {
            args: Prisma.AREASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREASPayload>
          }
          createMany: {
            args: Prisma.AREASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AREASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREASPayload>
          }
          update: {
            args: Prisma.AREASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREASPayload>
          }
          deleteMany: {
            args: Prisma.AREASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AREASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AREASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREASPayload>
          }
          aggregate: {
            args: Prisma.AREASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAREAS>
          }
          groupBy: {
            args: Prisma.AREASGroupByArgs<ExtArgs>
            result: $Utils.Optional<AREASGroupByOutputType>[]
          }
          count: {
            args: Prisma.AREASCountArgs<ExtArgs>
            result: $Utils.Optional<AREASCountAggregateOutputType> | number
          }
        }
      }
      FOOD_TYPES: {
        payload: Prisma.$FOOD_TYPESPayload<ExtArgs>
        fields: Prisma.FOOD_TYPESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FOOD_TYPESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FOOD_TYPESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FOOD_TYPESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FOOD_TYPESPayload>
          }
          findFirst: {
            args: Prisma.FOOD_TYPESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FOOD_TYPESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FOOD_TYPESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FOOD_TYPESPayload>
          }
          findMany: {
            args: Prisma.FOOD_TYPESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FOOD_TYPESPayload>[]
          }
          create: {
            args: Prisma.FOOD_TYPESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FOOD_TYPESPayload>
          }
          createMany: {
            args: Prisma.FOOD_TYPESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FOOD_TYPESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FOOD_TYPESPayload>
          }
          update: {
            args: Prisma.FOOD_TYPESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FOOD_TYPESPayload>
          }
          deleteMany: {
            args: Prisma.FOOD_TYPESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FOOD_TYPESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FOOD_TYPESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FOOD_TYPESPayload>
          }
          aggregate: {
            args: Prisma.FOOD_TYPESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFOOD_TYPES>
          }
          groupBy: {
            args: Prisma.FOOD_TYPESGroupByArgs<ExtArgs>
            result: $Utils.Optional<FOOD_TYPESGroupByOutputType>[]
          }
          count: {
            args: Prisma.FOOD_TYPESCountArgs<ExtArgs>
            result: $Utils.Optional<FOOD_TYPESCountAggregateOutputType> | number
          }
        }
      }
      MISSIONS: {
        payload: Prisma.$MISSIONSPayload<ExtArgs>
        fields: Prisma.MISSIONSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MISSIONSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MISSIONSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MISSIONSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MISSIONSPayload>
          }
          findFirst: {
            args: Prisma.MISSIONSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MISSIONSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MISSIONSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MISSIONSPayload>
          }
          findMany: {
            args: Prisma.MISSIONSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MISSIONSPayload>[]
          }
          create: {
            args: Prisma.MISSIONSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MISSIONSPayload>
          }
          createMany: {
            args: Prisma.MISSIONSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MISSIONSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MISSIONSPayload>
          }
          update: {
            args: Prisma.MISSIONSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MISSIONSPayload>
          }
          deleteMany: {
            args: Prisma.MISSIONSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MISSIONSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MISSIONSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MISSIONSPayload>
          }
          aggregate: {
            args: Prisma.MISSIONSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMISSIONS>
          }
          groupBy: {
            args: Prisma.MISSIONSGroupByArgs<ExtArgs>
            result: $Utils.Optional<MISSIONSGroupByOutputType>[]
          }
          count: {
            args: Prisma.MISSIONSCountArgs<ExtArgs>
            result: $Utils.Optional<MISSIONSCountAggregateOutputType> | number
          }
        }
      }
      REVIEWS: {
        payload: Prisma.$REVIEWSPayload<ExtArgs>
        fields: Prisma.REVIEWSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.REVIEWSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REVIEWSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.REVIEWSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REVIEWSPayload>
          }
          findFirst: {
            args: Prisma.REVIEWSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REVIEWSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.REVIEWSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REVIEWSPayload>
          }
          findMany: {
            args: Prisma.REVIEWSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REVIEWSPayload>[]
          }
          create: {
            args: Prisma.REVIEWSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REVIEWSPayload>
          }
          createMany: {
            args: Prisma.REVIEWSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.REVIEWSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REVIEWSPayload>
          }
          update: {
            args: Prisma.REVIEWSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REVIEWSPayload>
          }
          deleteMany: {
            args: Prisma.REVIEWSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.REVIEWSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.REVIEWSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REVIEWSPayload>
          }
          aggregate: {
            args: Prisma.REVIEWSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateREVIEWS>
          }
          groupBy: {
            args: Prisma.REVIEWSGroupByArgs<ExtArgs>
            result: $Utils.Optional<REVIEWSGroupByOutputType>[]
          }
          count: {
            args: Prisma.REVIEWSCountArgs<ExtArgs>
            result: $Utils.Optional<REVIEWSCountAggregateOutputType> | number
          }
        }
      }
      STORES: {
        payload: Prisma.$STORESPayload<ExtArgs>
        fields: Prisma.STORESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.STORESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STORESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.STORESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STORESPayload>
          }
          findFirst: {
            args: Prisma.STORESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STORESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.STORESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STORESPayload>
          }
          findMany: {
            args: Prisma.STORESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STORESPayload>[]
          }
          create: {
            args: Prisma.STORESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STORESPayload>
          }
          createMany: {
            args: Prisma.STORESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.STORESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STORESPayload>
          }
          update: {
            args: Prisma.STORESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STORESPayload>
          }
          deleteMany: {
            args: Prisma.STORESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.STORESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.STORESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STORESPayload>
          }
          aggregate: {
            args: Prisma.STORESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSTORES>
          }
          groupBy: {
            args: Prisma.STORESGroupByArgs<ExtArgs>
            result: $Utils.Optional<STORESGroupByOutputType>[]
          }
          count: {
            args: Prisma.STORESCountArgs<ExtArgs>
            result: $Utils.Optional<STORESCountAggregateOutputType> | number
          }
        }
      }
      USERS: {
        payload: Prisma.$USERSPayload<ExtArgs>
        fields: Prisma.USERSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USERSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USERSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          findFirst: {
            args: Prisma.USERSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USERSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          findMany: {
            args: Prisma.USERSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>[]
          }
          create: {
            args: Prisma.USERSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          createMany: {
            args: Prisma.USERSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.USERSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          update: {
            args: Prisma.USERSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          deleteMany: {
            args: Prisma.USERSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USERSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.USERSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          aggregate: {
            args: Prisma.USERSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSERS>
          }
          groupBy: {
            args: Prisma.USERSGroupByArgs<ExtArgs>
            result: $Utils.Optional<USERSGroupByOutputType>[]
          }
          count: {
            args: Prisma.USERSCountArgs<ExtArgs>
            result: $Utils.Optional<USERSCountAggregateOutputType> | number
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
    aREAS?: AREASOmit
    fOOD_TYPES?: FOOD_TYPESOmit
    mISSIONS?: MISSIONSOmit
    rEVIEWS?: REVIEWSOmit
    sTORES?: STORESOmit
    uSERS?: USERSOmit
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
   * Models
   */

  /**
   * Model AREAS
   */

  export type AggregateAREAS = {
    _count: AREASCountAggregateOutputType | null
    _avg: AREASAvgAggregateOutputType | null
    _sum: AREASSumAggregateOutputType | null
    _min: AREASMinAggregateOutputType | null
    _max: AREASMaxAggregateOutputType | null
  }

  export type AREASAvgAggregateOutputType = {
    area_Index: number | null
    area_MissionCount: number | null
    area_StoreCount: number | null
  }

  export type AREASSumAggregateOutputType = {
    area_Index: number | null
    area_MissionCount: number | null
    area_StoreCount: number | null
  }

  export type AREASMinAggregateOutputType = {
    area_Index: number | null
    area_name: string | null
    area_MissionCount: number | null
    area_StoreCount: number | null
  }

  export type AREASMaxAggregateOutputType = {
    area_Index: number | null
    area_name: string | null
    area_MissionCount: number | null
    area_StoreCount: number | null
  }

  export type AREASCountAggregateOutputType = {
    area_Index: number
    area_name: number
    area_MissionCount: number
    area_StoreCount: number
    _all: number
  }


  export type AREASAvgAggregateInputType = {
    area_Index?: true
    area_MissionCount?: true
    area_StoreCount?: true
  }

  export type AREASSumAggregateInputType = {
    area_Index?: true
    area_MissionCount?: true
    area_StoreCount?: true
  }

  export type AREASMinAggregateInputType = {
    area_Index?: true
    area_name?: true
    area_MissionCount?: true
    area_StoreCount?: true
  }

  export type AREASMaxAggregateInputType = {
    area_Index?: true
    area_name?: true
    area_MissionCount?: true
    area_StoreCount?: true
  }

  export type AREASCountAggregateInputType = {
    area_Index?: true
    area_name?: true
    area_MissionCount?: true
    area_StoreCount?: true
    _all?: true
  }

  export type AREASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AREAS to aggregate.
     */
    where?: AREASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AREAS to fetch.
     */
    orderBy?: AREASOrderByWithRelationInput | AREASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AREASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AREAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AREAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AREAS
    **/
    _count?: true | AREASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AREASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AREASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AREASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AREASMaxAggregateInputType
  }

  export type GetAREASAggregateType<T extends AREASAggregateArgs> = {
        [P in keyof T & keyof AggregateAREAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAREAS[P]>
      : GetScalarType<T[P], AggregateAREAS[P]>
  }




  export type AREASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AREASWhereInput
    orderBy?: AREASOrderByWithAggregationInput | AREASOrderByWithAggregationInput[]
    by: AREASScalarFieldEnum[] | AREASScalarFieldEnum
    having?: AREASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AREASCountAggregateInputType | true
    _avg?: AREASAvgAggregateInputType
    _sum?: AREASSumAggregateInputType
    _min?: AREASMinAggregateInputType
    _max?: AREASMaxAggregateInputType
  }

  export type AREASGroupByOutputType = {
    area_Index: number
    area_name: string | null
    area_MissionCount: number | null
    area_StoreCount: number | null
    _count: AREASCountAggregateOutputType | null
    _avg: AREASAvgAggregateOutputType | null
    _sum: AREASSumAggregateOutputType | null
    _min: AREASMinAggregateOutputType | null
    _max: AREASMaxAggregateOutputType | null
  }

  type GetAREASGroupByPayload<T extends AREASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AREASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AREASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AREASGroupByOutputType[P]>
            : GetScalarType<T[P], AREASGroupByOutputType[P]>
        }
      >
    >


  export type AREASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    area_Index?: boolean
    area_name?: boolean
    area_MissionCount?: boolean
    area_StoreCount?: boolean
  }, ExtArgs["result"]["aREAS"]>



  export type AREASSelectScalar = {
    area_Index?: boolean
    area_name?: boolean
    area_MissionCount?: boolean
    area_StoreCount?: boolean
  }

  export type AREASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"area_Index" | "area_name" | "area_MissionCount" | "area_StoreCount", ExtArgs["result"]["aREAS"]>

  export type $AREASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AREAS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      area_Index: number
      area_name: string | null
      area_MissionCount: number | null
      area_StoreCount: number | null
    }, ExtArgs["result"]["aREAS"]>
    composites: {}
  }

  type AREASGetPayload<S extends boolean | null | undefined | AREASDefaultArgs> = $Result.GetResult<Prisma.$AREASPayload, S>

  type AREASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AREASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AREASCountAggregateInputType | true
    }

  export interface AREASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AREAS'], meta: { name: 'AREAS' } }
    /**
     * Find zero or one AREAS that matches the filter.
     * @param {AREASFindUniqueArgs} args - Arguments to find a AREAS
     * @example
     * // Get one AREAS
     * const aREAS = await prisma.aREAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AREASFindUniqueArgs>(args: SelectSubset<T, AREASFindUniqueArgs<ExtArgs>>): Prisma__AREASClient<$Result.GetResult<Prisma.$AREASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AREAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AREASFindUniqueOrThrowArgs} args - Arguments to find a AREAS
     * @example
     * // Get one AREAS
     * const aREAS = await prisma.aREAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AREASFindUniqueOrThrowArgs>(args: SelectSubset<T, AREASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AREASClient<$Result.GetResult<Prisma.$AREASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AREAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREASFindFirstArgs} args - Arguments to find a AREAS
     * @example
     * // Get one AREAS
     * const aREAS = await prisma.aREAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AREASFindFirstArgs>(args?: SelectSubset<T, AREASFindFirstArgs<ExtArgs>>): Prisma__AREASClient<$Result.GetResult<Prisma.$AREASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AREAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREASFindFirstOrThrowArgs} args - Arguments to find a AREAS
     * @example
     * // Get one AREAS
     * const aREAS = await prisma.aREAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AREASFindFirstOrThrowArgs>(args?: SelectSubset<T, AREASFindFirstOrThrowArgs<ExtArgs>>): Prisma__AREASClient<$Result.GetResult<Prisma.$AREASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AREAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AREAS
     * const aREAS = await prisma.aREAS.findMany()
     * 
     * // Get first 10 AREAS
     * const aREAS = await prisma.aREAS.findMany({ take: 10 })
     * 
     * // Only select the `area_Index`
     * const aREASWithArea_IndexOnly = await prisma.aREAS.findMany({ select: { area_Index: true } })
     * 
     */
    findMany<T extends AREASFindManyArgs>(args?: SelectSubset<T, AREASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AREASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AREAS.
     * @param {AREASCreateArgs} args - Arguments to create a AREAS.
     * @example
     * // Create one AREAS
     * const AREAS = await prisma.aREAS.create({
     *   data: {
     *     // ... data to create a AREAS
     *   }
     * })
     * 
     */
    create<T extends AREASCreateArgs>(args: SelectSubset<T, AREASCreateArgs<ExtArgs>>): Prisma__AREASClient<$Result.GetResult<Prisma.$AREASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AREAS.
     * @param {AREASCreateManyArgs} args - Arguments to create many AREAS.
     * @example
     * // Create many AREAS
     * const aREAS = await prisma.aREAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AREASCreateManyArgs>(args?: SelectSubset<T, AREASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AREAS.
     * @param {AREASDeleteArgs} args - Arguments to delete one AREAS.
     * @example
     * // Delete one AREAS
     * const AREAS = await prisma.aREAS.delete({
     *   where: {
     *     // ... filter to delete one AREAS
     *   }
     * })
     * 
     */
    delete<T extends AREASDeleteArgs>(args: SelectSubset<T, AREASDeleteArgs<ExtArgs>>): Prisma__AREASClient<$Result.GetResult<Prisma.$AREASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AREAS.
     * @param {AREASUpdateArgs} args - Arguments to update one AREAS.
     * @example
     * // Update one AREAS
     * const aREAS = await prisma.aREAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AREASUpdateArgs>(args: SelectSubset<T, AREASUpdateArgs<ExtArgs>>): Prisma__AREASClient<$Result.GetResult<Prisma.$AREASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AREAS.
     * @param {AREASDeleteManyArgs} args - Arguments to filter AREAS to delete.
     * @example
     * // Delete a few AREAS
     * const { count } = await prisma.aREAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AREASDeleteManyArgs>(args?: SelectSubset<T, AREASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AREAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AREAS
     * const aREAS = await prisma.aREAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AREASUpdateManyArgs>(args: SelectSubset<T, AREASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AREAS.
     * @param {AREASUpsertArgs} args - Arguments to update or create a AREAS.
     * @example
     * // Update or create a AREAS
     * const aREAS = await prisma.aREAS.upsert({
     *   create: {
     *     // ... data to create a AREAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AREAS we want to update
     *   }
     * })
     */
    upsert<T extends AREASUpsertArgs>(args: SelectSubset<T, AREASUpsertArgs<ExtArgs>>): Prisma__AREASClient<$Result.GetResult<Prisma.$AREASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AREAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREASCountArgs} args - Arguments to filter AREAS to count.
     * @example
     * // Count the number of AREAS
     * const count = await prisma.aREAS.count({
     *   where: {
     *     // ... the filter for the AREAS we want to count
     *   }
     * })
    **/
    count<T extends AREASCountArgs>(
      args?: Subset<T, AREASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AREASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AREAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AREASAggregateArgs>(args: Subset<T, AREASAggregateArgs>): Prisma.PrismaPromise<GetAREASAggregateType<T>>

    /**
     * Group by AREAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREASGroupByArgs} args - Group by arguments.
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
      T extends AREASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AREASGroupByArgs['orderBy'] }
        : { orderBy?: AREASGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AREASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAREASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AREAS model
   */
  readonly fields: AREASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AREAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AREASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AREAS model
   */
  interface AREASFieldRefs {
    readonly area_Index: FieldRef<"AREAS", 'Int'>
    readonly area_name: FieldRef<"AREAS", 'String'>
    readonly area_MissionCount: FieldRef<"AREAS", 'Int'>
    readonly area_StoreCount: FieldRef<"AREAS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AREAS findUnique
   */
  export type AREASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
    /**
     * Filter, which AREAS to fetch.
     */
    where: AREASWhereUniqueInput
  }

  /**
   * AREAS findUniqueOrThrow
   */
  export type AREASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
    /**
     * Filter, which AREAS to fetch.
     */
    where: AREASWhereUniqueInput
  }

  /**
   * AREAS findFirst
   */
  export type AREASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
    /**
     * Filter, which AREAS to fetch.
     */
    where?: AREASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AREAS to fetch.
     */
    orderBy?: AREASOrderByWithRelationInput | AREASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AREAS.
     */
    cursor?: AREASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AREAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AREAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AREAS.
     */
    distinct?: AREASScalarFieldEnum | AREASScalarFieldEnum[]
  }

  /**
   * AREAS findFirstOrThrow
   */
  export type AREASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
    /**
     * Filter, which AREAS to fetch.
     */
    where?: AREASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AREAS to fetch.
     */
    orderBy?: AREASOrderByWithRelationInput | AREASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AREAS.
     */
    cursor?: AREASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AREAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AREAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AREAS.
     */
    distinct?: AREASScalarFieldEnum | AREASScalarFieldEnum[]
  }

  /**
   * AREAS findMany
   */
  export type AREASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
    /**
     * Filter, which AREAS to fetch.
     */
    where?: AREASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AREAS to fetch.
     */
    orderBy?: AREASOrderByWithRelationInput | AREASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AREAS.
     */
    cursor?: AREASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AREAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AREAS.
     */
    skip?: number
    distinct?: AREASScalarFieldEnum | AREASScalarFieldEnum[]
  }

  /**
   * AREAS create
   */
  export type AREASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
    /**
     * The data needed to create a AREAS.
     */
    data?: XOR<AREASCreateInput, AREASUncheckedCreateInput>
  }

  /**
   * AREAS createMany
   */
  export type AREASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AREAS.
     */
    data: AREASCreateManyInput | AREASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AREAS update
   */
  export type AREASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
    /**
     * The data needed to update a AREAS.
     */
    data: XOR<AREASUpdateInput, AREASUncheckedUpdateInput>
    /**
     * Choose, which AREAS to update.
     */
    where: AREASWhereUniqueInput
  }

  /**
   * AREAS updateMany
   */
  export type AREASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AREAS.
     */
    data: XOR<AREASUpdateManyMutationInput, AREASUncheckedUpdateManyInput>
    /**
     * Filter which AREAS to update
     */
    where?: AREASWhereInput
    /**
     * Limit how many AREAS to update.
     */
    limit?: number
  }

  /**
   * AREAS upsert
   */
  export type AREASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
    /**
     * The filter to search for the AREAS to update in case it exists.
     */
    where: AREASWhereUniqueInput
    /**
     * In case the AREAS found by the `where` argument doesn't exist, create a new AREAS with this data.
     */
    create: XOR<AREASCreateInput, AREASUncheckedCreateInput>
    /**
     * In case the AREAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AREASUpdateInput, AREASUncheckedUpdateInput>
  }

  /**
   * AREAS delete
   */
  export type AREASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
    /**
     * Filter which AREAS to delete.
     */
    where: AREASWhereUniqueInput
  }

  /**
   * AREAS deleteMany
   */
  export type AREASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AREAS to delete
     */
    where?: AREASWhereInput
    /**
     * Limit how many AREAS to delete.
     */
    limit?: number
  }

  /**
   * AREAS without action
   */
  export type AREASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS
     */
    select?: AREASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS
     */
    omit?: AREASOmit<ExtArgs> | null
  }


  /**
   * Model FOOD_TYPES
   */

  export type AggregateFOOD_TYPES = {
    _count: FOOD_TYPESCountAggregateOutputType | null
    _avg: FOOD_TYPESAvgAggregateOutputType | null
    _sum: FOOD_TYPESSumAggregateOutputType | null
    _min: FOOD_TYPESMinAggregateOutputType | null
    _max: FOOD_TYPESMaxAggregateOutputType | null
  }

  export type FOOD_TYPESAvgAggregateOutputType = {
    food_index: number | null
  }

  export type FOOD_TYPESSumAggregateOutputType = {
    food_index: number | null
  }

  export type FOOD_TYPESMinAggregateOutputType = {
    food_index: number | null
    food_type: string | null
  }

  export type FOOD_TYPESMaxAggregateOutputType = {
    food_index: number | null
    food_type: string | null
  }

  export type FOOD_TYPESCountAggregateOutputType = {
    food_index: number
    food_type: number
    _all: number
  }


  export type FOOD_TYPESAvgAggregateInputType = {
    food_index?: true
  }

  export type FOOD_TYPESSumAggregateInputType = {
    food_index?: true
  }

  export type FOOD_TYPESMinAggregateInputType = {
    food_index?: true
    food_type?: true
  }

  export type FOOD_TYPESMaxAggregateInputType = {
    food_index?: true
    food_type?: true
  }

  export type FOOD_TYPESCountAggregateInputType = {
    food_index?: true
    food_type?: true
    _all?: true
  }

  export type FOOD_TYPESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FOOD_TYPES to aggregate.
     */
    where?: FOOD_TYPESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FOOD_TYPES to fetch.
     */
    orderBy?: FOOD_TYPESOrderByWithRelationInput | FOOD_TYPESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FOOD_TYPESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FOOD_TYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FOOD_TYPES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FOOD_TYPES
    **/
    _count?: true | FOOD_TYPESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FOOD_TYPESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FOOD_TYPESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FOOD_TYPESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FOOD_TYPESMaxAggregateInputType
  }

  export type GetFOOD_TYPESAggregateType<T extends FOOD_TYPESAggregateArgs> = {
        [P in keyof T & keyof AggregateFOOD_TYPES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFOOD_TYPES[P]>
      : GetScalarType<T[P], AggregateFOOD_TYPES[P]>
  }




  export type FOOD_TYPESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FOOD_TYPESWhereInput
    orderBy?: FOOD_TYPESOrderByWithAggregationInput | FOOD_TYPESOrderByWithAggregationInput[]
    by: FOOD_TYPESScalarFieldEnum[] | FOOD_TYPESScalarFieldEnum
    having?: FOOD_TYPESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FOOD_TYPESCountAggregateInputType | true
    _avg?: FOOD_TYPESAvgAggregateInputType
    _sum?: FOOD_TYPESSumAggregateInputType
    _min?: FOOD_TYPESMinAggregateInputType
    _max?: FOOD_TYPESMaxAggregateInputType
  }

  export type FOOD_TYPESGroupByOutputType = {
    food_index: number
    food_type: string | null
    _count: FOOD_TYPESCountAggregateOutputType | null
    _avg: FOOD_TYPESAvgAggregateOutputType | null
    _sum: FOOD_TYPESSumAggregateOutputType | null
    _min: FOOD_TYPESMinAggregateOutputType | null
    _max: FOOD_TYPESMaxAggregateOutputType | null
  }

  type GetFOOD_TYPESGroupByPayload<T extends FOOD_TYPESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FOOD_TYPESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FOOD_TYPESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FOOD_TYPESGroupByOutputType[P]>
            : GetScalarType<T[P], FOOD_TYPESGroupByOutputType[P]>
        }
      >
    >


  export type FOOD_TYPESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_index?: boolean
    food_type?: boolean
  }, ExtArgs["result"]["fOOD_TYPES"]>



  export type FOOD_TYPESSelectScalar = {
    food_index?: boolean
    food_type?: boolean
  }

  export type FOOD_TYPESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"food_index" | "food_type", ExtArgs["result"]["fOOD_TYPES"]>

  export type $FOOD_TYPESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FOOD_TYPES"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      food_index: number
      food_type: string | null
    }, ExtArgs["result"]["fOOD_TYPES"]>
    composites: {}
  }

  type FOOD_TYPESGetPayload<S extends boolean | null | undefined | FOOD_TYPESDefaultArgs> = $Result.GetResult<Prisma.$FOOD_TYPESPayload, S>

  type FOOD_TYPESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FOOD_TYPESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FOOD_TYPESCountAggregateInputType | true
    }

  export interface FOOD_TYPESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FOOD_TYPES'], meta: { name: 'FOOD_TYPES' } }
    /**
     * Find zero or one FOOD_TYPES that matches the filter.
     * @param {FOOD_TYPESFindUniqueArgs} args - Arguments to find a FOOD_TYPES
     * @example
     * // Get one FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FOOD_TYPESFindUniqueArgs>(args: SelectSubset<T, FOOD_TYPESFindUniqueArgs<ExtArgs>>): Prisma__FOOD_TYPESClient<$Result.GetResult<Prisma.$FOOD_TYPESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FOOD_TYPES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FOOD_TYPESFindUniqueOrThrowArgs} args - Arguments to find a FOOD_TYPES
     * @example
     * // Get one FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FOOD_TYPESFindUniqueOrThrowArgs>(args: SelectSubset<T, FOOD_TYPESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FOOD_TYPESClient<$Result.GetResult<Prisma.$FOOD_TYPESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FOOD_TYPES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FOOD_TYPESFindFirstArgs} args - Arguments to find a FOOD_TYPES
     * @example
     * // Get one FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FOOD_TYPESFindFirstArgs>(args?: SelectSubset<T, FOOD_TYPESFindFirstArgs<ExtArgs>>): Prisma__FOOD_TYPESClient<$Result.GetResult<Prisma.$FOOD_TYPESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FOOD_TYPES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FOOD_TYPESFindFirstOrThrowArgs} args - Arguments to find a FOOD_TYPES
     * @example
     * // Get one FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FOOD_TYPESFindFirstOrThrowArgs>(args?: SelectSubset<T, FOOD_TYPESFindFirstOrThrowArgs<ExtArgs>>): Prisma__FOOD_TYPESClient<$Result.GetResult<Prisma.$FOOD_TYPESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FOOD_TYPES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FOOD_TYPESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.findMany()
     * 
     * // Get first 10 FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.findMany({ take: 10 })
     * 
     * // Only select the `food_index`
     * const fOOD_TYPESWithFood_indexOnly = await prisma.fOOD_TYPES.findMany({ select: { food_index: true } })
     * 
     */
    findMany<T extends FOOD_TYPESFindManyArgs>(args?: SelectSubset<T, FOOD_TYPESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FOOD_TYPESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FOOD_TYPES.
     * @param {FOOD_TYPESCreateArgs} args - Arguments to create a FOOD_TYPES.
     * @example
     * // Create one FOOD_TYPES
     * const FOOD_TYPES = await prisma.fOOD_TYPES.create({
     *   data: {
     *     // ... data to create a FOOD_TYPES
     *   }
     * })
     * 
     */
    create<T extends FOOD_TYPESCreateArgs>(args: SelectSubset<T, FOOD_TYPESCreateArgs<ExtArgs>>): Prisma__FOOD_TYPESClient<$Result.GetResult<Prisma.$FOOD_TYPESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FOOD_TYPES.
     * @param {FOOD_TYPESCreateManyArgs} args - Arguments to create many FOOD_TYPES.
     * @example
     * // Create many FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FOOD_TYPESCreateManyArgs>(args?: SelectSubset<T, FOOD_TYPESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FOOD_TYPES.
     * @param {FOOD_TYPESDeleteArgs} args - Arguments to delete one FOOD_TYPES.
     * @example
     * // Delete one FOOD_TYPES
     * const FOOD_TYPES = await prisma.fOOD_TYPES.delete({
     *   where: {
     *     // ... filter to delete one FOOD_TYPES
     *   }
     * })
     * 
     */
    delete<T extends FOOD_TYPESDeleteArgs>(args: SelectSubset<T, FOOD_TYPESDeleteArgs<ExtArgs>>): Prisma__FOOD_TYPESClient<$Result.GetResult<Prisma.$FOOD_TYPESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FOOD_TYPES.
     * @param {FOOD_TYPESUpdateArgs} args - Arguments to update one FOOD_TYPES.
     * @example
     * // Update one FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FOOD_TYPESUpdateArgs>(args: SelectSubset<T, FOOD_TYPESUpdateArgs<ExtArgs>>): Prisma__FOOD_TYPESClient<$Result.GetResult<Prisma.$FOOD_TYPESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FOOD_TYPES.
     * @param {FOOD_TYPESDeleteManyArgs} args - Arguments to filter FOOD_TYPES to delete.
     * @example
     * // Delete a few FOOD_TYPES
     * const { count } = await prisma.fOOD_TYPES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FOOD_TYPESDeleteManyArgs>(args?: SelectSubset<T, FOOD_TYPESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FOOD_TYPES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FOOD_TYPESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FOOD_TYPESUpdateManyArgs>(args: SelectSubset<T, FOOD_TYPESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FOOD_TYPES.
     * @param {FOOD_TYPESUpsertArgs} args - Arguments to update or create a FOOD_TYPES.
     * @example
     * // Update or create a FOOD_TYPES
     * const fOOD_TYPES = await prisma.fOOD_TYPES.upsert({
     *   create: {
     *     // ... data to create a FOOD_TYPES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FOOD_TYPES we want to update
     *   }
     * })
     */
    upsert<T extends FOOD_TYPESUpsertArgs>(args: SelectSubset<T, FOOD_TYPESUpsertArgs<ExtArgs>>): Prisma__FOOD_TYPESClient<$Result.GetResult<Prisma.$FOOD_TYPESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FOOD_TYPES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FOOD_TYPESCountArgs} args - Arguments to filter FOOD_TYPES to count.
     * @example
     * // Count the number of FOOD_TYPES
     * const count = await prisma.fOOD_TYPES.count({
     *   where: {
     *     // ... the filter for the FOOD_TYPES we want to count
     *   }
     * })
    **/
    count<T extends FOOD_TYPESCountArgs>(
      args?: Subset<T, FOOD_TYPESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FOOD_TYPESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FOOD_TYPES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FOOD_TYPESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FOOD_TYPESAggregateArgs>(args: Subset<T, FOOD_TYPESAggregateArgs>): Prisma.PrismaPromise<GetFOOD_TYPESAggregateType<T>>

    /**
     * Group by FOOD_TYPES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FOOD_TYPESGroupByArgs} args - Group by arguments.
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
      T extends FOOD_TYPESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FOOD_TYPESGroupByArgs['orderBy'] }
        : { orderBy?: FOOD_TYPESGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FOOD_TYPESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFOOD_TYPESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FOOD_TYPES model
   */
  readonly fields: FOOD_TYPESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FOOD_TYPES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FOOD_TYPESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FOOD_TYPES model
   */
  interface FOOD_TYPESFieldRefs {
    readonly food_index: FieldRef<"FOOD_TYPES", 'Int'>
    readonly food_type: FieldRef<"FOOD_TYPES", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FOOD_TYPES findUnique
   */
  export type FOOD_TYPESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
    /**
     * Filter, which FOOD_TYPES to fetch.
     */
    where: FOOD_TYPESWhereUniqueInput
  }

  /**
   * FOOD_TYPES findUniqueOrThrow
   */
  export type FOOD_TYPESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
    /**
     * Filter, which FOOD_TYPES to fetch.
     */
    where: FOOD_TYPESWhereUniqueInput
  }

  /**
   * FOOD_TYPES findFirst
   */
  export type FOOD_TYPESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
    /**
     * Filter, which FOOD_TYPES to fetch.
     */
    where?: FOOD_TYPESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FOOD_TYPES to fetch.
     */
    orderBy?: FOOD_TYPESOrderByWithRelationInput | FOOD_TYPESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FOOD_TYPES.
     */
    cursor?: FOOD_TYPESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FOOD_TYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FOOD_TYPES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FOOD_TYPES.
     */
    distinct?: FOOD_TYPESScalarFieldEnum | FOOD_TYPESScalarFieldEnum[]
  }

  /**
   * FOOD_TYPES findFirstOrThrow
   */
  export type FOOD_TYPESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
    /**
     * Filter, which FOOD_TYPES to fetch.
     */
    where?: FOOD_TYPESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FOOD_TYPES to fetch.
     */
    orderBy?: FOOD_TYPESOrderByWithRelationInput | FOOD_TYPESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FOOD_TYPES.
     */
    cursor?: FOOD_TYPESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FOOD_TYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FOOD_TYPES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FOOD_TYPES.
     */
    distinct?: FOOD_TYPESScalarFieldEnum | FOOD_TYPESScalarFieldEnum[]
  }

  /**
   * FOOD_TYPES findMany
   */
  export type FOOD_TYPESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
    /**
     * Filter, which FOOD_TYPES to fetch.
     */
    where?: FOOD_TYPESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FOOD_TYPES to fetch.
     */
    orderBy?: FOOD_TYPESOrderByWithRelationInput | FOOD_TYPESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FOOD_TYPES.
     */
    cursor?: FOOD_TYPESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FOOD_TYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FOOD_TYPES.
     */
    skip?: number
    distinct?: FOOD_TYPESScalarFieldEnum | FOOD_TYPESScalarFieldEnum[]
  }

  /**
   * FOOD_TYPES create
   */
  export type FOOD_TYPESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
    /**
     * The data needed to create a FOOD_TYPES.
     */
    data: XOR<FOOD_TYPESCreateInput, FOOD_TYPESUncheckedCreateInput>
  }

  /**
   * FOOD_TYPES createMany
   */
  export type FOOD_TYPESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FOOD_TYPES.
     */
    data: FOOD_TYPESCreateManyInput | FOOD_TYPESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FOOD_TYPES update
   */
  export type FOOD_TYPESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
    /**
     * The data needed to update a FOOD_TYPES.
     */
    data: XOR<FOOD_TYPESUpdateInput, FOOD_TYPESUncheckedUpdateInput>
    /**
     * Choose, which FOOD_TYPES to update.
     */
    where: FOOD_TYPESWhereUniqueInput
  }

  /**
   * FOOD_TYPES updateMany
   */
  export type FOOD_TYPESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FOOD_TYPES.
     */
    data: XOR<FOOD_TYPESUpdateManyMutationInput, FOOD_TYPESUncheckedUpdateManyInput>
    /**
     * Filter which FOOD_TYPES to update
     */
    where?: FOOD_TYPESWhereInput
    /**
     * Limit how many FOOD_TYPES to update.
     */
    limit?: number
  }

  /**
   * FOOD_TYPES upsert
   */
  export type FOOD_TYPESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
    /**
     * The filter to search for the FOOD_TYPES to update in case it exists.
     */
    where: FOOD_TYPESWhereUniqueInput
    /**
     * In case the FOOD_TYPES found by the `where` argument doesn't exist, create a new FOOD_TYPES with this data.
     */
    create: XOR<FOOD_TYPESCreateInput, FOOD_TYPESUncheckedCreateInput>
    /**
     * In case the FOOD_TYPES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FOOD_TYPESUpdateInput, FOOD_TYPESUncheckedUpdateInput>
  }

  /**
   * FOOD_TYPES delete
   */
  export type FOOD_TYPESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
    /**
     * Filter which FOOD_TYPES to delete.
     */
    where: FOOD_TYPESWhereUniqueInput
  }

  /**
   * FOOD_TYPES deleteMany
   */
  export type FOOD_TYPESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FOOD_TYPES to delete
     */
    where?: FOOD_TYPESWhereInput
    /**
     * Limit how many FOOD_TYPES to delete.
     */
    limit?: number
  }

  /**
   * FOOD_TYPES without action
   */
  export type FOOD_TYPESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FOOD_TYPES
     */
    select?: FOOD_TYPESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FOOD_TYPES
     */
    omit?: FOOD_TYPESOmit<ExtArgs> | null
  }


  /**
   * Model MISSIONS
   */

  export type AggregateMISSIONS = {
    _count: MISSIONSCountAggregateOutputType | null
    _avg: MISSIONSAvgAggregateOutputType | null
    _sum: MISSIONSSumAggregateOutputType | null
    _min: MISSIONSMinAggregateOutputType | null
    _max: MISSIONSMaxAggregateOutputType | null
  }

  export type MISSIONSAvgAggregateOutputType = {
    mission_Index: number | null
    store_Index: number | null
    area_index: number | null
    mission_Point: number | null
  }

  export type MISSIONSSumAggregateOutputType = {
    mission_Index: number | null
    store_Index: number | null
    area_index: number | null
    mission_Point: number | null
  }

  export type MISSIONSMinAggregateOutputType = {
    mission_Index: number | null
    mission_Contents: string | null
    store_Index: number | null
    area_index: number | null
    mission_Point: number | null
  }

  export type MISSIONSMaxAggregateOutputType = {
    mission_Index: number | null
    mission_Contents: string | null
    store_Index: number | null
    area_index: number | null
    mission_Point: number | null
  }

  export type MISSIONSCountAggregateOutputType = {
    mission_Index: number
    mission_Contents: number
    store_Index: number
    area_index: number
    mission_Point: number
    _all: number
  }


  export type MISSIONSAvgAggregateInputType = {
    mission_Index?: true
    store_Index?: true
    area_index?: true
    mission_Point?: true
  }

  export type MISSIONSSumAggregateInputType = {
    mission_Index?: true
    store_Index?: true
    area_index?: true
    mission_Point?: true
  }

  export type MISSIONSMinAggregateInputType = {
    mission_Index?: true
    mission_Contents?: true
    store_Index?: true
    area_index?: true
    mission_Point?: true
  }

  export type MISSIONSMaxAggregateInputType = {
    mission_Index?: true
    mission_Contents?: true
    store_Index?: true
    area_index?: true
    mission_Point?: true
  }

  export type MISSIONSCountAggregateInputType = {
    mission_Index?: true
    mission_Contents?: true
    store_Index?: true
    area_index?: true
    mission_Point?: true
    _all?: true
  }

  export type MISSIONSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MISSIONS to aggregate.
     */
    where?: MISSIONSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MISSIONS to fetch.
     */
    orderBy?: MISSIONSOrderByWithRelationInput | MISSIONSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MISSIONSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MISSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MISSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MISSIONS
    **/
    _count?: true | MISSIONSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MISSIONSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MISSIONSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MISSIONSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MISSIONSMaxAggregateInputType
  }

  export type GetMISSIONSAggregateType<T extends MISSIONSAggregateArgs> = {
        [P in keyof T & keyof AggregateMISSIONS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMISSIONS[P]>
      : GetScalarType<T[P], AggregateMISSIONS[P]>
  }




  export type MISSIONSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MISSIONSWhereInput
    orderBy?: MISSIONSOrderByWithAggregationInput | MISSIONSOrderByWithAggregationInput[]
    by: MISSIONSScalarFieldEnum[] | MISSIONSScalarFieldEnum
    having?: MISSIONSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MISSIONSCountAggregateInputType | true
    _avg?: MISSIONSAvgAggregateInputType
    _sum?: MISSIONSSumAggregateInputType
    _min?: MISSIONSMinAggregateInputType
    _max?: MISSIONSMaxAggregateInputType
  }

  export type MISSIONSGroupByOutputType = {
    mission_Index: number
    mission_Contents: string | null
    store_Index: number
    area_index: number | null
    mission_Point: number | null
    _count: MISSIONSCountAggregateOutputType | null
    _avg: MISSIONSAvgAggregateOutputType | null
    _sum: MISSIONSSumAggregateOutputType | null
    _min: MISSIONSMinAggregateOutputType | null
    _max: MISSIONSMaxAggregateOutputType | null
  }

  type GetMISSIONSGroupByPayload<T extends MISSIONSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MISSIONSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MISSIONSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MISSIONSGroupByOutputType[P]>
            : GetScalarType<T[P], MISSIONSGroupByOutputType[P]>
        }
      >
    >


  export type MISSIONSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mission_Index?: boolean
    mission_Contents?: boolean
    store_Index?: boolean
    area_index?: boolean
    mission_Point?: boolean
  }, ExtArgs["result"]["mISSIONS"]>



  export type MISSIONSSelectScalar = {
    mission_Index?: boolean
    mission_Contents?: boolean
    store_Index?: boolean
    area_index?: boolean
    mission_Point?: boolean
  }

  export type MISSIONSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mission_Index" | "mission_Contents" | "store_Index" | "area_index" | "mission_Point", ExtArgs["result"]["mISSIONS"]>

  export type $MISSIONSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MISSIONS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      mission_Index: number
      mission_Contents: string | null
      store_Index: number
      area_index: number | null
      mission_Point: number | null
    }, ExtArgs["result"]["mISSIONS"]>
    composites: {}
  }

  type MISSIONSGetPayload<S extends boolean | null | undefined | MISSIONSDefaultArgs> = $Result.GetResult<Prisma.$MISSIONSPayload, S>

  type MISSIONSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MISSIONSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MISSIONSCountAggregateInputType | true
    }

  export interface MISSIONSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MISSIONS'], meta: { name: 'MISSIONS' } }
    /**
     * Find zero or one MISSIONS that matches the filter.
     * @param {MISSIONSFindUniqueArgs} args - Arguments to find a MISSIONS
     * @example
     * // Get one MISSIONS
     * const mISSIONS = await prisma.mISSIONS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MISSIONSFindUniqueArgs>(args: SelectSubset<T, MISSIONSFindUniqueArgs<ExtArgs>>): Prisma__MISSIONSClient<$Result.GetResult<Prisma.$MISSIONSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MISSIONS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MISSIONSFindUniqueOrThrowArgs} args - Arguments to find a MISSIONS
     * @example
     * // Get one MISSIONS
     * const mISSIONS = await prisma.mISSIONS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MISSIONSFindUniqueOrThrowArgs>(args: SelectSubset<T, MISSIONSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MISSIONSClient<$Result.GetResult<Prisma.$MISSIONSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MISSIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MISSIONSFindFirstArgs} args - Arguments to find a MISSIONS
     * @example
     * // Get one MISSIONS
     * const mISSIONS = await prisma.mISSIONS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MISSIONSFindFirstArgs>(args?: SelectSubset<T, MISSIONSFindFirstArgs<ExtArgs>>): Prisma__MISSIONSClient<$Result.GetResult<Prisma.$MISSIONSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MISSIONS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MISSIONSFindFirstOrThrowArgs} args - Arguments to find a MISSIONS
     * @example
     * // Get one MISSIONS
     * const mISSIONS = await prisma.mISSIONS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MISSIONSFindFirstOrThrowArgs>(args?: SelectSubset<T, MISSIONSFindFirstOrThrowArgs<ExtArgs>>): Prisma__MISSIONSClient<$Result.GetResult<Prisma.$MISSIONSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MISSIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MISSIONSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MISSIONS
     * const mISSIONS = await prisma.mISSIONS.findMany()
     * 
     * // Get first 10 MISSIONS
     * const mISSIONS = await prisma.mISSIONS.findMany({ take: 10 })
     * 
     * // Only select the `mission_Index`
     * const mISSIONSWithMission_IndexOnly = await prisma.mISSIONS.findMany({ select: { mission_Index: true } })
     * 
     */
    findMany<T extends MISSIONSFindManyArgs>(args?: SelectSubset<T, MISSIONSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MISSIONSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MISSIONS.
     * @param {MISSIONSCreateArgs} args - Arguments to create a MISSIONS.
     * @example
     * // Create one MISSIONS
     * const MISSIONS = await prisma.mISSIONS.create({
     *   data: {
     *     // ... data to create a MISSIONS
     *   }
     * })
     * 
     */
    create<T extends MISSIONSCreateArgs>(args: SelectSubset<T, MISSIONSCreateArgs<ExtArgs>>): Prisma__MISSIONSClient<$Result.GetResult<Prisma.$MISSIONSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MISSIONS.
     * @param {MISSIONSCreateManyArgs} args - Arguments to create many MISSIONS.
     * @example
     * // Create many MISSIONS
     * const mISSIONS = await prisma.mISSIONS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MISSIONSCreateManyArgs>(args?: SelectSubset<T, MISSIONSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MISSIONS.
     * @param {MISSIONSDeleteArgs} args - Arguments to delete one MISSIONS.
     * @example
     * // Delete one MISSIONS
     * const MISSIONS = await prisma.mISSIONS.delete({
     *   where: {
     *     // ... filter to delete one MISSIONS
     *   }
     * })
     * 
     */
    delete<T extends MISSIONSDeleteArgs>(args: SelectSubset<T, MISSIONSDeleteArgs<ExtArgs>>): Prisma__MISSIONSClient<$Result.GetResult<Prisma.$MISSIONSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MISSIONS.
     * @param {MISSIONSUpdateArgs} args - Arguments to update one MISSIONS.
     * @example
     * // Update one MISSIONS
     * const mISSIONS = await prisma.mISSIONS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MISSIONSUpdateArgs>(args: SelectSubset<T, MISSIONSUpdateArgs<ExtArgs>>): Prisma__MISSIONSClient<$Result.GetResult<Prisma.$MISSIONSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MISSIONS.
     * @param {MISSIONSDeleteManyArgs} args - Arguments to filter MISSIONS to delete.
     * @example
     * // Delete a few MISSIONS
     * const { count } = await prisma.mISSIONS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MISSIONSDeleteManyArgs>(args?: SelectSubset<T, MISSIONSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MISSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MISSIONSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MISSIONS
     * const mISSIONS = await prisma.mISSIONS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MISSIONSUpdateManyArgs>(args: SelectSubset<T, MISSIONSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MISSIONS.
     * @param {MISSIONSUpsertArgs} args - Arguments to update or create a MISSIONS.
     * @example
     * // Update or create a MISSIONS
     * const mISSIONS = await prisma.mISSIONS.upsert({
     *   create: {
     *     // ... data to create a MISSIONS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MISSIONS we want to update
     *   }
     * })
     */
    upsert<T extends MISSIONSUpsertArgs>(args: SelectSubset<T, MISSIONSUpsertArgs<ExtArgs>>): Prisma__MISSIONSClient<$Result.GetResult<Prisma.$MISSIONSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MISSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MISSIONSCountArgs} args - Arguments to filter MISSIONS to count.
     * @example
     * // Count the number of MISSIONS
     * const count = await prisma.mISSIONS.count({
     *   where: {
     *     // ... the filter for the MISSIONS we want to count
     *   }
     * })
    **/
    count<T extends MISSIONSCountArgs>(
      args?: Subset<T, MISSIONSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MISSIONSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MISSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MISSIONSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MISSIONSAggregateArgs>(args: Subset<T, MISSIONSAggregateArgs>): Prisma.PrismaPromise<GetMISSIONSAggregateType<T>>

    /**
     * Group by MISSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MISSIONSGroupByArgs} args - Group by arguments.
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
      T extends MISSIONSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MISSIONSGroupByArgs['orderBy'] }
        : { orderBy?: MISSIONSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MISSIONSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMISSIONSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MISSIONS model
   */
  readonly fields: MISSIONSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MISSIONS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MISSIONSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MISSIONS model
   */
  interface MISSIONSFieldRefs {
    readonly mission_Index: FieldRef<"MISSIONS", 'Int'>
    readonly mission_Contents: FieldRef<"MISSIONS", 'String'>
    readonly store_Index: FieldRef<"MISSIONS", 'Int'>
    readonly area_index: FieldRef<"MISSIONS", 'Int'>
    readonly mission_Point: FieldRef<"MISSIONS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MISSIONS findUnique
   */
  export type MISSIONSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
    /**
     * Filter, which MISSIONS to fetch.
     */
    where: MISSIONSWhereUniqueInput
  }

  /**
   * MISSIONS findUniqueOrThrow
   */
  export type MISSIONSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
    /**
     * Filter, which MISSIONS to fetch.
     */
    where: MISSIONSWhereUniqueInput
  }

  /**
   * MISSIONS findFirst
   */
  export type MISSIONSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
    /**
     * Filter, which MISSIONS to fetch.
     */
    where?: MISSIONSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MISSIONS to fetch.
     */
    orderBy?: MISSIONSOrderByWithRelationInput | MISSIONSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MISSIONS.
     */
    cursor?: MISSIONSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MISSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MISSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MISSIONS.
     */
    distinct?: MISSIONSScalarFieldEnum | MISSIONSScalarFieldEnum[]
  }

  /**
   * MISSIONS findFirstOrThrow
   */
  export type MISSIONSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
    /**
     * Filter, which MISSIONS to fetch.
     */
    where?: MISSIONSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MISSIONS to fetch.
     */
    orderBy?: MISSIONSOrderByWithRelationInput | MISSIONSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MISSIONS.
     */
    cursor?: MISSIONSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MISSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MISSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MISSIONS.
     */
    distinct?: MISSIONSScalarFieldEnum | MISSIONSScalarFieldEnum[]
  }

  /**
   * MISSIONS findMany
   */
  export type MISSIONSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
    /**
     * Filter, which MISSIONS to fetch.
     */
    where?: MISSIONSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MISSIONS to fetch.
     */
    orderBy?: MISSIONSOrderByWithRelationInput | MISSIONSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MISSIONS.
     */
    cursor?: MISSIONSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MISSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MISSIONS.
     */
    skip?: number
    distinct?: MISSIONSScalarFieldEnum | MISSIONSScalarFieldEnum[]
  }

  /**
   * MISSIONS create
   */
  export type MISSIONSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
    /**
     * The data needed to create a MISSIONS.
     */
    data: XOR<MISSIONSCreateInput, MISSIONSUncheckedCreateInput>
  }

  /**
   * MISSIONS createMany
   */
  export type MISSIONSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MISSIONS.
     */
    data: MISSIONSCreateManyInput | MISSIONSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MISSIONS update
   */
  export type MISSIONSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
    /**
     * The data needed to update a MISSIONS.
     */
    data: XOR<MISSIONSUpdateInput, MISSIONSUncheckedUpdateInput>
    /**
     * Choose, which MISSIONS to update.
     */
    where: MISSIONSWhereUniqueInput
  }

  /**
   * MISSIONS updateMany
   */
  export type MISSIONSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MISSIONS.
     */
    data: XOR<MISSIONSUpdateManyMutationInput, MISSIONSUncheckedUpdateManyInput>
    /**
     * Filter which MISSIONS to update
     */
    where?: MISSIONSWhereInput
    /**
     * Limit how many MISSIONS to update.
     */
    limit?: number
  }

  /**
   * MISSIONS upsert
   */
  export type MISSIONSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
    /**
     * The filter to search for the MISSIONS to update in case it exists.
     */
    where: MISSIONSWhereUniqueInput
    /**
     * In case the MISSIONS found by the `where` argument doesn't exist, create a new MISSIONS with this data.
     */
    create: XOR<MISSIONSCreateInput, MISSIONSUncheckedCreateInput>
    /**
     * In case the MISSIONS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MISSIONSUpdateInput, MISSIONSUncheckedUpdateInput>
  }

  /**
   * MISSIONS delete
   */
  export type MISSIONSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
    /**
     * Filter which MISSIONS to delete.
     */
    where: MISSIONSWhereUniqueInput
  }

  /**
   * MISSIONS deleteMany
   */
  export type MISSIONSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MISSIONS to delete
     */
    where?: MISSIONSWhereInput
    /**
     * Limit how many MISSIONS to delete.
     */
    limit?: number
  }

  /**
   * MISSIONS without action
   */
  export type MISSIONSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MISSIONS
     */
    select?: MISSIONSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MISSIONS
     */
    omit?: MISSIONSOmit<ExtArgs> | null
  }


  /**
   * Model REVIEWS
   */

  export type AggregateREVIEWS = {
    _count: REVIEWSCountAggregateOutputType | null
    _avg: REVIEWSAvgAggregateOutputType | null
    _sum: REVIEWSSumAggregateOutputType | null
    _min: REVIEWSMinAggregateOutputType | null
    _max: REVIEWSMaxAggregateOutputType | null
  }

  export type REVIEWSAvgAggregateOutputType = {
    review_Index: number | null
    review_Stars: number | null
    store_Index: number | null
    user_Index: number | null
  }

  export type REVIEWSSumAggregateOutputType = {
    review_Index: number | null
    review_Stars: number | null
    store_Index: number | null
    user_Index: number | null
  }

  export type REVIEWSMinAggregateOutputType = {
    review_Index: number | null
    review_Contents: string | null
    review_CreatedDay: Date | null
    review_Stars: number | null
    store_Index: number | null
    user_Index: number | null
  }

  export type REVIEWSMaxAggregateOutputType = {
    review_Index: number | null
    review_Contents: string | null
    review_CreatedDay: Date | null
    review_Stars: number | null
    store_Index: number | null
    user_Index: number | null
  }

  export type REVIEWSCountAggregateOutputType = {
    review_Index: number
    review_Contents: number
    review_CreatedDay: number
    review_Stars: number
    store_Index: number
    user_Index: number
    _all: number
  }


  export type REVIEWSAvgAggregateInputType = {
    review_Index?: true
    review_Stars?: true
    store_Index?: true
    user_Index?: true
  }

  export type REVIEWSSumAggregateInputType = {
    review_Index?: true
    review_Stars?: true
    store_Index?: true
    user_Index?: true
  }

  export type REVIEWSMinAggregateInputType = {
    review_Index?: true
    review_Contents?: true
    review_CreatedDay?: true
    review_Stars?: true
    store_Index?: true
    user_Index?: true
  }

  export type REVIEWSMaxAggregateInputType = {
    review_Index?: true
    review_Contents?: true
    review_CreatedDay?: true
    review_Stars?: true
    store_Index?: true
    user_Index?: true
  }

  export type REVIEWSCountAggregateInputType = {
    review_Index?: true
    review_Contents?: true
    review_CreatedDay?: true
    review_Stars?: true
    store_Index?: true
    user_Index?: true
    _all?: true
  }

  export type REVIEWSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which REVIEWS to aggregate.
     */
    where?: REVIEWSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REVIEWS to fetch.
     */
    orderBy?: REVIEWSOrderByWithRelationInput | REVIEWSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REVIEWSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REVIEWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REVIEWS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REVIEWS
    **/
    _count?: true | REVIEWSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: REVIEWSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: REVIEWSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REVIEWSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REVIEWSMaxAggregateInputType
  }

  export type GetREVIEWSAggregateType<T extends REVIEWSAggregateArgs> = {
        [P in keyof T & keyof AggregateREVIEWS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREVIEWS[P]>
      : GetScalarType<T[P], AggregateREVIEWS[P]>
  }




  export type REVIEWSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: REVIEWSWhereInput
    orderBy?: REVIEWSOrderByWithAggregationInput | REVIEWSOrderByWithAggregationInput[]
    by: REVIEWSScalarFieldEnum[] | REVIEWSScalarFieldEnum
    having?: REVIEWSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REVIEWSCountAggregateInputType | true
    _avg?: REVIEWSAvgAggregateInputType
    _sum?: REVIEWSSumAggregateInputType
    _min?: REVIEWSMinAggregateInputType
    _max?: REVIEWSMaxAggregateInputType
  }

  export type REVIEWSGroupByOutputType = {
    review_Index: number
    review_Contents: string | null
    review_CreatedDay: Date | null
    review_Stars: number | null
    store_Index: number
    user_Index: number
    _count: REVIEWSCountAggregateOutputType | null
    _avg: REVIEWSAvgAggregateOutputType | null
    _sum: REVIEWSSumAggregateOutputType | null
    _min: REVIEWSMinAggregateOutputType | null
    _max: REVIEWSMaxAggregateOutputType | null
  }

  type GetREVIEWSGroupByPayload<T extends REVIEWSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<REVIEWSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REVIEWSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REVIEWSGroupByOutputType[P]>
            : GetScalarType<T[P], REVIEWSGroupByOutputType[P]>
        }
      >
    >


  export type REVIEWSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_Index?: boolean
    review_Contents?: boolean
    review_CreatedDay?: boolean
    review_Stars?: boolean
    store_Index?: boolean
    user_Index?: boolean
  }, ExtArgs["result"]["rEVIEWS"]>



  export type REVIEWSSelectScalar = {
    review_Index?: boolean
    review_Contents?: boolean
    review_CreatedDay?: boolean
    review_Stars?: boolean
    store_Index?: boolean
    user_Index?: boolean
  }

  export type REVIEWSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_Index" | "review_Contents" | "review_CreatedDay" | "review_Stars" | "store_Index" | "user_Index", ExtArgs["result"]["rEVIEWS"]>

  export type $REVIEWSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "REVIEWS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      review_Index: number
      review_Contents: string | null
      review_CreatedDay: Date | null
      review_Stars: number | null
      store_Index: number
      user_Index: number
    }, ExtArgs["result"]["rEVIEWS"]>
    composites: {}
  }

  type REVIEWSGetPayload<S extends boolean | null | undefined | REVIEWSDefaultArgs> = $Result.GetResult<Prisma.$REVIEWSPayload, S>

  type REVIEWSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<REVIEWSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: REVIEWSCountAggregateInputType | true
    }

  export interface REVIEWSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['REVIEWS'], meta: { name: 'REVIEWS' } }
    /**
     * Find zero or one REVIEWS that matches the filter.
     * @param {REVIEWSFindUniqueArgs} args - Arguments to find a REVIEWS
     * @example
     * // Get one REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends REVIEWSFindUniqueArgs>(args: SelectSubset<T, REVIEWSFindUniqueArgs<ExtArgs>>): Prisma__REVIEWSClient<$Result.GetResult<Prisma.$REVIEWSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one REVIEWS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {REVIEWSFindUniqueOrThrowArgs} args - Arguments to find a REVIEWS
     * @example
     * // Get one REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends REVIEWSFindUniqueOrThrowArgs>(args: SelectSubset<T, REVIEWSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__REVIEWSClient<$Result.GetResult<Prisma.$REVIEWSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first REVIEWS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REVIEWSFindFirstArgs} args - Arguments to find a REVIEWS
     * @example
     * // Get one REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends REVIEWSFindFirstArgs>(args?: SelectSubset<T, REVIEWSFindFirstArgs<ExtArgs>>): Prisma__REVIEWSClient<$Result.GetResult<Prisma.$REVIEWSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first REVIEWS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REVIEWSFindFirstOrThrowArgs} args - Arguments to find a REVIEWS
     * @example
     * // Get one REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends REVIEWSFindFirstOrThrowArgs>(args?: SelectSubset<T, REVIEWSFindFirstOrThrowArgs<ExtArgs>>): Prisma__REVIEWSClient<$Result.GetResult<Prisma.$REVIEWSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more REVIEWS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REVIEWSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.findMany()
     * 
     * // Get first 10 REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.findMany({ take: 10 })
     * 
     * // Only select the `review_Index`
     * const rEVIEWSWithReview_IndexOnly = await prisma.rEVIEWS.findMany({ select: { review_Index: true } })
     * 
     */
    findMany<T extends REVIEWSFindManyArgs>(args?: SelectSubset<T, REVIEWSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$REVIEWSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a REVIEWS.
     * @param {REVIEWSCreateArgs} args - Arguments to create a REVIEWS.
     * @example
     * // Create one REVIEWS
     * const REVIEWS = await prisma.rEVIEWS.create({
     *   data: {
     *     // ... data to create a REVIEWS
     *   }
     * })
     * 
     */
    create<T extends REVIEWSCreateArgs>(args: SelectSubset<T, REVIEWSCreateArgs<ExtArgs>>): Prisma__REVIEWSClient<$Result.GetResult<Prisma.$REVIEWSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many REVIEWS.
     * @param {REVIEWSCreateManyArgs} args - Arguments to create many REVIEWS.
     * @example
     * // Create many REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends REVIEWSCreateManyArgs>(args?: SelectSubset<T, REVIEWSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a REVIEWS.
     * @param {REVIEWSDeleteArgs} args - Arguments to delete one REVIEWS.
     * @example
     * // Delete one REVIEWS
     * const REVIEWS = await prisma.rEVIEWS.delete({
     *   where: {
     *     // ... filter to delete one REVIEWS
     *   }
     * })
     * 
     */
    delete<T extends REVIEWSDeleteArgs>(args: SelectSubset<T, REVIEWSDeleteArgs<ExtArgs>>): Prisma__REVIEWSClient<$Result.GetResult<Prisma.$REVIEWSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one REVIEWS.
     * @param {REVIEWSUpdateArgs} args - Arguments to update one REVIEWS.
     * @example
     * // Update one REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends REVIEWSUpdateArgs>(args: SelectSubset<T, REVIEWSUpdateArgs<ExtArgs>>): Prisma__REVIEWSClient<$Result.GetResult<Prisma.$REVIEWSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more REVIEWS.
     * @param {REVIEWSDeleteManyArgs} args - Arguments to filter REVIEWS to delete.
     * @example
     * // Delete a few REVIEWS
     * const { count } = await prisma.rEVIEWS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends REVIEWSDeleteManyArgs>(args?: SelectSubset<T, REVIEWSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REVIEWS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REVIEWSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends REVIEWSUpdateManyArgs>(args: SelectSubset<T, REVIEWSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one REVIEWS.
     * @param {REVIEWSUpsertArgs} args - Arguments to update or create a REVIEWS.
     * @example
     * // Update or create a REVIEWS
     * const rEVIEWS = await prisma.rEVIEWS.upsert({
     *   create: {
     *     // ... data to create a REVIEWS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REVIEWS we want to update
     *   }
     * })
     */
    upsert<T extends REVIEWSUpsertArgs>(args: SelectSubset<T, REVIEWSUpsertArgs<ExtArgs>>): Prisma__REVIEWSClient<$Result.GetResult<Prisma.$REVIEWSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of REVIEWS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REVIEWSCountArgs} args - Arguments to filter REVIEWS to count.
     * @example
     * // Count the number of REVIEWS
     * const count = await prisma.rEVIEWS.count({
     *   where: {
     *     // ... the filter for the REVIEWS we want to count
     *   }
     * })
    **/
    count<T extends REVIEWSCountArgs>(
      args?: Subset<T, REVIEWSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REVIEWSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REVIEWS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REVIEWSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends REVIEWSAggregateArgs>(args: Subset<T, REVIEWSAggregateArgs>): Prisma.PrismaPromise<GetREVIEWSAggregateType<T>>

    /**
     * Group by REVIEWS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REVIEWSGroupByArgs} args - Group by arguments.
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
      T extends REVIEWSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REVIEWSGroupByArgs['orderBy'] }
        : { orderBy?: REVIEWSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, REVIEWSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREVIEWSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the REVIEWS model
   */
  readonly fields: REVIEWSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for REVIEWS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__REVIEWSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the REVIEWS model
   */
  interface REVIEWSFieldRefs {
    readonly review_Index: FieldRef<"REVIEWS", 'Int'>
    readonly review_Contents: FieldRef<"REVIEWS", 'String'>
    readonly review_CreatedDay: FieldRef<"REVIEWS", 'DateTime'>
    readonly review_Stars: FieldRef<"REVIEWS", 'Int'>
    readonly store_Index: FieldRef<"REVIEWS", 'Int'>
    readonly user_Index: FieldRef<"REVIEWS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * REVIEWS findUnique
   */
  export type REVIEWSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
    /**
     * Filter, which REVIEWS to fetch.
     */
    where: REVIEWSWhereUniqueInput
  }

  /**
   * REVIEWS findUniqueOrThrow
   */
  export type REVIEWSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
    /**
     * Filter, which REVIEWS to fetch.
     */
    where: REVIEWSWhereUniqueInput
  }

  /**
   * REVIEWS findFirst
   */
  export type REVIEWSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
    /**
     * Filter, which REVIEWS to fetch.
     */
    where?: REVIEWSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REVIEWS to fetch.
     */
    orderBy?: REVIEWSOrderByWithRelationInput | REVIEWSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REVIEWS.
     */
    cursor?: REVIEWSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REVIEWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REVIEWS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REVIEWS.
     */
    distinct?: REVIEWSScalarFieldEnum | REVIEWSScalarFieldEnum[]
  }

  /**
   * REVIEWS findFirstOrThrow
   */
  export type REVIEWSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
    /**
     * Filter, which REVIEWS to fetch.
     */
    where?: REVIEWSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REVIEWS to fetch.
     */
    orderBy?: REVIEWSOrderByWithRelationInput | REVIEWSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REVIEWS.
     */
    cursor?: REVIEWSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REVIEWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REVIEWS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REVIEWS.
     */
    distinct?: REVIEWSScalarFieldEnum | REVIEWSScalarFieldEnum[]
  }

  /**
   * REVIEWS findMany
   */
  export type REVIEWSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
    /**
     * Filter, which REVIEWS to fetch.
     */
    where?: REVIEWSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REVIEWS to fetch.
     */
    orderBy?: REVIEWSOrderByWithRelationInput | REVIEWSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REVIEWS.
     */
    cursor?: REVIEWSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REVIEWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REVIEWS.
     */
    skip?: number
    distinct?: REVIEWSScalarFieldEnum | REVIEWSScalarFieldEnum[]
  }

  /**
   * REVIEWS create
   */
  export type REVIEWSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
    /**
     * The data needed to create a REVIEWS.
     */
    data: XOR<REVIEWSCreateInput, REVIEWSUncheckedCreateInput>
  }

  /**
   * REVIEWS createMany
   */
  export type REVIEWSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many REVIEWS.
     */
    data: REVIEWSCreateManyInput | REVIEWSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * REVIEWS update
   */
  export type REVIEWSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
    /**
     * The data needed to update a REVIEWS.
     */
    data: XOR<REVIEWSUpdateInput, REVIEWSUncheckedUpdateInput>
    /**
     * Choose, which REVIEWS to update.
     */
    where: REVIEWSWhereUniqueInput
  }

  /**
   * REVIEWS updateMany
   */
  export type REVIEWSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update REVIEWS.
     */
    data: XOR<REVIEWSUpdateManyMutationInput, REVIEWSUncheckedUpdateManyInput>
    /**
     * Filter which REVIEWS to update
     */
    where?: REVIEWSWhereInput
    /**
     * Limit how many REVIEWS to update.
     */
    limit?: number
  }

  /**
   * REVIEWS upsert
   */
  export type REVIEWSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
    /**
     * The filter to search for the REVIEWS to update in case it exists.
     */
    where: REVIEWSWhereUniqueInput
    /**
     * In case the REVIEWS found by the `where` argument doesn't exist, create a new REVIEWS with this data.
     */
    create: XOR<REVIEWSCreateInput, REVIEWSUncheckedCreateInput>
    /**
     * In case the REVIEWS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REVIEWSUpdateInput, REVIEWSUncheckedUpdateInput>
  }

  /**
   * REVIEWS delete
   */
  export type REVIEWSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
    /**
     * Filter which REVIEWS to delete.
     */
    where: REVIEWSWhereUniqueInput
  }

  /**
   * REVIEWS deleteMany
   */
  export type REVIEWSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which REVIEWS to delete
     */
    where?: REVIEWSWhereInput
    /**
     * Limit how many REVIEWS to delete.
     */
    limit?: number
  }

  /**
   * REVIEWS without action
   */
  export type REVIEWSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REVIEWS
     */
    select?: REVIEWSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REVIEWS
     */
    omit?: REVIEWSOmit<ExtArgs> | null
  }


  /**
   * Model STORES
   */

  export type AggregateSTORES = {
    _count: STORESCountAggregateOutputType | null
    _avg: STORESAvgAggregateOutputType | null
    _sum: STORESSumAggregateOutputType | null
    _min: STORESMinAggregateOutputType | null
    _max: STORESMaxAggregateOutputType | null
  }

  export type STORESAvgAggregateOutputType = {
    store_Index: number | null
    area_index: number | null
  }

  export type STORESSumAggregateOutputType = {
    store_Index: number | null
    area_index: number | null
  }

  export type STORESMinAggregateOutputType = {
    store_Index: number | null
    store_Name: string | null
    store_Location: string | null
    area_index: number | null
  }

  export type STORESMaxAggregateOutputType = {
    store_Index: number | null
    store_Name: string | null
    store_Location: string | null
    area_index: number | null
  }

  export type STORESCountAggregateOutputType = {
    store_Index: number
    store_Name: number
    store_Location: number
    area_index: number
    _all: number
  }


  export type STORESAvgAggregateInputType = {
    store_Index?: true
    area_index?: true
  }

  export type STORESSumAggregateInputType = {
    store_Index?: true
    area_index?: true
  }

  export type STORESMinAggregateInputType = {
    store_Index?: true
    store_Name?: true
    store_Location?: true
    area_index?: true
  }

  export type STORESMaxAggregateInputType = {
    store_Index?: true
    store_Name?: true
    store_Location?: true
    area_index?: true
  }

  export type STORESCountAggregateInputType = {
    store_Index?: true
    store_Name?: true
    store_Location?: true
    area_index?: true
    _all?: true
  }

  export type STORESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which STORES to aggregate.
     */
    where?: STORESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STORES to fetch.
     */
    orderBy?: STORESOrderByWithRelationInput | STORESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: STORESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STORES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned STORES
    **/
    _count?: true | STORESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: STORESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: STORESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: STORESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: STORESMaxAggregateInputType
  }

  export type GetSTORESAggregateType<T extends STORESAggregateArgs> = {
        [P in keyof T & keyof AggregateSTORES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSTORES[P]>
      : GetScalarType<T[P], AggregateSTORES[P]>
  }




  export type STORESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: STORESWhereInput
    orderBy?: STORESOrderByWithAggregationInput | STORESOrderByWithAggregationInput[]
    by: STORESScalarFieldEnum[] | STORESScalarFieldEnum
    having?: STORESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: STORESCountAggregateInputType | true
    _avg?: STORESAvgAggregateInputType
    _sum?: STORESSumAggregateInputType
    _min?: STORESMinAggregateInputType
    _max?: STORESMaxAggregateInputType
  }

  export type STORESGroupByOutputType = {
    store_Index: number
    store_Name: string | null
    store_Location: string | null
    area_index: number
    _count: STORESCountAggregateOutputType | null
    _avg: STORESAvgAggregateOutputType | null
    _sum: STORESSumAggregateOutputType | null
    _min: STORESMinAggregateOutputType | null
    _max: STORESMaxAggregateOutputType | null
  }

  type GetSTORESGroupByPayload<T extends STORESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<STORESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof STORESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], STORESGroupByOutputType[P]>
            : GetScalarType<T[P], STORESGroupByOutputType[P]>
        }
      >
    >


  export type STORESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_Index?: boolean
    store_Name?: boolean
    store_Location?: boolean
    area_index?: boolean
  }, ExtArgs["result"]["sTORES"]>



  export type STORESSelectScalar = {
    store_Index?: boolean
    store_Name?: boolean
    store_Location?: boolean
    area_index?: boolean
  }

  export type STORESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"store_Index" | "store_Name" | "store_Location" | "area_index", ExtArgs["result"]["sTORES"]>

  export type $STORESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "STORES"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      store_Index: number
      store_Name: string | null
      store_Location: string | null
      area_index: number
    }, ExtArgs["result"]["sTORES"]>
    composites: {}
  }

  type STORESGetPayload<S extends boolean | null | undefined | STORESDefaultArgs> = $Result.GetResult<Prisma.$STORESPayload, S>

  type STORESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<STORESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: STORESCountAggregateInputType | true
    }

  export interface STORESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['STORES'], meta: { name: 'STORES' } }
    /**
     * Find zero or one STORES that matches the filter.
     * @param {STORESFindUniqueArgs} args - Arguments to find a STORES
     * @example
     * // Get one STORES
     * const sTORES = await prisma.sTORES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends STORESFindUniqueArgs>(args: SelectSubset<T, STORESFindUniqueArgs<ExtArgs>>): Prisma__STORESClient<$Result.GetResult<Prisma.$STORESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one STORES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {STORESFindUniqueOrThrowArgs} args - Arguments to find a STORES
     * @example
     * // Get one STORES
     * const sTORES = await prisma.sTORES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends STORESFindUniqueOrThrowArgs>(args: SelectSubset<T, STORESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__STORESClient<$Result.GetResult<Prisma.$STORESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first STORES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STORESFindFirstArgs} args - Arguments to find a STORES
     * @example
     * // Get one STORES
     * const sTORES = await prisma.sTORES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends STORESFindFirstArgs>(args?: SelectSubset<T, STORESFindFirstArgs<ExtArgs>>): Prisma__STORESClient<$Result.GetResult<Prisma.$STORESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first STORES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STORESFindFirstOrThrowArgs} args - Arguments to find a STORES
     * @example
     * // Get one STORES
     * const sTORES = await prisma.sTORES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends STORESFindFirstOrThrowArgs>(args?: SelectSubset<T, STORESFindFirstOrThrowArgs<ExtArgs>>): Prisma__STORESClient<$Result.GetResult<Prisma.$STORESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more STORES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STORESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all STORES
     * const sTORES = await prisma.sTORES.findMany()
     * 
     * // Get first 10 STORES
     * const sTORES = await prisma.sTORES.findMany({ take: 10 })
     * 
     * // Only select the `store_Index`
     * const sTORESWithStore_IndexOnly = await prisma.sTORES.findMany({ select: { store_Index: true } })
     * 
     */
    findMany<T extends STORESFindManyArgs>(args?: SelectSubset<T, STORESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$STORESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a STORES.
     * @param {STORESCreateArgs} args - Arguments to create a STORES.
     * @example
     * // Create one STORES
     * const STORES = await prisma.sTORES.create({
     *   data: {
     *     // ... data to create a STORES
     *   }
     * })
     * 
     */
    create<T extends STORESCreateArgs>(args: SelectSubset<T, STORESCreateArgs<ExtArgs>>): Prisma__STORESClient<$Result.GetResult<Prisma.$STORESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many STORES.
     * @param {STORESCreateManyArgs} args - Arguments to create many STORES.
     * @example
     * // Create many STORES
     * const sTORES = await prisma.sTORES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends STORESCreateManyArgs>(args?: SelectSubset<T, STORESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a STORES.
     * @param {STORESDeleteArgs} args - Arguments to delete one STORES.
     * @example
     * // Delete one STORES
     * const STORES = await prisma.sTORES.delete({
     *   where: {
     *     // ... filter to delete one STORES
     *   }
     * })
     * 
     */
    delete<T extends STORESDeleteArgs>(args: SelectSubset<T, STORESDeleteArgs<ExtArgs>>): Prisma__STORESClient<$Result.GetResult<Prisma.$STORESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one STORES.
     * @param {STORESUpdateArgs} args - Arguments to update one STORES.
     * @example
     * // Update one STORES
     * const sTORES = await prisma.sTORES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends STORESUpdateArgs>(args: SelectSubset<T, STORESUpdateArgs<ExtArgs>>): Prisma__STORESClient<$Result.GetResult<Prisma.$STORESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more STORES.
     * @param {STORESDeleteManyArgs} args - Arguments to filter STORES to delete.
     * @example
     * // Delete a few STORES
     * const { count } = await prisma.sTORES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends STORESDeleteManyArgs>(args?: SelectSubset<T, STORESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more STORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STORESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many STORES
     * const sTORES = await prisma.sTORES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends STORESUpdateManyArgs>(args: SelectSubset<T, STORESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one STORES.
     * @param {STORESUpsertArgs} args - Arguments to update or create a STORES.
     * @example
     * // Update or create a STORES
     * const sTORES = await prisma.sTORES.upsert({
     *   create: {
     *     // ... data to create a STORES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the STORES we want to update
     *   }
     * })
     */
    upsert<T extends STORESUpsertArgs>(args: SelectSubset<T, STORESUpsertArgs<ExtArgs>>): Prisma__STORESClient<$Result.GetResult<Prisma.$STORESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of STORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STORESCountArgs} args - Arguments to filter STORES to count.
     * @example
     * // Count the number of STORES
     * const count = await prisma.sTORES.count({
     *   where: {
     *     // ... the filter for the STORES we want to count
     *   }
     * })
    **/
    count<T extends STORESCountArgs>(
      args?: Subset<T, STORESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], STORESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a STORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STORESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends STORESAggregateArgs>(args: Subset<T, STORESAggregateArgs>): Prisma.PrismaPromise<GetSTORESAggregateType<T>>

    /**
     * Group by STORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STORESGroupByArgs} args - Group by arguments.
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
      T extends STORESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: STORESGroupByArgs['orderBy'] }
        : { orderBy?: STORESGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, STORESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSTORESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the STORES model
   */
  readonly fields: STORESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for STORES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__STORESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the STORES model
   */
  interface STORESFieldRefs {
    readonly store_Index: FieldRef<"STORES", 'Int'>
    readonly store_Name: FieldRef<"STORES", 'String'>
    readonly store_Location: FieldRef<"STORES", 'String'>
    readonly area_index: FieldRef<"STORES", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * STORES findUnique
   */
  export type STORESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
    /**
     * Filter, which STORES to fetch.
     */
    where: STORESWhereUniqueInput
  }

  /**
   * STORES findUniqueOrThrow
   */
  export type STORESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
    /**
     * Filter, which STORES to fetch.
     */
    where: STORESWhereUniqueInput
  }

  /**
   * STORES findFirst
   */
  export type STORESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
    /**
     * Filter, which STORES to fetch.
     */
    where?: STORESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STORES to fetch.
     */
    orderBy?: STORESOrderByWithRelationInput | STORESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STORES.
     */
    cursor?: STORESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STORES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STORES.
     */
    distinct?: STORESScalarFieldEnum | STORESScalarFieldEnum[]
  }

  /**
   * STORES findFirstOrThrow
   */
  export type STORESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
    /**
     * Filter, which STORES to fetch.
     */
    where?: STORESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STORES to fetch.
     */
    orderBy?: STORESOrderByWithRelationInput | STORESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STORES.
     */
    cursor?: STORESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STORES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STORES.
     */
    distinct?: STORESScalarFieldEnum | STORESScalarFieldEnum[]
  }

  /**
   * STORES findMany
   */
  export type STORESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
    /**
     * Filter, which STORES to fetch.
     */
    where?: STORESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STORES to fetch.
     */
    orderBy?: STORESOrderByWithRelationInput | STORESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing STORES.
     */
    cursor?: STORESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STORES.
     */
    skip?: number
    distinct?: STORESScalarFieldEnum | STORESScalarFieldEnum[]
  }

  /**
   * STORES create
   */
  export type STORESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
    /**
     * The data needed to create a STORES.
     */
    data: XOR<STORESCreateInput, STORESUncheckedCreateInput>
  }

  /**
   * STORES createMany
   */
  export type STORESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many STORES.
     */
    data: STORESCreateManyInput | STORESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * STORES update
   */
  export type STORESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
    /**
     * The data needed to update a STORES.
     */
    data: XOR<STORESUpdateInput, STORESUncheckedUpdateInput>
    /**
     * Choose, which STORES to update.
     */
    where: STORESWhereUniqueInput
  }

  /**
   * STORES updateMany
   */
  export type STORESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update STORES.
     */
    data: XOR<STORESUpdateManyMutationInput, STORESUncheckedUpdateManyInput>
    /**
     * Filter which STORES to update
     */
    where?: STORESWhereInput
    /**
     * Limit how many STORES to update.
     */
    limit?: number
  }

  /**
   * STORES upsert
   */
  export type STORESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
    /**
     * The filter to search for the STORES to update in case it exists.
     */
    where: STORESWhereUniqueInput
    /**
     * In case the STORES found by the `where` argument doesn't exist, create a new STORES with this data.
     */
    create: XOR<STORESCreateInput, STORESUncheckedCreateInput>
    /**
     * In case the STORES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<STORESUpdateInput, STORESUncheckedUpdateInput>
  }

  /**
   * STORES delete
   */
  export type STORESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
    /**
     * Filter which STORES to delete.
     */
    where: STORESWhereUniqueInput
  }

  /**
   * STORES deleteMany
   */
  export type STORESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which STORES to delete
     */
    where?: STORESWhereInput
    /**
     * Limit how many STORES to delete.
     */
    limit?: number
  }

  /**
   * STORES without action
   */
  export type STORESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STORES
     */
    select?: STORESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STORES
     */
    omit?: STORESOmit<ExtArgs> | null
  }


  /**
   * Model USERS
   */

  export type AggregateUSERS = {
    _count: USERSCountAggregateOutputType | null
    _avg: USERSAvgAggregateOutputType | null
    _sum: USERSSumAggregateOutputType | null
    _min: USERSMinAggregateOutputType | null
    _max: USERSMaxAggregateOutputType | null
  }

  export type USERSAvgAggregateOutputType = {
    user_Index: number | null
    user_Point: number | null
    user_Gender: number | null
  }

  export type USERSSumAggregateOutputType = {
    user_Index: number | null
    user_Point: number | null
    user_Gender: number | null
  }

  export type USERSMinAggregateOutputType = {
    user_Index: number | null
    user_Name: string | null
    user_Id: string | null
    user_Password: string | null
    user_Email: string | null
    user_Point: number | null
    user_Birth: Date | null
    user_Address: string | null
    user_Gender: number | null
  }

  export type USERSMaxAggregateOutputType = {
    user_Index: number | null
    user_Name: string | null
    user_Id: string | null
    user_Password: string | null
    user_Email: string | null
    user_Point: number | null
    user_Birth: Date | null
    user_Address: string | null
    user_Gender: number | null
  }

  export type USERSCountAggregateOutputType = {
    user_Index: number
    user_Name: number
    user_Id: number
    user_Password: number
    user_Email: number
    user_Point: number
    user_Birth: number
    user_Address: number
    user_Gender: number
    _all: number
  }


  export type USERSAvgAggregateInputType = {
    user_Index?: true
    user_Point?: true
    user_Gender?: true
  }

  export type USERSSumAggregateInputType = {
    user_Index?: true
    user_Point?: true
    user_Gender?: true
  }

  export type USERSMinAggregateInputType = {
    user_Index?: true
    user_Name?: true
    user_Id?: true
    user_Password?: true
    user_Email?: true
    user_Point?: true
    user_Birth?: true
    user_Address?: true
    user_Gender?: true
  }

  export type USERSMaxAggregateInputType = {
    user_Index?: true
    user_Name?: true
    user_Id?: true
    user_Password?: true
    user_Email?: true
    user_Point?: true
    user_Birth?: true
    user_Address?: true
    user_Gender?: true
  }

  export type USERSCountAggregateInputType = {
    user_Index?: true
    user_Name?: true
    user_Id?: true
    user_Password?: true
    user_Email?: true
    user_Point?: true
    user_Birth?: true
    user_Address?: true
    user_Gender?: true
    _all?: true
  }

  export type USERSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to aggregate.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USERS
    **/
    _count?: true | USERSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USERSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USERSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USERSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USERSMaxAggregateInputType
  }

  export type GetUSERSAggregateType<T extends USERSAggregateArgs> = {
        [P in keyof T & keyof AggregateUSERS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSERS[P]>
      : GetScalarType<T[P], AggregateUSERS[P]>
  }




  export type USERSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USERSWhereInput
    orderBy?: USERSOrderByWithAggregationInput | USERSOrderByWithAggregationInput[]
    by: USERSScalarFieldEnum[] | USERSScalarFieldEnum
    having?: USERSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USERSCountAggregateInputType | true
    _avg?: USERSAvgAggregateInputType
    _sum?: USERSSumAggregateInputType
    _min?: USERSMinAggregateInputType
    _max?: USERSMaxAggregateInputType
  }

  export type USERSGroupByOutputType = {
    user_Index: number
    user_Name: string | null
    user_Id: string
    user_Password: string
    user_Email: string | null
    user_Point: number | null
    user_Birth: Date | null
    user_Address: string | null
    user_Gender: number | null
    _count: USERSCountAggregateOutputType | null
    _avg: USERSAvgAggregateOutputType | null
    _sum: USERSSumAggregateOutputType | null
    _min: USERSMinAggregateOutputType | null
    _max: USERSMaxAggregateOutputType | null
  }

  type GetUSERSGroupByPayload<T extends USERSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USERSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USERSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USERSGroupByOutputType[P]>
            : GetScalarType<T[P], USERSGroupByOutputType[P]>
        }
      >
    >


  export type USERSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_Index?: boolean
    user_Name?: boolean
    user_Id?: boolean
    user_Password?: boolean
    user_Email?: boolean
    user_Point?: boolean
    user_Birth?: boolean
    user_Address?: boolean
    user_Gender?: boolean
  }, ExtArgs["result"]["uSERS"]>



  export type USERSSelectScalar = {
    user_Index?: boolean
    user_Name?: boolean
    user_Id?: boolean
    user_Password?: boolean
    user_Email?: boolean
    user_Point?: boolean
    user_Birth?: boolean
    user_Address?: boolean
    user_Gender?: boolean
  }

  export type USERSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_Index" | "user_Name" | "user_Id" | "user_Password" | "user_Email" | "user_Point" | "user_Birth" | "user_Address" | "user_Gender", ExtArgs["result"]["uSERS"]>

  export type $USERSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USERS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_Index: number
      user_Name: string | null
      user_Id: string
      user_Password: string
      user_Email: string | null
      user_Point: number | null
      user_Birth: Date | null
      user_Address: string | null
      user_Gender: number | null
    }, ExtArgs["result"]["uSERS"]>
    composites: {}
  }

  type USERSGetPayload<S extends boolean | null | undefined | USERSDefaultArgs> = $Result.GetResult<Prisma.$USERSPayload, S>

  type USERSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<USERSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: USERSCountAggregateInputType | true
    }

  export interface USERSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USERS'], meta: { name: 'USERS' } }
    /**
     * Find zero or one USERS that matches the filter.
     * @param {USERSFindUniqueArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USERSFindUniqueArgs>(args: SelectSubset<T, USERSFindUniqueArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one USERS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {USERSFindUniqueOrThrowArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USERSFindUniqueOrThrowArgs>(args: SelectSubset<T, USERSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSFindFirstArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USERSFindFirstArgs>(args?: SelectSubset<T, USERSFindFirstArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USERS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSFindFirstOrThrowArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USERSFindFirstOrThrowArgs>(args?: SelectSubset<T, USERSFindFirstOrThrowArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USERS
     * const uSERS = await prisma.uSERS.findMany()
     * 
     * // Get first 10 USERS
     * const uSERS = await prisma.uSERS.findMany({ take: 10 })
     * 
     * // Only select the `user_Index`
     * const uSERSWithUser_IndexOnly = await prisma.uSERS.findMany({ select: { user_Index: true } })
     * 
     */
    findMany<T extends USERSFindManyArgs>(args?: SelectSubset<T, USERSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a USERS.
     * @param {USERSCreateArgs} args - Arguments to create a USERS.
     * @example
     * // Create one USERS
     * const USERS = await prisma.uSERS.create({
     *   data: {
     *     // ... data to create a USERS
     *   }
     * })
     * 
     */
    create<T extends USERSCreateArgs>(args: SelectSubset<T, USERSCreateArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many USERS.
     * @param {USERSCreateManyArgs} args - Arguments to create many USERS.
     * @example
     * // Create many USERS
     * const uSERS = await prisma.uSERS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USERSCreateManyArgs>(args?: SelectSubset<T, USERSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a USERS.
     * @param {USERSDeleteArgs} args - Arguments to delete one USERS.
     * @example
     * // Delete one USERS
     * const USERS = await prisma.uSERS.delete({
     *   where: {
     *     // ... filter to delete one USERS
     *   }
     * })
     * 
     */
    delete<T extends USERSDeleteArgs>(args: SelectSubset<T, USERSDeleteArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one USERS.
     * @param {USERSUpdateArgs} args - Arguments to update one USERS.
     * @example
     * // Update one USERS
     * const uSERS = await prisma.uSERS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USERSUpdateArgs>(args: SelectSubset<T, USERSUpdateArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more USERS.
     * @param {USERSDeleteManyArgs} args - Arguments to filter USERS to delete.
     * @example
     * // Delete a few USERS
     * const { count } = await prisma.uSERS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USERSDeleteManyArgs>(args?: SelectSubset<T, USERSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USERS
     * const uSERS = await prisma.uSERS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USERSUpdateManyArgs>(args: SelectSubset<T, USERSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USERS.
     * @param {USERSUpsertArgs} args - Arguments to update or create a USERS.
     * @example
     * // Update or create a USERS
     * const uSERS = await prisma.uSERS.upsert({
     *   create: {
     *     // ... data to create a USERS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USERS we want to update
     *   }
     * })
     */
    upsert<T extends USERSUpsertArgs>(args: SelectSubset<T, USERSUpsertArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSCountArgs} args - Arguments to filter USERS to count.
     * @example
     * // Count the number of USERS
     * const count = await prisma.uSERS.count({
     *   where: {
     *     // ... the filter for the USERS we want to count
     *   }
     * })
    **/
    count<T extends USERSCountArgs>(
      args?: Subset<T, USERSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USERSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends USERSAggregateArgs>(args: Subset<T, USERSAggregateArgs>): Prisma.PrismaPromise<GetUSERSAggregateType<T>>

    /**
     * Group by USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSGroupByArgs} args - Group by arguments.
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
      T extends USERSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USERSGroupByArgs['orderBy'] }
        : { orderBy?: USERSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, USERSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSERSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USERS model
   */
  readonly fields: USERSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USERS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USERSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the USERS model
   */
  interface USERSFieldRefs {
    readonly user_Index: FieldRef<"USERS", 'Int'>
    readonly user_Name: FieldRef<"USERS", 'String'>
    readonly user_Id: FieldRef<"USERS", 'String'>
    readonly user_Password: FieldRef<"USERS", 'String'>
    readonly user_Email: FieldRef<"USERS", 'String'>
    readonly user_Point: FieldRef<"USERS", 'Int'>
    readonly user_Birth: FieldRef<"USERS", 'DateTime'>
    readonly user_Address: FieldRef<"USERS", 'String'>
    readonly user_Gender: FieldRef<"USERS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * USERS findUnique
   */
  export type USERSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where: USERSWhereUniqueInput
  }

  /**
   * USERS findUniqueOrThrow
   */
  export type USERSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where: USERSWhereUniqueInput
  }

  /**
   * USERS findFirst
   */
  export type USERSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERSScalarFieldEnum | USERSScalarFieldEnum[]
  }

  /**
   * USERS findFirstOrThrow
   */
  export type USERSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERSScalarFieldEnum | USERSScalarFieldEnum[]
  }

  /**
   * USERS findMany
   */
  export type USERSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USERS.
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    distinct?: USERSScalarFieldEnum | USERSScalarFieldEnum[]
  }

  /**
   * USERS create
   */
  export type USERSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * The data needed to create a USERS.
     */
    data: XOR<USERSCreateInput, USERSUncheckedCreateInput>
  }

  /**
   * USERS createMany
   */
  export type USERSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USERS.
     */
    data: USERSCreateManyInput | USERSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USERS update
   */
  export type USERSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * The data needed to update a USERS.
     */
    data: XOR<USERSUpdateInput, USERSUncheckedUpdateInput>
    /**
     * Choose, which USERS to update.
     */
    where: USERSWhereUniqueInput
  }

  /**
   * USERS updateMany
   */
  export type USERSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USERS.
     */
    data: XOR<USERSUpdateManyMutationInput, USERSUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERSWhereInput
    /**
     * Limit how many USERS to update.
     */
    limit?: number
  }

  /**
   * USERS upsert
   */
  export type USERSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * The filter to search for the USERS to update in case it exists.
     */
    where: USERSWhereUniqueInput
    /**
     * In case the USERS found by the `where` argument doesn't exist, create a new USERS with this data.
     */
    create: XOR<USERSCreateInput, USERSUncheckedCreateInput>
    /**
     * In case the USERS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USERSUpdateInput, USERSUncheckedUpdateInput>
  }

  /**
   * USERS delete
   */
  export type USERSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Filter which USERS to delete.
     */
    where: USERSWhereUniqueInput
  }

  /**
   * USERS deleteMany
   */
  export type USERSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to delete
     */
    where?: USERSWhereInput
    /**
     * Limit how many USERS to delete.
     */
    limit?: number
  }

  /**
   * USERS without action
   */
  export type USERSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
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


  export const AREASScalarFieldEnum: {
    area_Index: 'area_Index',
    area_name: 'area_name',
    area_MissionCount: 'area_MissionCount',
    area_StoreCount: 'area_StoreCount'
  };

  export type AREASScalarFieldEnum = (typeof AREASScalarFieldEnum)[keyof typeof AREASScalarFieldEnum]


  export const FOOD_TYPESScalarFieldEnum: {
    food_index: 'food_index',
    food_type: 'food_type'
  };

  export type FOOD_TYPESScalarFieldEnum = (typeof FOOD_TYPESScalarFieldEnum)[keyof typeof FOOD_TYPESScalarFieldEnum]


  export const MISSIONSScalarFieldEnum: {
    mission_Index: 'mission_Index',
    mission_Contents: 'mission_Contents',
    store_Index: 'store_Index',
    area_index: 'area_index',
    mission_Point: 'mission_Point'
  };

  export type MISSIONSScalarFieldEnum = (typeof MISSIONSScalarFieldEnum)[keyof typeof MISSIONSScalarFieldEnum]


  export const REVIEWSScalarFieldEnum: {
    review_Index: 'review_Index',
    review_Contents: 'review_Contents',
    review_CreatedDay: 'review_CreatedDay',
    review_Stars: 'review_Stars',
    store_Index: 'store_Index',
    user_Index: 'user_Index'
  };

  export type REVIEWSScalarFieldEnum = (typeof REVIEWSScalarFieldEnum)[keyof typeof REVIEWSScalarFieldEnum]


  export const STORESScalarFieldEnum: {
    store_Index: 'store_Index',
    store_Name: 'store_Name',
    store_Location: 'store_Location',
    area_index: 'area_index'
  };

  export type STORESScalarFieldEnum = (typeof STORESScalarFieldEnum)[keyof typeof STORESScalarFieldEnum]


  export const USERSScalarFieldEnum: {
    user_Index: 'user_Index',
    user_Name: 'user_Name',
    user_Id: 'user_Id',
    user_Password: 'user_Password',
    user_Email: 'user_Email',
    user_Point: 'user_Point',
    user_Birth: 'user_Birth',
    user_Address: 'user_Address',
    user_Gender: 'user_Gender'
  };

  export type USERSScalarFieldEnum = (typeof USERSScalarFieldEnum)[keyof typeof USERSScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AREASOrderByRelevanceFieldEnum: {
    area_name: 'area_name'
  };

  export type AREASOrderByRelevanceFieldEnum = (typeof AREASOrderByRelevanceFieldEnum)[keyof typeof AREASOrderByRelevanceFieldEnum]


  export const FOOD_TYPESOrderByRelevanceFieldEnum: {
    food_type: 'food_type'
  };

  export type FOOD_TYPESOrderByRelevanceFieldEnum = (typeof FOOD_TYPESOrderByRelevanceFieldEnum)[keyof typeof FOOD_TYPESOrderByRelevanceFieldEnum]


  export const MISSIONSOrderByRelevanceFieldEnum: {
    mission_Contents: 'mission_Contents'
  };

  export type MISSIONSOrderByRelevanceFieldEnum = (typeof MISSIONSOrderByRelevanceFieldEnum)[keyof typeof MISSIONSOrderByRelevanceFieldEnum]


  export const REVIEWSOrderByRelevanceFieldEnum: {
    review_Contents: 'review_Contents'
  };

  export type REVIEWSOrderByRelevanceFieldEnum = (typeof REVIEWSOrderByRelevanceFieldEnum)[keyof typeof REVIEWSOrderByRelevanceFieldEnum]


  export const STORESOrderByRelevanceFieldEnum: {
    store_Name: 'store_Name',
    store_Location: 'store_Location'
  };

  export type STORESOrderByRelevanceFieldEnum = (typeof STORESOrderByRelevanceFieldEnum)[keyof typeof STORESOrderByRelevanceFieldEnum]


  export const USERSOrderByRelevanceFieldEnum: {
    user_Name: 'user_Name',
    user_Id: 'user_Id',
    user_Password: 'user_Password',
    user_Email: 'user_Email',
    user_Address: 'user_Address'
  };

  export type USERSOrderByRelevanceFieldEnum = (typeof USERSOrderByRelevanceFieldEnum)[keyof typeof USERSOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AREASWhereInput = {
    AND?: AREASWhereInput | AREASWhereInput[]
    OR?: AREASWhereInput[]
    NOT?: AREASWhereInput | AREASWhereInput[]
    area_Index?: IntFilter<"AREAS"> | number
    area_name?: StringNullableFilter<"AREAS"> | string | null
    area_MissionCount?: IntNullableFilter<"AREAS"> | number | null
    area_StoreCount?: IntNullableFilter<"AREAS"> | number | null
  }

  export type AREASOrderByWithRelationInput = {
    area_Index?: SortOrder
    area_name?: SortOrderInput | SortOrder
    area_MissionCount?: SortOrderInput | SortOrder
    area_StoreCount?: SortOrderInput | SortOrder
    _relevance?: AREASOrderByRelevanceInput
  }

  export type AREASWhereUniqueInput = Prisma.AtLeast<{
    area_Index?: number
    AND?: AREASWhereInput | AREASWhereInput[]
    OR?: AREASWhereInput[]
    NOT?: AREASWhereInput | AREASWhereInput[]
    area_name?: StringNullableFilter<"AREAS"> | string | null
    area_MissionCount?: IntNullableFilter<"AREAS"> | number | null
    area_StoreCount?: IntNullableFilter<"AREAS"> | number | null
  }, "area_Index">

  export type AREASOrderByWithAggregationInput = {
    area_Index?: SortOrder
    area_name?: SortOrderInput | SortOrder
    area_MissionCount?: SortOrderInput | SortOrder
    area_StoreCount?: SortOrderInput | SortOrder
    _count?: AREASCountOrderByAggregateInput
    _avg?: AREASAvgOrderByAggregateInput
    _max?: AREASMaxOrderByAggregateInput
    _min?: AREASMinOrderByAggregateInput
    _sum?: AREASSumOrderByAggregateInput
  }

  export type AREASScalarWhereWithAggregatesInput = {
    AND?: AREASScalarWhereWithAggregatesInput | AREASScalarWhereWithAggregatesInput[]
    OR?: AREASScalarWhereWithAggregatesInput[]
    NOT?: AREASScalarWhereWithAggregatesInput | AREASScalarWhereWithAggregatesInput[]
    area_Index?: IntWithAggregatesFilter<"AREAS"> | number
    area_name?: StringNullableWithAggregatesFilter<"AREAS"> | string | null
    area_MissionCount?: IntNullableWithAggregatesFilter<"AREAS"> | number | null
    area_StoreCount?: IntNullableWithAggregatesFilter<"AREAS"> | number | null
  }

  export type FOOD_TYPESWhereInput = {
    AND?: FOOD_TYPESWhereInput | FOOD_TYPESWhereInput[]
    OR?: FOOD_TYPESWhereInput[]
    NOT?: FOOD_TYPESWhereInput | FOOD_TYPESWhereInput[]
    food_index?: IntFilter<"FOOD_TYPES"> | number
    food_type?: StringNullableFilter<"FOOD_TYPES"> | string | null
  }

  export type FOOD_TYPESOrderByWithRelationInput = {
    food_index?: SortOrder
    food_type?: SortOrderInput | SortOrder
    _relevance?: FOOD_TYPESOrderByRelevanceInput
  }

  export type FOOD_TYPESWhereUniqueInput = Prisma.AtLeast<{
    food_index?: number
    AND?: FOOD_TYPESWhereInput | FOOD_TYPESWhereInput[]
    OR?: FOOD_TYPESWhereInput[]
    NOT?: FOOD_TYPESWhereInput | FOOD_TYPESWhereInput[]
    food_type?: StringNullableFilter<"FOOD_TYPES"> | string | null
  }, "food_index">

  export type FOOD_TYPESOrderByWithAggregationInput = {
    food_index?: SortOrder
    food_type?: SortOrderInput | SortOrder
    _count?: FOOD_TYPESCountOrderByAggregateInput
    _avg?: FOOD_TYPESAvgOrderByAggregateInput
    _max?: FOOD_TYPESMaxOrderByAggregateInput
    _min?: FOOD_TYPESMinOrderByAggregateInput
    _sum?: FOOD_TYPESSumOrderByAggregateInput
  }

  export type FOOD_TYPESScalarWhereWithAggregatesInput = {
    AND?: FOOD_TYPESScalarWhereWithAggregatesInput | FOOD_TYPESScalarWhereWithAggregatesInput[]
    OR?: FOOD_TYPESScalarWhereWithAggregatesInput[]
    NOT?: FOOD_TYPESScalarWhereWithAggregatesInput | FOOD_TYPESScalarWhereWithAggregatesInput[]
    food_index?: IntWithAggregatesFilter<"FOOD_TYPES"> | number
    food_type?: StringNullableWithAggregatesFilter<"FOOD_TYPES"> | string | null
  }

  export type MISSIONSWhereInput = {
    AND?: MISSIONSWhereInput | MISSIONSWhereInput[]
    OR?: MISSIONSWhereInput[]
    NOT?: MISSIONSWhereInput | MISSIONSWhereInput[]
    mission_Index?: IntFilter<"MISSIONS"> | number
    mission_Contents?: StringNullableFilter<"MISSIONS"> | string | null
    store_Index?: IntFilter<"MISSIONS"> | number
    area_index?: IntNullableFilter<"MISSIONS"> | number | null
    mission_Point?: IntNullableFilter<"MISSIONS"> | number | null
  }

  export type MISSIONSOrderByWithRelationInput = {
    mission_Index?: SortOrder
    mission_Contents?: SortOrderInput | SortOrder
    store_Index?: SortOrder
    area_index?: SortOrderInput | SortOrder
    mission_Point?: SortOrderInput | SortOrder
    _relevance?: MISSIONSOrderByRelevanceInput
  }

  export type MISSIONSWhereUniqueInput = Prisma.AtLeast<{
    mission_Index?: number
    AND?: MISSIONSWhereInput | MISSIONSWhereInput[]
    OR?: MISSIONSWhereInput[]
    NOT?: MISSIONSWhereInput | MISSIONSWhereInput[]
    mission_Contents?: StringNullableFilter<"MISSIONS"> | string | null
    store_Index?: IntFilter<"MISSIONS"> | number
    area_index?: IntNullableFilter<"MISSIONS"> | number | null
    mission_Point?: IntNullableFilter<"MISSIONS"> | number | null
  }, "mission_Index">

  export type MISSIONSOrderByWithAggregationInput = {
    mission_Index?: SortOrder
    mission_Contents?: SortOrderInput | SortOrder
    store_Index?: SortOrder
    area_index?: SortOrderInput | SortOrder
    mission_Point?: SortOrderInput | SortOrder
    _count?: MISSIONSCountOrderByAggregateInput
    _avg?: MISSIONSAvgOrderByAggregateInput
    _max?: MISSIONSMaxOrderByAggregateInput
    _min?: MISSIONSMinOrderByAggregateInput
    _sum?: MISSIONSSumOrderByAggregateInput
  }

  export type MISSIONSScalarWhereWithAggregatesInput = {
    AND?: MISSIONSScalarWhereWithAggregatesInput | MISSIONSScalarWhereWithAggregatesInput[]
    OR?: MISSIONSScalarWhereWithAggregatesInput[]
    NOT?: MISSIONSScalarWhereWithAggregatesInput | MISSIONSScalarWhereWithAggregatesInput[]
    mission_Index?: IntWithAggregatesFilter<"MISSIONS"> | number
    mission_Contents?: StringNullableWithAggregatesFilter<"MISSIONS"> | string | null
    store_Index?: IntWithAggregatesFilter<"MISSIONS"> | number
    area_index?: IntNullableWithAggregatesFilter<"MISSIONS"> | number | null
    mission_Point?: IntNullableWithAggregatesFilter<"MISSIONS"> | number | null
  }

  export type REVIEWSWhereInput = {
    AND?: REVIEWSWhereInput | REVIEWSWhereInput[]
    OR?: REVIEWSWhereInput[]
    NOT?: REVIEWSWhereInput | REVIEWSWhereInput[]
    review_Index?: IntFilter<"REVIEWS"> | number
    review_Contents?: StringNullableFilter<"REVIEWS"> | string | null
    review_CreatedDay?: DateTimeNullableFilter<"REVIEWS"> | Date | string | null
    review_Stars?: IntNullableFilter<"REVIEWS"> | number | null
    store_Index?: IntFilter<"REVIEWS"> | number
    user_Index?: IntFilter<"REVIEWS"> | number
  }

  export type REVIEWSOrderByWithRelationInput = {
    review_Index?: SortOrder
    review_Contents?: SortOrderInput | SortOrder
    review_CreatedDay?: SortOrderInput | SortOrder
    review_Stars?: SortOrderInput | SortOrder
    store_Index?: SortOrder
    user_Index?: SortOrder
    _relevance?: REVIEWSOrderByRelevanceInput
  }

  export type REVIEWSWhereUniqueInput = Prisma.AtLeast<{
    review_Index?: number
    AND?: REVIEWSWhereInput | REVIEWSWhereInput[]
    OR?: REVIEWSWhereInput[]
    NOT?: REVIEWSWhereInput | REVIEWSWhereInput[]
    review_Contents?: StringNullableFilter<"REVIEWS"> | string | null
    review_CreatedDay?: DateTimeNullableFilter<"REVIEWS"> | Date | string | null
    review_Stars?: IntNullableFilter<"REVIEWS"> | number | null
    store_Index?: IntFilter<"REVIEWS"> | number
    user_Index?: IntFilter<"REVIEWS"> | number
  }, "review_Index">

  export type REVIEWSOrderByWithAggregationInput = {
    review_Index?: SortOrder
    review_Contents?: SortOrderInput | SortOrder
    review_CreatedDay?: SortOrderInput | SortOrder
    review_Stars?: SortOrderInput | SortOrder
    store_Index?: SortOrder
    user_Index?: SortOrder
    _count?: REVIEWSCountOrderByAggregateInput
    _avg?: REVIEWSAvgOrderByAggregateInput
    _max?: REVIEWSMaxOrderByAggregateInput
    _min?: REVIEWSMinOrderByAggregateInput
    _sum?: REVIEWSSumOrderByAggregateInput
  }

  export type REVIEWSScalarWhereWithAggregatesInput = {
    AND?: REVIEWSScalarWhereWithAggregatesInput | REVIEWSScalarWhereWithAggregatesInput[]
    OR?: REVIEWSScalarWhereWithAggregatesInput[]
    NOT?: REVIEWSScalarWhereWithAggregatesInput | REVIEWSScalarWhereWithAggregatesInput[]
    review_Index?: IntWithAggregatesFilter<"REVIEWS"> | number
    review_Contents?: StringNullableWithAggregatesFilter<"REVIEWS"> | string | null
    review_CreatedDay?: DateTimeNullableWithAggregatesFilter<"REVIEWS"> | Date | string | null
    review_Stars?: IntNullableWithAggregatesFilter<"REVIEWS"> | number | null
    store_Index?: IntWithAggregatesFilter<"REVIEWS"> | number
    user_Index?: IntWithAggregatesFilter<"REVIEWS"> | number
  }

  export type STORESWhereInput = {
    AND?: STORESWhereInput | STORESWhereInput[]
    OR?: STORESWhereInput[]
    NOT?: STORESWhereInput | STORESWhereInput[]
    store_Index?: IntFilter<"STORES"> | number
    store_Name?: StringNullableFilter<"STORES"> | string | null
    store_Location?: StringNullableFilter<"STORES"> | string | null
    area_index?: IntFilter<"STORES"> | number
  }

  export type STORESOrderByWithRelationInput = {
    store_Index?: SortOrder
    store_Name?: SortOrderInput | SortOrder
    store_Location?: SortOrderInput | SortOrder
    area_index?: SortOrder
    _relevance?: STORESOrderByRelevanceInput
  }

  export type STORESWhereUniqueInput = Prisma.AtLeast<{
    store_Index?: number
    AND?: STORESWhereInput | STORESWhereInput[]
    OR?: STORESWhereInput[]
    NOT?: STORESWhereInput | STORESWhereInput[]
    store_Name?: StringNullableFilter<"STORES"> | string | null
    store_Location?: StringNullableFilter<"STORES"> | string | null
    area_index?: IntFilter<"STORES"> | number
  }, "store_Index">

  export type STORESOrderByWithAggregationInput = {
    store_Index?: SortOrder
    store_Name?: SortOrderInput | SortOrder
    store_Location?: SortOrderInput | SortOrder
    area_index?: SortOrder
    _count?: STORESCountOrderByAggregateInput
    _avg?: STORESAvgOrderByAggregateInput
    _max?: STORESMaxOrderByAggregateInput
    _min?: STORESMinOrderByAggregateInput
    _sum?: STORESSumOrderByAggregateInput
  }

  export type STORESScalarWhereWithAggregatesInput = {
    AND?: STORESScalarWhereWithAggregatesInput | STORESScalarWhereWithAggregatesInput[]
    OR?: STORESScalarWhereWithAggregatesInput[]
    NOT?: STORESScalarWhereWithAggregatesInput | STORESScalarWhereWithAggregatesInput[]
    store_Index?: IntWithAggregatesFilter<"STORES"> | number
    store_Name?: StringNullableWithAggregatesFilter<"STORES"> | string | null
    store_Location?: StringNullableWithAggregatesFilter<"STORES"> | string | null
    area_index?: IntWithAggregatesFilter<"STORES"> | number
  }

  export type USERSWhereInput = {
    AND?: USERSWhereInput | USERSWhereInput[]
    OR?: USERSWhereInput[]
    NOT?: USERSWhereInput | USERSWhereInput[]
    user_Index?: IntFilter<"USERS"> | number
    user_Name?: StringNullableFilter<"USERS"> | string | null
    user_Id?: StringFilter<"USERS"> | string
    user_Password?: StringFilter<"USERS"> | string
    user_Email?: StringNullableFilter<"USERS"> | string | null
    user_Point?: IntNullableFilter<"USERS"> | number | null
    user_Birth?: DateTimeNullableFilter<"USERS"> | Date | string | null
    user_Address?: StringNullableFilter<"USERS"> | string | null
    user_Gender?: IntNullableFilter<"USERS"> | number | null
  }

  export type USERSOrderByWithRelationInput = {
    user_Index?: SortOrder
    user_Name?: SortOrderInput | SortOrder
    user_Id?: SortOrder
    user_Password?: SortOrder
    user_Email?: SortOrderInput | SortOrder
    user_Point?: SortOrderInput | SortOrder
    user_Birth?: SortOrderInput | SortOrder
    user_Address?: SortOrderInput | SortOrder
    user_Gender?: SortOrderInput | SortOrder
    _relevance?: USERSOrderByRelevanceInput
  }

  export type USERSWhereUniqueInput = Prisma.AtLeast<{
    user_Index?: number
    AND?: USERSWhereInput | USERSWhereInput[]
    OR?: USERSWhereInput[]
    NOT?: USERSWhereInput | USERSWhereInput[]
    user_Name?: StringNullableFilter<"USERS"> | string | null
    user_Id?: StringFilter<"USERS"> | string
    user_Password?: StringFilter<"USERS"> | string
    user_Email?: StringNullableFilter<"USERS"> | string | null
    user_Point?: IntNullableFilter<"USERS"> | number | null
    user_Birth?: DateTimeNullableFilter<"USERS"> | Date | string | null
    user_Address?: StringNullableFilter<"USERS"> | string | null
    user_Gender?: IntNullableFilter<"USERS"> | number | null
  }, "user_Index">

  export type USERSOrderByWithAggregationInput = {
    user_Index?: SortOrder
    user_Name?: SortOrderInput | SortOrder
    user_Id?: SortOrder
    user_Password?: SortOrder
    user_Email?: SortOrderInput | SortOrder
    user_Point?: SortOrderInput | SortOrder
    user_Birth?: SortOrderInput | SortOrder
    user_Address?: SortOrderInput | SortOrder
    user_Gender?: SortOrderInput | SortOrder
    _count?: USERSCountOrderByAggregateInput
    _avg?: USERSAvgOrderByAggregateInput
    _max?: USERSMaxOrderByAggregateInput
    _min?: USERSMinOrderByAggregateInput
    _sum?: USERSSumOrderByAggregateInput
  }

  export type USERSScalarWhereWithAggregatesInput = {
    AND?: USERSScalarWhereWithAggregatesInput | USERSScalarWhereWithAggregatesInput[]
    OR?: USERSScalarWhereWithAggregatesInput[]
    NOT?: USERSScalarWhereWithAggregatesInput | USERSScalarWhereWithAggregatesInput[]
    user_Index?: IntWithAggregatesFilter<"USERS"> | number
    user_Name?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    user_Id?: StringWithAggregatesFilter<"USERS"> | string
    user_Password?: StringWithAggregatesFilter<"USERS"> | string
    user_Email?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    user_Point?: IntNullableWithAggregatesFilter<"USERS"> | number | null
    user_Birth?: DateTimeNullableWithAggregatesFilter<"USERS"> | Date | string | null
    user_Address?: StringNullableWithAggregatesFilter<"USERS"> | string | null
    user_Gender?: IntNullableWithAggregatesFilter<"USERS"> | number | null
  }

  export type AREASCreateInput = {
    area_name?: string | null
    area_MissionCount?: number | null
    area_StoreCount?: number | null
  }

  export type AREASUncheckedCreateInput = {
    area_Index?: number
    area_name?: string | null
    area_MissionCount?: number | null
    area_StoreCount?: number | null
  }

  export type AREASUpdateInput = {
    area_name?: NullableStringFieldUpdateOperationsInput | string | null
    area_MissionCount?: NullableIntFieldUpdateOperationsInput | number | null
    area_StoreCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AREASUncheckedUpdateInput = {
    area_Index?: IntFieldUpdateOperationsInput | number
    area_name?: NullableStringFieldUpdateOperationsInput | string | null
    area_MissionCount?: NullableIntFieldUpdateOperationsInput | number | null
    area_StoreCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AREASCreateManyInput = {
    area_Index?: number
    area_name?: string | null
    area_MissionCount?: number | null
    area_StoreCount?: number | null
  }

  export type AREASUpdateManyMutationInput = {
    area_name?: NullableStringFieldUpdateOperationsInput | string | null
    area_MissionCount?: NullableIntFieldUpdateOperationsInput | number | null
    area_StoreCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AREASUncheckedUpdateManyInput = {
    area_Index?: IntFieldUpdateOperationsInput | number
    area_name?: NullableStringFieldUpdateOperationsInput | string | null
    area_MissionCount?: NullableIntFieldUpdateOperationsInput | number | null
    area_StoreCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FOOD_TYPESCreateInput = {
    food_index: number
    food_type?: string | null
  }

  export type FOOD_TYPESUncheckedCreateInput = {
    food_index: number
    food_type?: string | null
  }

  export type FOOD_TYPESUpdateInput = {
    food_index?: IntFieldUpdateOperationsInput | number
    food_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FOOD_TYPESUncheckedUpdateInput = {
    food_index?: IntFieldUpdateOperationsInput | number
    food_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FOOD_TYPESCreateManyInput = {
    food_index: number
    food_type?: string | null
  }

  export type FOOD_TYPESUpdateManyMutationInput = {
    food_index?: IntFieldUpdateOperationsInput | number
    food_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FOOD_TYPESUncheckedUpdateManyInput = {
    food_index?: IntFieldUpdateOperationsInput | number
    food_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MISSIONSCreateInput = {
    mission_Contents?: string | null
    store_Index: number
    area_index?: number | null
    mission_Point?: number | null
  }

  export type MISSIONSUncheckedCreateInput = {
    mission_Index?: number
    mission_Contents?: string | null
    store_Index: number
    area_index?: number | null
    mission_Point?: number | null
  }

  export type MISSIONSUpdateInput = {
    mission_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    store_Index?: IntFieldUpdateOperationsInput | number
    area_index?: NullableIntFieldUpdateOperationsInput | number | null
    mission_Point?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MISSIONSUncheckedUpdateInput = {
    mission_Index?: IntFieldUpdateOperationsInput | number
    mission_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    store_Index?: IntFieldUpdateOperationsInput | number
    area_index?: NullableIntFieldUpdateOperationsInput | number | null
    mission_Point?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MISSIONSCreateManyInput = {
    mission_Index?: number
    mission_Contents?: string | null
    store_Index: number
    area_index?: number | null
    mission_Point?: number | null
  }

  export type MISSIONSUpdateManyMutationInput = {
    mission_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    store_Index?: IntFieldUpdateOperationsInput | number
    area_index?: NullableIntFieldUpdateOperationsInput | number | null
    mission_Point?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MISSIONSUncheckedUpdateManyInput = {
    mission_Index?: IntFieldUpdateOperationsInput | number
    mission_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    store_Index?: IntFieldUpdateOperationsInput | number
    area_index?: NullableIntFieldUpdateOperationsInput | number | null
    mission_Point?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type REVIEWSCreateInput = {
    review_Contents?: string | null
    review_CreatedDay?: Date | string | null
    review_Stars?: number | null
    store_Index: number
    user_Index: number
  }

  export type REVIEWSUncheckedCreateInput = {
    review_Index?: number
    review_Contents?: string | null
    review_CreatedDay?: Date | string | null
    review_Stars?: number | null
    store_Index: number
    user_Index: number
  }

  export type REVIEWSUpdateInput = {
    review_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    review_CreatedDay?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_Stars?: NullableIntFieldUpdateOperationsInput | number | null
    store_Index?: IntFieldUpdateOperationsInput | number
    user_Index?: IntFieldUpdateOperationsInput | number
  }

  export type REVIEWSUncheckedUpdateInput = {
    review_Index?: IntFieldUpdateOperationsInput | number
    review_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    review_CreatedDay?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_Stars?: NullableIntFieldUpdateOperationsInput | number | null
    store_Index?: IntFieldUpdateOperationsInput | number
    user_Index?: IntFieldUpdateOperationsInput | number
  }

  export type REVIEWSCreateManyInput = {
    review_Index?: number
    review_Contents?: string | null
    review_CreatedDay?: Date | string | null
    review_Stars?: number | null
    store_Index: number
    user_Index: number
  }

  export type REVIEWSUpdateManyMutationInput = {
    review_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    review_CreatedDay?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_Stars?: NullableIntFieldUpdateOperationsInput | number | null
    store_Index?: IntFieldUpdateOperationsInput | number
    user_Index?: IntFieldUpdateOperationsInput | number
  }

  export type REVIEWSUncheckedUpdateManyInput = {
    review_Index?: IntFieldUpdateOperationsInput | number
    review_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    review_CreatedDay?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_Stars?: NullableIntFieldUpdateOperationsInput | number | null
    store_Index?: IntFieldUpdateOperationsInput | number
    user_Index?: IntFieldUpdateOperationsInput | number
  }

  export type STORESCreateInput = {
    store_Name?: string | null
    store_Location?: string | null
    area_index: number
  }

  export type STORESUncheckedCreateInput = {
    store_Index?: number
    store_Name?: string | null
    store_Location?: string | null
    area_index: number
  }

  export type STORESUpdateInput = {
    store_Name?: NullableStringFieldUpdateOperationsInput | string | null
    store_Location?: NullableStringFieldUpdateOperationsInput | string | null
    area_index?: IntFieldUpdateOperationsInput | number
  }

  export type STORESUncheckedUpdateInput = {
    store_Index?: IntFieldUpdateOperationsInput | number
    store_Name?: NullableStringFieldUpdateOperationsInput | string | null
    store_Location?: NullableStringFieldUpdateOperationsInput | string | null
    area_index?: IntFieldUpdateOperationsInput | number
  }

  export type STORESCreateManyInput = {
    store_Index?: number
    store_Name?: string | null
    store_Location?: string | null
    area_index: number
  }

  export type STORESUpdateManyMutationInput = {
    store_Name?: NullableStringFieldUpdateOperationsInput | string | null
    store_Location?: NullableStringFieldUpdateOperationsInput | string | null
    area_index?: IntFieldUpdateOperationsInput | number
  }

  export type STORESUncheckedUpdateManyInput = {
    store_Index?: IntFieldUpdateOperationsInput | number
    store_Name?: NullableStringFieldUpdateOperationsInput | string | null
    store_Location?: NullableStringFieldUpdateOperationsInput | string | null
    area_index?: IntFieldUpdateOperationsInput | number
  }

  export type USERSCreateInput = {
    user_Name?: string | null
    user_Id: string
    user_Password: string
    user_Email?: string | null
    user_Point?: number | null
    user_Birth?: Date | string | null
    user_Address?: string | null
    user_Gender?: number | null
  }

  export type USERSUncheckedCreateInput = {
    user_Index?: number
    user_Name?: string | null
    user_Id: string
    user_Password: string
    user_Email?: string | null
    user_Point?: number | null
    user_Birth?: Date | string | null
    user_Address?: string | null
    user_Gender?: number | null
  }

  export type USERSUpdateInput = {
    user_Name?: NullableStringFieldUpdateOperationsInput | string | null
    user_Id?: StringFieldUpdateOperationsInput | string
    user_Password?: StringFieldUpdateOperationsInput | string
    user_Email?: NullableStringFieldUpdateOperationsInput | string | null
    user_Point?: NullableIntFieldUpdateOperationsInput | number | null
    user_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_Address?: NullableStringFieldUpdateOperationsInput | string | null
    user_Gender?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type USERSUncheckedUpdateInput = {
    user_Index?: IntFieldUpdateOperationsInput | number
    user_Name?: NullableStringFieldUpdateOperationsInput | string | null
    user_Id?: StringFieldUpdateOperationsInput | string
    user_Password?: StringFieldUpdateOperationsInput | string
    user_Email?: NullableStringFieldUpdateOperationsInput | string | null
    user_Point?: NullableIntFieldUpdateOperationsInput | number | null
    user_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_Address?: NullableStringFieldUpdateOperationsInput | string | null
    user_Gender?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type USERSCreateManyInput = {
    user_Index?: number
    user_Name?: string | null
    user_Id: string
    user_Password: string
    user_Email?: string | null
    user_Point?: number | null
    user_Birth?: Date | string | null
    user_Address?: string | null
    user_Gender?: number | null
  }

  export type USERSUpdateManyMutationInput = {
    user_Name?: NullableStringFieldUpdateOperationsInput | string | null
    user_Id?: StringFieldUpdateOperationsInput | string
    user_Password?: StringFieldUpdateOperationsInput | string
    user_Email?: NullableStringFieldUpdateOperationsInput | string | null
    user_Point?: NullableIntFieldUpdateOperationsInput | number | null
    user_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_Address?: NullableStringFieldUpdateOperationsInput | string | null
    user_Gender?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type USERSUncheckedUpdateManyInput = {
    user_Index?: IntFieldUpdateOperationsInput | number
    user_Name?: NullableStringFieldUpdateOperationsInput | string | null
    user_Id?: StringFieldUpdateOperationsInput | string
    user_Password?: StringFieldUpdateOperationsInput | string
    user_Email?: NullableStringFieldUpdateOperationsInput | string | null
    user_Point?: NullableIntFieldUpdateOperationsInput | number | null
    user_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_Address?: NullableStringFieldUpdateOperationsInput | string | null
    user_Gender?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AREASOrderByRelevanceInput = {
    fields: AREASOrderByRelevanceFieldEnum | AREASOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AREASCountOrderByAggregateInput = {
    area_Index?: SortOrder
    area_name?: SortOrder
    area_MissionCount?: SortOrder
    area_StoreCount?: SortOrder
  }

  export type AREASAvgOrderByAggregateInput = {
    area_Index?: SortOrder
    area_MissionCount?: SortOrder
    area_StoreCount?: SortOrder
  }

  export type AREASMaxOrderByAggregateInput = {
    area_Index?: SortOrder
    area_name?: SortOrder
    area_MissionCount?: SortOrder
    area_StoreCount?: SortOrder
  }

  export type AREASMinOrderByAggregateInput = {
    area_Index?: SortOrder
    area_name?: SortOrder
    area_MissionCount?: SortOrder
    area_StoreCount?: SortOrder
  }

  export type AREASSumOrderByAggregateInput = {
    area_Index?: SortOrder
    area_MissionCount?: SortOrder
    area_StoreCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FOOD_TYPESOrderByRelevanceInput = {
    fields: FOOD_TYPESOrderByRelevanceFieldEnum | FOOD_TYPESOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FOOD_TYPESCountOrderByAggregateInput = {
    food_index?: SortOrder
    food_type?: SortOrder
  }

  export type FOOD_TYPESAvgOrderByAggregateInput = {
    food_index?: SortOrder
  }

  export type FOOD_TYPESMaxOrderByAggregateInput = {
    food_index?: SortOrder
    food_type?: SortOrder
  }

  export type FOOD_TYPESMinOrderByAggregateInput = {
    food_index?: SortOrder
    food_type?: SortOrder
  }

  export type FOOD_TYPESSumOrderByAggregateInput = {
    food_index?: SortOrder
  }

  export type MISSIONSOrderByRelevanceInput = {
    fields: MISSIONSOrderByRelevanceFieldEnum | MISSIONSOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MISSIONSCountOrderByAggregateInput = {
    mission_Index?: SortOrder
    mission_Contents?: SortOrder
    store_Index?: SortOrder
    area_index?: SortOrder
    mission_Point?: SortOrder
  }

  export type MISSIONSAvgOrderByAggregateInput = {
    mission_Index?: SortOrder
    store_Index?: SortOrder
    area_index?: SortOrder
    mission_Point?: SortOrder
  }

  export type MISSIONSMaxOrderByAggregateInput = {
    mission_Index?: SortOrder
    mission_Contents?: SortOrder
    store_Index?: SortOrder
    area_index?: SortOrder
    mission_Point?: SortOrder
  }

  export type MISSIONSMinOrderByAggregateInput = {
    mission_Index?: SortOrder
    mission_Contents?: SortOrder
    store_Index?: SortOrder
    area_index?: SortOrder
    mission_Point?: SortOrder
  }

  export type MISSIONSSumOrderByAggregateInput = {
    mission_Index?: SortOrder
    store_Index?: SortOrder
    area_index?: SortOrder
    mission_Point?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type REVIEWSOrderByRelevanceInput = {
    fields: REVIEWSOrderByRelevanceFieldEnum | REVIEWSOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type REVIEWSCountOrderByAggregateInput = {
    review_Index?: SortOrder
    review_Contents?: SortOrder
    review_CreatedDay?: SortOrder
    review_Stars?: SortOrder
    store_Index?: SortOrder
    user_Index?: SortOrder
  }

  export type REVIEWSAvgOrderByAggregateInput = {
    review_Index?: SortOrder
    review_Stars?: SortOrder
    store_Index?: SortOrder
    user_Index?: SortOrder
  }

  export type REVIEWSMaxOrderByAggregateInput = {
    review_Index?: SortOrder
    review_Contents?: SortOrder
    review_CreatedDay?: SortOrder
    review_Stars?: SortOrder
    store_Index?: SortOrder
    user_Index?: SortOrder
  }

  export type REVIEWSMinOrderByAggregateInput = {
    review_Index?: SortOrder
    review_Contents?: SortOrder
    review_CreatedDay?: SortOrder
    review_Stars?: SortOrder
    store_Index?: SortOrder
    user_Index?: SortOrder
  }

  export type REVIEWSSumOrderByAggregateInput = {
    review_Index?: SortOrder
    review_Stars?: SortOrder
    store_Index?: SortOrder
    user_Index?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type STORESOrderByRelevanceInput = {
    fields: STORESOrderByRelevanceFieldEnum | STORESOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type STORESCountOrderByAggregateInput = {
    store_Index?: SortOrder
    store_Name?: SortOrder
    store_Location?: SortOrder
    area_index?: SortOrder
  }

  export type STORESAvgOrderByAggregateInput = {
    store_Index?: SortOrder
    area_index?: SortOrder
  }

  export type STORESMaxOrderByAggregateInput = {
    store_Index?: SortOrder
    store_Name?: SortOrder
    store_Location?: SortOrder
    area_index?: SortOrder
  }

  export type STORESMinOrderByAggregateInput = {
    store_Index?: SortOrder
    store_Name?: SortOrder
    store_Location?: SortOrder
    area_index?: SortOrder
  }

  export type STORESSumOrderByAggregateInput = {
    store_Index?: SortOrder
    area_index?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type USERSOrderByRelevanceInput = {
    fields: USERSOrderByRelevanceFieldEnum | USERSOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type USERSCountOrderByAggregateInput = {
    user_Index?: SortOrder
    user_Name?: SortOrder
    user_Id?: SortOrder
    user_Password?: SortOrder
    user_Email?: SortOrder
    user_Point?: SortOrder
    user_Birth?: SortOrder
    user_Address?: SortOrder
    user_Gender?: SortOrder
  }

  export type USERSAvgOrderByAggregateInput = {
    user_Index?: SortOrder
    user_Point?: SortOrder
    user_Gender?: SortOrder
  }

  export type USERSMaxOrderByAggregateInput = {
    user_Index?: SortOrder
    user_Name?: SortOrder
    user_Id?: SortOrder
    user_Password?: SortOrder
    user_Email?: SortOrder
    user_Point?: SortOrder
    user_Birth?: SortOrder
    user_Address?: SortOrder
    user_Gender?: SortOrder
  }

  export type USERSMinOrderByAggregateInput = {
    user_Index?: SortOrder
    user_Name?: SortOrder
    user_Id?: SortOrder
    user_Password?: SortOrder
    user_Email?: SortOrder
    user_Point?: SortOrder
    user_Birth?: SortOrder
    user_Address?: SortOrder
    user_Gender?: SortOrder
  }

  export type USERSSumOrderByAggregateInput = {
    user_Index?: SortOrder
    user_Point?: SortOrder
    user_Gender?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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