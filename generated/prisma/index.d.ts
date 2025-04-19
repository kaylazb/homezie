
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model WalletTransaction
 * 
 */
export type WalletTransaction = $Result.DefaultSelection<Prisma.$WalletTransactionPayload>
/**
 * Model Topup
 * 
 */
export type Topup = $Result.DefaultSelection<Prisma.$TopupPayload>
/**
 * Model Withdrawal
 * 
 */
export type Withdrawal = $Result.DefaultSelection<Prisma.$WithdrawalPayload>
/**
 * Model BusClass
 * 
 */
export type BusClass = $Result.DefaultSelection<Prisma.$BusClassPayload>
/**
 * Model Bus
 * 
 */
export type Bus = $Result.DefaultSelection<Prisma.$BusPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingSeat
 * 
 */
export type BookingSeat = $Result.DefaultSelection<Prisma.$BookingSeatPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER',
  DRIVER: 'DRIVER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletTransaction`: Exposes CRUD operations for the **WalletTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletTransactions
    * const walletTransactions = await prisma.walletTransaction.findMany()
    * ```
    */
  get walletTransaction(): Prisma.WalletTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topup`: Exposes CRUD operations for the **Topup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topups
    * const topups = await prisma.topup.findMany()
    * ```
    */
  get topup(): Prisma.TopupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawal`: Exposes CRUD operations for the **Withdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawal.findMany()
    * ```
    */
  get withdrawal(): Prisma.WithdrawalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.busClass`: Exposes CRUD operations for the **BusClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusClasses
    * const busClasses = await prisma.busClass.findMany()
    * ```
    */
  get busClass(): Prisma.BusClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bus`: Exposes CRUD operations for the **Bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.BusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingSeat`: Exposes CRUD operations for the **BookingSeat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingSeats
    * const bookingSeats = await prisma.bookingSeat.findMany()
    * ```
    */
  get bookingSeat(): Prisma.BookingSeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Wallet: 'Wallet',
    WalletTransaction: 'WalletTransaction',
    Topup: 'Topup',
    Withdrawal: 'Withdrawal',
    BusClass: 'BusClass',
    Bus: 'Bus',
    Route: 'Route',
    Schedule: 'Schedule',
    Booking: 'Booking',
    BookingSeat: 'BookingSeat',
    Payment: 'Payment'
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
      modelProps: "user" | "wallet" | "walletTransaction" | "topup" | "withdrawal" | "busClass" | "bus" | "route" | "schedule" | "booking" | "bookingSeat" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      WalletTransaction: {
        payload: Prisma.$WalletTransactionPayload<ExtArgs>
        fields: Prisma.WalletTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findFirst: {
            args: Prisma.WalletTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findMany: {
            args: Prisma.WalletTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          create: {
            args: Prisma.WalletTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          createMany: {
            args: Prisma.WalletTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WalletTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          update: {
            args: Prisma.WalletTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          deleteMany: {
            args: Prisma.WalletTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          aggregate: {
            args: Prisma.WalletTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletTransaction>
          }
          groupBy: {
            args: Prisma.WalletTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionCountAggregateOutputType> | number
          }
        }
      }
      Topup: {
        payload: Prisma.$TopupPayload<ExtArgs>
        fields: Prisma.TopupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopupPayload>
          }
          findFirst: {
            args: Prisma.TopupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopupPayload>
          }
          findMany: {
            args: Prisma.TopupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopupPayload>[]
          }
          create: {
            args: Prisma.TopupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopupPayload>
          }
          createMany: {
            args: Prisma.TopupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TopupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopupPayload>
          }
          update: {
            args: Prisma.TopupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopupPayload>
          }
          deleteMany: {
            args: Prisma.TopupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TopupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopupPayload>
          }
          aggregate: {
            args: Prisma.TopupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopup>
          }
          groupBy: {
            args: Prisma.TopupGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopupGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopupCountArgs<ExtArgs>
            result: $Utils.Optional<TopupCountAggregateOutputType> | number
          }
        }
      }
      Withdrawal: {
        payload: Prisma.$WithdrawalPayload<ExtArgs>
        fields: Prisma.WithdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findFirst: {
            args: Prisma.WithdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findMany: {
            args: Prisma.WithdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          create: {
            args: Prisma.WithdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          createMany: {
            args: Prisma.WithdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WithdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          update: {
            args: Prisma.WithdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WithdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawal>
          }
          groupBy: {
            args: Prisma.WithdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCountAggregateOutputType> | number
          }
        }
      }
      BusClass: {
        payload: Prisma.$BusClassPayload<ExtArgs>
        fields: Prisma.BusClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusClassPayload>
          }
          findFirst: {
            args: Prisma.BusClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusClassPayload>
          }
          findMany: {
            args: Prisma.BusClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusClassPayload>[]
          }
          create: {
            args: Prisma.BusClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusClassPayload>
          }
          createMany: {
            args: Prisma.BusClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusClassPayload>
          }
          update: {
            args: Prisma.BusClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusClassPayload>
          }
          deleteMany: {
            args: Prisma.BusClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusClassPayload>
          }
          aggregate: {
            args: Prisma.BusClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusClass>
          }
          groupBy: {
            args: Prisma.BusClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusClassCountArgs<ExtArgs>
            result: $Utils.Optional<BusClassCountAggregateOutputType> | number
          }
        }
      }
      Bus: {
        payload: Prisma.$BusPayload<ExtArgs>
        fields: Prisma.BusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findFirst: {
            args: Prisma.BusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findMany: {
            args: Prisma.BusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          create: {
            args: Prisma.BusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          createMany: {
            args: Prisma.BusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          update: {
            args: Prisma.BusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          deleteMany: {
            args: Prisma.BusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.BusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusCountArgs<ExtArgs>
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingSeat: {
        payload: Prisma.$BookingSeatPayload<ExtArgs>
        fields: Prisma.BookingSeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingSeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingSeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          findFirst: {
            args: Prisma.BookingSeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingSeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          findMany: {
            args: Prisma.BookingSeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>[]
          }
          create: {
            args: Prisma.BookingSeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          createMany: {
            args: Prisma.BookingSeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingSeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          update: {
            args: Prisma.BookingSeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          deleteMany: {
            args: Prisma.BookingSeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingSeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingSeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          aggregate: {
            args: Prisma.BookingSeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingSeat>
          }
          groupBy: {
            args: Prisma.BookingSeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingSeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingSeatCountArgs<ExtArgs>
            result: $Utils.Optional<BookingSeatCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
    user?: UserOmit
    wallet?: WalletOmit
    walletTransaction?: WalletTransactionOmit
    topup?: TopupOmit
    withdrawal?: WithdrawalOmit
    busClass?: BusClassOmit
    bus?: BusOmit
    route?: RouteOmit
    schedule?: ScheduleOmit
    booking?: BookingOmit
    bookingSeat?: BookingSeatOmit
    payment?: PaymentOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    topups: number
    withdrawals: number
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topups?: boolean | UserCountOutputTypeCountTopupsArgs
    withdrawals?: boolean | UserCountOutputTypeCountWithdrawalsArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTopupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    transactions: number
  }

  export type WalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | WalletCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
  }


  /**
   * Count Type BusClassCountOutputType
   */

  export type BusClassCountOutputType = {
    buses: number
  }

  export type BusClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | BusClassCountOutputTypeCountBusesArgs
  }

  // Custom InputTypes
  /**
   * BusClassCountOutputType without action
   */
  export type BusClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClassCountOutputType
     */
    select?: BusClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusClassCountOutputType without action
   */
  export type BusClassCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }


  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    schedules: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | BusCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    schedules: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | RouteCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    bookings: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ScheduleCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    seats: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | BookingCountOutputTypeCountSeatsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSeatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    wallet?: boolean | User$walletArgs<ExtArgs>
    topups?: boolean | User$topupsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | User$walletArgs<ExtArgs>
    topups?: boolean | User$topupsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs> | null
      topups: Prisma.$TopupPayload<ExtArgs>[]
      withdrawals: Prisma.$WithdrawalPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    topups<T extends User$topupsArgs<ExtArgs> = {}>(args?: Subset<T, User$topupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawals<T extends User$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, User$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
  }

  /**
   * User.topups
   */
  export type User$topupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    where?: TopupWhereInput
    orderBy?: TopupOrderByWithRelationInput | TopupOrderByWithRelationInput[]
    cursor?: TopupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopupScalarFieldEnum | TopupScalarFieldEnum[]
  }

  /**
   * User.withdrawals
   */
  export type User$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    cursor?: WithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    balance: number | null
  }

  export type WalletSumAggregateOutputType = {
    balance: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    balance?: true
  }

  export type WalletSumAggregateInputType = {
    balance?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    userId: string
    balance: number
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>



  export type WalletSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balance", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$WalletTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      balance: number
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Wallet$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'String'>
    readonly userId: FieldRef<"Wallet", 'String'>
    readonly balance: FieldRef<"Wallet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet.transactions
   */
  export type Wallet$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    cursor?: WalletTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model WalletTransaction
   */

  export type AggregateWalletTransaction = {
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  export type WalletTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type WalletTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type WalletTransactionMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    amount: number | null
    type: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type WalletTransactionMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    amount: number | null
    type: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type WalletTransactionCountAggregateOutputType = {
    id: number
    walletId: number
    amount: number
    type: number
    reference: number
    createdAt: number
    _all: number
  }


  export type WalletTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type WalletTransactionSumAggregateInputType = {
    amount?: true
  }

  export type WalletTransactionMinAggregateInputType = {
    id?: true
    walletId?: true
    amount?: true
    type?: true
    reference?: true
    createdAt?: true
  }

  export type WalletTransactionMaxAggregateInputType = {
    id?: true
    walletId?: true
    amount?: true
    type?: true
    reference?: true
    createdAt?: true
  }

  export type WalletTransactionCountAggregateInputType = {
    id?: true
    walletId?: true
    amount?: true
    type?: true
    reference?: true
    createdAt?: true
    _all?: true
  }

  export type WalletTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransaction to aggregate.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletTransactions
    **/
    _count?: true | WalletTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type GetWalletTransactionAggregateType<T extends WalletTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletTransaction[P]>
      : GetScalarType<T[P], AggregateWalletTransaction[P]>
  }




  export type WalletTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithAggregationInput | WalletTransactionOrderByWithAggregationInput[]
    by: WalletTransactionScalarFieldEnum[] | WalletTransactionScalarFieldEnum
    having?: WalletTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletTransactionCountAggregateInputType | true
    _avg?: WalletTransactionAvgAggregateInputType
    _sum?: WalletTransactionSumAggregateInputType
    _min?: WalletTransactionMinAggregateInputType
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type WalletTransactionGroupByOutputType = {
    id: string
    walletId: string
    amount: number
    type: string
    reference: string
    createdAt: Date
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  type GetWalletTransactionGroupByPayload<T extends WalletTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
        }
      >
    >


  export type WalletTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    amount?: boolean
    type?: boolean
    reference?: boolean
    createdAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>



  export type WalletTransactionSelectScalar = {
    id?: boolean
    walletId?: boolean
    amount?: boolean
    type?: boolean
    reference?: boolean
    createdAt?: boolean
  }

  export type WalletTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletId" | "amount" | "type" | "reference" | "createdAt", ExtArgs["result"]["walletTransaction"]>
  export type WalletTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $WalletTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletTransaction"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      amount: number
      type: string
      reference: string
      createdAt: Date
    }, ExtArgs["result"]["walletTransaction"]>
    composites: {}
  }

  type WalletTransactionGetPayload<S extends boolean | null | undefined | WalletTransactionDefaultArgs> = $Result.GetResult<Prisma.$WalletTransactionPayload, S>

  type WalletTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletTransactionCountAggregateInputType | true
    }

  export interface WalletTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletTransaction'], meta: { name: 'WalletTransaction' } }
    /**
     * Find zero or one WalletTransaction that matches the filter.
     * @param {WalletTransactionFindUniqueArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletTransactionFindUniqueArgs>(args: SelectSubset<T, WalletTransactionFindUniqueArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalletTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletTransactionFindUniqueOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletTransactionFindFirstArgs>(args?: SelectSubset<T, WalletTransactionFindFirstArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalletTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany()
     * 
     * // Get first 10 WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletTransactionFindManyArgs>(args?: SelectSubset<T, WalletTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalletTransaction.
     * @param {WalletTransactionCreateArgs} args - Arguments to create a WalletTransaction.
     * @example
     * // Create one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.create({
     *   data: {
     *     // ... data to create a WalletTransaction
     *   }
     * })
     * 
     */
    create<T extends WalletTransactionCreateArgs>(args: SelectSubset<T, WalletTransactionCreateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalletTransactions.
     * @param {WalletTransactionCreateManyArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletTransactionCreateManyArgs>(args?: SelectSubset<T, WalletTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WalletTransaction.
     * @param {WalletTransactionDeleteArgs} args - Arguments to delete one WalletTransaction.
     * @example
     * // Delete one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.delete({
     *   where: {
     *     // ... filter to delete one WalletTransaction
     *   }
     * })
     * 
     */
    delete<T extends WalletTransactionDeleteArgs>(args: SelectSubset<T, WalletTransactionDeleteArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalletTransaction.
     * @param {WalletTransactionUpdateArgs} args - Arguments to update one WalletTransaction.
     * @example
     * // Update one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletTransactionUpdateArgs>(args: SelectSubset<T, WalletTransactionUpdateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalletTransactions.
     * @param {WalletTransactionDeleteManyArgs} args - Arguments to filter WalletTransactions to delete.
     * @example
     * // Delete a few WalletTransactions
     * const { count } = await prisma.walletTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletTransactionDeleteManyArgs>(args?: SelectSubset<T, WalletTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletTransactionUpdateManyArgs>(args: SelectSubset<T, WalletTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WalletTransaction.
     * @param {WalletTransactionUpsertArgs} args - Arguments to update or create a WalletTransaction.
     * @example
     * // Update or create a WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.upsert({
     *   create: {
     *     // ... data to create a WalletTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletTransaction we want to update
     *   }
     * })
     */
    upsert<T extends WalletTransactionUpsertArgs>(args: SelectSubset<T, WalletTransactionUpsertArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionCountArgs} args - Arguments to filter WalletTransactions to count.
     * @example
     * // Count the number of WalletTransactions
     * const count = await prisma.walletTransaction.count({
     *   where: {
     *     // ... the filter for the WalletTransactions we want to count
     *   }
     * })
    **/
    count<T extends WalletTransactionCountArgs>(
      args?: Subset<T, WalletTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletTransactionAggregateArgs>(args: Subset<T, WalletTransactionAggregateArgs>): Prisma.PrismaPromise<GetWalletTransactionAggregateType<T>>

    /**
     * Group by WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionGroupByArgs} args - Group by arguments.
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
      T extends WalletTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletTransactionGroupByArgs['orderBy'] }
        : { orderBy?: WalletTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletTransaction model
   */
  readonly fields: WalletTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WalletTransaction model
   */
  interface WalletTransactionFieldRefs {
    readonly id: FieldRef<"WalletTransaction", 'String'>
    readonly walletId: FieldRef<"WalletTransaction", 'String'>
    readonly amount: FieldRef<"WalletTransaction", 'Int'>
    readonly type: FieldRef<"WalletTransaction", 'String'>
    readonly reference: FieldRef<"WalletTransaction", 'String'>
    readonly createdAt: FieldRef<"WalletTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletTransaction findUnique
   */
  export type WalletTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findUniqueOrThrow
   */
  export type WalletTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findFirst
   */
  export type WalletTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findFirstOrThrow
   */
  export type WalletTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findMany
   */
  export type WalletTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction create
   */
  export type WalletTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletTransaction.
     */
    data: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
  }

  /**
   * WalletTransaction createMany
   */
  export type WalletTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletTransaction update
   */
  export type WalletTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletTransaction.
     */
    data: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
    /**
     * Choose, which WalletTransaction to update.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction updateMany
   */
  export type WalletTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to update.
     */
    limit?: number
  }

  /**
   * WalletTransaction upsert
   */
  export type WalletTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletTransaction to update in case it exists.
     */
    where: WalletTransactionWhereUniqueInput
    /**
     * In case the WalletTransaction found by the `where` argument doesn't exist, create a new WalletTransaction with this data.
     */
    create: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
    /**
     * In case the WalletTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
  }

  /**
   * WalletTransaction delete
   */
  export type WalletTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter which WalletTransaction to delete.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction deleteMany
   */
  export type WalletTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransactions to delete
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to delete.
     */
    limit?: number
  }

  /**
   * WalletTransaction without action
   */
  export type WalletTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Topup
   */

  export type AggregateTopup = {
    _count: TopupCountAggregateOutputType | null
    _avg: TopupAvgAggregateOutputType | null
    _sum: TopupSumAggregateOutputType | null
    _min: TopupMinAggregateOutputType | null
    _max: TopupMaxAggregateOutputType | null
  }

  export type TopupAvgAggregateOutputType = {
    amount: number | null
  }

  export type TopupSumAggregateOutputType = {
    amount: number | null
  }

  export type TopupMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TopupMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TopupCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    status: number
    createdAt: number
    _all: number
  }


  export type TopupAvgAggregateInputType = {
    amount?: true
  }

  export type TopupSumAggregateInputType = {
    amount?: true
  }

  export type TopupMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type TopupMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type TopupCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TopupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topup to aggregate.
     */
    where?: TopupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topups to fetch.
     */
    orderBy?: TopupOrderByWithRelationInput | TopupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topups
    **/
    _count?: true | TopupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopupMaxAggregateInputType
  }

  export type GetTopupAggregateType<T extends TopupAggregateArgs> = {
        [P in keyof T & keyof AggregateTopup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopup[P]>
      : GetScalarType<T[P], AggregateTopup[P]>
  }




  export type TopupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopupWhereInput
    orderBy?: TopupOrderByWithAggregationInput | TopupOrderByWithAggregationInput[]
    by: TopupScalarFieldEnum[] | TopupScalarFieldEnum
    having?: TopupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopupCountAggregateInputType | true
    _avg?: TopupAvgAggregateInputType
    _sum?: TopupSumAggregateInputType
    _min?: TopupMinAggregateInputType
    _max?: TopupMaxAggregateInputType
  }

  export type TopupGroupByOutputType = {
    id: string
    userId: string
    amount: number
    status: string
    createdAt: Date
    _count: TopupCountAggregateOutputType | null
    _avg: TopupAvgAggregateOutputType | null
    _sum: TopupSumAggregateOutputType | null
    _min: TopupMinAggregateOutputType | null
    _max: TopupMaxAggregateOutputType | null
  }

  type GetTopupGroupByPayload<T extends TopupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopupGroupByOutputType[P]>
            : GetScalarType<T[P], TopupGroupByOutputType[P]>
        }
      >
    >


  export type TopupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topup"]>



  export type TopupSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TopupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "status" | "createdAt", ExtArgs["result"]["topup"]>
  export type TopupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TopupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["topup"]>
    composites: {}
  }

  type TopupGetPayload<S extends boolean | null | undefined | TopupDefaultArgs> = $Result.GetResult<Prisma.$TopupPayload, S>

  type TopupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopupCountAggregateInputType | true
    }

  export interface TopupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topup'], meta: { name: 'Topup' } }
    /**
     * Find zero or one Topup that matches the filter.
     * @param {TopupFindUniqueArgs} args - Arguments to find a Topup
     * @example
     * // Get one Topup
     * const topup = await prisma.topup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopupFindUniqueArgs>(args: SelectSubset<T, TopupFindUniqueArgs<ExtArgs>>): Prisma__TopupClient<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopupFindUniqueOrThrowArgs} args - Arguments to find a Topup
     * @example
     * // Get one Topup
     * const topup = await prisma.topup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopupFindUniqueOrThrowArgs>(args: SelectSubset<T, TopupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopupClient<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopupFindFirstArgs} args - Arguments to find a Topup
     * @example
     * // Get one Topup
     * const topup = await prisma.topup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopupFindFirstArgs>(args?: SelectSubset<T, TopupFindFirstArgs<ExtArgs>>): Prisma__TopupClient<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopupFindFirstOrThrowArgs} args - Arguments to find a Topup
     * @example
     * // Get one Topup
     * const topup = await prisma.topup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopupFindFirstOrThrowArgs>(args?: SelectSubset<T, TopupFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopupClient<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topups
     * const topups = await prisma.topup.findMany()
     * 
     * // Get first 10 Topups
     * const topups = await prisma.topup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topupWithIdOnly = await prisma.topup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopupFindManyArgs>(args?: SelectSubset<T, TopupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topup.
     * @param {TopupCreateArgs} args - Arguments to create a Topup.
     * @example
     * // Create one Topup
     * const Topup = await prisma.topup.create({
     *   data: {
     *     // ... data to create a Topup
     *   }
     * })
     * 
     */
    create<T extends TopupCreateArgs>(args: SelectSubset<T, TopupCreateArgs<ExtArgs>>): Prisma__TopupClient<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topups.
     * @param {TopupCreateManyArgs} args - Arguments to create many Topups.
     * @example
     * // Create many Topups
     * const topup = await prisma.topup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopupCreateManyArgs>(args?: SelectSubset<T, TopupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Topup.
     * @param {TopupDeleteArgs} args - Arguments to delete one Topup.
     * @example
     * // Delete one Topup
     * const Topup = await prisma.topup.delete({
     *   where: {
     *     // ... filter to delete one Topup
     *   }
     * })
     * 
     */
    delete<T extends TopupDeleteArgs>(args: SelectSubset<T, TopupDeleteArgs<ExtArgs>>): Prisma__TopupClient<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topup.
     * @param {TopupUpdateArgs} args - Arguments to update one Topup.
     * @example
     * // Update one Topup
     * const topup = await prisma.topup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopupUpdateArgs>(args: SelectSubset<T, TopupUpdateArgs<ExtArgs>>): Prisma__TopupClient<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topups.
     * @param {TopupDeleteManyArgs} args - Arguments to filter Topups to delete.
     * @example
     * // Delete a few Topups
     * const { count } = await prisma.topup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopupDeleteManyArgs>(args?: SelectSubset<T, TopupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topups
     * const topup = await prisma.topup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopupUpdateManyArgs>(args: SelectSubset<T, TopupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topup.
     * @param {TopupUpsertArgs} args - Arguments to update or create a Topup.
     * @example
     * // Update or create a Topup
     * const topup = await prisma.topup.upsert({
     *   create: {
     *     // ... data to create a Topup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topup we want to update
     *   }
     * })
     */
    upsert<T extends TopupUpsertArgs>(args: SelectSubset<T, TopupUpsertArgs<ExtArgs>>): Prisma__TopupClient<$Result.GetResult<Prisma.$TopupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopupCountArgs} args - Arguments to filter Topups to count.
     * @example
     * // Count the number of Topups
     * const count = await prisma.topup.count({
     *   where: {
     *     // ... the filter for the Topups we want to count
     *   }
     * })
    **/
    count<T extends TopupCountArgs>(
      args?: Subset<T, TopupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopupAggregateArgs>(args: Subset<T, TopupAggregateArgs>): Prisma.PrismaPromise<GetTopupAggregateType<T>>

    /**
     * Group by Topup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopupGroupByArgs} args - Group by arguments.
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
      T extends TopupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopupGroupByArgs['orderBy'] }
        : { orderBy?: TopupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topup model
   */
  readonly fields: TopupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Topup model
   */
  interface TopupFieldRefs {
    readonly id: FieldRef<"Topup", 'String'>
    readonly userId: FieldRef<"Topup", 'String'>
    readonly amount: FieldRef<"Topup", 'Int'>
    readonly status: FieldRef<"Topup", 'String'>
    readonly createdAt: FieldRef<"Topup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topup findUnique
   */
  export type TopupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    /**
     * Filter, which Topup to fetch.
     */
    where: TopupWhereUniqueInput
  }

  /**
   * Topup findUniqueOrThrow
   */
  export type TopupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    /**
     * Filter, which Topup to fetch.
     */
    where: TopupWhereUniqueInput
  }

  /**
   * Topup findFirst
   */
  export type TopupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    /**
     * Filter, which Topup to fetch.
     */
    where?: TopupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topups to fetch.
     */
    orderBy?: TopupOrderByWithRelationInput | TopupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topups.
     */
    cursor?: TopupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topups.
     */
    distinct?: TopupScalarFieldEnum | TopupScalarFieldEnum[]
  }

  /**
   * Topup findFirstOrThrow
   */
  export type TopupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    /**
     * Filter, which Topup to fetch.
     */
    where?: TopupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topups to fetch.
     */
    orderBy?: TopupOrderByWithRelationInput | TopupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topups.
     */
    cursor?: TopupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topups.
     */
    distinct?: TopupScalarFieldEnum | TopupScalarFieldEnum[]
  }

  /**
   * Topup findMany
   */
  export type TopupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    /**
     * Filter, which Topups to fetch.
     */
    where?: TopupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topups to fetch.
     */
    orderBy?: TopupOrderByWithRelationInput | TopupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topups.
     */
    cursor?: TopupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topups.
     */
    skip?: number
    distinct?: TopupScalarFieldEnum | TopupScalarFieldEnum[]
  }

  /**
   * Topup create
   */
  export type TopupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    /**
     * The data needed to create a Topup.
     */
    data: XOR<TopupCreateInput, TopupUncheckedCreateInput>
  }

  /**
   * Topup createMany
   */
  export type TopupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topups.
     */
    data: TopupCreateManyInput | TopupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topup update
   */
  export type TopupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    /**
     * The data needed to update a Topup.
     */
    data: XOR<TopupUpdateInput, TopupUncheckedUpdateInput>
    /**
     * Choose, which Topup to update.
     */
    where: TopupWhereUniqueInput
  }

  /**
   * Topup updateMany
   */
  export type TopupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topups.
     */
    data: XOR<TopupUpdateManyMutationInput, TopupUncheckedUpdateManyInput>
    /**
     * Filter which Topups to update
     */
    where?: TopupWhereInput
    /**
     * Limit how many Topups to update.
     */
    limit?: number
  }

  /**
   * Topup upsert
   */
  export type TopupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    /**
     * The filter to search for the Topup to update in case it exists.
     */
    where: TopupWhereUniqueInput
    /**
     * In case the Topup found by the `where` argument doesn't exist, create a new Topup with this data.
     */
    create: XOR<TopupCreateInput, TopupUncheckedCreateInput>
    /**
     * In case the Topup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopupUpdateInput, TopupUncheckedUpdateInput>
  }

  /**
   * Topup delete
   */
  export type TopupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
    /**
     * Filter which Topup to delete.
     */
    where: TopupWhereUniqueInput
  }

  /**
   * Topup deleteMany
   */
  export type TopupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topups to delete
     */
    where?: TopupWhereInput
    /**
     * Limit how many Topups to delete.
     */
    limit?: number
  }

  /**
   * Topup without action
   */
  export type TopupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topup
     */
    select?: TopupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topup
     */
    omit?: TopupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopupInclude<ExtArgs> | null
  }


  /**
   * Model Withdrawal
   */

  export type AggregateWithdrawal = {
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  export type WithdrawalAvgAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalSumAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    bankCode: string | null
    accountNumber: string | null
    status: string | null
    createdAt: Date | null
  }

  export type WithdrawalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    bankCode: string | null
    accountNumber: string | null
    status: string | null
    createdAt: Date | null
  }

  export type WithdrawalCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    bankCode: number
    accountNumber: number
    status: number
    createdAt: number
    _all: number
  }


  export type WithdrawalAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawalSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawalMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    bankCode?: true
    accountNumber?: true
    status?: true
    createdAt?: true
  }

  export type WithdrawalMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    bankCode?: true
    accountNumber?: true
    status?: true
    createdAt?: true
  }

  export type WithdrawalCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    bankCode?: true
    accountNumber?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type WithdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawal to aggregate.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Withdrawals
    **/
    _count?: true | WithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalMaxAggregateInputType
  }

  export type GetWithdrawalAggregateType<T extends WithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawal[P]>
      : GetScalarType<T[P], AggregateWithdrawal[P]>
  }




  export type WithdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithAggregationInput | WithdrawalOrderByWithAggregationInput[]
    by: WithdrawalScalarFieldEnum[] | WithdrawalScalarFieldEnum
    having?: WithdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCountAggregateInputType | true
    _avg?: WithdrawalAvgAggregateInputType
    _sum?: WithdrawalSumAggregateInputType
    _min?: WithdrawalMinAggregateInputType
    _max?: WithdrawalMaxAggregateInputType
  }

  export type WithdrawalGroupByOutputType = {
    id: string
    userId: string
    amount: number
    bankCode: string
    accountNumber: string
    status: string
    createdAt: Date
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  type GetWithdrawalGroupByPayload<T extends WithdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    bankCode?: boolean
    accountNumber?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>



  export type WithdrawalSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    bankCode?: boolean
    accountNumber?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type WithdrawalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "bankCode" | "accountNumber" | "status" | "createdAt", ExtArgs["result"]["withdrawal"]>
  export type WithdrawalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WithdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Withdrawal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      bankCode: string
      accountNumber: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["withdrawal"]>
    composites: {}
  }

  type WithdrawalGetPayload<S extends boolean | null | undefined | WithdrawalDefaultArgs> = $Result.GetResult<Prisma.$WithdrawalPayload, S>

  type WithdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WithdrawalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalCountAggregateInputType | true
    }

  export interface WithdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Withdrawal'], meta: { name: 'Withdrawal' } }
    /**
     * Find zero or one Withdrawal that matches the filter.
     * @param {WithdrawalFindUniqueArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawalFindUniqueArgs>(args: SelectSubset<T, WithdrawalFindUniqueArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Withdrawal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WithdrawalFindUniqueOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawalFindFirstArgs>(args?: SelectSubset<T, WithdrawalFindFirstArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawalFindManyArgs>(args?: SelectSubset<T, WithdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Withdrawal.
     * @param {WithdrawalCreateArgs} args - Arguments to create a Withdrawal.
     * @example
     * // Create one Withdrawal
     * const Withdrawal = await prisma.withdrawal.create({
     *   data: {
     *     // ... data to create a Withdrawal
     *   }
     * })
     * 
     */
    create<T extends WithdrawalCreateArgs>(args: SelectSubset<T, WithdrawalCreateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Withdrawals.
     * @param {WithdrawalCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawalCreateManyArgs>(args?: SelectSubset<T, WithdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Withdrawal.
     * @param {WithdrawalDeleteArgs} args - Arguments to delete one Withdrawal.
     * @example
     * // Delete one Withdrawal
     * const Withdrawal = await prisma.withdrawal.delete({
     *   where: {
     *     // ... filter to delete one Withdrawal
     *   }
     * })
     * 
     */
    delete<T extends WithdrawalDeleteArgs>(args: SelectSubset<T, WithdrawalDeleteArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Withdrawal.
     * @param {WithdrawalUpdateArgs} args - Arguments to update one Withdrawal.
     * @example
     * // Update one Withdrawal
     * const withdrawal = await prisma.withdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawalUpdateArgs>(args: SelectSubset<T, WithdrawalUpdateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Withdrawals.
     * @param {WithdrawalDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawalDeleteManyArgs>(args?: SelectSubset<T, WithdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawalUpdateManyArgs>(args: SelectSubset<T, WithdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Withdrawal.
     * @param {WithdrawalUpsertArgs} args - Arguments to update or create a Withdrawal.
     * @example
     * // Update or create a Withdrawal
     * const withdrawal = await prisma.withdrawal.upsert({
     *   create: {
     *     // ... data to create a Withdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawal we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawalUpsertArgs>(args: SelectSubset<T, WithdrawalUpsertArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawal.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends WithdrawalCountArgs>(
      args?: Subset<T, WithdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawalAggregateArgs>(args: Subset<T, WithdrawalAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalAggregateType<T>>

    /**
     * Group by Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalGroupByArgs} args - Group by arguments.
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
      T extends WithdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawalGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Withdrawal model
   */
  readonly fields: WithdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Withdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Withdrawal model
   */
  interface WithdrawalFieldRefs {
    readonly id: FieldRef<"Withdrawal", 'String'>
    readonly userId: FieldRef<"Withdrawal", 'String'>
    readonly amount: FieldRef<"Withdrawal", 'Int'>
    readonly bankCode: FieldRef<"Withdrawal", 'String'>
    readonly accountNumber: FieldRef<"Withdrawal", 'String'>
    readonly status: FieldRef<"Withdrawal", 'String'>
    readonly createdAt: FieldRef<"Withdrawal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Withdrawal findUnique
   */
  export type WithdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findUniqueOrThrow
   */
  export type WithdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findFirst
   */
  export type WithdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findFirstOrThrow
   */
  export type WithdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findMany
   */
  export type WithdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawals to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal create
   */
  export type WithdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to create a Withdrawal.
     */
    data: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
  }

  /**
   * Withdrawal createMany
   */
  export type WithdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Withdrawal update
   */
  export type WithdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to update a Withdrawal.
     */
    data: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
    /**
     * Choose, which Withdrawal to update.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal updateMany
   */
  export type WithdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to update.
     */
    limit?: number
  }

  /**
   * Withdrawal upsert
   */
  export type WithdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The filter to search for the Withdrawal to update in case it exists.
     */
    where: WithdrawalWhereUniqueInput
    /**
     * In case the Withdrawal found by the `where` argument doesn't exist, create a new Withdrawal with this data.
     */
    create: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
    /**
     * In case the Withdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
  }

  /**
   * Withdrawal delete
   */
  export type WithdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter which Withdrawal to delete.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal deleteMany
   */
  export type WithdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawals to delete
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to delete.
     */
    limit?: number
  }

  /**
   * Withdrawal without action
   */
  export type WithdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
  }


  /**
   * Model BusClass
   */

  export type AggregateBusClass = {
    _count: BusClassCountAggregateOutputType | null
    _min: BusClassMinAggregateOutputType | null
    _max: BusClassMaxAggregateOutputType | null
  }

  export type BusClassMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type BusClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type BusClassCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type BusClassMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type BusClassMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type BusClassCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type BusClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusClass to aggregate.
     */
    where?: BusClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusClasses to fetch.
     */
    orderBy?: BusClassOrderByWithRelationInput | BusClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusClasses
    **/
    _count?: true | BusClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusClassMaxAggregateInputType
  }

  export type GetBusClassAggregateType<T extends BusClassAggregateArgs> = {
        [P in keyof T & keyof AggregateBusClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusClass[P]>
      : GetScalarType<T[P], AggregateBusClass[P]>
  }




  export type BusClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusClassWhereInput
    orderBy?: BusClassOrderByWithAggregationInput | BusClassOrderByWithAggregationInput[]
    by: BusClassScalarFieldEnum[] | BusClassScalarFieldEnum
    having?: BusClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusClassCountAggregateInputType | true
    _min?: BusClassMinAggregateInputType
    _max?: BusClassMaxAggregateInputType
  }

  export type BusClassGroupByOutputType = {
    id: string
    name: string
    description: string
    _count: BusClassCountAggregateOutputType | null
    _min: BusClassMinAggregateOutputType | null
    _max: BusClassMaxAggregateOutputType | null
  }

  type GetBusClassGroupByPayload<T extends BusClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusClassGroupByOutputType[P]>
            : GetScalarType<T[P], BusClassGroupByOutputType[P]>
        }
      >
    >


  export type BusClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    buses?: boolean | BusClass$busesArgs<ExtArgs>
    _count?: boolean | BusClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busClass"]>



  export type BusClassSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type BusClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["busClass"]>
  export type BusClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | BusClass$busesArgs<ExtArgs>
    _count?: boolean | BusClassCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BusClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusClass"
    objects: {
      buses: Prisma.$BusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
    }, ExtArgs["result"]["busClass"]>
    composites: {}
  }

  type BusClassGetPayload<S extends boolean | null | undefined | BusClassDefaultArgs> = $Result.GetResult<Prisma.$BusClassPayload, S>

  type BusClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusClassCountAggregateInputType | true
    }

  export interface BusClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusClass'], meta: { name: 'BusClass' } }
    /**
     * Find zero or one BusClass that matches the filter.
     * @param {BusClassFindUniqueArgs} args - Arguments to find a BusClass
     * @example
     * // Get one BusClass
     * const busClass = await prisma.busClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusClassFindUniqueArgs>(args: SelectSubset<T, BusClassFindUniqueArgs<ExtArgs>>): Prisma__BusClassClient<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusClassFindUniqueOrThrowArgs} args - Arguments to find a BusClass
     * @example
     * // Get one BusClass
     * const busClass = await prisma.busClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusClassFindUniqueOrThrowArgs>(args: SelectSubset<T, BusClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusClassClient<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusClassFindFirstArgs} args - Arguments to find a BusClass
     * @example
     * // Get one BusClass
     * const busClass = await prisma.busClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusClassFindFirstArgs>(args?: SelectSubset<T, BusClassFindFirstArgs<ExtArgs>>): Prisma__BusClassClient<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusClassFindFirstOrThrowArgs} args - Arguments to find a BusClass
     * @example
     * // Get one BusClass
     * const busClass = await prisma.busClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusClassFindFirstOrThrowArgs>(args?: SelectSubset<T, BusClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusClassClient<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusClasses
     * const busClasses = await prisma.busClass.findMany()
     * 
     * // Get first 10 BusClasses
     * const busClasses = await prisma.busClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busClassWithIdOnly = await prisma.busClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusClassFindManyArgs>(args?: SelectSubset<T, BusClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusClass.
     * @param {BusClassCreateArgs} args - Arguments to create a BusClass.
     * @example
     * // Create one BusClass
     * const BusClass = await prisma.busClass.create({
     *   data: {
     *     // ... data to create a BusClass
     *   }
     * })
     * 
     */
    create<T extends BusClassCreateArgs>(args: SelectSubset<T, BusClassCreateArgs<ExtArgs>>): Prisma__BusClassClient<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusClasses.
     * @param {BusClassCreateManyArgs} args - Arguments to create many BusClasses.
     * @example
     * // Create many BusClasses
     * const busClass = await prisma.busClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusClassCreateManyArgs>(args?: SelectSubset<T, BusClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusClass.
     * @param {BusClassDeleteArgs} args - Arguments to delete one BusClass.
     * @example
     * // Delete one BusClass
     * const BusClass = await prisma.busClass.delete({
     *   where: {
     *     // ... filter to delete one BusClass
     *   }
     * })
     * 
     */
    delete<T extends BusClassDeleteArgs>(args: SelectSubset<T, BusClassDeleteArgs<ExtArgs>>): Prisma__BusClassClient<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusClass.
     * @param {BusClassUpdateArgs} args - Arguments to update one BusClass.
     * @example
     * // Update one BusClass
     * const busClass = await prisma.busClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusClassUpdateArgs>(args: SelectSubset<T, BusClassUpdateArgs<ExtArgs>>): Prisma__BusClassClient<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusClasses.
     * @param {BusClassDeleteManyArgs} args - Arguments to filter BusClasses to delete.
     * @example
     * // Delete a few BusClasses
     * const { count } = await prisma.busClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusClassDeleteManyArgs>(args?: SelectSubset<T, BusClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusClasses
     * const busClass = await prisma.busClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusClassUpdateManyArgs>(args: SelectSubset<T, BusClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusClass.
     * @param {BusClassUpsertArgs} args - Arguments to update or create a BusClass.
     * @example
     * // Update or create a BusClass
     * const busClass = await prisma.busClass.upsert({
     *   create: {
     *     // ... data to create a BusClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusClass we want to update
     *   }
     * })
     */
    upsert<T extends BusClassUpsertArgs>(args: SelectSubset<T, BusClassUpsertArgs<ExtArgs>>): Prisma__BusClassClient<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusClassCountArgs} args - Arguments to filter BusClasses to count.
     * @example
     * // Count the number of BusClasses
     * const count = await prisma.busClass.count({
     *   where: {
     *     // ... the filter for the BusClasses we want to count
     *   }
     * })
    **/
    count<T extends BusClassCountArgs>(
      args?: Subset<T, BusClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusClassAggregateArgs>(args: Subset<T, BusClassAggregateArgs>): Prisma.PrismaPromise<GetBusClassAggregateType<T>>

    /**
     * Group by BusClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusClassGroupByArgs} args - Group by arguments.
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
      T extends BusClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusClassGroupByArgs['orderBy'] }
        : { orderBy?: BusClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusClass model
   */
  readonly fields: BusClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buses<T extends BusClass$busesArgs<ExtArgs> = {}>(args?: Subset<T, BusClass$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BusClass model
   */
  interface BusClassFieldRefs {
    readonly id: FieldRef<"BusClass", 'String'>
    readonly name: FieldRef<"BusClass", 'String'>
    readonly description: FieldRef<"BusClass", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusClass findUnique
   */
  export type BusClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
    /**
     * Filter, which BusClass to fetch.
     */
    where: BusClassWhereUniqueInput
  }

  /**
   * BusClass findUniqueOrThrow
   */
  export type BusClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
    /**
     * Filter, which BusClass to fetch.
     */
    where: BusClassWhereUniqueInput
  }

  /**
   * BusClass findFirst
   */
  export type BusClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
    /**
     * Filter, which BusClass to fetch.
     */
    where?: BusClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusClasses to fetch.
     */
    orderBy?: BusClassOrderByWithRelationInput | BusClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusClasses.
     */
    cursor?: BusClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusClasses.
     */
    distinct?: BusClassScalarFieldEnum | BusClassScalarFieldEnum[]
  }

  /**
   * BusClass findFirstOrThrow
   */
  export type BusClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
    /**
     * Filter, which BusClass to fetch.
     */
    where?: BusClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusClasses to fetch.
     */
    orderBy?: BusClassOrderByWithRelationInput | BusClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusClasses.
     */
    cursor?: BusClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusClasses.
     */
    distinct?: BusClassScalarFieldEnum | BusClassScalarFieldEnum[]
  }

  /**
   * BusClass findMany
   */
  export type BusClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
    /**
     * Filter, which BusClasses to fetch.
     */
    where?: BusClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusClasses to fetch.
     */
    orderBy?: BusClassOrderByWithRelationInput | BusClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusClasses.
     */
    cursor?: BusClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusClasses.
     */
    skip?: number
    distinct?: BusClassScalarFieldEnum | BusClassScalarFieldEnum[]
  }

  /**
   * BusClass create
   */
  export type BusClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
    /**
     * The data needed to create a BusClass.
     */
    data: XOR<BusClassCreateInput, BusClassUncheckedCreateInput>
  }

  /**
   * BusClass createMany
   */
  export type BusClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusClasses.
     */
    data: BusClassCreateManyInput | BusClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusClass update
   */
  export type BusClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
    /**
     * The data needed to update a BusClass.
     */
    data: XOR<BusClassUpdateInput, BusClassUncheckedUpdateInput>
    /**
     * Choose, which BusClass to update.
     */
    where: BusClassWhereUniqueInput
  }

  /**
   * BusClass updateMany
   */
  export type BusClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusClasses.
     */
    data: XOR<BusClassUpdateManyMutationInput, BusClassUncheckedUpdateManyInput>
    /**
     * Filter which BusClasses to update
     */
    where?: BusClassWhereInput
    /**
     * Limit how many BusClasses to update.
     */
    limit?: number
  }

  /**
   * BusClass upsert
   */
  export type BusClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
    /**
     * The filter to search for the BusClass to update in case it exists.
     */
    where: BusClassWhereUniqueInput
    /**
     * In case the BusClass found by the `where` argument doesn't exist, create a new BusClass with this data.
     */
    create: XOR<BusClassCreateInput, BusClassUncheckedCreateInput>
    /**
     * In case the BusClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusClassUpdateInput, BusClassUncheckedUpdateInput>
  }

  /**
   * BusClass delete
   */
  export type BusClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
    /**
     * Filter which BusClass to delete.
     */
    where: BusClassWhereUniqueInput
  }

  /**
   * BusClass deleteMany
   */
  export type BusClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusClasses to delete
     */
    where?: BusClassWhereInput
    /**
     * Limit how many BusClasses to delete.
     */
    limit?: number
  }

  /**
   * BusClass.buses
   */
  export type BusClass$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * BusClass without action
   */
  export type BusClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusClass
     */
    select?: BusClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusClass
     */
    omit?: BusClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusClassInclude<ExtArgs> | null
  }


  /**
   * Model Bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusAvgAggregateOutputType = {
    capacity: number | null
  }

  export type BusSumAggregateOutputType = {
    capacity: number | null
  }

  export type BusMinAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    busClassId: string | null
  }

  export type BusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    busClassId: string | null
  }

  export type BusCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    busClassId: number
    _all: number
  }


  export type BusAvgAggregateInputType = {
    capacity?: true
  }

  export type BusSumAggregateInputType = {
    capacity?: true
  }

  export type BusMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    busClassId?: true
  }

  export type BusMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    busClassId?: true
  }

  export type BusCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    busClassId?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bus to aggregate.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type BusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
    orderBy?: BusOrderByWithAggregationInput | BusOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: BusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _avg?: BusAvgAggregateInputType
    _sum?: BusSumAggregateInputType
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id: string
    name: string
    capacity: number
    busClassId: string
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends BusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type BusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    busClassId?: boolean
    busClass?: boolean | BusClassDefaultArgs<ExtArgs>
    schedules?: boolean | Bus$schedulesArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>



  export type BusSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    busClassId?: boolean
  }

  export type BusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "busClassId", ExtArgs["result"]["bus"]>
  export type BusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busClass?: boolean | BusClassDefaultArgs<ExtArgs>
    schedules?: boolean | Bus$schedulesArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      busClass: Prisma.$BusClassPayload<ExtArgs>
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      capacity: number
      busClassId: string
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }

  type BusGetPayload<S extends boolean | null | undefined | BusDefaultArgs> = $Result.GetResult<Prisma.$BusPayload, S>

  type BusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface BusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bus'], meta: { name: 'Bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {BusFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusFindUniqueArgs>(args: SelectSubset<T, BusFindUniqueArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusFindUniqueOrThrowArgs>(args: SelectSubset<T, BusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusFindFirstArgs>(args?: SelectSubset<T, BusFindFirstArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusFindFirstOrThrowArgs>(args?: SelectSubset<T, BusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busWithIdOnly = await prisma.bus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusFindManyArgs>(args?: SelectSubset<T, BusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bus.
     * @param {BusCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
     */
    create<T extends BusCreateArgs>(args: SelectSubset<T, BusCreateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buses.
     * @param {BusCreateManyArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusCreateManyArgs>(args?: SelectSubset<T, BusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bus.
     * @param {BusDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
     */
    delete<T extends BusDeleteArgs>(args: SelectSubset<T, BusDeleteArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bus.
     * @param {BusUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusUpdateArgs>(args: SelectSubset<T, BusUpdateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buses.
     * @param {BusDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusDeleteManyArgs>(args?: SelectSubset<T, BusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusUpdateManyArgs>(args: SelectSubset<T, BusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bus.
     * @param {BusUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
     */
    upsert<T extends BusUpsertArgs>(args: SelectSubset<T, BusUpsertArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends BusCountArgs>(
      args?: Subset<T, BusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusGroupByArgs} args - Group by arguments.
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
      T extends BusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusGroupByArgs['orderBy'] }
        : { orderBy?: BusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bus model
   */
  readonly fields: BusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    busClass<T extends BusClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusClassDefaultArgs<ExtArgs>>): Prisma__BusClassClient<$Result.GetResult<Prisma.$BusClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Bus$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Bus$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bus model
   */
  interface BusFieldRefs {
    readonly id: FieldRef<"Bus", 'String'>
    readonly name: FieldRef<"Bus", 'String'>
    readonly capacity: FieldRef<"Bus", 'Int'>
    readonly busClassId: FieldRef<"Bus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bus findUnique
   */
  export type BusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findUniqueOrThrow
   */
  export type BusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findFirst
   */
  export type BusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findFirstOrThrow
   */
  export type BusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findMany
   */
  export type BusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Buses to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus create
   */
  export type BusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bus.
     */
    data: XOR<BusCreateInput, BusUncheckedCreateInput>
  }

  /**
   * Bus createMany
   */
  export type BusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bus update
   */
  export type BusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bus.
     */
    data: XOR<BusUpdateInput, BusUncheckedUpdateInput>
    /**
     * Choose, which Bus to update.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus updateMany
   */
  export type BusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
  }

  /**
   * Bus upsert
   */
  export type BusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bus to update in case it exists.
     */
    where: BusWhereUniqueInput
    /**
     * In case the Bus found by the `where` argument doesn't exist, create a new Bus with this data.
     */
    create: XOR<BusCreateInput, BusUncheckedCreateInput>
    /**
     * In case the Bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusUpdateInput, BusUncheckedUpdateInput>
  }

  /**
   * Bus delete
   */
  export type BusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter which Bus to delete.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus deleteMany
   */
  export type BusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buses to delete
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to delete.
     */
    limit?: number
  }

  /**
   * Bus.schedules
   */
  export type Bus$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Bus without action
   */
  export type BusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteMinAggregateOutputType = {
    id: string | null
    origin: string | null
    destination: string | null
  }

  export type RouteMaxAggregateOutputType = {
    id: string | null
    origin: string | null
    destination: string | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    origin: number
    destination: number
    _all: number
  }


  export type RouteMinAggregateInputType = {
    id?: true
    origin?: true
    destination?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    origin?: true
    destination?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    origin?: true
    destination?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: string
    origin: string
    destination: string
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origin?: boolean
    destination?: boolean
    schedules?: boolean | Route$schedulesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>



  export type RouteSelectScalar = {
    id?: boolean
    origin?: boolean
    destination?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "origin" | "destination", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | Route$schedulesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      origin: string
      destination: string
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
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
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedules<T extends Route$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Route$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'String'>
    readonly origin: FieldRef<"Route", 'String'>
    readonly destination: FieldRef<"Route", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.schedules
   */
  export type Route$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    price: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    price: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    busId: string | null
    routeId: string | null
    departure: Date | null
    arrival: Date | null
    price: number | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    busId: string | null
    routeId: string | null
    departure: Date | null
    arrival: Date | null
    price: number | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    busId: number
    routeId: number
    departure: number
    arrival: number
    price: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    price?: true
  }

  export type ScheduleSumAggregateInputType = {
    price?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    busId?: true
    routeId?: true
    departure?: true
    arrival?: true
    price?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    busId?: true
    routeId?: true
    departure?: true
    arrival?: true
    price?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    busId?: true
    routeId?: true
    departure?: true
    arrival?: true
    price?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    busId: string
    routeId: string
    departure: Date
    arrival: Date
    price: number
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busId?: boolean
    routeId?: boolean
    departure?: boolean
    arrival?: boolean
    price?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    bookings?: boolean | Schedule$bookingsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>



  export type ScheduleSelectScalar = {
    id?: boolean
    busId?: boolean
    routeId?: boolean
    departure?: boolean
    arrival?: boolean
    price?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "busId" | "routeId" | "departure" | "arrival" | "price", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    bookings?: boolean | Schedule$bookingsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      busId: string
      routeId: string
      departure: Date
      arrival: Date
      price: number
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Schedule$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly busId: FieldRef<"Schedule", 'String'>
    readonly routeId: FieldRef<"Schedule", 'String'>
    readonly departure: FieldRef<"Schedule", 'DateTime'>
    readonly arrival: FieldRef<"Schedule", 'DateTime'>
    readonly price: FieldRef<"Schedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.bookings
   */
  export type Schedule$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type BookingSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    scheduleId: string | null
    totalAmount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    scheduleId: string | null
    totalAmount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    scheduleId: number
    totalAmount: number
    status: number
    createdAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalAmount?: true
  }

  export type BookingSumAggregateInputType = {
    totalAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    scheduleId?: true
    totalAmount?: true
    status?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    scheduleId?: true
    totalAmount?: true
    status?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    scheduleId?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    scheduleId: string
    totalAmount: number
    status: string
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scheduleId?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    seats?: boolean | Booking$seatsArgs<ExtArgs>
    Payment?: boolean | Booking$PaymentArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    scheduleId?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "scheduleId" | "totalAmount" | "status" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    seats?: boolean | Booking$seatsArgs<ExtArgs>
    Payment?: boolean | Booking$PaymentArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      schedule: Prisma.$SchedulePayload<ExtArgs>
      seats: Prisma.$BookingSeatPayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      scheduleId: string
      totalAmount: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seats<T extends Booking$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends Booking$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$PaymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly scheduleId: FieldRef<"Booking", 'String'>
    readonly totalAmount: FieldRef<"Booking", 'Int'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.seats
   */
  export type Booking$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    where?: BookingSeatWhereInput
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    cursor?: BookingSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingSeatScalarFieldEnum | BookingSeatScalarFieldEnum[]
  }

  /**
   * Booking.Payment
   */
  export type Booking$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingSeat
   */

  export type AggregateBookingSeat = {
    _count: BookingSeatCountAggregateOutputType | null
    _min: BookingSeatMinAggregateOutputType | null
    _max: BookingSeatMaxAggregateOutputType | null
  }

  export type BookingSeatMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    seatNumber: string | null
  }

  export type BookingSeatMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    seatNumber: string | null
  }

  export type BookingSeatCountAggregateOutputType = {
    id: number
    bookingId: number
    seatNumber: number
    _all: number
  }


  export type BookingSeatMinAggregateInputType = {
    id?: true
    bookingId?: true
    seatNumber?: true
  }

  export type BookingSeatMaxAggregateInputType = {
    id?: true
    bookingId?: true
    seatNumber?: true
  }

  export type BookingSeatCountAggregateInputType = {
    id?: true
    bookingId?: true
    seatNumber?: true
    _all?: true
  }

  export type BookingSeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingSeat to aggregate.
     */
    where?: BookingSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSeats to fetch.
     */
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingSeats
    **/
    _count?: true | BookingSeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingSeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingSeatMaxAggregateInputType
  }

  export type GetBookingSeatAggregateType<T extends BookingSeatAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingSeat[P]>
      : GetScalarType<T[P], AggregateBookingSeat[P]>
  }




  export type BookingSeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSeatWhereInput
    orderBy?: BookingSeatOrderByWithAggregationInput | BookingSeatOrderByWithAggregationInput[]
    by: BookingSeatScalarFieldEnum[] | BookingSeatScalarFieldEnum
    having?: BookingSeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingSeatCountAggregateInputType | true
    _min?: BookingSeatMinAggregateInputType
    _max?: BookingSeatMaxAggregateInputType
  }

  export type BookingSeatGroupByOutputType = {
    id: string
    bookingId: string
    seatNumber: string
    _count: BookingSeatCountAggregateOutputType | null
    _min: BookingSeatMinAggregateOutputType | null
    _max: BookingSeatMaxAggregateOutputType | null
  }

  type GetBookingSeatGroupByPayload<T extends BookingSeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingSeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingSeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingSeatGroupByOutputType[P]>
            : GetScalarType<T[P], BookingSeatGroupByOutputType[P]>
        }
      >
    >


  export type BookingSeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    seatNumber?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingSeat"]>



  export type BookingSeatSelectScalar = {
    id?: boolean
    bookingId?: boolean
    seatNumber?: boolean
  }

  export type BookingSeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "seatNumber", ExtArgs["result"]["bookingSeat"]>
  export type BookingSeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BookingSeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingSeat"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      seatNumber: string
    }, ExtArgs["result"]["bookingSeat"]>
    composites: {}
  }

  type BookingSeatGetPayload<S extends boolean | null | undefined | BookingSeatDefaultArgs> = $Result.GetResult<Prisma.$BookingSeatPayload, S>

  type BookingSeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingSeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingSeatCountAggregateInputType | true
    }

  export interface BookingSeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingSeat'], meta: { name: 'BookingSeat' } }
    /**
     * Find zero or one BookingSeat that matches the filter.
     * @param {BookingSeatFindUniqueArgs} args - Arguments to find a BookingSeat
     * @example
     * // Get one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingSeatFindUniqueArgs>(args: SelectSubset<T, BookingSeatFindUniqueArgs<ExtArgs>>): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingSeat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingSeatFindUniqueOrThrowArgs} args - Arguments to find a BookingSeat
     * @example
     * // Get one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingSeatFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingSeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingSeat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatFindFirstArgs} args - Arguments to find a BookingSeat
     * @example
     * // Get one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingSeatFindFirstArgs>(args?: SelectSubset<T, BookingSeatFindFirstArgs<ExtArgs>>): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingSeat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatFindFirstOrThrowArgs} args - Arguments to find a BookingSeat
     * @example
     * // Get one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingSeatFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingSeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingSeats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingSeats
     * const bookingSeats = await prisma.bookingSeat.findMany()
     * 
     * // Get first 10 BookingSeats
     * const bookingSeats = await prisma.bookingSeat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingSeatWithIdOnly = await prisma.bookingSeat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingSeatFindManyArgs>(args?: SelectSubset<T, BookingSeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingSeat.
     * @param {BookingSeatCreateArgs} args - Arguments to create a BookingSeat.
     * @example
     * // Create one BookingSeat
     * const BookingSeat = await prisma.bookingSeat.create({
     *   data: {
     *     // ... data to create a BookingSeat
     *   }
     * })
     * 
     */
    create<T extends BookingSeatCreateArgs>(args: SelectSubset<T, BookingSeatCreateArgs<ExtArgs>>): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingSeats.
     * @param {BookingSeatCreateManyArgs} args - Arguments to create many BookingSeats.
     * @example
     * // Create many BookingSeats
     * const bookingSeat = await prisma.bookingSeat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingSeatCreateManyArgs>(args?: SelectSubset<T, BookingSeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookingSeat.
     * @param {BookingSeatDeleteArgs} args - Arguments to delete one BookingSeat.
     * @example
     * // Delete one BookingSeat
     * const BookingSeat = await prisma.bookingSeat.delete({
     *   where: {
     *     // ... filter to delete one BookingSeat
     *   }
     * })
     * 
     */
    delete<T extends BookingSeatDeleteArgs>(args: SelectSubset<T, BookingSeatDeleteArgs<ExtArgs>>): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingSeat.
     * @param {BookingSeatUpdateArgs} args - Arguments to update one BookingSeat.
     * @example
     * // Update one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingSeatUpdateArgs>(args: SelectSubset<T, BookingSeatUpdateArgs<ExtArgs>>): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingSeats.
     * @param {BookingSeatDeleteManyArgs} args - Arguments to filter BookingSeats to delete.
     * @example
     * // Delete a few BookingSeats
     * const { count } = await prisma.bookingSeat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingSeatDeleteManyArgs>(args?: SelectSubset<T, BookingSeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingSeats
     * const bookingSeat = await prisma.bookingSeat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingSeatUpdateManyArgs>(args: SelectSubset<T, BookingSeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingSeat.
     * @param {BookingSeatUpsertArgs} args - Arguments to update or create a BookingSeat.
     * @example
     * // Update or create a BookingSeat
     * const bookingSeat = await prisma.bookingSeat.upsert({
     *   create: {
     *     // ... data to create a BookingSeat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingSeat we want to update
     *   }
     * })
     */
    upsert<T extends BookingSeatUpsertArgs>(args: SelectSubset<T, BookingSeatUpsertArgs<ExtArgs>>): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatCountArgs} args - Arguments to filter BookingSeats to count.
     * @example
     * // Count the number of BookingSeats
     * const count = await prisma.bookingSeat.count({
     *   where: {
     *     // ... the filter for the BookingSeats we want to count
     *   }
     * })
    **/
    count<T extends BookingSeatCountArgs>(
      args?: Subset<T, BookingSeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingSeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingSeatAggregateArgs>(args: Subset<T, BookingSeatAggregateArgs>): Prisma.PrismaPromise<GetBookingSeatAggregateType<T>>

    /**
     * Group by BookingSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatGroupByArgs} args - Group by arguments.
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
      T extends BookingSeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingSeatGroupByArgs['orderBy'] }
        : { orderBy?: BookingSeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingSeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingSeat model
   */
  readonly fields: BookingSeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingSeat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingSeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingSeat model
   */
  interface BookingSeatFieldRefs {
    readonly id: FieldRef<"BookingSeat", 'String'>
    readonly bookingId: FieldRef<"BookingSeat", 'String'>
    readonly seatNumber: FieldRef<"BookingSeat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookingSeat findUnique
   */
  export type BookingSeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeat to fetch.
     */
    where: BookingSeatWhereUniqueInput
  }

  /**
   * BookingSeat findUniqueOrThrow
   */
  export type BookingSeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeat to fetch.
     */
    where: BookingSeatWhereUniqueInput
  }

  /**
   * BookingSeat findFirst
   */
  export type BookingSeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeat to fetch.
     */
    where?: BookingSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSeats to fetch.
     */
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingSeats.
     */
    cursor?: BookingSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingSeats.
     */
    distinct?: BookingSeatScalarFieldEnum | BookingSeatScalarFieldEnum[]
  }

  /**
   * BookingSeat findFirstOrThrow
   */
  export type BookingSeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeat to fetch.
     */
    where?: BookingSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSeats to fetch.
     */
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingSeats.
     */
    cursor?: BookingSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingSeats.
     */
    distinct?: BookingSeatScalarFieldEnum | BookingSeatScalarFieldEnum[]
  }

  /**
   * BookingSeat findMany
   */
  export type BookingSeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeats to fetch.
     */
    where?: BookingSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSeats to fetch.
     */
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingSeats.
     */
    cursor?: BookingSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSeats.
     */
    skip?: number
    distinct?: BookingSeatScalarFieldEnum | BookingSeatScalarFieldEnum[]
  }

  /**
   * BookingSeat create
   */
  export type BookingSeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingSeat.
     */
    data: XOR<BookingSeatCreateInput, BookingSeatUncheckedCreateInput>
  }

  /**
   * BookingSeat createMany
   */
  export type BookingSeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingSeats.
     */
    data: BookingSeatCreateManyInput | BookingSeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingSeat update
   */
  export type BookingSeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingSeat.
     */
    data: XOR<BookingSeatUpdateInput, BookingSeatUncheckedUpdateInput>
    /**
     * Choose, which BookingSeat to update.
     */
    where: BookingSeatWhereUniqueInput
  }

  /**
   * BookingSeat updateMany
   */
  export type BookingSeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingSeats.
     */
    data: XOR<BookingSeatUpdateManyMutationInput, BookingSeatUncheckedUpdateManyInput>
    /**
     * Filter which BookingSeats to update
     */
    where?: BookingSeatWhereInput
    /**
     * Limit how many BookingSeats to update.
     */
    limit?: number
  }

  /**
   * BookingSeat upsert
   */
  export type BookingSeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingSeat to update in case it exists.
     */
    where: BookingSeatWhereUniqueInput
    /**
     * In case the BookingSeat found by the `where` argument doesn't exist, create a new BookingSeat with this data.
     */
    create: XOR<BookingSeatCreateInput, BookingSeatUncheckedCreateInput>
    /**
     * In case the BookingSeat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingSeatUpdateInput, BookingSeatUncheckedUpdateInput>
  }

  /**
   * BookingSeat delete
   */
  export type BookingSeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter which BookingSeat to delete.
     */
    where: BookingSeatWhereUniqueInput
  }

  /**
   * BookingSeat deleteMany
   */
  export type BookingSeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingSeats to delete
     */
    where?: BookingSeatWhereInput
    /**
     * Limit how many BookingSeats to delete.
     */
    limit?: number
  }

  /**
   * BookingSeat without action
   */
  export type BookingSeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSeat
     */
    omit?: BookingSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSeatInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    bookingId: number
    amount: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    bookingId: string
    amount: number
    status: string
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "amount" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      amount: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly bookingId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const WalletTransactionScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    amount: 'amount',
    type: 'type',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type WalletTransactionScalarFieldEnum = (typeof WalletTransactionScalarFieldEnum)[keyof typeof WalletTransactionScalarFieldEnum]


  export const TopupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TopupScalarFieldEnum = (typeof TopupScalarFieldEnum)[keyof typeof TopupScalarFieldEnum]


  export const WithdrawalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    bankCode: 'bankCode',
    accountNumber: 'accountNumber',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type WithdrawalScalarFieldEnum = (typeof WithdrawalScalarFieldEnum)[keyof typeof WithdrawalScalarFieldEnum]


  export const BusClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type BusClassScalarFieldEnum = (typeof BusClassScalarFieldEnum)[keyof typeof BusClassScalarFieldEnum]


  export const BusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    busClassId: 'busClassId'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    origin: 'origin',
    destination: 'destination'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    busId: 'busId',
    routeId: 'routeId',
    departure: 'departure',
    arrival: 'arrival',
    price: 'price'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    scheduleId: 'scheduleId',
    totalAmount: 'totalAmount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingSeatScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    seatNumber: 'seatNumber'
  };

  export type BookingSeatScalarFieldEnum = (typeof BookingSeatScalarFieldEnum)[keyof typeof BookingSeatScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const WalletOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type WalletOrderByRelevanceFieldEnum = (typeof WalletOrderByRelevanceFieldEnum)[keyof typeof WalletOrderByRelevanceFieldEnum]


  export const WalletTransactionOrderByRelevanceFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    type: 'type',
    reference: 'reference'
  };

  export type WalletTransactionOrderByRelevanceFieldEnum = (typeof WalletTransactionOrderByRelevanceFieldEnum)[keyof typeof WalletTransactionOrderByRelevanceFieldEnum]


  export const TopupOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status'
  };

  export type TopupOrderByRelevanceFieldEnum = (typeof TopupOrderByRelevanceFieldEnum)[keyof typeof TopupOrderByRelevanceFieldEnum]


  export const WithdrawalOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    bankCode: 'bankCode',
    accountNumber: 'accountNumber',
    status: 'status'
  };

  export type WithdrawalOrderByRelevanceFieldEnum = (typeof WithdrawalOrderByRelevanceFieldEnum)[keyof typeof WithdrawalOrderByRelevanceFieldEnum]


  export const BusClassOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type BusClassOrderByRelevanceFieldEnum = (typeof BusClassOrderByRelevanceFieldEnum)[keyof typeof BusClassOrderByRelevanceFieldEnum]


  export const BusOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    busClassId: 'busClassId'
  };

  export type BusOrderByRelevanceFieldEnum = (typeof BusOrderByRelevanceFieldEnum)[keyof typeof BusOrderByRelevanceFieldEnum]


  export const RouteOrderByRelevanceFieldEnum: {
    id: 'id',
    origin: 'origin',
    destination: 'destination'
  };

  export type RouteOrderByRelevanceFieldEnum = (typeof RouteOrderByRelevanceFieldEnum)[keyof typeof RouteOrderByRelevanceFieldEnum]


  export const ScheduleOrderByRelevanceFieldEnum: {
    id: 'id',
    busId: 'busId',
    routeId: 'routeId'
  };

  export type ScheduleOrderByRelevanceFieldEnum = (typeof ScheduleOrderByRelevanceFieldEnum)[keyof typeof ScheduleOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    scheduleId: 'scheduleId',
    status: 'status'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const BookingSeatOrderByRelevanceFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    seatNumber: 'seatNumber'
  };

  export type BookingSeatOrderByRelevanceFieldEnum = (typeof BookingSeatOrderByRelevanceFieldEnum)[keyof typeof BookingSeatOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    status: 'status'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    topups?: TopupListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    topups?: TopupOrderByRelationAggregateInput
    withdrawals?: WithdrawalOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    topups?: TopupListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: StringFilter<"Wallet"> | string
    userId?: StringFilter<"Wallet"> | string
    balance?: IntFilter<"Wallet"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: WalletTransactionListRelationFilter
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: WalletTransactionOrderByRelationAggregateInput
    _relevance?: WalletOrderByRelevanceInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    balance?: IntFilter<"Wallet"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: WalletTransactionListRelationFilter
  }, "id" | "userId">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallet"> | string
    userId?: StringWithAggregatesFilter<"Wallet"> | string
    balance?: IntWithAggregatesFilter<"Wallet"> | number
  }

  export type WalletTransactionWhereInput = {
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    id?: StringFilter<"WalletTransaction"> | string
    walletId?: StringFilter<"WalletTransaction"> | string
    amount?: IntFilter<"WalletTransaction"> | number
    type?: StringFilter<"WalletTransaction"> | string
    reference?: StringFilter<"WalletTransaction"> | string
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }

  export type WalletTransactionOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    _relevance?: WalletTransactionOrderByRelevanceInput
  }

  export type WalletTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    walletId?: StringFilter<"WalletTransaction"> | string
    amount?: IntFilter<"WalletTransaction"> | number
    type?: StringFilter<"WalletTransaction"> | string
    reference?: StringFilter<"WalletTransaction"> | string
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }, "id">

  export type WalletTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    _count?: WalletTransactionCountOrderByAggregateInput
    _avg?: WalletTransactionAvgOrderByAggregateInput
    _max?: WalletTransactionMaxOrderByAggregateInput
    _min?: WalletTransactionMinOrderByAggregateInput
    _sum?: WalletTransactionSumOrderByAggregateInput
  }

  export type WalletTransactionScalarWhereWithAggregatesInput = {
    AND?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    OR?: WalletTransactionScalarWhereWithAggregatesInput[]
    NOT?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WalletTransaction"> | string
    walletId?: StringWithAggregatesFilter<"WalletTransaction"> | string
    amount?: IntWithAggregatesFilter<"WalletTransaction"> | number
    type?: StringWithAggregatesFilter<"WalletTransaction"> | string
    reference?: StringWithAggregatesFilter<"WalletTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WalletTransaction"> | Date | string
  }

  export type TopupWhereInput = {
    AND?: TopupWhereInput | TopupWhereInput[]
    OR?: TopupWhereInput[]
    NOT?: TopupWhereInput | TopupWhereInput[]
    id?: StringFilter<"Topup"> | string
    userId?: StringFilter<"Topup"> | string
    amount?: IntFilter<"Topup"> | number
    status?: StringFilter<"Topup"> | string
    createdAt?: DateTimeFilter<"Topup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TopupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: TopupOrderByRelevanceInput
  }

  export type TopupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopupWhereInput | TopupWhereInput[]
    OR?: TopupWhereInput[]
    NOT?: TopupWhereInput | TopupWhereInput[]
    userId?: StringFilter<"Topup"> | string
    amount?: IntFilter<"Topup"> | number
    status?: StringFilter<"Topup"> | string
    createdAt?: DateTimeFilter<"Topup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TopupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TopupCountOrderByAggregateInput
    _avg?: TopupAvgOrderByAggregateInput
    _max?: TopupMaxOrderByAggregateInput
    _min?: TopupMinOrderByAggregateInput
    _sum?: TopupSumOrderByAggregateInput
  }

  export type TopupScalarWhereWithAggregatesInput = {
    AND?: TopupScalarWhereWithAggregatesInput | TopupScalarWhereWithAggregatesInput[]
    OR?: TopupScalarWhereWithAggregatesInput[]
    NOT?: TopupScalarWhereWithAggregatesInput | TopupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topup"> | string
    userId?: StringWithAggregatesFilter<"Topup"> | string
    amount?: IntWithAggregatesFilter<"Topup"> | number
    status?: StringWithAggregatesFilter<"Topup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Topup"> | Date | string
  }

  export type WithdrawalWhereInput = {
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    amount?: IntFilter<"Withdrawal"> | number
    bankCode?: StringFilter<"Withdrawal"> | string
    accountNumber?: StringFilter<"Withdrawal"> | string
    status?: StringFilter<"Withdrawal"> | string
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WithdrawalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: WithdrawalOrderByRelevanceInput
  }

  export type WithdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    userId?: StringFilter<"Withdrawal"> | string
    amount?: IntFilter<"Withdrawal"> | number
    bankCode?: StringFilter<"Withdrawal"> | string
    accountNumber?: StringFilter<"Withdrawal"> | string
    status?: StringFilter<"Withdrawal"> | string
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WithdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: WithdrawalCountOrderByAggregateInput
    _avg?: WithdrawalAvgOrderByAggregateInput
    _max?: WithdrawalMaxOrderByAggregateInput
    _min?: WithdrawalMinOrderByAggregateInput
    _sum?: WithdrawalSumOrderByAggregateInput
  }

  export type WithdrawalScalarWhereWithAggregatesInput = {
    AND?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    OR?: WithdrawalScalarWhereWithAggregatesInput[]
    NOT?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Withdrawal"> | string
    userId?: StringWithAggregatesFilter<"Withdrawal"> | string
    amount?: IntWithAggregatesFilter<"Withdrawal"> | number
    bankCode?: StringWithAggregatesFilter<"Withdrawal"> | string
    accountNumber?: StringWithAggregatesFilter<"Withdrawal"> | string
    status?: StringWithAggregatesFilter<"Withdrawal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
  }

  export type BusClassWhereInput = {
    AND?: BusClassWhereInput | BusClassWhereInput[]
    OR?: BusClassWhereInput[]
    NOT?: BusClassWhereInput | BusClassWhereInput[]
    id?: StringFilter<"BusClass"> | string
    name?: StringFilter<"BusClass"> | string
    description?: StringFilter<"BusClass"> | string
    buses?: BusListRelationFilter
  }

  export type BusClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    buses?: BusOrderByRelationAggregateInput
    _relevance?: BusClassOrderByRelevanceInput
  }

  export type BusClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusClassWhereInput | BusClassWhereInput[]
    OR?: BusClassWhereInput[]
    NOT?: BusClassWhereInput | BusClassWhereInput[]
    name?: StringFilter<"BusClass"> | string
    description?: StringFilter<"BusClass"> | string
    buses?: BusListRelationFilter
  }, "id">

  export type BusClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: BusClassCountOrderByAggregateInput
    _max?: BusClassMaxOrderByAggregateInput
    _min?: BusClassMinOrderByAggregateInput
  }

  export type BusClassScalarWhereWithAggregatesInput = {
    AND?: BusClassScalarWhereWithAggregatesInput | BusClassScalarWhereWithAggregatesInput[]
    OR?: BusClassScalarWhereWithAggregatesInput[]
    NOT?: BusClassScalarWhereWithAggregatesInput | BusClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusClass"> | string
    name?: StringWithAggregatesFilter<"BusClass"> | string
    description?: StringWithAggregatesFilter<"BusClass"> | string
  }

  export type BusWhereInput = {
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    id?: StringFilter<"Bus"> | string
    name?: StringFilter<"Bus"> | string
    capacity?: IntFilter<"Bus"> | number
    busClassId?: StringFilter<"Bus"> | string
    busClass?: XOR<BusClassScalarRelationFilter, BusClassWhereInput>
    schedules?: ScheduleListRelationFilter
  }

  export type BusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    busClassId?: SortOrder
    busClass?: BusClassOrderByWithRelationInput
    schedules?: ScheduleOrderByRelationAggregateInput
    _relevance?: BusOrderByRelevanceInput
  }

  export type BusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    name?: StringFilter<"Bus"> | string
    capacity?: IntFilter<"Bus"> | number
    busClassId?: StringFilter<"Bus"> | string
    busClass?: XOR<BusClassScalarRelationFilter, BusClassWhereInput>
    schedules?: ScheduleListRelationFilter
  }, "id">

  export type BusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    busClassId?: SortOrder
    _count?: BusCountOrderByAggregateInput
    _avg?: BusAvgOrderByAggregateInput
    _max?: BusMaxOrderByAggregateInput
    _min?: BusMinOrderByAggregateInput
    _sum?: BusSumOrderByAggregateInput
  }

  export type BusScalarWhereWithAggregatesInput = {
    AND?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    OR?: BusScalarWhereWithAggregatesInput[]
    NOT?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bus"> | string
    name?: StringWithAggregatesFilter<"Bus"> | string
    capacity?: IntWithAggregatesFilter<"Bus"> | number
    busClassId?: StringWithAggregatesFilter<"Bus"> | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: StringFilter<"Route"> | string
    origin?: StringFilter<"Route"> | string
    destination?: StringFilter<"Route"> | string
    schedules?: ScheduleListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    schedules?: ScheduleOrderByRelationAggregateInput
    _relevance?: RouteOrderByRelevanceInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    origin?: StringFilter<"Route"> | string
    destination?: StringFilter<"Route"> | string
    schedules?: ScheduleListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Route"> | string
    origin?: StringWithAggregatesFilter<"Route"> | string
    destination?: StringWithAggregatesFilter<"Route"> | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    busId?: StringFilter<"Schedule"> | string
    routeId?: StringFilter<"Schedule"> | string
    departure?: DateTimeFilter<"Schedule"> | Date | string
    arrival?: DateTimeFilter<"Schedule"> | Date | string
    price?: IntFilter<"Schedule"> | number
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    busId?: SortOrder
    routeId?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    price?: SortOrder
    bus?: BusOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    _relevance?: ScheduleOrderByRelevanceInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    busId?: StringFilter<"Schedule"> | string
    routeId?: StringFilter<"Schedule"> | string
    departure?: DateTimeFilter<"Schedule"> | Date | string
    arrival?: DateTimeFilter<"Schedule"> | Date | string
    price?: IntFilter<"Schedule"> | number
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    busId?: SortOrder
    routeId?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    price?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    busId?: StringWithAggregatesFilter<"Schedule"> | string
    routeId?: StringWithAggregatesFilter<"Schedule"> | string
    departure?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    arrival?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    price?: IntWithAggregatesFilter<"Schedule"> | number
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    scheduleId?: StringFilter<"Booking"> | string
    totalAmount?: IntFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    seats?: BookingSeatListRelationFilter
    Payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    schedule?: ScheduleOrderByWithRelationInput
    seats?: BookingSeatOrderByRelationAggregateInput
    Payment?: PaymentOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    scheduleId?: StringFilter<"Booking"> | string
    totalAmount?: IntFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    seats?: BookingSeatListRelationFilter
    Payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    scheduleId?: StringWithAggregatesFilter<"Booking"> | string
    totalAmount?: IntWithAggregatesFilter<"Booking"> | number
    status?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type BookingSeatWhereInput = {
    AND?: BookingSeatWhereInput | BookingSeatWhereInput[]
    OR?: BookingSeatWhereInput[]
    NOT?: BookingSeatWhereInput | BookingSeatWhereInput[]
    id?: StringFilter<"BookingSeat"> | string
    bookingId?: StringFilter<"BookingSeat"> | string
    seatNumber?: StringFilter<"BookingSeat"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type BookingSeatOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatNumber?: SortOrder
    booking?: BookingOrderByWithRelationInput
    _relevance?: BookingSeatOrderByRelevanceInput
  }

  export type BookingSeatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingSeatWhereInput | BookingSeatWhereInput[]
    OR?: BookingSeatWhereInput[]
    NOT?: BookingSeatWhereInput | BookingSeatWhereInput[]
    bookingId?: StringFilter<"BookingSeat"> | string
    seatNumber?: StringFilter<"BookingSeat"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type BookingSeatOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatNumber?: SortOrder
    _count?: BookingSeatCountOrderByAggregateInput
    _max?: BookingSeatMaxOrderByAggregateInput
    _min?: BookingSeatMinOrderByAggregateInput
  }

  export type BookingSeatScalarWhereWithAggregatesInput = {
    AND?: BookingSeatScalarWhereWithAggregatesInput | BookingSeatScalarWhereWithAggregatesInput[]
    OR?: BookingSeatScalarWhereWithAggregatesInput[]
    NOT?: BookingSeatScalarWhereWithAggregatesInput | BookingSeatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingSeat"> | string
    bookingId?: StringWithAggregatesFilter<"BookingSeat"> | string
    seatNumber?: StringWithAggregatesFilter<"BookingSeat"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    bookingId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: IntFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    bookingId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    status?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    wallet?: WalletCreateNestedOneWithoutUserInput
    topups?: TopupCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    topups?: TopupUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wallet?: WalletUpdateOneWithoutUserNestedInput
    topups?: TopupUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    topups?: TopupUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type WalletCreateInput = {
    id?: string
    balance?: number
    user: UserCreateNestedOneWithoutWalletInput
    transactions?: WalletTransactionCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    userId: string
    balance?: number
    transactions?: WalletTransactionUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
    transactions?: WalletTransactionUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    transactions?: WalletTransactionUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletCreateManyInput = {
    id?: string
    userId: string
    balance?: number
  }

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type WalletTransactionCreateInput = {
    id?: string
    amount: number
    type: string
    reference: string
    createdAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
  }

  export type WalletTransactionUncheckedCreateInput = {
    id?: string
    walletId: string
    amount: number
    type: string
    reference: string
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type WalletTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateManyInput = {
    id?: string
    walletId: string
    amount: number
    type: string
    reference: string
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopupCreateInput = {
    id?: string
    amount: number
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTopupsInput
  }

  export type TopupUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type TopupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTopupsNestedInput
  }

  export type TopupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopupCreateManyInput = {
    id?: string
    userId: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type TopupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateInput = {
    id?: string
    amount: number
    bankCode: string
    accountNumber: string
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWithdrawalsInput
  }

  export type WithdrawalUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    bankCode: string
    accountNumber: string
    status: string
    createdAt?: Date | string
  }

  export type WithdrawalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type WithdrawalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateManyInput = {
    id?: string
    userId: string
    amount: number
    bankCode: string
    accountNumber: string
    status: string
    createdAt?: Date | string
  }

  export type WithdrawalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusClassCreateInput = {
    id?: string
    name: string
    description: string
    buses?: BusCreateNestedManyWithoutBusClassInput
  }

  export type BusClassUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    buses?: BusUncheckedCreateNestedManyWithoutBusClassInput
  }

  export type BusClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buses?: BusUpdateManyWithoutBusClassNestedInput
  }

  export type BusClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buses?: BusUncheckedUpdateManyWithoutBusClassNestedInput
  }

  export type BusClassCreateManyInput = {
    id?: string
    name: string
    description: string
  }

  export type BusClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BusClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BusCreateInput = {
    id?: string
    name: string
    capacity: number
    busClass: BusClassCreateNestedOneWithoutBusesInput
    schedules?: ScheduleCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateInput = {
    id?: string
    name: string
    capacity: number
    busClassId: string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    busClass?: BusClassUpdateOneRequiredWithoutBusesNestedInput
    schedules?: ScheduleUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    busClassId?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateManyInput = {
    id?: string
    name: string
    capacity: number
    busClassId: string
  }

  export type BusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type BusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    busClassId?: StringFieldUpdateOperationsInput | string
  }

  export type RouteCreateInput = {
    id?: string
    origin: string
    destination: string
    schedules?: ScheduleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: string
    origin: string
    destination: string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: string
    origin: string
    destination: string
  }

  export type RouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateInput = {
    id?: string
    departure: Date | string
    arrival: Date | string
    price: number
    bus: BusCreateNestedOneWithoutSchedulesInput
    route: RouteCreateNestedOneWithoutSchedulesInput
    bookings?: BookingCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    busId: string
    routeId: string
    departure: Date | string
    arrival: Date | string
    price: number
    bookings?: BookingUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    bus?: BusUpdateOneRequiredWithoutSchedulesNestedInput
    route?: RouteUpdateOneRequiredWithoutSchedulesNestedInput
    bookings?: BookingUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: string
    busId: string
    routeId: string
    departure: Date | string
    arrival: Date | string
    price: number
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateInput = {
    id?: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    schedule: ScheduleCreateNestedOneWithoutBookingsInput
    seats?: BookingSeatCreateNestedManyWithoutBookingInput
    Payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    scheduleId: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    seats?: BookingSeatUncheckedCreateNestedManyWithoutBookingInput
    Payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutBookingsNestedInput
    seats?: BookingSeatUpdateManyWithoutBookingNestedInput
    Payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: BookingSeatUncheckedUpdateManyWithoutBookingNestedInput
    Payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    scheduleId: string
    totalAmount: number
    status: string
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSeatCreateInput = {
    id?: string
    seatNumber: string
    booking: BookingCreateNestedOneWithoutSeatsInput
  }

  export type BookingSeatUncheckedCreateInput = {
    id?: string
    bookingId: string
    seatNumber: string
  }

  export type BookingSeatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type BookingSeatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingSeatCreateManyInput = {
    id?: string
    bookingId: string
    seatNumber: string
  }

  export type BookingSeatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingSeatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    status: string
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    bookingId: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    bookingId: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type WalletNullableScalarRelationFilter = {
    is?: WalletWhereInput | null
    isNot?: WalletWhereInput | null
  }

  export type TopupListRelationFilter = {
    every?: TopupWhereInput
    some?: TopupWhereInput
    none?: TopupWhereInput
  }

  export type WithdrawalListRelationFilter = {
    every?: WithdrawalWhereInput
    some?: WithdrawalWhereInput
    none?: WithdrawalWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type TopupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WalletTransactionListRelationFilter = {
    every?: WalletTransactionWhereInput
    some?: WalletTransactionWhereInput
    none?: WalletTransactionWhereInput
  }

  export type WalletTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletOrderByRelevanceInput = {
    fields: WalletOrderByRelevanceFieldEnum | WalletOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    balance?: SortOrder
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WalletScalarRelationFilter = {
    is?: WalletWhereInput
    isNot?: WalletWhereInput
  }

  export type WalletTransactionOrderByRelevanceInput = {
    fields: WalletTransactionOrderByRelevanceFieldEnum | WalletTransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WalletTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WalletTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TopupOrderByRelevanceInput = {
    fields: TopupOrderByRelevanceFieldEnum | TopupOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TopupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TopupAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TopupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TopupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TopupSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawalOrderByRelevanceInput = {
    fields: WithdrawalOrderByRelevanceFieldEnum | WithdrawalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WithdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WithdrawalAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WithdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WithdrawalSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BusListRelationFilter = {
    every?: BusWhereInput
    some?: BusWhereInput
    none?: BusWhereInput
  }

  export type BusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusClassOrderByRelevanceInput = {
    fields: BusClassOrderByRelevanceFieldEnum | BusClassOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BusClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BusClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BusClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BusClassScalarRelationFilter = {
    is?: BusClassWhereInput
    isNot?: BusClassWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusOrderByRelevanceInput = {
    fields: BusOrderByRelevanceFieldEnum | BusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    busClassId?: SortOrder
  }

  export type BusAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type BusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    busClassId?: SortOrder
  }

  export type BusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    busClassId?: SortOrder
  }

  export type BusSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type RouteOrderByRelevanceInput = {
    fields: RouteOrderByRelevanceFieldEnum | RouteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
  }

  export type BusScalarRelationFilter = {
    is?: BusWhereInput
    isNot?: BusWhereInput
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type ScheduleOrderByRelevanceInput = {
    fields: ScheduleOrderByRelevanceFieldEnum | ScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    routeId?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    price?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    routeId?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    price?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    routeId?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    price?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type BookingSeatListRelationFilter = {
    every?: BookingSeatWhereInput
    some?: BookingSeatWhereInput
    none?: BookingSeatWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type BookingSeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BookingSeatOrderByRelevanceInput = {
    fields: BookingSeatOrderByRelevanceFieldEnum | BookingSeatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingSeatCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatNumber?: SortOrder
  }

  export type BookingSeatMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatNumber?: SortOrder
  }

  export type BookingSeatMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatNumber?: SortOrder
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WalletCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type TopupCreateNestedManyWithoutUserInput = {
    create?: XOR<TopupCreateWithoutUserInput, TopupUncheckedCreateWithoutUserInput> | TopupCreateWithoutUserInput[] | TopupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopupCreateOrConnectWithoutUserInput | TopupCreateOrConnectWithoutUserInput[]
    createMany?: TopupCreateManyUserInputEnvelope
    connect?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
  }

  export type WithdrawalCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type TopupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TopupCreateWithoutUserInput, TopupUncheckedCreateWithoutUserInput> | TopupCreateWithoutUserInput[] | TopupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopupCreateOrConnectWithoutUserInput | TopupCreateOrConnectWithoutUserInput[]
    createMany?: TopupCreateManyUserInputEnvelope
    connect?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
  }

  export type WithdrawalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type WalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type TopupUpdateManyWithoutUserNestedInput = {
    create?: XOR<TopupCreateWithoutUserInput, TopupUncheckedCreateWithoutUserInput> | TopupCreateWithoutUserInput[] | TopupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopupCreateOrConnectWithoutUserInput | TopupCreateOrConnectWithoutUserInput[]
    upsert?: TopupUpsertWithWhereUniqueWithoutUserInput | TopupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TopupCreateManyUserInputEnvelope
    set?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
    disconnect?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
    delete?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
    connect?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
    update?: TopupUpdateWithWhereUniqueWithoutUserInput | TopupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TopupUpdateManyWithWhereWithoutUserInput | TopupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TopupScalarWhereInput | TopupScalarWhereInput[]
  }

  export type WithdrawalUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type TopupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TopupCreateWithoutUserInput, TopupUncheckedCreateWithoutUserInput> | TopupCreateWithoutUserInput[] | TopupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopupCreateOrConnectWithoutUserInput | TopupCreateOrConnectWithoutUserInput[]
    upsert?: TopupUpsertWithWhereUniqueWithoutUserInput | TopupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TopupCreateManyUserInputEnvelope
    set?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
    disconnect?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
    delete?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
    connect?: TopupWhereUniqueInput | TopupWhereUniqueInput[]
    update?: TopupUpdateWithWhereUniqueWithoutUserInput | TopupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TopupUpdateManyWithWhereWithoutUserInput | TopupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TopupScalarWhereInput | TopupScalarWhereInput[]
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type WalletTransactionCreateNestedManyWithoutWalletInput = {
    create?: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput> | WalletTransactionCreateWithoutWalletInput[] | WalletTransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutWalletInput | WalletTransactionCreateOrConnectWithoutWalletInput[]
    createMany?: WalletTransactionCreateManyWalletInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type WalletTransactionUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput> | WalletTransactionCreateWithoutWalletInput[] | WalletTransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutWalletInput | WalletTransactionCreateOrConnectWithoutWalletInput[]
    createMany?: WalletTransactionCreateManyWalletInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type WalletTransactionUpdateManyWithoutWalletNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput> | WalletTransactionCreateWithoutWalletInput[] | WalletTransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutWalletInput | WalletTransactionCreateOrConnectWithoutWalletInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutWalletInput | WalletTransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: WalletTransactionCreateManyWalletInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutWalletInput | WalletTransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutWalletInput | WalletTransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type WalletTransactionUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput> | WalletTransactionCreateWithoutWalletInput[] | WalletTransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutWalletInput | WalletTransactionCreateOrConnectWithoutWalletInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutWalletInput | WalletTransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: WalletTransactionCreateManyWalletInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutWalletInput | WalletTransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutWalletInput | WalletTransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type WalletCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WalletUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    upsert?: WalletUpsertWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutTransactionsInput, WalletUpdateWithoutTransactionsInput>, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutTopupsInput = {
    create?: XOR<UserCreateWithoutTopupsInput, UserUncheckedCreateWithoutTopupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopupsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTopupsNestedInput = {
    create?: XOR<UserCreateWithoutTopupsInput, UserUncheckedCreateWithoutTopupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopupsInput
    upsert?: UserUpsertWithoutTopupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTopupsInput, UserUpdateWithoutTopupsInput>, UserUncheckedUpdateWithoutTopupsInput>
  }

  export type UserCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    upsert?: UserUpsertWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawalsInput, UserUpdateWithoutWithdrawalsInput>, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type BusCreateNestedManyWithoutBusClassInput = {
    create?: XOR<BusCreateWithoutBusClassInput, BusUncheckedCreateWithoutBusClassInput> | BusCreateWithoutBusClassInput[] | BusUncheckedCreateWithoutBusClassInput[]
    connectOrCreate?: BusCreateOrConnectWithoutBusClassInput | BusCreateOrConnectWithoutBusClassInput[]
    createMany?: BusCreateManyBusClassInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutBusClassInput = {
    create?: XOR<BusCreateWithoutBusClassInput, BusUncheckedCreateWithoutBusClassInput> | BusCreateWithoutBusClassInput[] | BusUncheckedCreateWithoutBusClassInput[]
    connectOrCreate?: BusCreateOrConnectWithoutBusClassInput | BusCreateOrConnectWithoutBusClassInput[]
    createMany?: BusCreateManyBusClassInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BusUpdateManyWithoutBusClassNestedInput = {
    create?: XOR<BusCreateWithoutBusClassInput, BusUncheckedCreateWithoutBusClassInput> | BusCreateWithoutBusClassInput[] | BusUncheckedCreateWithoutBusClassInput[]
    connectOrCreate?: BusCreateOrConnectWithoutBusClassInput | BusCreateOrConnectWithoutBusClassInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutBusClassInput | BusUpsertWithWhereUniqueWithoutBusClassInput[]
    createMany?: BusCreateManyBusClassInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutBusClassInput | BusUpdateWithWhereUniqueWithoutBusClassInput[]
    updateMany?: BusUpdateManyWithWhereWithoutBusClassInput | BusUpdateManyWithWhereWithoutBusClassInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type BusUncheckedUpdateManyWithoutBusClassNestedInput = {
    create?: XOR<BusCreateWithoutBusClassInput, BusUncheckedCreateWithoutBusClassInput> | BusCreateWithoutBusClassInput[] | BusUncheckedCreateWithoutBusClassInput[]
    connectOrCreate?: BusCreateOrConnectWithoutBusClassInput | BusCreateOrConnectWithoutBusClassInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutBusClassInput | BusUpsertWithWhereUniqueWithoutBusClassInput[]
    createMany?: BusCreateManyBusClassInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutBusClassInput | BusUpdateWithWhereUniqueWithoutBusClassInput[]
    updateMany?: BusUpdateManyWithWhereWithoutBusClassInput | BusUpdateManyWithWhereWithoutBusClassInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type BusClassCreateNestedOneWithoutBusesInput = {
    create?: XOR<BusClassCreateWithoutBusesInput, BusClassUncheckedCreateWithoutBusesInput>
    connectOrCreate?: BusClassCreateOrConnectWithoutBusesInput
    connect?: BusClassWhereUniqueInput
  }

  export type ScheduleCreateNestedManyWithoutBusInput = {
    create?: XOR<ScheduleCreateWithoutBusInput, ScheduleUncheckedCreateWithoutBusInput> | ScheduleCreateWithoutBusInput[] | ScheduleUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutBusInput | ScheduleCreateOrConnectWithoutBusInput[]
    createMany?: ScheduleCreateManyBusInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<ScheduleCreateWithoutBusInput, ScheduleUncheckedCreateWithoutBusInput> | ScheduleCreateWithoutBusInput[] | ScheduleUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutBusInput | ScheduleCreateOrConnectWithoutBusInput[]
    createMany?: ScheduleCreateManyBusInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type BusClassUpdateOneRequiredWithoutBusesNestedInput = {
    create?: XOR<BusClassCreateWithoutBusesInput, BusClassUncheckedCreateWithoutBusesInput>
    connectOrCreate?: BusClassCreateOrConnectWithoutBusesInput
    upsert?: BusClassUpsertWithoutBusesInput
    connect?: BusClassWhereUniqueInput
    update?: XOR<XOR<BusClassUpdateToOneWithWhereWithoutBusesInput, BusClassUpdateWithoutBusesInput>, BusClassUncheckedUpdateWithoutBusesInput>
  }

  export type ScheduleUpdateManyWithoutBusNestedInput = {
    create?: XOR<ScheduleCreateWithoutBusInput, ScheduleUncheckedCreateWithoutBusInput> | ScheduleCreateWithoutBusInput[] | ScheduleUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutBusInput | ScheduleCreateOrConnectWithoutBusInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutBusInput | ScheduleUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: ScheduleCreateManyBusInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutBusInput | ScheduleUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutBusInput | ScheduleUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<ScheduleCreateWithoutBusInput, ScheduleUncheckedCreateWithoutBusInput> | ScheduleCreateWithoutBusInput[] | ScheduleUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutBusInput | ScheduleCreateOrConnectWithoutBusInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutBusInput | ScheduleUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: ScheduleCreateManyBusInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutBusInput | ScheduleUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutBusInput | ScheduleUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ScheduleCreateNestedManyWithoutRouteInput = {
    create?: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput> | ScheduleCreateWithoutRouteInput[] | ScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRouteInput | ScheduleCreateOrConnectWithoutRouteInput[]
    createMany?: ScheduleCreateManyRouteInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput> | ScheduleCreateWithoutRouteInput[] | ScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRouteInput | ScheduleCreateOrConnectWithoutRouteInput[]
    createMany?: ScheduleCreateManyRouteInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ScheduleUpdateManyWithoutRouteNestedInput = {
    create?: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput> | ScheduleCreateWithoutRouteInput[] | ScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRouteInput | ScheduleCreateOrConnectWithoutRouteInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutRouteInput | ScheduleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: ScheduleCreateManyRouteInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutRouteInput | ScheduleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutRouteInput | ScheduleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput> | ScheduleCreateWithoutRouteInput[] | ScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRouteInput | ScheduleCreateOrConnectWithoutRouteInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutRouteInput | ScheduleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: ScheduleCreateManyRouteInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutRouteInput | ScheduleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutRouteInput | ScheduleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type BusCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<BusCreateWithoutSchedulesInput, BusUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: BusCreateOrConnectWithoutSchedulesInput
    connect?: BusWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutSchedulesInput
    connect?: RouteWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutScheduleInput = {
    create?: XOR<BookingCreateWithoutScheduleInput, BookingUncheckedCreateWithoutScheduleInput> | BookingCreateWithoutScheduleInput[] | BookingUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutScheduleInput | BookingCreateOrConnectWithoutScheduleInput[]
    createMany?: BookingCreateManyScheduleInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<BookingCreateWithoutScheduleInput, BookingUncheckedCreateWithoutScheduleInput> | BookingCreateWithoutScheduleInput[] | BookingUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutScheduleInput | BookingCreateOrConnectWithoutScheduleInput[]
    createMany?: BookingCreateManyScheduleInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BusUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<BusCreateWithoutSchedulesInput, BusUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: BusCreateOrConnectWithoutSchedulesInput
    upsert?: BusUpsertWithoutSchedulesInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutSchedulesInput, BusUpdateWithoutSchedulesInput>, BusUncheckedUpdateWithoutSchedulesInput>
  }

  export type RouteUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutSchedulesInput
    upsert?: RouteUpsertWithoutSchedulesInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutSchedulesInput, RouteUpdateWithoutSchedulesInput>, RouteUncheckedUpdateWithoutSchedulesInput>
  }

  export type BookingUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<BookingCreateWithoutScheduleInput, BookingUncheckedCreateWithoutScheduleInput> | BookingCreateWithoutScheduleInput[] | BookingUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutScheduleInput | BookingCreateOrConnectWithoutScheduleInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutScheduleInput | BookingUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: BookingCreateManyScheduleInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutScheduleInput | BookingUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutScheduleInput | BookingUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<BookingCreateWithoutScheduleInput, BookingUncheckedCreateWithoutScheduleInput> | BookingCreateWithoutScheduleInput[] | BookingUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutScheduleInput | BookingCreateOrConnectWithoutScheduleInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutScheduleInput | BookingUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: BookingCreateManyScheduleInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutScheduleInput | BookingUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutScheduleInput | BookingUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduleCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ScheduleCreateWithoutBookingsInput, ScheduleUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutBookingsInput
    connect?: ScheduleWhereUniqueInput
  }

  export type BookingSeatCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput> | BookingSeatCreateWithoutBookingInput[] | BookingSeatUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutBookingInput | BookingSeatCreateOrConnectWithoutBookingInput[]
    createMany?: BookingSeatCreateManyBookingInputEnvelope
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type BookingSeatUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput> | BookingSeatCreateWithoutBookingInput[] | BookingSeatUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutBookingInput | BookingSeatCreateOrConnectWithoutBookingInput[]
    createMany?: BookingSeatCreateManyBookingInputEnvelope
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type ScheduleUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ScheduleCreateWithoutBookingsInput, ScheduleUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutBookingsInput
    upsert?: ScheduleUpsertWithoutBookingsInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutBookingsInput, ScheduleUpdateWithoutBookingsInput>, ScheduleUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingSeatUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput> | BookingSeatCreateWithoutBookingInput[] | BookingSeatUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutBookingInput | BookingSeatCreateOrConnectWithoutBookingInput[]
    upsert?: BookingSeatUpsertWithWhereUniqueWithoutBookingInput | BookingSeatUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingSeatCreateManyBookingInputEnvelope
    set?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    disconnect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    delete?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    update?: BookingSeatUpdateWithWhereUniqueWithoutBookingInput | BookingSeatUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingSeatUpdateManyWithWhereWithoutBookingInput | BookingSeatUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
  }

  export type PaymentUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type BookingSeatUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput> | BookingSeatCreateWithoutBookingInput[] | BookingSeatUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutBookingInput | BookingSeatCreateOrConnectWithoutBookingInput[]
    upsert?: BookingSeatUpsertWithWhereUniqueWithoutBookingInput | BookingSeatUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingSeatCreateManyBookingInputEnvelope
    set?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    disconnect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    delete?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    update?: BookingSeatUpdateWithWhereUniqueWithoutBookingInput | BookingSeatUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingSeatUpdateManyWithWhereWithoutBookingInput | BookingSeatUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutSeatsInput = {
    create?: XOR<BookingCreateWithoutSeatsInput, BookingUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutSeatsInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<BookingCreateWithoutSeatsInput, BookingUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutSeatsInput
    upsert?: BookingUpsertWithoutSeatsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutSeatsInput, BookingUpdateWithoutSeatsInput>, BookingUncheckedUpdateWithoutSeatsInput>
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WalletCreateWithoutUserInput = {
    id?: string
    balance?: number
    transactions?: WalletTransactionCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: string
    balance?: number
    transactions?: WalletTransactionUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type TopupCreateWithoutUserInput = {
    id?: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type TopupUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type TopupCreateOrConnectWithoutUserInput = {
    where: TopupWhereUniqueInput
    create: XOR<TopupCreateWithoutUserInput, TopupUncheckedCreateWithoutUserInput>
  }

  export type TopupCreateManyUserInputEnvelope = {
    data: TopupCreateManyUserInput | TopupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WithdrawalCreateWithoutUserInput = {
    id?: string
    amount: number
    bankCode: string
    accountNumber: string
    status: string
    createdAt?: Date | string
  }

  export type WithdrawalUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    bankCode: string
    accountNumber: string
    status: string
    createdAt?: Date | string
  }

  export type WithdrawalCreateOrConnectWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalCreateManyUserInputEnvelope = {
    data: WithdrawalCreateManyUserInput | WithdrawalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    schedule: ScheduleCreateNestedOneWithoutBookingsInput
    seats?: BookingSeatCreateNestedManyWithoutBookingInput
    Payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    scheduleId: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    seats?: BookingSeatUncheckedCreateNestedManyWithoutBookingInput
    Payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithoutUserInput = {
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutUserInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    transactions?: WalletTransactionUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    transactions?: WalletTransactionUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type TopupUpsertWithWhereUniqueWithoutUserInput = {
    where: TopupWhereUniqueInput
    update: XOR<TopupUpdateWithoutUserInput, TopupUncheckedUpdateWithoutUserInput>
    create: XOR<TopupCreateWithoutUserInput, TopupUncheckedCreateWithoutUserInput>
  }

  export type TopupUpdateWithWhereUniqueWithoutUserInput = {
    where: TopupWhereUniqueInput
    data: XOR<TopupUpdateWithoutUserInput, TopupUncheckedUpdateWithoutUserInput>
  }

  export type TopupUpdateManyWithWhereWithoutUserInput = {
    where: TopupScalarWhereInput
    data: XOR<TopupUpdateManyMutationInput, TopupUncheckedUpdateManyWithoutUserInput>
  }

  export type TopupScalarWhereInput = {
    AND?: TopupScalarWhereInput | TopupScalarWhereInput[]
    OR?: TopupScalarWhereInput[]
    NOT?: TopupScalarWhereInput | TopupScalarWhereInput[]
    id?: StringFilter<"Topup"> | string
    userId?: StringFilter<"Topup"> | string
    amount?: IntFilter<"Topup"> | number
    status?: StringFilter<"Topup"> | string
    createdAt?: DateTimeFilter<"Topup"> | Date | string
  }

  export type WithdrawalUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    update: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    data: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawalUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawalScalarWhereInput
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawalScalarWhereInput = {
    AND?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    OR?: WithdrawalScalarWhereInput[]
    NOT?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    amount?: IntFilter<"Withdrawal"> | number
    bankCode?: StringFilter<"Withdrawal"> | string
    accountNumber?: StringFilter<"Withdrawal"> | string
    status?: StringFilter<"Withdrawal"> | string
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    scheduleId?: StringFilter<"Booking"> | string
    totalAmount?: IntFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    topups?: TopupCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    topups?: TopupUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type WalletTransactionCreateWithoutWalletInput = {
    id?: string
    amount: number
    type: string
    reference: string
    createdAt?: Date | string
  }

  export type WalletTransactionUncheckedCreateWithoutWalletInput = {
    id?: string
    amount: number
    type: string
    reference: string
    createdAt?: Date | string
  }

  export type WalletTransactionCreateOrConnectWithoutWalletInput = {
    where: WalletTransactionWhereUniqueInput
    create: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput>
  }

  export type WalletTransactionCreateManyWalletInputEnvelope = {
    data: WalletTransactionCreateManyWalletInput | WalletTransactionCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    topups?: TopupUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    topups?: TopupUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WalletTransactionUpsertWithWhereUniqueWithoutWalletInput = {
    where: WalletTransactionWhereUniqueInput
    update: XOR<WalletTransactionUpdateWithoutWalletInput, WalletTransactionUncheckedUpdateWithoutWalletInput>
    create: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput>
  }

  export type WalletTransactionUpdateWithWhereUniqueWithoutWalletInput = {
    where: WalletTransactionWhereUniqueInput
    data: XOR<WalletTransactionUpdateWithoutWalletInput, WalletTransactionUncheckedUpdateWithoutWalletInput>
  }

  export type WalletTransactionUpdateManyWithWhereWithoutWalletInput = {
    where: WalletTransactionScalarWhereInput
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyWithoutWalletInput>
  }

  export type WalletTransactionScalarWhereInput = {
    AND?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    OR?: WalletTransactionScalarWhereInput[]
    NOT?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    id?: StringFilter<"WalletTransaction"> | string
    walletId?: StringFilter<"WalletTransaction"> | string
    amount?: IntFilter<"WalletTransaction"> | number
    type?: StringFilter<"WalletTransaction"> | string
    reference?: StringFilter<"WalletTransaction"> | string
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
  }

  export type WalletCreateWithoutTransactionsInput = {
    id?: string
    balance?: number
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    balance?: number
  }

  export type WalletCreateOrConnectWithoutTransactionsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
  }

  export type WalletUpsertWithoutTransactionsInput = {
    update: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type WalletUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutTopupsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    wallet?: WalletCreateNestedOneWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTopupsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTopupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTopupsInput, UserUncheckedCreateWithoutTopupsInput>
  }

  export type UserUpsertWithoutTopupsInput = {
    update: XOR<UserUpdateWithoutTopupsInput, UserUncheckedUpdateWithoutTopupsInput>
    create: XOR<UserCreateWithoutTopupsInput, UserUncheckedCreateWithoutTopupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTopupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTopupsInput, UserUncheckedUpdateWithoutTopupsInput>
  }

  export type UserUpdateWithoutTopupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wallet?: WalletUpdateOneWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTopupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWithdrawalsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    wallet?: WalletCreateNestedOneWithoutUserInput
    topups?: TopupCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWithdrawalsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    topups?: TopupUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWithdrawalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
  }

  export type UserUpsertWithoutWithdrawalsInput = {
    update: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wallet?: WalletUpdateOneWithoutUserNestedInput
    topups?: TopupUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    topups?: TopupUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BusCreateWithoutBusClassInput = {
    id?: string
    name: string
    capacity: number
    schedules?: ScheduleCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutBusClassInput = {
    id?: string
    name: string
    capacity: number
    schedules?: ScheduleUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutBusClassInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutBusClassInput, BusUncheckedCreateWithoutBusClassInput>
  }

  export type BusCreateManyBusClassInputEnvelope = {
    data: BusCreateManyBusClassInput | BusCreateManyBusClassInput[]
    skipDuplicates?: boolean
  }

  export type BusUpsertWithWhereUniqueWithoutBusClassInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutBusClassInput, BusUncheckedUpdateWithoutBusClassInput>
    create: XOR<BusCreateWithoutBusClassInput, BusUncheckedCreateWithoutBusClassInput>
  }

  export type BusUpdateWithWhereUniqueWithoutBusClassInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutBusClassInput, BusUncheckedUpdateWithoutBusClassInput>
  }

  export type BusUpdateManyWithWhereWithoutBusClassInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutBusClassInput>
  }

  export type BusScalarWhereInput = {
    AND?: BusScalarWhereInput | BusScalarWhereInput[]
    OR?: BusScalarWhereInput[]
    NOT?: BusScalarWhereInput | BusScalarWhereInput[]
    id?: StringFilter<"Bus"> | string
    name?: StringFilter<"Bus"> | string
    capacity?: IntFilter<"Bus"> | number
    busClassId?: StringFilter<"Bus"> | string
  }

  export type BusClassCreateWithoutBusesInput = {
    id?: string
    name: string
    description: string
  }

  export type BusClassUncheckedCreateWithoutBusesInput = {
    id?: string
    name: string
    description: string
  }

  export type BusClassCreateOrConnectWithoutBusesInput = {
    where: BusClassWhereUniqueInput
    create: XOR<BusClassCreateWithoutBusesInput, BusClassUncheckedCreateWithoutBusesInput>
  }

  export type ScheduleCreateWithoutBusInput = {
    id?: string
    departure: Date | string
    arrival: Date | string
    price: number
    route: RouteCreateNestedOneWithoutSchedulesInput
    bookings?: BookingCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutBusInput = {
    id?: string
    routeId: string
    departure: Date | string
    arrival: Date | string
    price: number
    bookings?: BookingUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutBusInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutBusInput, ScheduleUncheckedCreateWithoutBusInput>
  }

  export type ScheduleCreateManyBusInputEnvelope = {
    data: ScheduleCreateManyBusInput | ScheduleCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type BusClassUpsertWithoutBusesInput = {
    update: XOR<BusClassUpdateWithoutBusesInput, BusClassUncheckedUpdateWithoutBusesInput>
    create: XOR<BusClassCreateWithoutBusesInput, BusClassUncheckedCreateWithoutBusesInput>
    where?: BusClassWhereInput
  }

  export type BusClassUpdateToOneWithWhereWithoutBusesInput = {
    where?: BusClassWhereInput
    data: XOR<BusClassUpdateWithoutBusesInput, BusClassUncheckedUpdateWithoutBusesInput>
  }

  export type BusClassUpdateWithoutBusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BusClassUncheckedUpdateWithoutBusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutBusInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutBusInput, ScheduleUncheckedUpdateWithoutBusInput>
    create: XOR<ScheduleCreateWithoutBusInput, ScheduleUncheckedCreateWithoutBusInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutBusInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutBusInput, ScheduleUncheckedUpdateWithoutBusInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutBusInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutBusInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: StringFilter<"Schedule"> | string
    busId?: StringFilter<"Schedule"> | string
    routeId?: StringFilter<"Schedule"> | string
    departure?: DateTimeFilter<"Schedule"> | Date | string
    arrival?: DateTimeFilter<"Schedule"> | Date | string
    price?: IntFilter<"Schedule"> | number
  }

  export type ScheduleCreateWithoutRouteInput = {
    id?: string
    departure: Date | string
    arrival: Date | string
    price: number
    bus: BusCreateNestedOneWithoutSchedulesInput
    bookings?: BookingCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutRouteInput = {
    id?: string
    busId: string
    departure: Date | string
    arrival: Date | string
    price: number
    bookings?: BookingUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutRouteInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput>
  }

  export type ScheduleCreateManyRouteInputEnvelope = {
    data: ScheduleCreateManyRouteInput | ScheduleCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleUpsertWithWhereUniqueWithoutRouteInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutRouteInput, ScheduleUncheckedUpdateWithoutRouteInput>
    create: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutRouteInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutRouteInput, ScheduleUncheckedUpdateWithoutRouteInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutRouteInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutRouteInput>
  }

  export type BusCreateWithoutSchedulesInput = {
    id?: string
    name: string
    capacity: number
    busClass: BusClassCreateNestedOneWithoutBusesInput
  }

  export type BusUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name: string
    capacity: number
    busClassId: string
  }

  export type BusCreateOrConnectWithoutSchedulesInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutSchedulesInput, BusUncheckedCreateWithoutSchedulesInput>
  }

  export type RouteCreateWithoutSchedulesInput = {
    id?: string
    origin: string
    destination: string
  }

  export type RouteUncheckedCreateWithoutSchedulesInput = {
    id?: string
    origin: string
    destination: string
  }

  export type RouteCreateOrConnectWithoutSchedulesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
  }

  export type BookingCreateWithoutScheduleInput = {
    id?: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    seats?: BookingSeatCreateNestedManyWithoutBookingInput
    Payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutScheduleInput = {
    id?: string
    userId: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    seats?: BookingSeatUncheckedCreateNestedManyWithoutBookingInput
    Payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutScheduleInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutScheduleInput, BookingUncheckedCreateWithoutScheduleInput>
  }

  export type BookingCreateManyScheduleInputEnvelope = {
    data: BookingCreateManyScheduleInput | BookingCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type BusUpsertWithoutSchedulesInput = {
    update: XOR<BusUpdateWithoutSchedulesInput, BusUncheckedUpdateWithoutSchedulesInput>
    create: XOR<BusCreateWithoutSchedulesInput, BusUncheckedCreateWithoutSchedulesInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutSchedulesInput, BusUncheckedUpdateWithoutSchedulesInput>
  }

  export type BusUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    busClass?: BusClassUpdateOneRequiredWithoutBusesNestedInput
  }

  export type BusUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    busClassId?: StringFieldUpdateOperationsInput | string
  }

  export type RouteUpsertWithoutSchedulesInput = {
    update: XOR<RouteUpdateWithoutSchedulesInput, RouteUncheckedUpdateWithoutSchedulesInput>
    create: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutSchedulesInput, RouteUncheckedUpdateWithoutSchedulesInput>
  }

  export type RouteUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type RouteUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpsertWithWhereUniqueWithoutScheduleInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutScheduleInput, BookingUncheckedUpdateWithoutScheduleInput>
    create: XOR<BookingCreateWithoutScheduleInput, BookingUncheckedCreateWithoutScheduleInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutScheduleInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutScheduleInput, BookingUncheckedUpdateWithoutScheduleInput>
  }

  export type BookingUpdateManyWithWhereWithoutScheduleInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutScheduleInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    wallet?: WalletCreateNestedOneWithoutUserInput
    topups?: TopupCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    topups?: TopupUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type ScheduleCreateWithoutBookingsInput = {
    id?: string
    departure: Date | string
    arrival: Date | string
    price: number
    bus: BusCreateNestedOneWithoutSchedulesInput
    route: RouteCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutBookingsInput = {
    id?: string
    busId: string
    routeId: string
    departure: Date | string
    arrival: Date | string
    price: number
  }

  export type ScheduleCreateOrConnectWithoutBookingsInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutBookingsInput, ScheduleUncheckedCreateWithoutBookingsInput>
  }

  export type BookingSeatCreateWithoutBookingInput = {
    id?: string
    seatNumber: string
  }

  export type BookingSeatUncheckedCreateWithoutBookingInput = {
    id?: string
    seatNumber: string
  }

  export type BookingSeatCreateOrConnectWithoutBookingInput = {
    where: BookingSeatWhereUniqueInput
    create: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput>
  }

  export type BookingSeatCreateManyBookingInputEnvelope = {
    data: BookingSeatCreateManyBookingInput | BookingSeatCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wallet?: WalletUpdateOneWithoutUserNestedInput
    topups?: TopupUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    topups?: TopupUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ScheduleUpsertWithoutBookingsInput = {
    update: XOR<ScheduleUpdateWithoutBookingsInput, ScheduleUncheckedUpdateWithoutBookingsInput>
    create: XOR<ScheduleCreateWithoutBookingsInput, ScheduleUncheckedCreateWithoutBookingsInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutBookingsInput, ScheduleUncheckedUpdateWithoutBookingsInput>
  }

  export type ScheduleUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    bus?: BusUpdateOneRequiredWithoutSchedulesNestedInput
    route?: RouteUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type BookingSeatUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingSeatWhereUniqueInput
    update: XOR<BookingSeatUpdateWithoutBookingInput, BookingSeatUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput>
  }

  export type BookingSeatUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingSeatWhereUniqueInput
    data: XOR<BookingSeatUpdateWithoutBookingInput, BookingSeatUncheckedUpdateWithoutBookingInput>
  }

  export type BookingSeatUpdateManyWithWhereWithoutBookingInput = {
    where: BookingSeatScalarWhereInput
    data: XOR<BookingSeatUpdateManyMutationInput, BookingSeatUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingSeatScalarWhereInput = {
    AND?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
    OR?: BookingSeatScalarWhereInput[]
    NOT?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
    id?: StringFilter<"BookingSeat"> | string
    bookingId?: StringFilter<"BookingSeat"> | string
    seatNumber?: StringFilter<"BookingSeat"> | string
  }

  export type PaymentUpsertWithoutBookingInput = {
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutSeatsInput = {
    id?: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    schedule: ScheduleCreateNestedOneWithoutBookingsInput
    Payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutSeatsInput = {
    id?: string
    userId: string
    scheduleId: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    Payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutSeatsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSeatsInput, BookingUncheckedCreateWithoutSeatsInput>
  }

  export type BookingUpsertWithoutSeatsInput = {
    update: XOR<BookingUpdateWithoutSeatsInput, BookingUncheckedUpdateWithoutSeatsInput>
    create: XOR<BookingCreateWithoutSeatsInput, BookingUncheckedCreateWithoutSeatsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutSeatsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutSeatsInput, BookingUncheckedUpdateWithoutSeatsInput>
  }

  export type BookingUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutBookingsNestedInput
    Payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateWithoutPaymentInput = {
    id?: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    schedule: ScheduleCreateNestedOneWithoutBookingsInput
    seats?: BookingSeatCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    scheduleId: string
    totalAmount: number
    status: string
    createdAt?: Date | string
    seats?: BookingSeatUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutBookingsNestedInput
    seats?: BookingSeatUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: BookingSeatUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type TopupCreateManyUserInput = {
    id?: string
    amount: number
    status: string
    createdAt?: Date | string
  }

  export type WithdrawalCreateManyUserInput = {
    id?: string
    amount: number
    bankCode: string
    accountNumber: string
    status: string
    createdAt?: Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    scheduleId: string
    totalAmount: number
    status: string
    createdAt?: Date | string
  }

  export type TopupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutBookingsNestedInput
    seats?: BookingSeatUpdateManyWithoutBookingNestedInput
    Payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: BookingSeatUncheckedUpdateManyWithoutBookingNestedInput
    Payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateManyWalletInput = {
    id?: string
    amount: number
    type: string
    reference: string
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusCreateManyBusClassInput = {
    id?: string
    name: string
    capacity: number
  }

  export type BusUpdateWithoutBusClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    schedules?: ScheduleUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutBusClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    schedules?: ScheduleUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutBusClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateManyBusInput = {
    id?: string
    routeId: string
    departure: Date | string
    arrival: Date | string
    price: number
  }

  export type ScheduleUpdateWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutSchedulesNestedInput
    bookings?: BookingUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateManyRouteInput = {
    id?: string
    busId: string
    departure: Date | string
    arrival: Date | string
    price: number
  }

  export type ScheduleUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    bus?: BusUpdateOneRequiredWithoutSchedulesNestedInput
    bookings?: BookingUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyScheduleInput = {
    id?: string
    userId: string
    totalAmount: number
    status: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    seats?: BookingSeatUpdateManyWithoutBookingNestedInput
    Payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: BookingSeatUncheckedUpdateManyWithoutBookingNestedInput
    Payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSeatCreateManyBookingInput = {
    id?: string
    seatNumber: string
  }

  export type BookingSeatUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingSeatUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingSeatUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
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