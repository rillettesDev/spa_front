
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
 * Model Adoptant
 * 
 */
export type Adoptant = $Result.DefaultSelection<Prisma.$AdoptantPayload>
/**
 * Model Adoption
 * 
 */
export type Adoption = $Result.DefaultSelection<Prisma.$AdoptionPayload>
/**
 * Model Animal
 * 
 */
export type Animal = $Result.DefaultSelection<Prisma.$AnimalPayload>
/**
 * Model Evolution
 * 
 */
export type Evolution = $Result.DefaultSelection<Prisma.$EvolutionPayload>
/**
 * Model SuiviVeterinaire
 * 
 */
export type SuiviVeterinaire = $Result.DefaultSelection<Prisma.$SuiviVeterinairePayload>
/**
 * Model Parrainage
 * 
 */
export type Parrainage = $Result.DefaultSelection<Prisma.$ParrainagePayload>
/**
 * Model Publication
 * 
 */
export type Publication = $Result.DefaultSelection<Prisma.$PublicationPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Signalement
 * 
 */
export type Signalement = $Result.DefaultSelection<Prisma.$SignalementPayload>
/**
 * Model VitrineProduits
 * 
 */
export type VitrineProduits = $Result.DefaultSelection<Prisma.$VitrineProduitsPayload>
/**
 * Model Aider
 * 
 */
export type Aider = $Result.DefaultSelection<Prisma.$AiderPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model PlanningBalades
 * 
 */
export type PlanningBalades = $Result.DefaultSelection<Prisma.$PlanningBaladesPayload>
/**
 * Model Creneaux
 * 
 */
export type Creneaux = $Result.DefaultSelection<Prisma.$CreneauxPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adoptants
 * const adoptants = await prisma.adoptant.findMany()
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
   * // Fetch zero or more Adoptants
   * const adoptants = await prisma.adoptant.findMany()
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
   * `prisma.adoptant`: Exposes CRUD operations for the **Adoptant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adoptants
    * const adoptants = await prisma.adoptant.findMany()
    * ```
    */
  get adoptant(): Prisma.AdoptantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adoption`: Exposes CRUD operations for the **Adoption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adoptions
    * const adoptions = await prisma.adoption.findMany()
    * ```
    */
  get adoption(): Prisma.AdoptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evolution`: Exposes CRUD operations for the **Evolution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evolutions
    * const evolutions = await prisma.evolution.findMany()
    * ```
    */
  get evolution(): Prisma.EvolutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suiviVeterinaire`: Exposes CRUD operations for the **SuiviVeterinaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuiviVeterinaires
    * const suiviVeterinaires = await prisma.suiviVeterinaire.findMany()
    * ```
    */
  get suiviVeterinaire(): Prisma.SuiviVeterinaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parrainage`: Exposes CRUD operations for the **Parrainage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parrainages
    * const parrainages = await prisma.parrainage.findMany()
    * ```
    */
  get parrainage(): Prisma.ParrainageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.PublicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signalement`: Exposes CRUD operations for the **Signalement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signalements
    * const signalements = await prisma.signalement.findMany()
    * ```
    */
  get signalement(): Prisma.SignalementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vitrineProduits`: Exposes CRUD operations for the **VitrineProduits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VitrineProduits
    * const vitrineProduits = await prisma.vitrineProduits.findMany()
    * ```
    */
  get vitrineProduits(): Prisma.VitrineProduitsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aider`: Exposes CRUD operations for the **Aider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aiders
    * const aiders = await prisma.aider.findMany()
    * ```
    */
  get aider(): Prisma.AiderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planningBalades`: Exposes CRUD operations for the **PlanningBalades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanningBalades
    * const planningBalades = await prisma.planningBalades.findMany()
    * ```
    */
  get planningBalades(): Prisma.PlanningBaladesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creneaux`: Exposes CRUD operations for the **Creneaux** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creneaux
    * const creneaux = await prisma.creneaux.findMany()
    * ```
    */
  get creneaux(): Prisma.CreneauxDelegate<ExtArgs, ClientOptions>;
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
    Adoptant: 'Adoptant',
    Adoption: 'Adoption',
    Animal: 'Animal',
    Evolution: 'Evolution',
    SuiviVeterinaire: 'SuiviVeterinaire',
    Parrainage: 'Parrainage',
    Publication: 'Publication',
    Blog: 'Blog',
    Signalement: 'Signalement',
    VitrineProduits: 'VitrineProduits',
    Aider: 'Aider',
    Users: 'Users',
    PlanningBalades: 'PlanningBalades',
    Creneaux: 'Creneaux'
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
      modelProps: "adoptant" | "adoption" | "animal" | "evolution" | "suiviVeterinaire" | "parrainage" | "publication" | "blog" | "signalement" | "vitrineProduits" | "aider" | "users" | "planningBalades" | "creneaux"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Adoptant: {
        payload: Prisma.$AdoptantPayload<ExtArgs>
        fields: Prisma.AdoptantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdoptantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdoptantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload>
          }
          findFirst: {
            args: Prisma.AdoptantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdoptantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload>
          }
          findMany: {
            args: Prisma.AdoptantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload>[]
          }
          create: {
            args: Prisma.AdoptantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload>
          }
          createMany: {
            args: Prisma.AdoptantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdoptantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload>[]
          }
          delete: {
            args: Prisma.AdoptantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload>
          }
          update: {
            args: Prisma.AdoptantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload>
          }
          deleteMany: {
            args: Prisma.AdoptantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdoptantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdoptantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload>[]
          }
          upsert: {
            args: Prisma.AdoptantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptantPayload>
          }
          aggregate: {
            args: Prisma.AdoptantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdoptant>
          }
          groupBy: {
            args: Prisma.AdoptantGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdoptantGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdoptantCountArgs<ExtArgs>
            result: $Utils.Optional<AdoptantCountAggregateOutputType> | number
          }
        }
      }
      Adoption: {
        payload: Prisma.$AdoptionPayload<ExtArgs>
        fields: Prisma.AdoptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdoptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdoptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          findFirst: {
            args: Prisma.AdoptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdoptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          findMany: {
            args: Prisma.AdoptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>[]
          }
          create: {
            args: Prisma.AdoptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          createMany: {
            args: Prisma.AdoptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdoptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>[]
          }
          delete: {
            args: Prisma.AdoptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          update: {
            args: Prisma.AdoptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          deleteMany: {
            args: Prisma.AdoptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdoptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdoptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>[]
          }
          upsert: {
            args: Prisma.AdoptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          aggregate: {
            args: Prisma.AdoptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdoption>
          }
          groupBy: {
            args: Prisma.AdoptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdoptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdoptionCountArgs<ExtArgs>
            result: $Utils.Optional<AdoptionCountAggregateOutputType> | number
          }
        }
      }
      Animal: {
        payload: Prisma.$AnimalPayload<ExtArgs>
        fields: Prisma.AnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findFirst: {
            args: Prisma.AnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findMany: {
            args: Prisma.AnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          create: {
            args: Prisma.AnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          createMany: {
            args: Prisma.AnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          delete: {
            args: Prisma.AnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          update: {
            args: Prisma.AnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          deleteMany: {
            args: Prisma.AnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          upsert: {
            args: Prisma.AnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          aggregate: {
            args: Prisma.AnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimal>
          }
          groupBy: {
            args: Prisma.AnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalCountAggregateOutputType> | number
          }
        }
      }
      Evolution: {
        payload: Prisma.$EvolutionPayload<ExtArgs>
        fields: Prisma.EvolutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvolutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvolutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          findFirst: {
            args: Prisma.EvolutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvolutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          findMany: {
            args: Prisma.EvolutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>[]
          }
          create: {
            args: Prisma.EvolutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          createMany: {
            args: Prisma.EvolutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvolutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>[]
          }
          delete: {
            args: Prisma.EvolutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          update: {
            args: Prisma.EvolutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          deleteMany: {
            args: Prisma.EvolutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvolutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvolutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>[]
          }
          upsert: {
            args: Prisma.EvolutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          aggregate: {
            args: Prisma.EvolutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvolution>
          }
          groupBy: {
            args: Prisma.EvolutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvolutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvolutionCountArgs<ExtArgs>
            result: $Utils.Optional<EvolutionCountAggregateOutputType> | number
          }
        }
      }
      SuiviVeterinaire: {
        payload: Prisma.$SuiviVeterinairePayload<ExtArgs>
        fields: Prisma.SuiviVeterinaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuiviVeterinaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuiviVeterinaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload>
          }
          findFirst: {
            args: Prisma.SuiviVeterinaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuiviVeterinaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload>
          }
          findMany: {
            args: Prisma.SuiviVeterinaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload>[]
          }
          create: {
            args: Prisma.SuiviVeterinaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload>
          }
          createMany: {
            args: Prisma.SuiviVeterinaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuiviVeterinaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload>[]
          }
          delete: {
            args: Prisma.SuiviVeterinaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload>
          }
          update: {
            args: Prisma.SuiviVeterinaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload>
          }
          deleteMany: {
            args: Prisma.SuiviVeterinaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuiviVeterinaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuiviVeterinaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload>[]
          }
          upsert: {
            args: Prisma.SuiviVeterinaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuiviVeterinairePayload>
          }
          aggregate: {
            args: Prisma.SuiviVeterinaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuiviVeterinaire>
          }
          groupBy: {
            args: Prisma.SuiviVeterinaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuiviVeterinaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuiviVeterinaireCountArgs<ExtArgs>
            result: $Utils.Optional<SuiviVeterinaireCountAggregateOutputType> | number
          }
        }
      }
      Parrainage: {
        payload: Prisma.$ParrainagePayload<ExtArgs>
        fields: Prisma.ParrainageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParrainageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParrainageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload>
          }
          findFirst: {
            args: Prisma.ParrainageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParrainageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload>
          }
          findMany: {
            args: Prisma.ParrainageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload>[]
          }
          create: {
            args: Prisma.ParrainageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload>
          }
          createMany: {
            args: Prisma.ParrainageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParrainageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload>[]
          }
          delete: {
            args: Prisma.ParrainageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload>
          }
          update: {
            args: Prisma.ParrainageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload>
          }
          deleteMany: {
            args: Prisma.ParrainageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParrainageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParrainageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload>[]
          }
          upsert: {
            args: Prisma.ParrainageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParrainagePayload>
          }
          aggregate: {
            args: Prisma.ParrainageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParrainage>
          }
          groupBy: {
            args: Prisma.ParrainageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParrainageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParrainageCountArgs<ExtArgs>
            result: $Utils.Optional<ParrainageCountAggregateOutputType> | number
          }
        }
      }
      Publication: {
        payload: Prisma.$PublicationPayload<ExtArgs>
        fields: Prisma.PublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findFirst: {
            args: Prisma.PublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findMany: {
            args: Prisma.PublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          create: {
            args: Prisma.PublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          createMany: {
            args: Prisma.PublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          delete: {
            args: Prisma.PublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          update: {
            args: Prisma.PublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          deleteMany: {
            args: Prisma.PublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          upsert: {
            args: Prisma.PublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublication>
          }
          groupBy: {
            args: Prisma.PublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Signalement: {
        payload: Prisma.$SignalementPayload<ExtArgs>
        fields: Prisma.SignalementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          findFirst: {
            args: Prisma.SignalementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          findMany: {
            args: Prisma.SignalementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>[]
          }
          create: {
            args: Prisma.SignalementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          createMany: {
            args: Prisma.SignalementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>[]
          }
          delete: {
            args: Prisma.SignalementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          update: {
            args: Prisma.SignalementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          deleteMany: {
            args: Prisma.SignalementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>[]
          }
          upsert: {
            args: Prisma.SignalementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          aggregate: {
            args: Prisma.SignalementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignalement>
          }
          groupBy: {
            args: Prisma.SignalementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalementCountArgs<ExtArgs>
            result: $Utils.Optional<SignalementCountAggregateOutputType> | number
          }
        }
      }
      VitrineProduits: {
        payload: Prisma.$VitrineProduitsPayload<ExtArgs>
        fields: Prisma.VitrineProduitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VitrineProduitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VitrineProduitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload>
          }
          findFirst: {
            args: Prisma.VitrineProduitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VitrineProduitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload>
          }
          findMany: {
            args: Prisma.VitrineProduitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload>[]
          }
          create: {
            args: Prisma.VitrineProduitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload>
          }
          createMany: {
            args: Prisma.VitrineProduitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VitrineProduitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload>[]
          }
          delete: {
            args: Prisma.VitrineProduitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload>
          }
          update: {
            args: Prisma.VitrineProduitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload>
          }
          deleteMany: {
            args: Prisma.VitrineProduitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VitrineProduitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VitrineProduitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload>[]
          }
          upsert: {
            args: Prisma.VitrineProduitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitrineProduitsPayload>
          }
          aggregate: {
            args: Prisma.VitrineProduitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVitrineProduits>
          }
          groupBy: {
            args: Prisma.VitrineProduitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VitrineProduitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VitrineProduitsCountArgs<ExtArgs>
            result: $Utils.Optional<VitrineProduitsCountAggregateOutputType> | number
          }
        }
      }
      Aider: {
        payload: Prisma.$AiderPayload<ExtArgs>
        fields: Prisma.AiderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload>
          }
          findFirst: {
            args: Prisma.AiderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload>
          }
          findMany: {
            args: Prisma.AiderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload>[]
          }
          create: {
            args: Prisma.AiderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload>
          }
          createMany: {
            args: Prisma.AiderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload>[]
          }
          delete: {
            args: Prisma.AiderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload>
          }
          update: {
            args: Prisma.AiderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload>
          }
          deleteMany: {
            args: Prisma.AiderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload>[]
          }
          upsert: {
            args: Prisma.AiderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiderPayload>
          }
          aggregate: {
            args: Prisma.AiderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAider>
          }
          groupBy: {
            args: Prisma.AiderGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiderGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiderCountArgs<ExtArgs>
            result: $Utils.Optional<AiderCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      PlanningBalades: {
        payload: Prisma.$PlanningBaladesPayload<ExtArgs>
        fields: Prisma.PlanningBaladesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanningBaladesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanningBaladesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload>
          }
          findFirst: {
            args: Prisma.PlanningBaladesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanningBaladesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload>
          }
          findMany: {
            args: Prisma.PlanningBaladesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload>[]
          }
          create: {
            args: Prisma.PlanningBaladesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload>
          }
          createMany: {
            args: Prisma.PlanningBaladesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanningBaladesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload>[]
          }
          delete: {
            args: Prisma.PlanningBaladesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload>
          }
          update: {
            args: Prisma.PlanningBaladesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload>
          }
          deleteMany: {
            args: Prisma.PlanningBaladesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanningBaladesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanningBaladesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload>[]
          }
          upsert: {
            args: Prisma.PlanningBaladesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningBaladesPayload>
          }
          aggregate: {
            args: Prisma.PlanningBaladesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanningBalades>
          }
          groupBy: {
            args: Prisma.PlanningBaladesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanningBaladesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanningBaladesCountArgs<ExtArgs>
            result: $Utils.Optional<PlanningBaladesCountAggregateOutputType> | number
          }
        }
      }
      Creneaux: {
        payload: Prisma.$CreneauxPayload<ExtArgs>
        fields: Prisma.CreneauxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreneauxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreneauxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload>
          }
          findFirst: {
            args: Prisma.CreneauxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreneauxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload>
          }
          findMany: {
            args: Prisma.CreneauxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload>[]
          }
          create: {
            args: Prisma.CreneauxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload>
          }
          createMany: {
            args: Prisma.CreneauxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreneauxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload>[]
          }
          delete: {
            args: Prisma.CreneauxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload>
          }
          update: {
            args: Prisma.CreneauxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload>
          }
          deleteMany: {
            args: Prisma.CreneauxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreneauxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreneauxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload>[]
          }
          upsert: {
            args: Prisma.CreneauxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreneauxPayload>
          }
          aggregate: {
            args: Prisma.CreneauxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreneaux>
          }
          groupBy: {
            args: Prisma.CreneauxGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreneauxGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreneauxCountArgs<ExtArgs>
            result: $Utils.Optional<CreneauxCountAggregateOutputType> | number
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
    adoptant?: AdoptantOmit
    adoption?: AdoptionOmit
    animal?: AnimalOmit
    evolution?: EvolutionOmit
    suiviVeterinaire?: SuiviVeterinaireOmit
    parrainage?: ParrainageOmit
    publication?: PublicationOmit
    blog?: BlogOmit
    signalement?: SignalementOmit
    vitrineProduits?: VitrineProduitsOmit
    aider?: AiderOmit
    users?: UsersOmit
    planningBalades?: PlanningBaladesOmit
    creneaux?: CreneauxOmit
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
   * Count Type AdoptantCountOutputType
   */

  export type AdoptantCountOutputType = {
    users: number
    Adoption: number
  }

  export type AdoptantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AdoptantCountOutputTypeCountUsersArgs
    Adoption?: boolean | AdoptantCountOutputTypeCountAdoptionArgs
  }

  // Custom InputTypes
  /**
   * AdoptantCountOutputType without action
   */
  export type AdoptantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdoptantCountOutputType
     */
    select?: AdoptantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdoptantCountOutputType without action
   */
  export type AdoptantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * AdoptantCountOutputType without action
   */
  export type AdoptantCountOutputTypeCountAdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdoptionWhereInput
  }


  /**
   * Count Type AnimalCountOutputType
   */

  export type AnimalCountOutputType = {
    users: number
    evolution: number
    suiviVeterinaire: number
    parrainage: number
    publication: number
    Adoption: number
  }

  export type AnimalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AnimalCountOutputTypeCountUsersArgs
    evolution?: boolean | AnimalCountOutputTypeCountEvolutionArgs
    suiviVeterinaire?: boolean | AnimalCountOutputTypeCountSuiviVeterinaireArgs
    parrainage?: boolean | AnimalCountOutputTypeCountParrainageArgs
    publication?: boolean | AnimalCountOutputTypeCountPublicationArgs
    Adoption?: boolean | AnimalCountOutputTypeCountAdoptionArgs
  }

  // Custom InputTypes
  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimalCountOutputType
     */
    select?: AnimalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountEvolutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolutionWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountSuiviVeterinaireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuiviVeterinaireWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountParrainageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParrainageWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountPublicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountAdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdoptionWhereInput
  }


  /**
   * Count Type ParrainageCountOutputType
   */

  export type ParrainageCountOutputType = {
    users: number
  }

  export type ParrainageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ParrainageCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ParrainageCountOutputType without action
   */
  export type ParrainageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParrainageCountOutputType
     */
    select?: ParrainageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParrainageCountOutputType without action
   */
  export type ParrainageCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    users: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BlogCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    planningBalades: number
    creneaux: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planningBalades?: boolean | UsersCountOutputTypeCountPlanningBaladesArgs
    creneaux?: boolean | UsersCountOutputTypeCountCreneauxArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPlanningBaladesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanningBaladesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCreneauxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreneauxWhereInput
  }


  /**
   * Count Type PlanningBaladesCountOutputType
   */

  export type PlanningBaladesCountOutputType = {
    users: number
    creneaux: number
  }

  export type PlanningBaladesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PlanningBaladesCountOutputTypeCountUsersArgs
    creneaux?: boolean | PlanningBaladesCountOutputTypeCountCreneauxArgs
  }

  // Custom InputTypes
  /**
   * PlanningBaladesCountOutputType without action
   */
  export type PlanningBaladesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBaladesCountOutputType
     */
    select?: PlanningBaladesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanningBaladesCountOutputType without action
   */
  export type PlanningBaladesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * PlanningBaladesCountOutputType without action
   */
  export type PlanningBaladesCountOutputTypeCountCreneauxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreneauxWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Adoptant
   */

  export type AggregateAdoptant = {
    _count: AdoptantCountAggregateOutputType | null
    _avg: AdoptantAvgAggregateOutputType | null
    _sum: AdoptantSumAggregateOutputType | null
    _min: AdoptantMinAggregateOutputType | null
    _max: AdoptantMaxAggregateOutputType | null
  }

  export type AdoptantAvgAggregateOutputType = {
    id: number | null
  }

  export type AdoptantSumAggregateOutputType = {
    id: number | null
  }

  export type AdoptantMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    adresse: string | null
    cp: string | null
    ville: string | null
    historiqueAdoption: string | null
    commentaires: string | null
  }

  export type AdoptantMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    adresse: string | null
    cp: string | null
    ville: string | null
    historiqueAdoption: string | null
    commentaires: string | null
  }

  export type AdoptantCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    telephone: number
    adresse: number
    cp: number
    ville: number
    historiqueAdoption: number
    commentaires: number
    _all: number
  }


  export type AdoptantAvgAggregateInputType = {
    id?: true
  }

  export type AdoptantSumAggregateInputType = {
    id?: true
  }

  export type AdoptantMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    adresse?: true
    cp?: true
    ville?: true
    historiqueAdoption?: true
    commentaires?: true
  }

  export type AdoptantMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    adresse?: true
    cp?: true
    ville?: true
    historiqueAdoption?: true
    commentaires?: true
  }

  export type AdoptantCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    adresse?: true
    cp?: true
    ville?: true
    historiqueAdoption?: true
    commentaires?: true
    _all?: true
  }

  export type AdoptantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adoptant to aggregate.
     */
    where?: AdoptantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptants to fetch.
     */
    orderBy?: AdoptantOrderByWithRelationInput | AdoptantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdoptantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adoptants
    **/
    _count?: true | AdoptantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdoptantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdoptantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdoptantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdoptantMaxAggregateInputType
  }

  export type GetAdoptantAggregateType<T extends AdoptantAggregateArgs> = {
        [P in keyof T & keyof AggregateAdoptant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdoptant[P]>
      : GetScalarType<T[P], AggregateAdoptant[P]>
  }




  export type AdoptantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdoptantWhereInput
    orderBy?: AdoptantOrderByWithAggregationInput | AdoptantOrderByWithAggregationInput[]
    by: AdoptantScalarFieldEnum[] | AdoptantScalarFieldEnum
    having?: AdoptantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdoptantCountAggregateInputType | true
    _avg?: AdoptantAvgAggregateInputType
    _sum?: AdoptantSumAggregateInputType
    _min?: AdoptantMinAggregateInputType
    _max?: AdoptantMaxAggregateInputType
  }

  export type AdoptantGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    historiqueAdoption: string
    commentaires: string
    _count: AdoptantCountAggregateOutputType | null
    _avg: AdoptantAvgAggregateOutputType | null
    _sum: AdoptantSumAggregateOutputType | null
    _min: AdoptantMinAggregateOutputType | null
    _max: AdoptantMaxAggregateOutputType | null
  }

  type GetAdoptantGroupByPayload<T extends AdoptantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdoptantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdoptantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdoptantGroupByOutputType[P]>
            : GetScalarType<T[P], AdoptantGroupByOutputType[P]>
        }
      >
    >


  export type AdoptantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    cp?: boolean
    ville?: boolean
    historiqueAdoption?: boolean
    commentaires?: boolean
    users?: boolean | Adoptant$usersArgs<ExtArgs>
    Adoption?: boolean | Adoptant$AdoptionArgs<ExtArgs>
    _count?: boolean | AdoptantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoptant"]>

  export type AdoptantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    cp?: boolean
    ville?: boolean
    historiqueAdoption?: boolean
    commentaires?: boolean
  }, ExtArgs["result"]["adoptant"]>

  export type AdoptantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    cp?: boolean
    ville?: boolean
    historiqueAdoption?: boolean
    commentaires?: boolean
  }, ExtArgs["result"]["adoptant"]>

  export type AdoptantSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    cp?: boolean
    ville?: boolean
    historiqueAdoption?: boolean
    commentaires?: boolean
  }

  export type AdoptantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "telephone" | "adresse" | "cp" | "ville" | "historiqueAdoption" | "commentaires", ExtArgs["result"]["adoptant"]>
  export type AdoptantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Adoptant$usersArgs<ExtArgs>
    Adoption?: boolean | Adoptant$AdoptionArgs<ExtArgs>
    _count?: boolean | AdoptantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdoptantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdoptantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdoptantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adoptant"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
      Adoption: Prisma.$AdoptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      email: string
      telephone: string
      adresse: string
      cp: string
      ville: string
      historiqueAdoption: string
      commentaires: string
    }, ExtArgs["result"]["adoptant"]>
    composites: {}
  }

  type AdoptantGetPayload<S extends boolean | null | undefined | AdoptantDefaultArgs> = $Result.GetResult<Prisma.$AdoptantPayload, S>

  type AdoptantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdoptantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdoptantCountAggregateInputType | true
    }

  export interface AdoptantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adoptant'], meta: { name: 'Adoptant' } }
    /**
     * Find zero or one Adoptant that matches the filter.
     * @param {AdoptantFindUniqueArgs} args - Arguments to find a Adoptant
     * @example
     * // Get one Adoptant
     * const adoptant = await prisma.adoptant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdoptantFindUniqueArgs>(args: SelectSubset<T, AdoptantFindUniqueArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adoptant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdoptantFindUniqueOrThrowArgs} args - Arguments to find a Adoptant
     * @example
     * // Get one Adoptant
     * const adoptant = await prisma.adoptant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdoptantFindUniqueOrThrowArgs>(args: SelectSubset<T, AdoptantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoptant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptantFindFirstArgs} args - Arguments to find a Adoptant
     * @example
     * // Get one Adoptant
     * const adoptant = await prisma.adoptant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdoptantFindFirstArgs>(args?: SelectSubset<T, AdoptantFindFirstArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoptant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptantFindFirstOrThrowArgs} args - Arguments to find a Adoptant
     * @example
     * // Get one Adoptant
     * const adoptant = await prisma.adoptant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdoptantFindFirstOrThrowArgs>(args?: SelectSubset<T, AdoptantFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adoptants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adoptants
     * const adoptants = await prisma.adoptant.findMany()
     * 
     * // Get first 10 Adoptants
     * const adoptants = await prisma.adoptant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adoptantWithIdOnly = await prisma.adoptant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdoptantFindManyArgs>(args?: SelectSubset<T, AdoptantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adoptant.
     * @param {AdoptantCreateArgs} args - Arguments to create a Adoptant.
     * @example
     * // Create one Adoptant
     * const Adoptant = await prisma.adoptant.create({
     *   data: {
     *     // ... data to create a Adoptant
     *   }
     * })
     * 
     */
    create<T extends AdoptantCreateArgs>(args: SelectSubset<T, AdoptantCreateArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adoptants.
     * @param {AdoptantCreateManyArgs} args - Arguments to create many Adoptants.
     * @example
     * // Create many Adoptants
     * const adoptant = await prisma.adoptant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdoptantCreateManyArgs>(args?: SelectSubset<T, AdoptantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adoptants and returns the data saved in the database.
     * @param {AdoptantCreateManyAndReturnArgs} args - Arguments to create many Adoptants.
     * @example
     * // Create many Adoptants
     * const adoptant = await prisma.adoptant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adoptants and only return the `id`
     * const adoptantWithIdOnly = await prisma.adoptant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdoptantCreateManyAndReturnArgs>(args?: SelectSubset<T, AdoptantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adoptant.
     * @param {AdoptantDeleteArgs} args - Arguments to delete one Adoptant.
     * @example
     * // Delete one Adoptant
     * const Adoptant = await prisma.adoptant.delete({
     *   where: {
     *     // ... filter to delete one Adoptant
     *   }
     * })
     * 
     */
    delete<T extends AdoptantDeleteArgs>(args: SelectSubset<T, AdoptantDeleteArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adoptant.
     * @param {AdoptantUpdateArgs} args - Arguments to update one Adoptant.
     * @example
     * // Update one Adoptant
     * const adoptant = await prisma.adoptant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdoptantUpdateArgs>(args: SelectSubset<T, AdoptantUpdateArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adoptants.
     * @param {AdoptantDeleteManyArgs} args - Arguments to filter Adoptants to delete.
     * @example
     * // Delete a few Adoptants
     * const { count } = await prisma.adoptant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdoptantDeleteManyArgs>(args?: SelectSubset<T, AdoptantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adoptants
     * const adoptant = await prisma.adoptant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdoptantUpdateManyArgs>(args: SelectSubset<T, AdoptantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptants and returns the data updated in the database.
     * @param {AdoptantUpdateManyAndReturnArgs} args - Arguments to update many Adoptants.
     * @example
     * // Update many Adoptants
     * const adoptant = await prisma.adoptant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adoptants and only return the `id`
     * const adoptantWithIdOnly = await prisma.adoptant.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdoptantUpdateManyAndReturnArgs>(args: SelectSubset<T, AdoptantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adoptant.
     * @param {AdoptantUpsertArgs} args - Arguments to update or create a Adoptant.
     * @example
     * // Update or create a Adoptant
     * const adoptant = await prisma.adoptant.upsert({
     *   create: {
     *     // ... data to create a Adoptant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adoptant we want to update
     *   }
     * })
     */
    upsert<T extends AdoptantUpsertArgs>(args: SelectSubset<T, AdoptantUpsertArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adoptants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptantCountArgs} args - Arguments to filter Adoptants to count.
     * @example
     * // Count the number of Adoptants
     * const count = await prisma.adoptant.count({
     *   where: {
     *     // ... the filter for the Adoptants we want to count
     *   }
     * })
    **/
    count<T extends AdoptantCountArgs>(
      args?: Subset<T, AdoptantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdoptantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adoptant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdoptantAggregateArgs>(args: Subset<T, AdoptantAggregateArgs>): Prisma.PrismaPromise<GetAdoptantAggregateType<T>>

    /**
     * Group by Adoptant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptantGroupByArgs} args - Group by arguments.
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
      T extends AdoptantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdoptantGroupByArgs['orderBy'] }
        : { orderBy?: AdoptantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdoptantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdoptantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adoptant model
   */
  readonly fields: AdoptantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adoptant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdoptantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Adoptant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Adoptant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Adoption<T extends Adoptant$AdoptionArgs<ExtArgs> = {}>(args?: Subset<T, Adoptant$AdoptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Adoptant model
   */
  interface AdoptantFieldRefs {
    readonly id: FieldRef<"Adoptant", 'Int'>
    readonly nom: FieldRef<"Adoptant", 'String'>
    readonly prenom: FieldRef<"Adoptant", 'String'>
    readonly email: FieldRef<"Adoptant", 'String'>
    readonly telephone: FieldRef<"Adoptant", 'String'>
    readonly adresse: FieldRef<"Adoptant", 'String'>
    readonly cp: FieldRef<"Adoptant", 'String'>
    readonly ville: FieldRef<"Adoptant", 'String'>
    readonly historiqueAdoption: FieldRef<"Adoptant", 'String'>
    readonly commentaires: FieldRef<"Adoptant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Adoptant findUnique
   */
  export type AdoptantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    /**
     * Filter, which Adoptant to fetch.
     */
    where: AdoptantWhereUniqueInput
  }

  /**
   * Adoptant findUniqueOrThrow
   */
  export type AdoptantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    /**
     * Filter, which Adoptant to fetch.
     */
    where: AdoptantWhereUniqueInput
  }

  /**
   * Adoptant findFirst
   */
  export type AdoptantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    /**
     * Filter, which Adoptant to fetch.
     */
    where?: AdoptantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptants to fetch.
     */
    orderBy?: AdoptantOrderByWithRelationInput | AdoptantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adoptants.
     */
    cursor?: AdoptantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adoptants.
     */
    distinct?: AdoptantScalarFieldEnum | AdoptantScalarFieldEnum[]
  }

  /**
   * Adoptant findFirstOrThrow
   */
  export type AdoptantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    /**
     * Filter, which Adoptant to fetch.
     */
    where?: AdoptantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptants to fetch.
     */
    orderBy?: AdoptantOrderByWithRelationInput | AdoptantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adoptants.
     */
    cursor?: AdoptantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adoptants.
     */
    distinct?: AdoptantScalarFieldEnum | AdoptantScalarFieldEnum[]
  }

  /**
   * Adoptant findMany
   */
  export type AdoptantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    /**
     * Filter, which Adoptants to fetch.
     */
    where?: AdoptantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptants to fetch.
     */
    orderBy?: AdoptantOrderByWithRelationInput | AdoptantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adoptants.
     */
    cursor?: AdoptantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptants.
     */
    skip?: number
    distinct?: AdoptantScalarFieldEnum | AdoptantScalarFieldEnum[]
  }

  /**
   * Adoptant create
   */
  export type AdoptantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    /**
     * The data needed to create a Adoptant.
     */
    data: XOR<AdoptantCreateInput, AdoptantUncheckedCreateInput>
  }

  /**
   * Adoptant createMany
   */
  export type AdoptantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adoptants.
     */
    data: AdoptantCreateManyInput | AdoptantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adoptant createManyAndReturn
   */
  export type AdoptantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * The data used to create many Adoptants.
     */
    data: AdoptantCreateManyInput | AdoptantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adoptant update
   */
  export type AdoptantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    /**
     * The data needed to update a Adoptant.
     */
    data: XOR<AdoptantUpdateInput, AdoptantUncheckedUpdateInput>
    /**
     * Choose, which Adoptant to update.
     */
    where: AdoptantWhereUniqueInput
  }

  /**
   * Adoptant updateMany
   */
  export type AdoptantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adoptants.
     */
    data: XOR<AdoptantUpdateManyMutationInput, AdoptantUncheckedUpdateManyInput>
    /**
     * Filter which Adoptants to update
     */
    where?: AdoptantWhereInput
    /**
     * Limit how many Adoptants to update.
     */
    limit?: number
  }

  /**
   * Adoptant updateManyAndReturn
   */
  export type AdoptantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * The data used to update Adoptants.
     */
    data: XOR<AdoptantUpdateManyMutationInput, AdoptantUncheckedUpdateManyInput>
    /**
     * Filter which Adoptants to update
     */
    where?: AdoptantWhereInput
    /**
     * Limit how many Adoptants to update.
     */
    limit?: number
  }

  /**
   * Adoptant upsert
   */
  export type AdoptantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    /**
     * The filter to search for the Adoptant to update in case it exists.
     */
    where: AdoptantWhereUniqueInput
    /**
     * In case the Adoptant found by the `where` argument doesn't exist, create a new Adoptant with this data.
     */
    create: XOR<AdoptantCreateInput, AdoptantUncheckedCreateInput>
    /**
     * In case the Adoptant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdoptantUpdateInput, AdoptantUncheckedUpdateInput>
  }

  /**
   * Adoptant delete
   */
  export type AdoptantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    /**
     * Filter which Adoptant to delete.
     */
    where: AdoptantWhereUniqueInput
  }

  /**
   * Adoptant deleteMany
   */
  export type AdoptantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adoptants to delete
     */
    where?: AdoptantWhereInput
    /**
     * Limit how many Adoptants to delete.
     */
    limit?: number
  }

  /**
   * Adoptant.users
   */
  export type Adoptant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Adoptant.Adoption
   */
  export type Adoptant$AdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    where?: AdoptionWhereInput
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    cursor?: AdoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoptant without action
   */
  export type AdoptantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
  }


  /**
   * Model Adoption
   */

  export type AggregateAdoption = {
    _count: AdoptionCountAggregateOutputType | null
    _avg: AdoptionAvgAggregateOutputType | null
    _sum: AdoptionSumAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  export type AdoptionAvgAggregateOutputType = {
    id: number | null
    id_animal: number | null
    id_adoptant: number | null
  }

  export type AdoptionSumAggregateOutputType = {
    id: number | null
    id_animal: number | null
    id_adoptant: number | null
  }

  export type AdoptionMinAggregateOutputType = {
    id: number | null
    dateAdoption: Date | null
    typeAdoption: string | null
    id_animal: number | null
    id_adoptant: number | null
  }

  export type AdoptionMaxAggregateOutputType = {
    id: number | null
    dateAdoption: Date | null
    typeAdoption: string | null
    id_animal: number | null
    id_adoptant: number | null
  }

  export type AdoptionCountAggregateOutputType = {
    id: number
    dateAdoption: number
    typeAdoption: number
    id_animal: number
    id_adoptant: number
    _all: number
  }


  export type AdoptionAvgAggregateInputType = {
    id?: true
    id_animal?: true
    id_adoptant?: true
  }

  export type AdoptionSumAggregateInputType = {
    id?: true
    id_animal?: true
    id_adoptant?: true
  }

  export type AdoptionMinAggregateInputType = {
    id?: true
    dateAdoption?: true
    typeAdoption?: true
    id_animal?: true
    id_adoptant?: true
  }

  export type AdoptionMaxAggregateInputType = {
    id?: true
    dateAdoption?: true
    typeAdoption?: true
    id_animal?: true
    id_adoptant?: true
  }

  export type AdoptionCountAggregateInputType = {
    id?: true
    dateAdoption?: true
    typeAdoption?: true
    id_animal?: true
    id_adoptant?: true
    _all?: true
  }

  export type AdoptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adoption to aggregate.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adoptions
    **/
    _count?: true | AdoptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdoptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdoptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdoptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdoptionMaxAggregateInputType
  }

  export type GetAdoptionAggregateType<T extends AdoptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdoption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdoption[P]>
      : GetScalarType<T[P], AggregateAdoption[P]>
  }




  export type AdoptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdoptionWhereInput
    orderBy?: AdoptionOrderByWithAggregationInput | AdoptionOrderByWithAggregationInput[]
    by: AdoptionScalarFieldEnum[] | AdoptionScalarFieldEnum
    having?: AdoptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdoptionCountAggregateInputType | true
    _avg?: AdoptionAvgAggregateInputType
    _sum?: AdoptionSumAggregateInputType
    _min?: AdoptionMinAggregateInputType
    _max?: AdoptionMaxAggregateInputType
  }

  export type AdoptionGroupByOutputType = {
    id: number
    dateAdoption: Date
    typeAdoption: string
    id_animal: number
    id_adoptant: number
    _count: AdoptionCountAggregateOutputType | null
    _avg: AdoptionAvgAggregateOutputType | null
    _sum: AdoptionSumAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  type GetAdoptionGroupByPayload<T extends AdoptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdoptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdoptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
            : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
        }
      >
    >


  export type AdoptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateAdoption?: boolean
    typeAdoption?: boolean
    id_animal?: boolean
    id_adoptant?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    adoptant?: boolean | AdoptantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type AdoptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateAdoption?: boolean
    typeAdoption?: boolean
    id_animal?: boolean
    id_adoptant?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    adoptant?: boolean | AdoptantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type AdoptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateAdoption?: boolean
    typeAdoption?: boolean
    id_animal?: boolean
    id_adoptant?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    adoptant?: boolean | AdoptantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type AdoptionSelectScalar = {
    id?: boolean
    dateAdoption?: boolean
    typeAdoption?: boolean
    id_animal?: boolean
    id_adoptant?: boolean
  }

  export type AdoptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateAdoption" | "typeAdoption" | "id_animal" | "id_adoptant", ExtArgs["result"]["adoption"]>
  export type AdoptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    adoptant?: boolean | AdoptantDefaultArgs<ExtArgs>
  }
  export type AdoptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    adoptant?: boolean | AdoptantDefaultArgs<ExtArgs>
  }
  export type AdoptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    adoptant?: boolean | AdoptantDefaultArgs<ExtArgs>
  }

  export type $AdoptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adoption"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
      adoptant: Prisma.$AdoptantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateAdoption: Date
      typeAdoption: string
      id_animal: number
      id_adoptant: number
    }, ExtArgs["result"]["adoption"]>
    composites: {}
  }

  type AdoptionGetPayload<S extends boolean | null | undefined | AdoptionDefaultArgs> = $Result.GetResult<Prisma.$AdoptionPayload, S>

  type AdoptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdoptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdoptionCountAggregateInputType | true
    }

  export interface AdoptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adoption'], meta: { name: 'Adoption' } }
    /**
     * Find zero or one Adoption that matches the filter.
     * @param {AdoptionFindUniqueArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdoptionFindUniqueArgs>(args: SelectSubset<T, AdoptionFindUniqueArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adoption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdoptionFindUniqueOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdoptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdoptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionFindFirstArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdoptionFindFirstArgs>(args?: SelectSubset<T, AdoptionFindFirstArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionFindFirstOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdoptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdoptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adoptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adoptions
     * const adoptions = await prisma.adoption.findMany()
     * 
     * // Get first 10 Adoptions
     * const adoptions = await prisma.adoption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adoptionWithIdOnly = await prisma.adoption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdoptionFindManyArgs>(args?: SelectSubset<T, AdoptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adoption.
     * @param {AdoptionCreateArgs} args - Arguments to create a Adoption.
     * @example
     * // Create one Adoption
     * const Adoption = await prisma.adoption.create({
     *   data: {
     *     // ... data to create a Adoption
     *   }
     * })
     * 
     */
    create<T extends AdoptionCreateArgs>(args: SelectSubset<T, AdoptionCreateArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adoptions.
     * @param {AdoptionCreateManyArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdoptionCreateManyArgs>(args?: SelectSubset<T, AdoptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adoptions and returns the data saved in the database.
     * @param {AdoptionCreateManyAndReturnArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adoptions and only return the `id`
     * const adoptionWithIdOnly = await prisma.adoption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdoptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdoptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adoption.
     * @param {AdoptionDeleteArgs} args - Arguments to delete one Adoption.
     * @example
     * // Delete one Adoption
     * const Adoption = await prisma.adoption.delete({
     *   where: {
     *     // ... filter to delete one Adoption
     *   }
     * })
     * 
     */
    delete<T extends AdoptionDeleteArgs>(args: SelectSubset<T, AdoptionDeleteArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adoption.
     * @param {AdoptionUpdateArgs} args - Arguments to update one Adoption.
     * @example
     * // Update one Adoption
     * const adoption = await prisma.adoption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdoptionUpdateArgs>(args: SelectSubset<T, AdoptionUpdateArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adoptions.
     * @param {AdoptionDeleteManyArgs} args - Arguments to filter Adoptions to delete.
     * @example
     * // Delete a few Adoptions
     * const { count } = await prisma.adoption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdoptionDeleteManyArgs>(args?: SelectSubset<T, AdoptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adoptions
     * const adoption = await prisma.adoption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdoptionUpdateManyArgs>(args: SelectSubset<T, AdoptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptions and returns the data updated in the database.
     * @param {AdoptionUpdateManyAndReturnArgs} args - Arguments to update many Adoptions.
     * @example
     * // Update many Adoptions
     * const adoption = await prisma.adoption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adoptions and only return the `id`
     * const adoptionWithIdOnly = await prisma.adoption.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdoptionUpdateManyAndReturnArgs>(args: SelectSubset<T, AdoptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adoption.
     * @param {AdoptionUpsertArgs} args - Arguments to update or create a Adoption.
     * @example
     * // Update or create a Adoption
     * const adoption = await prisma.adoption.upsert({
     *   create: {
     *     // ... data to create a Adoption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adoption we want to update
     *   }
     * })
     */
    upsert<T extends AdoptionUpsertArgs>(args: SelectSubset<T, AdoptionUpsertArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionCountArgs} args - Arguments to filter Adoptions to count.
     * @example
     * // Count the number of Adoptions
     * const count = await prisma.adoption.count({
     *   where: {
     *     // ... the filter for the Adoptions we want to count
     *   }
     * })
    **/
    count<T extends AdoptionCountArgs>(
      args?: Subset<T, AdoptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdoptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdoptionAggregateArgs>(args: Subset<T, AdoptionAggregateArgs>): Prisma.PrismaPromise<GetAdoptionAggregateType<T>>

    /**
     * Group by Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionGroupByArgs} args - Group by arguments.
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
      T extends AdoptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdoptionGroupByArgs['orderBy'] }
        : { orderBy?: AdoptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdoptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdoptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adoption model
   */
  readonly fields: AdoptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adoption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdoptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adoptant<T extends AdoptantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdoptantDefaultArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Adoption model
   */
  interface AdoptionFieldRefs {
    readonly id: FieldRef<"Adoption", 'Int'>
    readonly dateAdoption: FieldRef<"Adoption", 'DateTime'>
    readonly typeAdoption: FieldRef<"Adoption", 'String'>
    readonly id_animal: FieldRef<"Adoption", 'Int'>
    readonly id_adoptant: FieldRef<"Adoption", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Adoption findUnique
   */
  export type AdoptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption findUniqueOrThrow
   */
  export type AdoptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption findFirst
   */
  export type AdoptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adoptions.
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoption findFirstOrThrow
   */
  export type AdoptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adoptions.
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoption findMany
   */
  export type AdoptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoptions to fetch.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adoptions.
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoption create
   */
  export type AdoptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Adoption.
     */
    data: XOR<AdoptionCreateInput, AdoptionUncheckedCreateInput>
  }

  /**
   * Adoption createMany
   */
  export type AdoptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adoptions.
     */
    data: AdoptionCreateManyInput | AdoptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adoption createManyAndReturn
   */
  export type AdoptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * The data used to create many Adoptions.
     */
    data: AdoptionCreateManyInput | AdoptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adoption update
   */
  export type AdoptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Adoption.
     */
    data: XOR<AdoptionUpdateInput, AdoptionUncheckedUpdateInput>
    /**
     * Choose, which Adoption to update.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption updateMany
   */
  export type AdoptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adoptions.
     */
    data: XOR<AdoptionUpdateManyMutationInput, AdoptionUncheckedUpdateManyInput>
    /**
     * Filter which Adoptions to update
     */
    where?: AdoptionWhereInput
    /**
     * Limit how many Adoptions to update.
     */
    limit?: number
  }

  /**
   * Adoption updateManyAndReturn
   */
  export type AdoptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * The data used to update Adoptions.
     */
    data: XOR<AdoptionUpdateManyMutationInput, AdoptionUncheckedUpdateManyInput>
    /**
     * Filter which Adoptions to update
     */
    where?: AdoptionWhereInput
    /**
     * Limit how many Adoptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adoption upsert
   */
  export type AdoptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Adoption to update in case it exists.
     */
    where: AdoptionWhereUniqueInput
    /**
     * In case the Adoption found by the `where` argument doesn't exist, create a new Adoption with this data.
     */
    create: XOR<AdoptionCreateInput, AdoptionUncheckedCreateInput>
    /**
     * In case the Adoption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdoptionUpdateInput, AdoptionUncheckedUpdateInput>
  }

  /**
   * Adoption delete
   */
  export type AdoptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter which Adoption to delete.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption deleteMany
   */
  export type AdoptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adoptions to delete
     */
    where?: AdoptionWhereInput
    /**
     * Limit how many Adoptions to delete.
     */
    limit?: number
  }

  /**
   * Adoption without action
   */
  export type AdoptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
  }


  /**
   * Model Animal
   */

  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type AnimalSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type AnimalMinAggregateOutputType = {
    id: number | null
    nom: string | null
    age: number | null
    sexe: string | null
    espece: string | null
    race: string | null
    N_identification: string | null
    description: string | null
    image: string | null
    statut: string | null
    dateArrivee: Date | null
  }

  export type AnimalMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    age: number | null
    sexe: string | null
    espece: string | null
    race: string | null
    N_identification: string | null
    description: string | null
    image: string | null
    statut: string | null
    dateArrivee: Date | null
  }

  export type AnimalCountAggregateOutputType = {
    id: number
    nom: number
    age: number
    sexe: number
    espece: number
    race: number
    N_identification: number
    description: number
    image: number
    statut: number
    dateArrivee: number
    _all: number
  }


  export type AnimalAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type AnimalSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type AnimalMinAggregateInputType = {
    id?: true
    nom?: true
    age?: true
    sexe?: true
    espece?: true
    race?: true
    N_identification?: true
    description?: true
    image?: true
    statut?: true
    dateArrivee?: true
  }

  export type AnimalMaxAggregateInputType = {
    id?: true
    nom?: true
    age?: true
    sexe?: true
    espece?: true
    race?: true
    N_identification?: true
    description?: true
    image?: true
    statut?: true
    dateArrivee?: true
  }

  export type AnimalCountAggregateInputType = {
    id?: true
    nom?: true
    age?: true
    sexe?: true
    espece?: true
    race?: true
    N_identification?: true
    description?: true
    image?: true
    statut?: true
    dateArrivee?: true
    _all?: true
  }

  export type AnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animal to aggregate.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithAggregationInput | AnimalOrderByWithAggregationInput[]
    by: AnimalScalarFieldEnum[] | AnimalScalarFieldEnum
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _avg?: AnimalAvgAggregateInputType
    _sum?: AnimalSumAggregateInputType
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }

  export type AnimalGroupByOutputType = {
    id: number
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type AnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    age?: boolean
    sexe?: boolean
    espece?: boolean
    race?: boolean
    N_identification?: boolean
    description?: boolean
    image?: boolean
    statut?: boolean
    dateArrivee?: boolean
    users?: boolean | Animal$usersArgs<ExtArgs>
    evolution?: boolean | Animal$evolutionArgs<ExtArgs>
    suiviVeterinaire?: boolean | Animal$suiviVeterinaireArgs<ExtArgs>
    parrainage?: boolean | Animal$parrainageArgs<ExtArgs>
    publication?: boolean | Animal$publicationArgs<ExtArgs>
    Adoption?: boolean | Animal$AdoptionArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    age?: boolean
    sexe?: boolean
    espece?: boolean
    race?: boolean
    N_identification?: boolean
    description?: boolean
    image?: boolean
    statut?: boolean
    dateArrivee?: boolean
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    age?: boolean
    sexe?: boolean
    espece?: boolean
    race?: boolean
    N_identification?: boolean
    description?: boolean
    image?: boolean
    statut?: boolean
    dateArrivee?: boolean
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectScalar = {
    id?: boolean
    nom?: boolean
    age?: boolean
    sexe?: boolean
    espece?: boolean
    race?: boolean
    N_identification?: boolean
    description?: boolean
    image?: boolean
    statut?: boolean
    dateArrivee?: boolean
  }

  export type AnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "age" | "sexe" | "espece" | "race" | "N_identification" | "description" | "image" | "statut" | "dateArrivee", ExtArgs["result"]["animal"]>
  export type AnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Animal$usersArgs<ExtArgs>
    evolution?: boolean | Animal$evolutionArgs<ExtArgs>
    suiviVeterinaire?: boolean | Animal$suiviVeterinaireArgs<ExtArgs>
    parrainage?: boolean | Animal$parrainageArgs<ExtArgs>
    publication?: boolean | Animal$publicationArgs<ExtArgs>
    Adoption?: boolean | Animal$AdoptionArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnimalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animal"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
      evolution: Prisma.$EvolutionPayload<ExtArgs>[]
      suiviVeterinaire: Prisma.$SuiviVeterinairePayload<ExtArgs>[]
      parrainage: Prisma.$ParrainagePayload<ExtArgs>[]
      publication: Prisma.$PublicationPayload<ExtArgs>[]
      Adoption: Prisma.$AdoptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      age: number
      sexe: string
      espece: string
      race: string
      N_identification: string
      description: string
      image: string
      statut: string
      dateArrivee: Date
    }, ExtArgs["result"]["animal"]>
    composites: {}
  }

  type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = $Result.GetResult<Prisma.$AnimalPayload, S>

  type AnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface AnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animal'], meta: { name: 'Animal' } }
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalFindUniqueArgs>(args: SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalFindFirstArgs>(args?: SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animalWithIdOnly = await prisma.animal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimalFindManyArgs>(args?: SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
     */
    create<T extends AnimalCreateArgs>(args: SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalCreateManyArgs>(args?: SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Animals and returns the data saved in the database.
     * @param {AnimalCreateManyAndReturnArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimalCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
     */
    delete<T extends AnimalDeleteArgs>(args: SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalUpdateArgs>(args: SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalDeleteManyArgs>(args?: SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalUpdateManyArgs>(args: SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals and returns the data updated in the database.
     * @param {AnimalUpdateManyAndReturnArgs} args - Arguments to update many Animals.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnimalUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
     */
    upsert<T extends AnimalUpsertArgs>(args: SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
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
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animal model
   */
  readonly fields: AnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Animal$usersArgs<ExtArgs> = {}>(args?: Subset<T, Animal$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evolution<T extends Animal$evolutionArgs<ExtArgs> = {}>(args?: Subset<T, Animal$evolutionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suiviVeterinaire<T extends Animal$suiviVeterinaireArgs<ExtArgs> = {}>(args?: Subset<T, Animal$suiviVeterinaireArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parrainage<T extends Animal$parrainageArgs<ExtArgs> = {}>(args?: Subset<T, Animal$parrainageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publication<T extends Animal$publicationArgs<ExtArgs> = {}>(args?: Subset<T, Animal$publicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Adoption<T extends Animal$AdoptionArgs<ExtArgs> = {}>(args?: Subset<T, Animal$AdoptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Animal model
   */
  interface AnimalFieldRefs {
    readonly id: FieldRef<"Animal", 'Int'>
    readonly nom: FieldRef<"Animal", 'String'>
    readonly age: FieldRef<"Animal", 'Int'>
    readonly sexe: FieldRef<"Animal", 'String'>
    readonly espece: FieldRef<"Animal", 'String'>
    readonly race: FieldRef<"Animal", 'String'>
    readonly N_identification: FieldRef<"Animal", 'String'>
    readonly description: FieldRef<"Animal", 'String'>
    readonly image: FieldRef<"Animal", 'String'>
    readonly statut: FieldRef<"Animal", 'String'>
    readonly dateArrivee: FieldRef<"Animal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findUniqueOrThrow
   */
  export type AnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findFirstOrThrow
   */
  export type AnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal create
   */
  export type AnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a Animal.
     */
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }

  /**
   * Animal createMany
   */
  export type AnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal createManyAndReturn
   */
  export type AnimalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal update
   */
  export type AnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a Animal.
     */
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal updateManyAndReturn
   */
  export type AnimalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the Animal to update in case it exists.
     */
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     */
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }

  /**
   * Animal delete
   */
  export type AnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter which Animal to delete.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animal.users
   */
  export type Animal$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Animal.evolution
   */
  export type Animal$evolutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    where?: EvolutionWhereInput
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    cursor?: EvolutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvolutionScalarFieldEnum | EvolutionScalarFieldEnum[]
  }

  /**
   * Animal.suiviVeterinaire
   */
  export type Animal$suiviVeterinaireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    where?: SuiviVeterinaireWhereInput
    orderBy?: SuiviVeterinaireOrderByWithRelationInput | SuiviVeterinaireOrderByWithRelationInput[]
    cursor?: SuiviVeterinaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuiviVeterinaireScalarFieldEnum | SuiviVeterinaireScalarFieldEnum[]
  }

  /**
   * Animal.parrainage
   */
  export type Animal$parrainageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    where?: ParrainageWhereInput
    orderBy?: ParrainageOrderByWithRelationInput | ParrainageOrderByWithRelationInput[]
    cursor?: ParrainageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParrainageScalarFieldEnum | ParrainageScalarFieldEnum[]
  }

  /**
   * Animal.publication
   */
  export type Animal$publicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    cursor?: PublicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Animal.Adoption
   */
  export type Animal$AdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    where?: AdoptionWhereInput
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    cursor?: AdoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Animal without action
   */
  export type AnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
  }


  /**
   * Model Evolution
   */

  export type AggregateEvolution = {
    _count: EvolutionCountAggregateOutputType | null
    _avg: EvolutionAvgAggregateOutputType | null
    _sum: EvolutionSumAggregateOutputType | null
    _min: EvolutionMinAggregateOutputType | null
    _max: EvolutionMaxAggregateOutputType | null
  }

  export type EvolutionAvgAggregateOutputType = {
    id: number | null
    id_animal: number | null
  }

  export type EvolutionSumAggregateOutputType = {
    id: number | null
    id_animal: number | null
  }

  export type EvolutionMinAggregateOutputType = {
    id: number | null
    id_animal: number | null
    date: Date | null
    motif: string | null
    observations: string | null
  }

  export type EvolutionMaxAggregateOutputType = {
    id: number | null
    id_animal: number | null
    date: Date | null
    motif: string | null
    observations: string | null
  }

  export type EvolutionCountAggregateOutputType = {
    id: number
    id_animal: number
    date: number
    motif: number
    observations: number
    _all: number
  }


  export type EvolutionAvgAggregateInputType = {
    id?: true
    id_animal?: true
  }

  export type EvolutionSumAggregateInputType = {
    id?: true
    id_animal?: true
  }

  export type EvolutionMinAggregateInputType = {
    id?: true
    id_animal?: true
    date?: true
    motif?: true
    observations?: true
  }

  export type EvolutionMaxAggregateInputType = {
    id?: true
    id_animal?: true
    date?: true
    motif?: true
    observations?: true
  }

  export type EvolutionCountAggregateInputType = {
    id?: true
    id_animal?: true
    date?: true
    motif?: true
    observations?: true
    _all?: true
  }

  export type EvolutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evolution to aggregate.
     */
    where?: EvolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolutions to fetch.
     */
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evolutions
    **/
    _count?: true | EvolutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvolutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvolutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvolutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvolutionMaxAggregateInputType
  }

  export type GetEvolutionAggregateType<T extends EvolutionAggregateArgs> = {
        [P in keyof T & keyof AggregateEvolution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvolution[P]>
      : GetScalarType<T[P], AggregateEvolution[P]>
  }




  export type EvolutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolutionWhereInput
    orderBy?: EvolutionOrderByWithAggregationInput | EvolutionOrderByWithAggregationInput[]
    by: EvolutionScalarFieldEnum[] | EvolutionScalarFieldEnum
    having?: EvolutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvolutionCountAggregateInputType | true
    _avg?: EvolutionAvgAggregateInputType
    _sum?: EvolutionSumAggregateInputType
    _min?: EvolutionMinAggregateInputType
    _max?: EvolutionMaxAggregateInputType
  }

  export type EvolutionGroupByOutputType = {
    id: number
    id_animal: number
    date: Date
    motif: string
    observations: string
    _count: EvolutionCountAggregateOutputType | null
    _avg: EvolutionAvgAggregateOutputType | null
    _sum: EvolutionSumAggregateOutputType | null
    _min: EvolutionMinAggregateOutputType | null
    _max: EvolutionMaxAggregateOutputType | null
  }

  type GetEvolutionGroupByPayload<T extends EvolutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvolutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvolutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvolutionGroupByOutputType[P]>
            : GetScalarType<T[P], EvolutionGroupByOutputType[P]>
        }
      >
    >


  export type EvolutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    date?: boolean
    motif?: boolean
    observations?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolution"]>

  export type EvolutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    date?: boolean
    motif?: boolean
    observations?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolution"]>

  export type EvolutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    date?: boolean
    motif?: boolean
    observations?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolution"]>

  export type EvolutionSelectScalar = {
    id?: boolean
    id_animal?: boolean
    date?: boolean
    motif?: boolean
    observations?: boolean
  }

  export type EvolutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_animal" | "date" | "motif" | "observations", ExtArgs["result"]["evolution"]>
  export type EvolutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type EvolutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type EvolutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $EvolutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evolution"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_animal: number
      date: Date
      motif: string
      observations: string
    }, ExtArgs["result"]["evolution"]>
    composites: {}
  }

  type EvolutionGetPayload<S extends boolean | null | undefined | EvolutionDefaultArgs> = $Result.GetResult<Prisma.$EvolutionPayload, S>

  type EvolutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvolutionCountAggregateInputType | true
    }

  export interface EvolutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evolution'], meta: { name: 'Evolution' } }
    /**
     * Find zero or one Evolution that matches the filter.
     * @param {EvolutionFindUniqueArgs} args - Arguments to find a Evolution
     * @example
     * // Get one Evolution
     * const evolution = await prisma.evolution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvolutionFindUniqueArgs>(args: SelectSubset<T, EvolutionFindUniqueArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evolution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvolutionFindUniqueOrThrowArgs} args - Arguments to find a Evolution
     * @example
     * // Get one Evolution
     * const evolution = await prisma.evolution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvolutionFindUniqueOrThrowArgs>(args: SelectSubset<T, EvolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evolution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionFindFirstArgs} args - Arguments to find a Evolution
     * @example
     * // Get one Evolution
     * const evolution = await prisma.evolution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvolutionFindFirstArgs>(args?: SelectSubset<T, EvolutionFindFirstArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evolution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionFindFirstOrThrowArgs} args - Arguments to find a Evolution
     * @example
     * // Get one Evolution
     * const evolution = await prisma.evolution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvolutionFindFirstOrThrowArgs>(args?: SelectSubset<T, EvolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evolutions
     * const evolutions = await prisma.evolution.findMany()
     * 
     * // Get first 10 Evolutions
     * const evolutions = await prisma.evolution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evolutionWithIdOnly = await prisma.evolution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvolutionFindManyArgs>(args?: SelectSubset<T, EvolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evolution.
     * @param {EvolutionCreateArgs} args - Arguments to create a Evolution.
     * @example
     * // Create one Evolution
     * const Evolution = await prisma.evolution.create({
     *   data: {
     *     // ... data to create a Evolution
     *   }
     * })
     * 
     */
    create<T extends EvolutionCreateArgs>(args: SelectSubset<T, EvolutionCreateArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evolutions.
     * @param {EvolutionCreateManyArgs} args - Arguments to create many Evolutions.
     * @example
     * // Create many Evolutions
     * const evolution = await prisma.evolution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvolutionCreateManyArgs>(args?: SelectSubset<T, EvolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evolutions and returns the data saved in the database.
     * @param {EvolutionCreateManyAndReturnArgs} args - Arguments to create many Evolutions.
     * @example
     * // Create many Evolutions
     * const evolution = await prisma.evolution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evolutions and only return the `id`
     * const evolutionWithIdOnly = await prisma.evolution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvolutionCreateManyAndReturnArgs>(args?: SelectSubset<T, EvolutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evolution.
     * @param {EvolutionDeleteArgs} args - Arguments to delete one Evolution.
     * @example
     * // Delete one Evolution
     * const Evolution = await prisma.evolution.delete({
     *   where: {
     *     // ... filter to delete one Evolution
     *   }
     * })
     * 
     */
    delete<T extends EvolutionDeleteArgs>(args: SelectSubset<T, EvolutionDeleteArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evolution.
     * @param {EvolutionUpdateArgs} args - Arguments to update one Evolution.
     * @example
     * // Update one Evolution
     * const evolution = await prisma.evolution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvolutionUpdateArgs>(args: SelectSubset<T, EvolutionUpdateArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evolutions.
     * @param {EvolutionDeleteManyArgs} args - Arguments to filter Evolutions to delete.
     * @example
     * // Delete a few Evolutions
     * const { count } = await prisma.evolution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvolutionDeleteManyArgs>(args?: SelectSubset<T, EvolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evolutions
     * const evolution = await prisma.evolution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvolutionUpdateManyArgs>(args: SelectSubset<T, EvolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evolutions and returns the data updated in the database.
     * @param {EvolutionUpdateManyAndReturnArgs} args - Arguments to update many Evolutions.
     * @example
     * // Update many Evolutions
     * const evolution = await prisma.evolution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evolutions and only return the `id`
     * const evolutionWithIdOnly = await prisma.evolution.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvolutionUpdateManyAndReturnArgs>(args: SelectSubset<T, EvolutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evolution.
     * @param {EvolutionUpsertArgs} args - Arguments to update or create a Evolution.
     * @example
     * // Update or create a Evolution
     * const evolution = await prisma.evolution.upsert({
     *   create: {
     *     // ... data to create a Evolution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evolution we want to update
     *   }
     * })
     */
    upsert<T extends EvolutionUpsertArgs>(args: SelectSubset<T, EvolutionUpsertArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionCountArgs} args - Arguments to filter Evolutions to count.
     * @example
     * // Count the number of Evolutions
     * const count = await prisma.evolution.count({
     *   where: {
     *     // ... the filter for the Evolutions we want to count
     *   }
     * })
    **/
    count<T extends EvolutionCountArgs>(
      args?: Subset<T, EvolutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvolutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvolutionAggregateArgs>(args: Subset<T, EvolutionAggregateArgs>): Prisma.PrismaPromise<GetEvolutionAggregateType<T>>

    /**
     * Group by Evolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionGroupByArgs} args - Group by arguments.
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
      T extends EvolutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvolutionGroupByArgs['orderBy'] }
        : { orderBy?: EvolutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evolution model
   */
  readonly fields: EvolutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evolution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvolutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evolution model
   */
  interface EvolutionFieldRefs {
    readonly id: FieldRef<"Evolution", 'Int'>
    readonly id_animal: FieldRef<"Evolution", 'Int'>
    readonly date: FieldRef<"Evolution", 'DateTime'>
    readonly motif: FieldRef<"Evolution", 'String'>
    readonly observations: FieldRef<"Evolution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Evolution findUnique
   */
  export type EvolutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolution to fetch.
     */
    where: EvolutionWhereUniqueInput
  }

  /**
   * Evolution findUniqueOrThrow
   */
  export type EvolutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolution to fetch.
     */
    where: EvolutionWhereUniqueInput
  }

  /**
   * Evolution findFirst
   */
  export type EvolutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolution to fetch.
     */
    where?: EvolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolutions to fetch.
     */
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evolutions.
     */
    cursor?: EvolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evolutions.
     */
    distinct?: EvolutionScalarFieldEnum | EvolutionScalarFieldEnum[]
  }

  /**
   * Evolution findFirstOrThrow
   */
  export type EvolutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolution to fetch.
     */
    where?: EvolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolutions to fetch.
     */
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evolutions.
     */
    cursor?: EvolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evolutions.
     */
    distinct?: EvolutionScalarFieldEnum | EvolutionScalarFieldEnum[]
  }

  /**
   * Evolution findMany
   */
  export type EvolutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolutions to fetch.
     */
    where?: EvolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolutions to fetch.
     */
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evolutions.
     */
    cursor?: EvolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolutions.
     */
    skip?: number
    distinct?: EvolutionScalarFieldEnum | EvolutionScalarFieldEnum[]
  }

  /**
   * Evolution create
   */
  export type EvolutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Evolution.
     */
    data: XOR<EvolutionCreateInput, EvolutionUncheckedCreateInput>
  }

  /**
   * Evolution createMany
   */
  export type EvolutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evolutions.
     */
    data: EvolutionCreateManyInput | EvolutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evolution createManyAndReturn
   */
  export type EvolutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * The data used to create many Evolutions.
     */
    data: EvolutionCreateManyInput | EvolutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evolution update
   */
  export type EvolutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Evolution.
     */
    data: XOR<EvolutionUpdateInput, EvolutionUncheckedUpdateInput>
    /**
     * Choose, which Evolution to update.
     */
    where: EvolutionWhereUniqueInput
  }

  /**
   * Evolution updateMany
   */
  export type EvolutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evolutions.
     */
    data: XOR<EvolutionUpdateManyMutationInput, EvolutionUncheckedUpdateManyInput>
    /**
     * Filter which Evolutions to update
     */
    where?: EvolutionWhereInput
    /**
     * Limit how many Evolutions to update.
     */
    limit?: number
  }

  /**
   * Evolution updateManyAndReturn
   */
  export type EvolutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * The data used to update Evolutions.
     */
    data: XOR<EvolutionUpdateManyMutationInput, EvolutionUncheckedUpdateManyInput>
    /**
     * Filter which Evolutions to update
     */
    where?: EvolutionWhereInput
    /**
     * Limit how many Evolutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evolution upsert
   */
  export type EvolutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Evolution to update in case it exists.
     */
    where: EvolutionWhereUniqueInput
    /**
     * In case the Evolution found by the `where` argument doesn't exist, create a new Evolution with this data.
     */
    create: XOR<EvolutionCreateInput, EvolutionUncheckedCreateInput>
    /**
     * In case the Evolution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvolutionUpdateInput, EvolutionUncheckedUpdateInput>
  }

  /**
   * Evolution delete
   */
  export type EvolutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter which Evolution to delete.
     */
    where: EvolutionWhereUniqueInput
  }

  /**
   * Evolution deleteMany
   */
  export type EvolutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evolutions to delete
     */
    where?: EvolutionWhereInput
    /**
     * Limit how many Evolutions to delete.
     */
    limit?: number
  }

  /**
   * Evolution without action
   */
  export type EvolutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
  }


  /**
   * Model SuiviVeterinaire
   */

  export type AggregateSuiviVeterinaire = {
    _count: SuiviVeterinaireCountAggregateOutputType | null
    _avg: SuiviVeterinaireAvgAggregateOutputType | null
    _sum: SuiviVeterinaireSumAggregateOutputType | null
    _min: SuiviVeterinaireMinAggregateOutputType | null
    _max: SuiviVeterinaireMaxAggregateOutputType | null
  }

  export type SuiviVeterinaireAvgAggregateOutputType = {
    id: number | null
    id_animal: number | null
  }

  export type SuiviVeterinaireSumAggregateOutputType = {
    id: number | null
    id_animal: number | null
  }

  export type SuiviVeterinaireMinAggregateOutputType = {
    id: number | null
    id_animal: number | null
    dateVisite: Date | null
    motif: string | null
    observations: string | null
    traitement: string | null
    validationAdoption: string | null
  }

  export type SuiviVeterinaireMaxAggregateOutputType = {
    id: number | null
    id_animal: number | null
    dateVisite: Date | null
    motif: string | null
    observations: string | null
    traitement: string | null
    validationAdoption: string | null
  }

  export type SuiviVeterinaireCountAggregateOutputType = {
    id: number
    id_animal: number
    dateVisite: number
    motif: number
    observations: number
    traitement: number
    validationAdoption: number
    _all: number
  }


  export type SuiviVeterinaireAvgAggregateInputType = {
    id?: true
    id_animal?: true
  }

  export type SuiviVeterinaireSumAggregateInputType = {
    id?: true
    id_animal?: true
  }

  export type SuiviVeterinaireMinAggregateInputType = {
    id?: true
    id_animal?: true
    dateVisite?: true
    motif?: true
    observations?: true
    traitement?: true
    validationAdoption?: true
  }

  export type SuiviVeterinaireMaxAggregateInputType = {
    id?: true
    id_animal?: true
    dateVisite?: true
    motif?: true
    observations?: true
    traitement?: true
    validationAdoption?: true
  }

  export type SuiviVeterinaireCountAggregateInputType = {
    id?: true
    id_animal?: true
    dateVisite?: true
    motif?: true
    observations?: true
    traitement?: true
    validationAdoption?: true
    _all?: true
  }

  export type SuiviVeterinaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuiviVeterinaire to aggregate.
     */
    where?: SuiviVeterinaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuiviVeterinaires to fetch.
     */
    orderBy?: SuiviVeterinaireOrderByWithRelationInput | SuiviVeterinaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuiviVeterinaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuiviVeterinaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuiviVeterinaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuiviVeterinaires
    **/
    _count?: true | SuiviVeterinaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuiviVeterinaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuiviVeterinaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuiviVeterinaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuiviVeterinaireMaxAggregateInputType
  }

  export type GetSuiviVeterinaireAggregateType<T extends SuiviVeterinaireAggregateArgs> = {
        [P in keyof T & keyof AggregateSuiviVeterinaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuiviVeterinaire[P]>
      : GetScalarType<T[P], AggregateSuiviVeterinaire[P]>
  }




  export type SuiviVeterinaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuiviVeterinaireWhereInput
    orderBy?: SuiviVeterinaireOrderByWithAggregationInput | SuiviVeterinaireOrderByWithAggregationInput[]
    by: SuiviVeterinaireScalarFieldEnum[] | SuiviVeterinaireScalarFieldEnum
    having?: SuiviVeterinaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuiviVeterinaireCountAggregateInputType | true
    _avg?: SuiviVeterinaireAvgAggregateInputType
    _sum?: SuiviVeterinaireSumAggregateInputType
    _min?: SuiviVeterinaireMinAggregateInputType
    _max?: SuiviVeterinaireMaxAggregateInputType
  }

  export type SuiviVeterinaireGroupByOutputType = {
    id: number
    id_animal: number
    dateVisite: Date
    motif: string
    observations: string
    traitement: string
    validationAdoption: string
    _count: SuiviVeterinaireCountAggregateOutputType | null
    _avg: SuiviVeterinaireAvgAggregateOutputType | null
    _sum: SuiviVeterinaireSumAggregateOutputType | null
    _min: SuiviVeterinaireMinAggregateOutputType | null
    _max: SuiviVeterinaireMaxAggregateOutputType | null
  }

  type GetSuiviVeterinaireGroupByPayload<T extends SuiviVeterinaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuiviVeterinaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuiviVeterinaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuiviVeterinaireGroupByOutputType[P]>
            : GetScalarType<T[P], SuiviVeterinaireGroupByOutputType[P]>
        }
      >
    >


  export type SuiviVeterinaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    dateVisite?: boolean
    motif?: boolean
    observations?: boolean
    traitement?: boolean
    validationAdoption?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suiviVeterinaire"]>

  export type SuiviVeterinaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    dateVisite?: boolean
    motif?: boolean
    observations?: boolean
    traitement?: boolean
    validationAdoption?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suiviVeterinaire"]>

  export type SuiviVeterinaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    dateVisite?: boolean
    motif?: boolean
    observations?: boolean
    traitement?: boolean
    validationAdoption?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suiviVeterinaire"]>

  export type SuiviVeterinaireSelectScalar = {
    id?: boolean
    id_animal?: boolean
    dateVisite?: boolean
    motif?: boolean
    observations?: boolean
    traitement?: boolean
    validationAdoption?: boolean
  }

  export type SuiviVeterinaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_animal" | "dateVisite" | "motif" | "observations" | "traitement" | "validationAdoption", ExtArgs["result"]["suiviVeterinaire"]>
  export type SuiviVeterinaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type SuiviVeterinaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type SuiviVeterinaireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $SuiviVeterinairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuiviVeterinaire"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_animal: number
      dateVisite: Date
      motif: string
      observations: string
      traitement: string
      validationAdoption: string
    }, ExtArgs["result"]["suiviVeterinaire"]>
    composites: {}
  }

  type SuiviVeterinaireGetPayload<S extends boolean | null | undefined | SuiviVeterinaireDefaultArgs> = $Result.GetResult<Prisma.$SuiviVeterinairePayload, S>

  type SuiviVeterinaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuiviVeterinaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuiviVeterinaireCountAggregateInputType | true
    }

  export interface SuiviVeterinaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuiviVeterinaire'], meta: { name: 'SuiviVeterinaire' } }
    /**
     * Find zero or one SuiviVeterinaire that matches the filter.
     * @param {SuiviVeterinaireFindUniqueArgs} args - Arguments to find a SuiviVeterinaire
     * @example
     * // Get one SuiviVeterinaire
     * const suiviVeterinaire = await prisma.suiviVeterinaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuiviVeterinaireFindUniqueArgs>(args: SelectSubset<T, SuiviVeterinaireFindUniqueArgs<ExtArgs>>): Prisma__SuiviVeterinaireClient<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuiviVeterinaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuiviVeterinaireFindUniqueOrThrowArgs} args - Arguments to find a SuiviVeterinaire
     * @example
     * // Get one SuiviVeterinaire
     * const suiviVeterinaire = await prisma.suiviVeterinaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuiviVeterinaireFindUniqueOrThrowArgs>(args: SelectSubset<T, SuiviVeterinaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuiviVeterinaireClient<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuiviVeterinaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiviVeterinaireFindFirstArgs} args - Arguments to find a SuiviVeterinaire
     * @example
     * // Get one SuiviVeterinaire
     * const suiviVeterinaire = await prisma.suiviVeterinaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuiviVeterinaireFindFirstArgs>(args?: SelectSubset<T, SuiviVeterinaireFindFirstArgs<ExtArgs>>): Prisma__SuiviVeterinaireClient<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuiviVeterinaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiviVeterinaireFindFirstOrThrowArgs} args - Arguments to find a SuiviVeterinaire
     * @example
     * // Get one SuiviVeterinaire
     * const suiviVeterinaire = await prisma.suiviVeterinaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuiviVeterinaireFindFirstOrThrowArgs>(args?: SelectSubset<T, SuiviVeterinaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuiviVeterinaireClient<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuiviVeterinaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiviVeterinaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuiviVeterinaires
     * const suiviVeterinaires = await prisma.suiviVeterinaire.findMany()
     * 
     * // Get first 10 SuiviVeterinaires
     * const suiviVeterinaires = await prisma.suiviVeterinaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suiviVeterinaireWithIdOnly = await prisma.suiviVeterinaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuiviVeterinaireFindManyArgs>(args?: SelectSubset<T, SuiviVeterinaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuiviVeterinaire.
     * @param {SuiviVeterinaireCreateArgs} args - Arguments to create a SuiviVeterinaire.
     * @example
     * // Create one SuiviVeterinaire
     * const SuiviVeterinaire = await prisma.suiviVeterinaire.create({
     *   data: {
     *     // ... data to create a SuiviVeterinaire
     *   }
     * })
     * 
     */
    create<T extends SuiviVeterinaireCreateArgs>(args: SelectSubset<T, SuiviVeterinaireCreateArgs<ExtArgs>>): Prisma__SuiviVeterinaireClient<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuiviVeterinaires.
     * @param {SuiviVeterinaireCreateManyArgs} args - Arguments to create many SuiviVeterinaires.
     * @example
     * // Create many SuiviVeterinaires
     * const suiviVeterinaire = await prisma.suiviVeterinaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuiviVeterinaireCreateManyArgs>(args?: SelectSubset<T, SuiviVeterinaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuiviVeterinaires and returns the data saved in the database.
     * @param {SuiviVeterinaireCreateManyAndReturnArgs} args - Arguments to create many SuiviVeterinaires.
     * @example
     * // Create many SuiviVeterinaires
     * const suiviVeterinaire = await prisma.suiviVeterinaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuiviVeterinaires and only return the `id`
     * const suiviVeterinaireWithIdOnly = await prisma.suiviVeterinaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuiviVeterinaireCreateManyAndReturnArgs>(args?: SelectSubset<T, SuiviVeterinaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuiviVeterinaire.
     * @param {SuiviVeterinaireDeleteArgs} args - Arguments to delete one SuiviVeterinaire.
     * @example
     * // Delete one SuiviVeterinaire
     * const SuiviVeterinaire = await prisma.suiviVeterinaire.delete({
     *   where: {
     *     // ... filter to delete one SuiviVeterinaire
     *   }
     * })
     * 
     */
    delete<T extends SuiviVeterinaireDeleteArgs>(args: SelectSubset<T, SuiviVeterinaireDeleteArgs<ExtArgs>>): Prisma__SuiviVeterinaireClient<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuiviVeterinaire.
     * @param {SuiviVeterinaireUpdateArgs} args - Arguments to update one SuiviVeterinaire.
     * @example
     * // Update one SuiviVeterinaire
     * const suiviVeterinaire = await prisma.suiviVeterinaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuiviVeterinaireUpdateArgs>(args: SelectSubset<T, SuiviVeterinaireUpdateArgs<ExtArgs>>): Prisma__SuiviVeterinaireClient<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuiviVeterinaires.
     * @param {SuiviVeterinaireDeleteManyArgs} args - Arguments to filter SuiviVeterinaires to delete.
     * @example
     * // Delete a few SuiviVeterinaires
     * const { count } = await prisma.suiviVeterinaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuiviVeterinaireDeleteManyArgs>(args?: SelectSubset<T, SuiviVeterinaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuiviVeterinaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiviVeterinaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuiviVeterinaires
     * const suiviVeterinaire = await prisma.suiviVeterinaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuiviVeterinaireUpdateManyArgs>(args: SelectSubset<T, SuiviVeterinaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuiviVeterinaires and returns the data updated in the database.
     * @param {SuiviVeterinaireUpdateManyAndReturnArgs} args - Arguments to update many SuiviVeterinaires.
     * @example
     * // Update many SuiviVeterinaires
     * const suiviVeterinaire = await prisma.suiviVeterinaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuiviVeterinaires and only return the `id`
     * const suiviVeterinaireWithIdOnly = await prisma.suiviVeterinaire.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuiviVeterinaireUpdateManyAndReturnArgs>(args: SelectSubset<T, SuiviVeterinaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuiviVeterinaire.
     * @param {SuiviVeterinaireUpsertArgs} args - Arguments to update or create a SuiviVeterinaire.
     * @example
     * // Update or create a SuiviVeterinaire
     * const suiviVeterinaire = await prisma.suiviVeterinaire.upsert({
     *   create: {
     *     // ... data to create a SuiviVeterinaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuiviVeterinaire we want to update
     *   }
     * })
     */
    upsert<T extends SuiviVeterinaireUpsertArgs>(args: SelectSubset<T, SuiviVeterinaireUpsertArgs<ExtArgs>>): Prisma__SuiviVeterinaireClient<$Result.GetResult<Prisma.$SuiviVeterinairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuiviVeterinaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiviVeterinaireCountArgs} args - Arguments to filter SuiviVeterinaires to count.
     * @example
     * // Count the number of SuiviVeterinaires
     * const count = await prisma.suiviVeterinaire.count({
     *   where: {
     *     // ... the filter for the SuiviVeterinaires we want to count
     *   }
     * })
    **/
    count<T extends SuiviVeterinaireCountArgs>(
      args?: Subset<T, SuiviVeterinaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuiviVeterinaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuiviVeterinaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiviVeterinaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuiviVeterinaireAggregateArgs>(args: Subset<T, SuiviVeterinaireAggregateArgs>): Prisma.PrismaPromise<GetSuiviVeterinaireAggregateType<T>>

    /**
     * Group by SuiviVeterinaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiviVeterinaireGroupByArgs} args - Group by arguments.
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
      T extends SuiviVeterinaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuiviVeterinaireGroupByArgs['orderBy'] }
        : { orderBy?: SuiviVeterinaireGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuiviVeterinaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuiviVeterinaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuiviVeterinaire model
   */
  readonly fields: SuiviVeterinaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuiviVeterinaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuiviVeterinaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SuiviVeterinaire model
   */
  interface SuiviVeterinaireFieldRefs {
    readonly id: FieldRef<"SuiviVeterinaire", 'Int'>
    readonly id_animal: FieldRef<"SuiviVeterinaire", 'Int'>
    readonly dateVisite: FieldRef<"SuiviVeterinaire", 'DateTime'>
    readonly motif: FieldRef<"SuiviVeterinaire", 'String'>
    readonly observations: FieldRef<"SuiviVeterinaire", 'String'>
    readonly traitement: FieldRef<"SuiviVeterinaire", 'String'>
    readonly validationAdoption: FieldRef<"SuiviVeterinaire", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SuiviVeterinaire findUnique
   */
  export type SuiviVeterinaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    /**
     * Filter, which SuiviVeterinaire to fetch.
     */
    where: SuiviVeterinaireWhereUniqueInput
  }

  /**
   * SuiviVeterinaire findUniqueOrThrow
   */
  export type SuiviVeterinaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    /**
     * Filter, which SuiviVeterinaire to fetch.
     */
    where: SuiviVeterinaireWhereUniqueInput
  }

  /**
   * SuiviVeterinaire findFirst
   */
  export type SuiviVeterinaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    /**
     * Filter, which SuiviVeterinaire to fetch.
     */
    where?: SuiviVeterinaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuiviVeterinaires to fetch.
     */
    orderBy?: SuiviVeterinaireOrderByWithRelationInput | SuiviVeterinaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuiviVeterinaires.
     */
    cursor?: SuiviVeterinaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuiviVeterinaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuiviVeterinaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuiviVeterinaires.
     */
    distinct?: SuiviVeterinaireScalarFieldEnum | SuiviVeterinaireScalarFieldEnum[]
  }

  /**
   * SuiviVeterinaire findFirstOrThrow
   */
  export type SuiviVeterinaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    /**
     * Filter, which SuiviVeterinaire to fetch.
     */
    where?: SuiviVeterinaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuiviVeterinaires to fetch.
     */
    orderBy?: SuiviVeterinaireOrderByWithRelationInput | SuiviVeterinaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuiviVeterinaires.
     */
    cursor?: SuiviVeterinaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuiviVeterinaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuiviVeterinaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuiviVeterinaires.
     */
    distinct?: SuiviVeterinaireScalarFieldEnum | SuiviVeterinaireScalarFieldEnum[]
  }

  /**
   * SuiviVeterinaire findMany
   */
  export type SuiviVeterinaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    /**
     * Filter, which SuiviVeterinaires to fetch.
     */
    where?: SuiviVeterinaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuiviVeterinaires to fetch.
     */
    orderBy?: SuiviVeterinaireOrderByWithRelationInput | SuiviVeterinaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuiviVeterinaires.
     */
    cursor?: SuiviVeterinaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuiviVeterinaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuiviVeterinaires.
     */
    skip?: number
    distinct?: SuiviVeterinaireScalarFieldEnum | SuiviVeterinaireScalarFieldEnum[]
  }

  /**
   * SuiviVeterinaire create
   */
  export type SuiviVeterinaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    /**
     * The data needed to create a SuiviVeterinaire.
     */
    data: XOR<SuiviVeterinaireCreateInput, SuiviVeterinaireUncheckedCreateInput>
  }

  /**
   * SuiviVeterinaire createMany
   */
  export type SuiviVeterinaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuiviVeterinaires.
     */
    data: SuiviVeterinaireCreateManyInput | SuiviVeterinaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuiviVeterinaire createManyAndReturn
   */
  export type SuiviVeterinaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * The data used to create many SuiviVeterinaires.
     */
    data: SuiviVeterinaireCreateManyInput | SuiviVeterinaireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuiviVeterinaire update
   */
  export type SuiviVeterinaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    /**
     * The data needed to update a SuiviVeterinaire.
     */
    data: XOR<SuiviVeterinaireUpdateInput, SuiviVeterinaireUncheckedUpdateInput>
    /**
     * Choose, which SuiviVeterinaire to update.
     */
    where: SuiviVeterinaireWhereUniqueInput
  }

  /**
   * SuiviVeterinaire updateMany
   */
  export type SuiviVeterinaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuiviVeterinaires.
     */
    data: XOR<SuiviVeterinaireUpdateManyMutationInput, SuiviVeterinaireUncheckedUpdateManyInput>
    /**
     * Filter which SuiviVeterinaires to update
     */
    where?: SuiviVeterinaireWhereInput
    /**
     * Limit how many SuiviVeterinaires to update.
     */
    limit?: number
  }

  /**
   * SuiviVeterinaire updateManyAndReturn
   */
  export type SuiviVeterinaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * The data used to update SuiviVeterinaires.
     */
    data: XOR<SuiviVeterinaireUpdateManyMutationInput, SuiviVeterinaireUncheckedUpdateManyInput>
    /**
     * Filter which SuiviVeterinaires to update
     */
    where?: SuiviVeterinaireWhereInput
    /**
     * Limit how many SuiviVeterinaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuiviVeterinaire upsert
   */
  export type SuiviVeterinaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    /**
     * The filter to search for the SuiviVeterinaire to update in case it exists.
     */
    where: SuiviVeterinaireWhereUniqueInput
    /**
     * In case the SuiviVeterinaire found by the `where` argument doesn't exist, create a new SuiviVeterinaire with this data.
     */
    create: XOR<SuiviVeterinaireCreateInput, SuiviVeterinaireUncheckedCreateInput>
    /**
     * In case the SuiviVeterinaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuiviVeterinaireUpdateInput, SuiviVeterinaireUncheckedUpdateInput>
  }

  /**
   * SuiviVeterinaire delete
   */
  export type SuiviVeterinaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
    /**
     * Filter which SuiviVeterinaire to delete.
     */
    where: SuiviVeterinaireWhereUniqueInput
  }

  /**
   * SuiviVeterinaire deleteMany
   */
  export type SuiviVeterinaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuiviVeterinaires to delete
     */
    where?: SuiviVeterinaireWhereInput
    /**
     * Limit how many SuiviVeterinaires to delete.
     */
    limit?: number
  }

  /**
   * SuiviVeterinaire without action
   */
  export type SuiviVeterinaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuiviVeterinaire
     */
    select?: SuiviVeterinaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuiviVeterinaire
     */
    omit?: SuiviVeterinaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuiviVeterinaireInclude<ExtArgs> | null
  }


  /**
   * Model Parrainage
   */

  export type AggregateParrainage = {
    _count: ParrainageCountAggregateOutputType | null
    _avg: ParrainageAvgAggregateOutputType | null
    _sum: ParrainageSumAggregateOutputType | null
    _min: ParrainageMinAggregateOutputType | null
    _max: ParrainageMaxAggregateOutputType | null
  }

  export type ParrainageAvgAggregateOutputType = {
    id: number | null
    id_animal: number | null
  }

  export type ParrainageSumAggregateOutputType = {
    id: number | null
    id_animal: number | null
  }

  export type ParrainageMinAggregateOutputType = {
    id: number | null
    id_animal: number | null
    dateDebutParrainage: Date | null
    description: string | null
    dateFinParrainage: Date | null
  }

  export type ParrainageMaxAggregateOutputType = {
    id: number | null
    id_animal: number | null
    dateDebutParrainage: Date | null
    description: string | null
    dateFinParrainage: Date | null
  }

  export type ParrainageCountAggregateOutputType = {
    id: number
    id_animal: number
    dateDebutParrainage: number
    description: number
    dateFinParrainage: number
    _all: number
  }


  export type ParrainageAvgAggregateInputType = {
    id?: true
    id_animal?: true
  }

  export type ParrainageSumAggregateInputType = {
    id?: true
    id_animal?: true
  }

  export type ParrainageMinAggregateInputType = {
    id?: true
    id_animal?: true
    dateDebutParrainage?: true
    description?: true
    dateFinParrainage?: true
  }

  export type ParrainageMaxAggregateInputType = {
    id?: true
    id_animal?: true
    dateDebutParrainage?: true
    description?: true
    dateFinParrainage?: true
  }

  export type ParrainageCountAggregateInputType = {
    id?: true
    id_animal?: true
    dateDebutParrainage?: true
    description?: true
    dateFinParrainage?: true
    _all?: true
  }

  export type ParrainageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parrainage to aggregate.
     */
    where?: ParrainageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parrainages to fetch.
     */
    orderBy?: ParrainageOrderByWithRelationInput | ParrainageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParrainageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parrainages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parrainages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parrainages
    **/
    _count?: true | ParrainageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParrainageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParrainageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParrainageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParrainageMaxAggregateInputType
  }

  export type GetParrainageAggregateType<T extends ParrainageAggregateArgs> = {
        [P in keyof T & keyof AggregateParrainage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParrainage[P]>
      : GetScalarType<T[P], AggregateParrainage[P]>
  }




  export type ParrainageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParrainageWhereInput
    orderBy?: ParrainageOrderByWithAggregationInput | ParrainageOrderByWithAggregationInput[]
    by: ParrainageScalarFieldEnum[] | ParrainageScalarFieldEnum
    having?: ParrainageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParrainageCountAggregateInputType | true
    _avg?: ParrainageAvgAggregateInputType
    _sum?: ParrainageSumAggregateInputType
    _min?: ParrainageMinAggregateInputType
    _max?: ParrainageMaxAggregateInputType
  }

  export type ParrainageGroupByOutputType = {
    id: number
    id_animal: number
    dateDebutParrainage: Date
    description: string
    dateFinParrainage: Date | null
    _count: ParrainageCountAggregateOutputType | null
    _avg: ParrainageAvgAggregateOutputType | null
    _sum: ParrainageSumAggregateOutputType | null
    _min: ParrainageMinAggregateOutputType | null
    _max: ParrainageMaxAggregateOutputType | null
  }

  type GetParrainageGroupByPayload<T extends ParrainageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParrainageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParrainageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParrainageGroupByOutputType[P]>
            : GetScalarType<T[P], ParrainageGroupByOutputType[P]>
        }
      >
    >


  export type ParrainageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    dateDebutParrainage?: boolean
    description?: boolean
    dateFinParrainage?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    users?: boolean | Parrainage$usersArgs<ExtArgs>
    _count?: boolean | ParrainageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parrainage"]>

  export type ParrainageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    dateDebutParrainage?: boolean
    description?: boolean
    dateFinParrainage?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parrainage"]>

  export type ParrainageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    dateDebutParrainage?: boolean
    description?: boolean
    dateFinParrainage?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parrainage"]>

  export type ParrainageSelectScalar = {
    id?: boolean
    id_animal?: boolean
    dateDebutParrainage?: boolean
    description?: boolean
    dateFinParrainage?: boolean
  }

  export type ParrainageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_animal" | "dateDebutParrainage" | "description" | "dateFinParrainage", ExtArgs["result"]["parrainage"]>
  export type ParrainageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    users?: boolean | Parrainage$usersArgs<ExtArgs>
    _count?: boolean | ParrainageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParrainageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type ParrainageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $ParrainagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parrainage"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_animal: number
      dateDebutParrainage: Date
      description: string
      dateFinParrainage: Date | null
    }, ExtArgs["result"]["parrainage"]>
    composites: {}
  }

  type ParrainageGetPayload<S extends boolean | null | undefined | ParrainageDefaultArgs> = $Result.GetResult<Prisma.$ParrainagePayload, S>

  type ParrainageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParrainageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParrainageCountAggregateInputType | true
    }

  export interface ParrainageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parrainage'], meta: { name: 'Parrainage' } }
    /**
     * Find zero or one Parrainage that matches the filter.
     * @param {ParrainageFindUniqueArgs} args - Arguments to find a Parrainage
     * @example
     * // Get one Parrainage
     * const parrainage = await prisma.parrainage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParrainageFindUniqueArgs>(args: SelectSubset<T, ParrainageFindUniqueArgs<ExtArgs>>): Prisma__ParrainageClient<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parrainage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParrainageFindUniqueOrThrowArgs} args - Arguments to find a Parrainage
     * @example
     * // Get one Parrainage
     * const parrainage = await prisma.parrainage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParrainageFindUniqueOrThrowArgs>(args: SelectSubset<T, ParrainageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParrainageClient<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parrainage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParrainageFindFirstArgs} args - Arguments to find a Parrainage
     * @example
     * // Get one Parrainage
     * const parrainage = await prisma.parrainage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParrainageFindFirstArgs>(args?: SelectSubset<T, ParrainageFindFirstArgs<ExtArgs>>): Prisma__ParrainageClient<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parrainage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParrainageFindFirstOrThrowArgs} args - Arguments to find a Parrainage
     * @example
     * // Get one Parrainage
     * const parrainage = await prisma.parrainage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParrainageFindFirstOrThrowArgs>(args?: SelectSubset<T, ParrainageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParrainageClient<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parrainages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParrainageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parrainages
     * const parrainages = await prisma.parrainage.findMany()
     * 
     * // Get first 10 Parrainages
     * const parrainages = await prisma.parrainage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parrainageWithIdOnly = await prisma.parrainage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParrainageFindManyArgs>(args?: SelectSubset<T, ParrainageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parrainage.
     * @param {ParrainageCreateArgs} args - Arguments to create a Parrainage.
     * @example
     * // Create one Parrainage
     * const Parrainage = await prisma.parrainage.create({
     *   data: {
     *     // ... data to create a Parrainage
     *   }
     * })
     * 
     */
    create<T extends ParrainageCreateArgs>(args: SelectSubset<T, ParrainageCreateArgs<ExtArgs>>): Prisma__ParrainageClient<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parrainages.
     * @param {ParrainageCreateManyArgs} args - Arguments to create many Parrainages.
     * @example
     * // Create many Parrainages
     * const parrainage = await prisma.parrainage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParrainageCreateManyArgs>(args?: SelectSubset<T, ParrainageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parrainages and returns the data saved in the database.
     * @param {ParrainageCreateManyAndReturnArgs} args - Arguments to create many Parrainages.
     * @example
     * // Create many Parrainages
     * const parrainage = await prisma.parrainage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parrainages and only return the `id`
     * const parrainageWithIdOnly = await prisma.parrainage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParrainageCreateManyAndReturnArgs>(args?: SelectSubset<T, ParrainageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parrainage.
     * @param {ParrainageDeleteArgs} args - Arguments to delete one Parrainage.
     * @example
     * // Delete one Parrainage
     * const Parrainage = await prisma.parrainage.delete({
     *   where: {
     *     // ... filter to delete one Parrainage
     *   }
     * })
     * 
     */
    delete<T extends ParrainageDeleteArgs>(args: SelectSubset<T, ParrainageDeleteArgs<ExtArgs>>): Prisma__ParrainageClient<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parrainage.
     * @param {ParrainageUpdateArgs} args - Arguments to update one Parrainage.
     * @example
     * // Update one Parrainage
     * const parrainage = await prisma.parrainage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParrainageUpdateArgs>(args: SelectSubset<T, ParrainageUpdateArgs<ExtArgs>>): Prisma__ParrainageClient<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parrainages.
     * @param {ParrainageDeleteManyArgs} args - Arguments to filter Parrainages to delete.
     * @example
     * // Delete a few Parrainages
     * const { count } = await prisma.parrainage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParrainageDeleteManyArgs>(args?: SelectSubset<T, ParrainageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parrainages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParrainageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parrainages
     * const parrainage = await prisma.parrainage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParrainageUpdateManyArgs>(args: SelectSubset<T, ParrainageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parrainages and returns the data updated in the database.
     * @param {ParrainageUpdateManyAndReturnArgs} args - Arguments to update many Parrainages.
     * @example
     * // Update many Parrainages
     * const parrainage = await prisma.parrainage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parrainages and only return the `id`
     * const parrainageWithIdOnly = await prisma.parrainage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParrainageUpdateManyAndReturnArgs>(args: SelectSubset<T, ParrainageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parrainage.
     * @param {ParrainageUpsertArgs} args - Arguments to update or create a Parrainage.
     * @example
     * // Update or create a Parrainage
     * const parrainage = await prisma.parrainage.upsert({
     *   create: {
     *     // ... data to create a Parrainage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parrainage we want to update
     *   }
     * })
     */
    upsert<T extends ParrainageUpsertArgs>(args: SelectSubset<T, ParrainageUpsertArgs<ExtArgs>>): Prisma__ParrainageClient<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parrainages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParrainageCountArgs} args - Arguments to filter Parrainages to count.
     * @example
     * // Count the number of Parrainages
     * const count = await prisma.parrainage.count({
     *   where: {
     *     // ... the filter for the Parrainages we want to count
     *   }
     * })
    **/
    count<T extends ParrainageCountArgs>(
      args?: Subset<T, ParrainageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParrainageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parrainage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParrainageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParrainageAggregateArgs>(args: Subset<T, ParrainageAggregateArgs>): Prisma.PrismaPromise<GetParrainageAggregateType<T>>

    /**
     * Group by Parrainage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParrainageGroupByArgs} args - Group by arguments.
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
      T extends ParrainageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParrainageGroupByArgs['orderBy'] }
        : { orderBy?: ParrainageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParrainageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParrainageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parrainage model
   */
  readonly fields: ParrainageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parrainage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParrainageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Parrainage$usersArgs<ExtArgs> = {}>(args?: Subset<T, Parrainage$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parrainage model
   */
  interface ParrainageFieldRefs {
    readonly id: FieldRef<"Parrainage", 'Int'>
    readonly id_animal: FieldRef<"Parrainage", 'Int'>
    readonly dateDebutParrainage: FieldRef<"Parrainage", 'DateTime'>
    readonly description: FieldRef<"Parrainage", 'String'>
    readonly dateFinParrainage: FieldRef<"Parrainage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parrainage findUnique
   */
  export type ParrainageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    /**
     * Filter, which Parrainage to fetch.
     */
    where: ParrainageWhereUniqueInput
  }

  /**
   * Parrainage findUniqueOrThrow
   */
  export type ParrainageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    /**
     * Filter, which Parrainage to fetch.
     */
    where: ParrainageWhereUniqueInput
  }

  /**
   * Parrainage findFirst
   */
  export type ParrainageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    /**
     * Filter, which Parrainage to fetch.
     */
    where?: ParrainageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parrainages to fetch.
     */
    orderBy?: ParrainageOrderByWithRelationInput | ParrainageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parrainages.
     */
    cursor?: ParrainageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parrainages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parrainages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parrainages.
     */
    distinct?: ParrainageScalarFieldEnum | ParrainageScalarFieldEnum[]
  }

  /**
   * Parrainage findFirstOrThrow
   */
  export type ParrainageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    /**
     * Filter, which Parrainage to fetch.
     */
    where?: ParrainageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parrainages to fetch.
     */
    orderBy?: ParrainageOrderByWithRelationInput | ParrainageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parrainages.
     */
    cursor?: ParrainageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parrainages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parrainages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parrainages.
     */
    distinct?: ParrainageScalarFieldEnum | ParrainageScalarFieldEnum[]
  }

  /**
   * Parrainage findMany
   */
  export type ParrainageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    /**
     * Filter, which Parrainages to fetch.
     */
    where?: ParrainageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parrainages to fetch.
     */
    orderBy?: ParrainageOrderByWithRelationInput | ParrainageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parrainages.
     */
    cursor?: ParrainageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parrainages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parrainages.
     */
    skip?: number
    distinct?: ParrainageScalarFieldEnum | ParrainageScalarFieldEnum[]
  }

  /**
   * Parrainage create
   */
  export type ParrainageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    /**
     * The data needed to create a Parrainage.
     */
    data: XOR<ParrainageCreateInput, ParrainageUncheckedCreateInput>
  }

  /**
   * Parrainage createMany
   */
  export type ParrainageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parrainages.
     */
    data: ParrainageCreateManyInput | ParrainageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parrainage createManyAndReturn
   */
  export type ParrainageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * The data used to create many Parrainages.
     */
    data: ParrainageCreateManyInput | ParrainageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parrainage update
   */
  export type ParrainageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    /**
     * The data needed to update a Parrainage.
     */
    data: XOR<ParrainageUpdateInput, ParrainageUncheckedUpdateInput>
    /**
     * Choose, which Parrainage to update.
     */
    where: ParrainageWhereUniqueInput
  }

  /**
   * Parrainage updateMany
   */
  export type ParrainageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parrainages.
     */
    data: XOR<ParrainageUpdateManyMutationInput, ParrainageUncheckedUpdateManyInput>
    /**
     * Filter which Parrainages to update
     */
    where?: ParrainageWhereInput
    /**
     * Limit how many Parrainages to update.
     */
    limit?: number
  }

  /**
   * Parrainage updateManyAndReturn
   */
  export type ParrainageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * The data used to update Parrainages.
     */
    data: XOR<ParrainageUpdateManyMutationInput, ParrainageUncheckedUpdateManyInput>
    /**
     * Filter which Parrainages to update
     */
    where?: ParrainageWhereInput
    /**
     * Limit how many Parrainages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parrainage upsert
   */
  export type ParrainageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    /**
     * The filter to search for the Parrainage to update in case it exists.
     */
    where: ParrainageWhereUniqueInput
    /**
     * In case the Parrainage found by the `where` argument doesn't exist, create a new Parrainage with this data.
     */
    create: XOR<ParrainageCreateInput, ParrainageUncheckedCreateInput>
    /**
     * In case the Parrainage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParrainageUpdateInput, ParrainageUncheckedUpdateInput>
  }

  /**
   * Parrainage delete
   */
  export type ParrainageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    /**
     * Filter which Parrainage to delete.
     */
    where: ParrainageWhereUniqueInput
  }

  /**
   * Parrainage deleteMany
   */
  export type ParrainageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parrainages to delete
     */
    where?: ParrainageWhereInput
    /**
     * Limit how many Parrainages to delete.
     */
    limit?: number
  }

  /**
   * Parrainage.users
   */
  export type Parrainage$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Parrainage without action
   */
  export type ParrainageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
  }


  /**
   * Model Publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationAvgAggregateOutputType = {
    id: number | null
    id_animal: number | null
  }

  export type PublicationSumAggregateOutputType = {
    id: number | null
    id_animal: number | null
  }

  export type PublicationMinAggregateOutputType = {
    id: number | null
    id_animal: number | null
    date: Date | null
    heure: Date | null
    titre: string | null
    article: string | null
    image: string | null
  }

  export type PublicationMaxAggregateOutputType = {
    id: number | null
    id_animal: number | null
    date: Date | null
    heure: Date | null
    titre: string | null
    article: string | null
    image: string | null
  }

  export type PublicationCountAggregateOutputType = {
    id: number
    id_animal: number
    date: number
    heure: number
    titre: number
    article: number
    image: number
    _all: number
  }


  export type PublicationAvgAggregateInputType = {
    id?: true
    id_animal?: true
  }

  export type PublicationSumAggregateInputType = {
    id?: true
    id_animal?: true
  }

  export type PublicationMinAggregateInputType = {
    id?: true
    id_animal?: true
    date?: true
    heure?: true
    titre?: true
    article?: true
    image?: true
  }

  export type PublicationMaxAggregateInputType = {
    id?: true
    id_animal?: true
    date?: true
    heure?: true
    titre?: true
    article?: true
    image?: true
  }

  export type PublicationCountAggregateInputType = {
    id?: true
    id_animal?: true
    date?: true
    heure?: true
    titre?: true
    article?: true
    image?: true
    _all?: true
  }

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publication to aggregate.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type PublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithAggregationInput | PublicationOrderByWithAggregationInput[]
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum
    having?: PublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _avg?: PublicationAvgAggregateInputType
    _sum?: PublicationSumAggregateInputType
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }

  export type PublicationGroupByOutputType = {
    id: number
    id_animal: number
    date: Date
    heure: Date
    titre: string
    article: string
    image: string
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type PublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    date?: boolean
    heure?: boolean
    titre?: boolean
    article?: boolean
    image?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    date?: boolean
    heure?: boolean
    titre?: boolean
    article?: boolean
    image?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_animal?: boolean
    date?: boolean
    heure?: boolean
    titre?: boolean
    article?: boolean
    image?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectScalar = {
    id?: boolean
    id_animal?: boolean
    date?: boolean
    heure?: boolean
    titre?: boolean
    article?: boolean
    image?: boolean
  }

  export type PublicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_animal" | "date" | "heure" | "titre" | "article" | "image", ExtArgs["result"]["publication"]>
  export type PublicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type PublicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type PublicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $PublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publication"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_animal: number
      date: Date
      heure: Date
      titre: string
      article: string
      image: string
    }, ExtArgs["result"]["publication"]>
    composites: {}
  }

  type PublicationGetPayload<S extends boolean | null | undefined | PublicationDefaultArgs> = $Result.GetResult<Prisma.$PublicationPayload, S>

  type PublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicationCountAggregateInputType | true
    }

  export interface PublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publication'], meta: { name: 'Publication' } }
    /**
     * Find zero or one Publication that matches the filter.
     * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationFindUniqueArgs>(args: SelectSubset<T, PublicationFindUniqueArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationFindFirstArgs>(args?: SelectSubset<T, PublicationFindFirstArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationFindManyArgs>(args?: SelectSubset<T, PublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publication.
     * @param {PublicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
     */
    create<T extends PublicationCreateArgs>(args: SelectSubset<T, PublicationCreateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publications.
     * @param {PublicationCreateManyArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationCreateManyArgs>(args?: SelectSubset<T, PublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publications and returns the data saved in the database.
     * @param {PublicationCreateManyAndReturnArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicationCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publication.
     * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
     */
    delete<T extends PublicationDeleteArgs>(args: SelectSubset<T, PublicationDeleteArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publication.
     * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationUpdateArgs>(args: SelectSubset<T, PublicationUpdateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publications.
     * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationDeleteManyArgs>(args?: SelectSubset<T, PublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationUpdateManyArgs>(args: SelectSubset<T, PublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications and returns the data updated in the database.
     * @param {PublicationUpdateManyAndReturnArgs} args - Arguments to update many Publications.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.updateManyAndReturn({
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
    updateManyAndReturn<T extends PublicationUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publication.
     * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     */
    upsert<T extends PublicationUpsertArgs>(args: SelectSubset<T, PublicationUpsertArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends PublicationCountArgs>(
      args?: Subset<T, PublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): Prisma.PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationGroupByArgs} args - Group by arguments.
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
      T extends PublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationGroupByArgs['orderBy'] }
        : { orderBy?: PublicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publication model
   */
  readonly fields: PublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Publication model
   */
  interface PublicationFieldRefs {
    readonly id: FieldRef<"Publication", 'Int'>
    readonly id_animal: FieldRef<"Publication", 'Int'>
    readonly date: FieldRef<"Publication", 'DateTime'>
    readonly heure: FieldRef<"Publication", 'DateTime'>
    readonly titre: FieldRef<"Publication", 'String'>
    readonly article: FieldRef<"Publication", 'String'>
    readonly image: FieldRef<"Publication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Publication findUnique
   */
  export type PublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findUniqueOrThrow
   */
  export type PublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findFirst
   */
  export type PublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findFirstOrThrow
   */
  export type PublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findMany
   */
  export type PublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publications to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication create
   */
  export type PublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Publication.
     */
    data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
  }

  /**
   * Publication createMany
   */
  export type PublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publication createManyAndReturn
   */
  export type PublicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publication update
   */
  export type PublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Publication.
     */
    data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
    /**
     * Choose, which Publication to update.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication updateMany
   */
  export type PublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
  }

  /**
   * Publication updateManyAndReturn
   */
  export type PublicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publication upsert
   */
  export type PublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Publication to update in case it exists.
     */
    where: PublicationWhereUniqueInput
    /**
     * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
     */
    create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
    /**
     * In case the Publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
  }

  /**
   * Publication delete
   */
  export type PublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter which Publication to delete.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication deleteMany
   */
  export type PublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publications to delete
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to delete.
     */
    limit?: number
  }

  /**
   * Publication without action
   */
  export type PublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    date: Date | null
    heure: Date | null
    titre: string | null
    article: string | null
    image: string | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    heure: Date | null
    titre: string | null
    article: string | null
    image: string | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    date: number
    heure: number
    titre: number
    article: number
    image: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    titre?: true
    article?: true
    image?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    titre?: true
    article?: true
    image?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    titre?: true
    article?: true
    image?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    date: Date
    heure: Date
    titre: string
    article: string
    image: string
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    titre?: boolean
    article?: boolean
    image?: boolean
    users?: boolean | Blog$usersArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    titre?: boolean
    article?: boolean
    image?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    titre?: boolean
    article?: boolean
    image?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    date?: boolean
    heure?: boolean
    titre?: boolean
    article?: boolean
    image?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "heure" | "titre" | "article" | "image", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Blog$usersArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      heure: Date
      titre: string
      article: string
      image: string
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Blog$usersArgs<ExtArgs> = {}>(args?: Subset<T, Blog$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly date: FieldRef<"Blog", 'DateTime'>
    readonly heure: FieldRef<"Blog", 'DateTime'>
    readonly titre: FieldRef<"Blog", 'String'>
    readonly article: FieldRef<"Blog", 'String'>
    readonly image: FieldRef<"Blog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog.users
   */
  export type Blog$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model Signalement
   */

  export type AggregateSignalement = {
    _count: SignalementCountAggregateOutputType | null
    _avg: SignalementAvgAggregateOutputType | null
    _sum: SignalementSumAggregateOutputType | null
    _min: SignalementMinAggregateOutputType | null
    _max: SignalementMaxAggregateOutputType | null
  }

  export type SignalementAvgAggregateOutputType = {
    id: number | null
  }

  export type SignalementSumAggregateOutputType = {
    id: number | null
  }

  export type SignalementMinAggregateOutputType = {
    id: number | null
    date: Date | null
    heure: Date | null
    lieu: string | null
    description: string | null
    emailFacultatif: string | null
  }

  export type SignalementMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    heure: Date | null
    lieu: string | null
    description: string | null
    emailFacultatif: string | null
  }

  export type SignalementCountAggregateOutputType = {
    id: number
    date: number
    heure: number
    lieu: number
    description: number
    emailFacultatif: number
    _all: number
  }


  export type SignalementAvgAggregateInputType = {
    id?: true
  }

  export type SignalementSumAggregateInputType = {
    id?: true
  }

  export type SignalementMinAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    lieu?: true
    description?: true
    emailFacultatif?: true
  }

  export type SignalementMaxAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    lieu?: true
    description?: true
    emailFacultatif?: true
  }

  export type SignalementCountAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    lieu?: true
    description?: true
    emailFacultatif?: true
    _all?: true
  }

  export type SignalementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signalement to aggregate.
     */
    where?: SignalementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signalements
    **/
    _count?: true | SignalementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignalementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignalementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalementMaxAggregateInputType
  }

  export type GetSignalementAggregateType<T extends SignalementAggregateArgs> = {
        [P in keyof T & keyof AggregateSignalement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignalement[P]>
      : GetScalarType<T[P], AggregateSignalement[P]>
  }




  export type SignalementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalementWhereInput
    orderBy?: SignalementOrderByWithAggregationInput | SignalementOrderByWithAggregationInput[]
    by: SignalementScalarFieldEnum[] | SignalementScalarFieldEnum
    having?: SignalementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalementCountAggregateInputType | true
    _avg?: SignalementAvgAggregateInputType
    _sum?: SignalementSumAggregateInputType
    _min?: SignalementMinAggregateInputType
    _max?: SignalementMaxAggregateInputType
  }

  export type SignalementGroupByOutputType = {
    id: number
    date: Date
    heure: Date
    lieu: string
    description: string
    emailFacultatif: string
    _count: SignalementCountAggregateOutputType | null
    _avg: SignalementAvgAggregateOutputType | null
    _sum: SignalementSumAggregateOutputType | null
    _min: SignalementMinAggregateOutputType | null
    _max: SignalementMaxAggregateOutputType | null
  }

  type GetSignalementGroupByPayload<T extends SignalementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalementGroupByOutputType[P]>
            : GetScalarType<T[P], SignalementGroupByOutputType[P]>
        }
      >
    >


  export type SignalementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    lieu?: boolean
    description?: boolean
    emailFacultatif?: boolean
  }, ExtArgs["result"]["signalement"]>

  export type SignalementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    lieu?: boolean
    description?: boolean
    emailFacultatif?: boolean
  }, ExtArgs["result"]["signalement"]>

  export type SignalementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    lieu?: boolean
    description?: boolean
    emailFacultatif?: boolean
  }, ExtArgs["result"]["signalement"]>

  export type SignalementSelectScalar = {
    id?: boolean
    date?: boolean
    heure?: boolean
    lieu?: boolean
    description?: boolean
    emailFacultatif?: boolean
  }

  export type SignalementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "heure" | "lieu" | "description" | "emailFacultatif", ExtArgs["result"]["signalement"]>

  export type $SignalementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signalement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      heure: Date
      lieu: string
      description: string
      emailFacultatif: string
    }, ExtArgs["result"]["signalement"]>
    composites: {}
  }

  type SignalementGetPayload<S extends boolean | null | undefined | SignalementDefaultArgs> = $Result.GetResult<Prisma.$SignalementPayload, S>

  type SignalementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignalementCountAggregateInputType | true
    }

  export interface SignalementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signalement'], meta: { name: 'Signalement' } }
    /**
     * Find zero or one Signalement that matches the filter.
     * @param {SignalementFindUniqueArgs} args - Arguments to find a Signalement
     * @example
     * // Get one Signalement
     * const signalement = await prisma.signalement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalementFindUniqueArgs>(args: SelectSubset<T, SignalementFindUniqueArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signalement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalementFindUniqueOrThrowArgs} args - Arguments to find a Signalement
     * @example
     * // Get one Signalement
     * const signalement = await prisma.signalement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalementFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signalement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementFindFirstArgs} args - Arguments to find a Signalement
     * @example
     * // Get one Signalement
     * const signalement = await prisma.signalement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalementFindFirstArgs>(args?: SelectSubset<T, SignalementFindFirstArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signalement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementFindFirstOrThrowArgs} args - Arguments to find a Signalement
     * @example
     * // Get one Signalement
     * const signalement = await prisma.signalement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalementFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signalements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signalements
     * const signalements = await prisma.signalement.findMany()
     * 
     * // Get first 10 Signalements
     * const signalements = await prisma.signalement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalementWithIdOnly = await prisma.signalement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalementFindManyArgs>(args?: SelectSubset<T, SignalementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signalement.
     * @param {SignalementCreateArgs} args - Arguments to create a Signalement.
     * @example
     * // Create one Signalement
     * const Signalement = await prisma.signalement.create({
     *   data: {
     *     // ... data to create a Signalement
     *   }
     * })
     * 
     */
    create<T extends SignalementCreateArgs>(args: SelectSubset<T, SignalementCreateArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signalements.
     * @param {SignalementCreateManyArgs} args - Arguments to create many Signalements.
     * @example
     * // Create many Signalements
     * const signalement = await prisma.signalement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalementCreateManyArgs>(args?: SelectSubset<T, SignalementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signalements and returns the data saved in the database.
     * @param {SignalementCreateManyAndReturnArgs} args - Arguments to create many Signalements.
     * @example
     * // Create many Signalements
     * const signalement = await prisma.signalement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signalements and only return the `id`
     * const signalementWithIdOnly = await prisma.signalement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalementCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Signalement.
     * @param {SignalementDeleteArgs} args - Arguments to delete one Signalement.
     * @example
     * // Delete one Signalement
     * const Signalement = await prisma.signalement.delete({
     *   where: {
     *     // ... filter to delete one Signalement
     *   }
     * })
     * 
     */
    delete<T extends SignalementDeleteArgs>(args: SelectSubset<T, SignalementDeleteArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signalement.
     * @param {SignalementUpdateArgs} args - Arguments to update one Signalement.
     * @example
     * // Update one Signalement
     * const signalement = await prisma.signalement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalementUpdateArgs>(args: SelectSubset<T, SignalementUpdateArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signalements.
     * @param {SignalementDeleteManyArgs} args - Arguments to filter Signalements to delete.
     * @example
     * // Delete a few Signalements
     * const { count } = await prisma.signalement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalementDeleteManyArgs>(args?: SelectSubset<T, SignalementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signalements
     * const signalement = await prisma.signalement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalementUpdateManyArgs>(args: SelectSubset<T, SignalementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalements and returns the data updated in the database.
     * @param {SignalementUpdateManyAndReturnArgs} args - Arguments to update many Signalements.
     * @example
     * // Update many Signalements
     * const signalement = await prisma.signalement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signalements and only return the `id`
     * const signalementWithIdOnly = await prisma.signalement.updateManyAndReturn({
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
    updateManyAndReturn<T extends SignalementUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Signalement.
     * @param {SignalementUpsertArgs} args - Arguments to update or create a Signalement.
     * @example
     * // Update or create a Signalement
     * const signalement = await prisma.signalement.upsert({
     *   create: {
     *     // ... data to create a Signalement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signalement we want to update
     *   }
     * })
     */
    upsert<T extends SignalementUpsertArgs>(args: SelectSubset<T, SignalementUpsertArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signalements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementCountArgs} args - Arguments to filter Signalements to count.
     * @example
     * // Count the number of Signalements
     * const count = await prisma.signalement.count({
     *   where: {
     *     // ... the filter for the Signalements we want to count
     *   }
     * })
    **/
    count<T extends SignalementCountArgs>(
      args?: Subset<T, SignalementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signalement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SignalementAggregateArgs>(args: Subset<T, SignalementAggregateArgs>): Prisma.PrismaPromise<GetSignalementAggregateType<T>>

    /**
     * Group by Signalement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementGroupByArgs} args - Group by arguments.
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
      T extends SignalementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalementGroupByArgs['orderBy'] }
        : { orderBy?: SignalementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SignalementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signalement model
   */
  readonly fields: SignalementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signalement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Signalement model
   */
  interface SignalementFieldRefs {
    readonly id: FieldRef<"Signalement", 'Int'>
    readonly date: FieldRef<"Signalement", 'DateTime'>
    readonly heure: FieldRef<"Signalement", 'DateTime'>
    readonly lieu: FieldRef<"Signalement", 'String'>
    readonly description: FieldRef<"Signalement", 'String'>
    readonly emailFacultatif: FieldRef<"Signalement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Signalement findUnique
   */
  export type SignalementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Filter, which Signalement to fetch.
     */
    where: SignalementWhereUniqueInput
  }

  /**
   * Signalement findUniqueOrThrow
   */
  export type SignalementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Filter, which Signalement to fetch.
     */
    where: SignalementWhereUniqueInput
  }

  /**
   * Signalement findFirst
   */
  export type SignalementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Filter, which Signalement to fetch.
     */
    where?: SignalementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalements.
     */
    cursor?: SignalementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalements.
     */
    distinct?: SignalementScalarFieldEnum | SignalementScalarFieldEnum[]
  }

  /**
   * Signalement findFirstOrThrow
   */
  export type SignalementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Filter, which Signalement to fetch.
     */
    where?: SignalementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalements.
     */
    cursor?: SignalementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalements.
     */
    distinct?: SignalementScalarFieldEnum | SignalementScalarFieldEnum[]
  }

  /**
   * Signalement findMany
   */
  export type SignalementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Filter, which Signalements to fetch.
     */
    where?: SignalementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signalements.
     */
    cursor?: SignalementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    distinct?: SignalementScalarFieldEnum | SignalementScalarFieldEnum[]
  }

  /**
   * Signalement create
   */
  export type SignalementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * The data needed to create a Signalement.
     */
    data: XOR<SignalementCreateInput, SignalementUncheckedCreateInput>
  }

  /**
   * Signalement createMany
   */
  export type SignalementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signalements.
     */
    data: SignalementCreateManyInput | SignalementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signalement createManyAndReturn
   */
  export type SignalementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * The data used to create many Signalements.
     */
    data: SignalementCreateManyInput | SignalementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signalement update
   */
  export type SignalementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * The data needed to update a Signalement.
     */
    data: XOR<SignalementUpdateInput, SignalementUncheckedUpdateInput>
    /**
     * Choose, which Signalement to update.
     */
    where: SignalementWhereUniqueInput
  }

  /**
   * Signalement updateMany
   */
  export type SignalementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signalements.
     */
    data: XOR<SignalementUpdateManyMutationInput, SignalementUncheckedUpdateManyInput>
    /**
     * Filter which Signalements to update
     */
    where?: SignalementWhereInput
    /**
     * Limit how many Signalements to update.
     */
    limit?: number
  }

  /**
   * Signalement updateManyAndReturn
   */
  export type SignalementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * The data used to update Signalements.
     */
    data: XOR<SignalementUpdateManyMutationInput, SignalementUncheckedUpdateManyInput>
    /**
     * Filter which Signalements to update
     */
    where?: SignalementWhereInput
    /**
     * Limit how many Signalements to update.
     */
    limit?: number
  }

  /**
   * Signalement upsert
   */
  export type SignalementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * The filter to search for the Signalement to update in case it exists.
     */
    where: SignalementWhereUniqueInput
    /**
     * In case the Signalement found by the `where` argument doesn't exist, create a new Signalement with this data.
     */
    create: XOR<SignalementCreateInput, SignalementUncheckedCreateInput>
    /**
     * In case the Signalement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalementUpdateInput, SignalementUncheckedUpdateInput>
  }

  /**
   * Signalement delete
   */
  export type SignalementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Filter which Signalement to delete.
     */
    where: SignalementWhereUniqueInput
  }

  /**
   * Signalement deleteMany
   */
  export type SignalementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signalements to delete
     */
    where?: SignalementWhereInput
    /**
     * Limit how many Signalements to delete.
     */
    limit?: number
  }

  /**
   * Signalement without action
   */
  export type SignalementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
  }


  /**
   * Model VitrineProduits
   */

  export type AggregateVitrineProduits = {
    _count: VitrineProduitsCountAggregateOutputType | null
    _avg: VitrineProduitsAvgAggregateOutputType | null
    _sum: VitrineProduitsSumAggregateOutputType | null
    _min: VitrineProduitsMinAggregateOutputType | null
    _max: VitrineProduitsMaxAggregateOutputType | null
  }

  export type VitrineProduitsAvgAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type VitrineProduitsSumAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type VitrineProduitsMinAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    prix: number | null
  }

  export type VitrineProduitsMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    prix: number | null
  }

  export type VitrineProduitsCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    prix: number
    _all: number
  }


  export type VitrineProduitsAvgAggregateInputType = {
    id?: true
    prix?: true
  }

  export type VitrineProduitsSumAggregateInputType = {
    id?: true
    prix?: true
  }

  export type VitrineProduitsMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    prix?: true
  }

  export type VitrineProduitsMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    prix?: true
  }

  export type VitrineProduitsCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    prix?: true
    _all?: true
  }

  export type VitrineProduitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VitrineProduits to aggregate.
     */
    where?: VitrineProduitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitrineProduits to fetch.
     */
    orderBy?: VitrineProduitsOrderByWithRelationInput | VitrineProduitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VitrineProduitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitrineProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitrineProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VitrineProduits
    **/
    _count?: true | VitrineProduitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VitrineProduitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VitrineProduitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VitrineProduitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VitrineProduitsMaxAggregateInputType
  }

  export type GetVitrineProduitsAggregateType<T extends VitrineProduitsAggregateArgs> = {
        [P in keyof T & keyof AggregateVitrineProduits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVitrineProduits[P]>
      : GetScalarType<T[P], AggregateVitrineProduits[P]>
  }




  export type VitrineProduitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VitrineProduitsWhereInput
    orderBy?: VitrineProduitsOrderByWithAggregationInput | VitrineProduitsOrderByWithAggregationInput[]
    by: VitrineProduitsScalarFieldEnum[] | VitrineProduitsScalarFieldEnum
    having?: VitrineProduitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VitrineProduitsCountAggregateInputType | true
    _avg?: VitrineProduitsAvgAggregateInputType
    _sum?: VitrineProduitsSumAggregateInputType
    _min?: VitrineProduitsMinAggregateInputType
    _max?: VitrineProduitsMaxAggregateInputType
  }

  export type VitrineProduitsGroupByOutputType = {
    id: number
    nom: string
    description: string
    prix: number
    _count: VitrineProduitsCountAggregateOutputType | null
    _avg: VitrineProduitsAvgAggregateOutputType | null
    _sum: VitrineProduitsSumAggregateOutputType | null
    _min: VitrineProduitsMinAggregateOutputType | null
    _max: VitrineProduitsMaxAggregateOutputType | null
  }

  type GetVitrineProduitsGroupByPayload<T extends VitrineProduitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VitrineProduitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VitrineProduitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VitrineProduitsGroupByOutputType[P]>
            : GetScalarType<T[P], VitrineProduitsGroupByOutputType[P]>
        }
      >
    >


  export type VitrineProduitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
  }, ExtArgs["result"]["vitrineProduits"]>

  export type VitrineProduitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
  }, ExtArgs["result"]["vitrineProduits"]>

  export type VitrineProduitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
  }, ExtArgs["result"]["vitrineProduits"]>

  export type VitrineProduitsSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
  }

  export type VitrineProduitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "prix", ExtArgs["result"]["vitrineProduits"]>

  export type $VitrineProduitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VitrineProduits"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      description: string
      prix: number
    }, ExtArgs["result"]["vitrineProduits"]>
    composites: {}
  }

  type VitrineProduitsGetPayload<S extends boolean | null | undefined | VitrineProduitsDefaultArgs> = $Result.GetResult<Prisma.$VitrineProduitsPayload, S>

  type VitrineProduitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VitrineProduitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VitrineProduitsCountAggregateInputType | true
    }

  export interface VitrineProduitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VitrineProduits'], meta: { name: 'VitrineProduits' } }
    /**
     * Find zero or one VitrineProduits that matches the filter.
     * @param {VitrineProduitsFindUniqueArgs} args - Arguments to find a VitrineProduits
     * @example
     * // Get one VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VitrineProduitsFindUniqueArgs>(args: SelectSubset<T, VitrineProduitsFindUniqueArgs<ExtArgs>>): Prisma__VitrineProduitsClient<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VitrineProduits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VitrineProduitsFindUniqueOrThrowArgs} args - Arguments to find a VitrineProduits
     * @example
     * // Get one VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VitrineProduitsFindUniqueOrThrowArgs>(args: SelectSubset<T, VitrineProduitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VitrineProduitsClient<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VitrineProduits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitrineProduitsFindFirstArgs} args - Arguments to find a VitrineProduits
     * @example
     * // Get one VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VitrineProduitsFindFirstArgs>(args?: SelectSubset<T, VitrineProduitsFindFirstArgs<ExtArgs>>): Prisma__VitrineProduitsClient<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VitrineProduits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitrineProduitsFindFirstOrThrowArgs} args - Arguments to find a VitrineProduits
     * @example
     * // Get one VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VitrineProduitsFindFirstOrThrowArgs>(args?: SelectSubset<T, VitrineProduitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VitrineProduitsClient<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VitrineProduits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitrineProduitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.findMany()
     * 
     * // Get first 10 VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vitrineProduitsWithIdOnly = await prisma.vitrineProduits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VitrineProduitsFindManyArgs>(args?: SelectSubset<T, VitrineProduitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VitrineProduits.
     * @param {VitrineProduitsCreateArgs} args - Arguments to create a VitrineProduits.
     * @example
     * // Create one VitrineProduits
     * const VitrineProduits = await prisma.vitrineProduits.create({
     *   data: {
     *     // ... data to create a VitrineProduits
     *   }
     * })
     * 
     */
    create<T extends VitrineProduitsCreateArgs>(args: SelectSubset<T, VitrineProduitsCreateArgs<ExtArgs>>): Prisma__VitrineProduitsClient<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VitrineProduits.
     * @param {VitrineProduitsCreateManyArgs} args - Arguments to create many VitrineProduits.
     * @example
     * // Create many VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VitrineProduitsCreateManyArgs>(args?: SelectSubset<T, VitrineProduitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VitrineProduits and returns the data saved in the database.
     * @param {VitrineProduitsCreateManyAndReturnArgs} args - Arguments to create many VitrineProduits.
     * @example
     * // Create many VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VitrineProduits and only return the `id`
     * const vitrineProduitsWithIdOnly = await prisma.vitrineProduits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VitrineProduitsCreateManyAndReturnArgs>(args?: SelectSubset<T, VitrineProduitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VitrineProduits.
     * @param {VitrineProduitsDeleteArgs} args - Arguments to delete one VitrineProduits.
     * @example
     * // Delete one VitrineProduits
     * const VitrineProduits = await prisma.vitrineProduits.delete({
     *   where: {
     *     // ... filter to delete one VitrineProduits
     *   }
     * })
     * 
     */
    delete<T extends VitrineProduitsDeleteArgs>(args: SelectSubset<T, VitrineProduitsDeleteArgs<ExtArgs>>): Prisma__VitrineProduitsClient<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VitrineProduits.
     * @param {VitrineProduitsUpdateArgs} args - Arguments to update one VitrineProduits.
     * @example
     * // Update one VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VitrineProduitsUpdateArgs>(args: SelectSubset<T, VitrineProduitsUpdateArgs<ExtArgs>>): Prisma__VitrineProduitsClient<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VitrineProduits.
     * @param {VitrineProduitsDeleteManyArgs} args - Arguments to filter VitrineProduits to delete.
     * @example
     * // Delete a few VitrineProduits
     * const { count } = await prisma.vitrineProduits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VitrineProduitsDeleteManyArgs>(args?: SelectSubset<T, VitrineProduitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VitrineProduits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitrineProduitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VitrineProduitsUpdateManyArgs>(args: SelectSubset<T, VitrineProduitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VitrineProduits and returns the data updated in the database.
     * @param {VitrineProduitsUpdateManyAndReturnArgs} args - Arguments to update many VitrineProduits.
     * @example
     * // Update many VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VitrineProduits and only return the `id`
     * const vitrineProduitsWithIdOnly = await prisma.vitrineProduits.updateManyAndReturn({
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
    updateManyAndReturn<T extends VitrineProduitsUpdateManyAndReturnArgs>(args: SelectSubset<T, VitrineProduitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VitrineProduits.
     * @param {VitrineProduitsUpsertArgs} args - Arguments to update or create a VitrineProduits.
     * @example
     * // Update or create a VitrineProduits
     * const vitrineProduits = await prisma.vitrineProduits.upsert({
     *   create: {
     *     // ... data to create a VitrineProduits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VitrineProduits we want to update
     *   }
     * })
     */
    upsert<T extends VitrineProduitsUpsertArgs>(args: SelectSubset<T, VitrineProduitsUpsertArgs<ExtArgs>>): Prisma__VitrineProduitsClient<$Result.GetResult<Prisma.$VitrineProduitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VitrineProduits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitrineProduitsCountArgs} args - Arguments to filter VitrineProduits to count.
     * @example
     * // Count the number of VitrineProduits
     * const count = await prisma.vitrineProduits.count({
     *   where: {
     *     // ... the filter for the VitrineProduits we want to count
     *   }
     * })
    **/
    count<T extends VitrineProduitsCountArgs>(
      args?: Subset<T, VitrineProduitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VitrineProduitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VitrineProduits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitrineProduitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VitrineProduitsAggregateArgs>(args: Subset<T, VitrineProduitsAggregateArgs>): Prisma.PrismaPromise<GetVitrineProduitsAggregateType<T>>

    /**
     * Group by VitrineProduits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitrineProduitsGroupByArgs} args - Group by arguments.
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
      T extends VitrineProduitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VitrineProduitsGroupByArgs['orderBy'] }
        : { orderBy?: VitrineProduitsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VitrineProduitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVitrineProduitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VitrineProduits model
   */
  readonly fields: VitrineProduitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VitrineProduits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VitrineProduitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VitrineProduits model
   */
  interface VitrineProduitsFieldRefs {
    readonly id: FieldRef<"VitrineProduits", 'Int'>
    readonly nom: FieldRef<"VitrineProduits", 'String'>
    readonly description: FieldRef<"VitrineProduits", 'String'>
    readonly prix: FieldRef<"VitrineProduits", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * VitrineProduits findUnique
   */
  export type VitrineProduitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * Filter, which VitrineProduits to fetch.
     */
    where: VitrineProduitsWhereUniqueInput
  }

  /**
   * VitrineProduits findUniqueOrThrow
   */
  export type VitrineProduitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * Filter, which VitrineProduits to fetch.
     */
    where: VitrineProduitsWhereUniqueInput
  }

  /**
   * VitrineProduits findFirst
   */
  export type VitrineProduitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * Filter, which VitrineProduits to fetch.
     */
    where?: VitrineProduitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitrineProduits to fetch.
     */
    orderBy?: VitrineProduitsOrderByWithRelationInput | VitrineProduitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VitrineProduits.
     */
    cursor?: VitrineProduitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitrineProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitrineProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VitrineProduits.
     */
    distinct?: VitrineProduitsScalarFieldEnum | VitrineProduitsScalarFieldEnum[]
  }

  /**
   * VitrineProduits findFirstOrThrow
   */
  export type VitrineProduitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * Filter, which VitrineProduits to fetch.
     */
    where?: VitrineProduitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitrineProduits to fetch.
     */
    orderBy?: VitrineProduitsOrderByWithRelationInput | VitrineProduitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VitrineProduits.
     */
    cursor?: VitrineProduitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitrineProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitrineProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VitrineProduits.
     */
    distinct?: VitrineProduitsScalarFieldEnum | VitrineProduitsScalarFieldEnum[]
  }

  /**
   * VitrineProduits findMany
   */
  export type VitrineProduitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * Filter, which VitrineProduits to fetch.
     */
    where?: VitrineProduitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitrineProduits to fetch.
     */
    orderBy?: VitrineProduitsOrderByWithRelationInput | VitrineProduitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VitrineProduits.
     */
    cursor?: VitrineProduitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitrineProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitrineProduits.
     */
    skip?: number
    distinct?: VitrineProduitsScalarFieldEnum | VitrineProduitsScalarFieldEnum[]
  }

  /**
   * VitrineProduits create
   */
  export type VitrineProduitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * The data needed to create a VitrineProduits.
     */
    data: XOR<VitrineProduitsCreateInput, VitrineProduitsUncheckedCreateInput>
  }

  /**
   * VitrineProduits createMany
   */
  export type VitrineProduitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VitrineProduits.
     */
    data: VitrineProduitsCreateManyInput | VitrineProduitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VitrineProduits createManyAndReturn
   */
  export type VitrineProduitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * The data used to create many VitrineProduits.
     */
    data: VitrineProduitsCreateManyInput | VitrineProduitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VitrineProduits update
   */
  export type VitrineProduitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * The data needed to update a VitrineProduits.
     */
    data: XOR<VitrineProduitsUpdateInput, VitrineProduitsUncheckedUpdateInput>
    /**
     * Choose, which VitrineProduits to update.
     */
    where: VitrineProduitsWhereUniqueInput
  }

  /**
   * VitrineProduits updateMany
   */
  export type VitrineProduitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VitrineProduits.
     */
    data: XOR<VitrineProduitsUpdateManyMutationInput, VitrineProduitsUncheckedUpdateManyInput>
    /**
     * Filter which VitrineProduits to update
     */
    where?: VitrineProduitsWhereInput
    /**
     * Limit how many VitrineProduits to update.
     */
    limit?: number
  }

  /**
   * VitrineProduits updateManyAndReturn
   */
  export type VitrineProduitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * The data used to update VitrineProduits.
     */
    data: XOR<VitrineProduitsUpdateManyMutationInput, VitrineProduitsUncheckedUpdateManyInput>
    /**
     * Filter which VitrineProduits to update
     */
    where?: VitrineProduitsWhereInput
    /**
     * Limit how many VitrineProduits to update.
     */
    limit?: number
  }

  /**
   * VitrineProduits upsert
   */
  export type VitrineProduitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * The filter to search for the VitrineProduits to update in case it exists.
     */
    where: VitrineProduitsWhereUniqueInput
    /**
     * In case the VitrineProduits found by the `where` argument doesn't exist, create a new VitrineProduits with this data.
     */
    create: XOR<VitrineProduitsCreateInput, VitrineProduitsUncheckedCreateInput>
    /**
     * In case the VitrineProduits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VitrineProduitsUpdateInput, VitrineProduitsUncheckedUpdateInput>
  }

  /**
   * VitrineProduits delete
   */
  export type VitrineProduitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
    /**
     * Filter which VitrineProduits to delete.
     */
    where: VitrineProduitsWhereUniqueInput
  }

  /**
   * VitrineProduits deleteMany
   */
  export type VitrineProduitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VitrineProduits to delete
     */
    where?: VitrineProduitsWhereInput
    /**
     * Limit how many VitrineProduits to delete.
     */
    limit?: number
  }

  /**
   * VitrineProduits without action
   */
  export type VitrineProduitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitrineProduits
     */
    select?: VitrineProduitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitrineProduits
     */
    omit?: VitrineProduitsOmit<ExtArgs> | null
  }


  /**
   * Model Aider
   */

  export type AggregateAider = {
    _count: AiderCountAggregateOutputType | null
    _avg: AiderAvgAggregateOutputType | null
    _sum: AiderSumAggregateOutputType | null
    _min: AiderMinAggregateOutputType | null
    _max: AiderMaxAggregateOutputType | null
  }

  export type AiderAvgAggregateOutputType = {
    id: number | null
  }

  export type AiderSumAggregateOutputType = {
    id: number | null
  }

  export type AiderMinAggregateOutputType = {
    id: number | null
    date: Date | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    financier: boolean | null
    materiel: boolean | null
    parrainage: boolean | null
    message: string | null
  }

  export type AiderMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    financier: boolean | null
    materiel: boolean | null
    parrainage: boolean | null
    message: string | null
  }

  export type AiderCountAggregateOutputType = {
    id: number
    date: number
    nom: number
    prenom: number
    email: number
    telephone: number
    financier: number
    materiel: number
    parrainage: number
    message: number
    _all: number
  }


  export type AiderAvgAggregateInputType = {
    id?: true
  }

  export type AiderSumAggregateInputType = {
    id?: true
  }

  export type AiderMinAggregateInputType = {
    id?: true
    date?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    financier?: true
    materiel?: true
    parrainage?: true
    message?: true
  }

  export type AiderMaxAggregateInputType = {
    id?: true
    date?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    financier?: true
    materiel?: true
    parrainage?: true
    message?: true
  }

  export type AiderCountAggregateInputType = {
    id?: true
    date?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    financier?: true
    materiel?: true
    parrainage?: true
    message?: true
    _all?: true
  }

  export type AiderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aider to aggregate.
     */
    where?: AiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aiders to fetch.
     */
    orderBy?: AiderOrderByWithRelationInput | AiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aiders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aiders
    **/
    _count?: true | AiderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiderMaxAggregateInputType
  }

  export type GetAiderAggregateType<T extends AiderAggregateArgs> = {
        [P in keyof T & keyof AggregateAider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAider[P]>
      : GetScalarType<T[P], AggregateAider[P]>
  }




  export type AiderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiderWhereInput
    orderBy?: AiderOrderByWithAggregationInput | AiderOrderByWithAggregationInput[]
    by: AiderScalarFieldEnum[] | AiderScalarFieldEnum
    having?: AiderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiderCountAggregateInputType | true
    _avg?: AiderAvgAggregateInputType
    _sum?: AiderSumAggregateInputType
    _min?: AiderMinAggregateInputType
    _max?: AiderMaxAggregateInputType
  }

  export type AiderGroupByOutputType = {
    id: number
    date: Date
    nom: string
    prenom: string
    email: string
    telephone: string
    financier: boolean
    materiel: boolean
    parrainage: boolean
    message: string
    _count: AiderCountAggregateOutputType | null
    _avg: AiderAvgAggregateOutputType | null
    _sum: AiderSumAggregateOutputType | null
    _min: AiderMinAggregateOutputType | null
    _max: AiderMaxAggregateOutputType | null
  }

  type GetAiderGroupByPayload<T extends AiderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiderGroupByOutputType[P]>
            : GetScalarType<T[P], AiderGroupByOutputType[P]>
        }
      >
    >


  export type AiderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    financier?: boolean
    materiel?: boolean
    parrainage?: boolean
    message?: boolean
  }, ExtArgs["result"]["aider"]>

  export type AiderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    financier?: boolean
    materiel?: boolean
    parrainage?: boolean
    message?: boolean
  }, ExtArgs["result"]["aider"]>

  export type AiderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    financier?: boolean
    materiel?: boolean
    parrainage?: boolean
    message?: boolean
  }, ExtArgs["result"]["aider"]>

  export type AiderSelectScalar = {
    id?: boolean
    date?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    financier?: boolean
    materiel?: boolean
    parrainage?: boolean
    message?: boolean
  }

  export type AiderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "nom" | "prenom" | "email" | "telephone" | "financier" | "materiel" | "parrainage" | "message", ExtArgs["result"]["aider"]>

  export type $AiderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aider"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      nom: string
      prenom: string
      email: string
      telephone: string
      financier: boolean
      materiel: boolean
      parrainage: boolean
      message: string
    }, ExtArgs["result"]["aider"]>
    composites: {}
  }

  type AiderGetPayload<S extends boolean | null | undefined | AiderDefaultArgs> = $Result.GetResult<Prisma.$AiderPayload, S>

  type AiderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiderCountAggregateInputType | true
    }

  export interface AiderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aider'], meta: { name: 'Aider' } }
    /**
     * Find zero or one Aider that matches the filter.
     * @param {AiderFindUniqueArgs} args - Arguments to find a Aider
     * @example
     * // Get one Aider
     * const aider = await prisma.aider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiderFindUniqueArgs>(args: SelectSubset<T, AiderFindUniqueArgs<ExtArgs>>): Prisma__AiderClient<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiderFindUniqueOrThrowArgs} args - Arguments to find a Aider
     * @example
     * // Get one Aider
     * const aider = await prisma.aider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiderFindUniqueOrThrowArgs>(args: SelectSubset<T, AiderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiderClient<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiderFindFirstArgs} args - Arguments to find a Aider
     * @example
     * // Get one Aider
     * const aider = await prisma.aider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiderFindFirstArgs>(args?: SelectSubset<T, AiderFindFirstArgs<ExtArgs>>): Prisma__AiderClient<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiderFindFirstOrThrowArgs} args - Arguments to find a Aider
     * @example
     * // Get one Aider
     * const aider = await prisma.aider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiderFindFirstOrThrowArgs>(args?: SelectSubset<T, AiderFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiderClient<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aiders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aiders
     * const aiders = await prisma.aider.findMany()
     * 
     * // Get first 10 Aiders
     * const aiders = await prisma.aider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiderWithIdOnly = await prisma.aider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiderFindManyArgs>(args?: SelectSubset<T, AiderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aider.
     * @param {AiderCreateArgs} args - Arguments to create a Aider.
     * @example
     * // Create one Aider
     * const Aider = await prisma.aider.create({
     *   data: {
     *     // ... data to create a Aider
     *   }
     * })
     * 
     */
    create<T extends AiderCreateArgs>(args: SelectSubset<T, AiderCreateArgs<ExtArgs>>): Prisma__AiderClient<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aiders.
     * @param {AiderCreateManyArgs} args - Arguments to create many Aiders.
     * @example
     * // Create many Aiders
     * const aider = await prisma.aider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiderCreateManyArgs>(args?: SelectSubset<T, AiderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aiders and returns the data saved in the database.
     * @param {AiderCreateManyAndReturnArgs} args - Arguments to create many Aiders.
     * @example
     * // Create many Aiders
     * const aider = await prisma.aider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aiders and only return the `id`
     * const aiderWithIdOnly = await prisma.aider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiderCreateManyAndReturnArgs>(args?: SelectSubset<T, AiderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aider.
     * @param {AiderDeleteArgs} args - Arguments to delete one Aider.
     * @example
     * // Delete one Aider
     * const Aider = await prisma.aider.delete({
     *   where: {
     *     // ... filter to delete one Aider
     *   }
     * })
     * 
     */
    delete<T extends AiderDeleteArgs>(args: SelectSubset<T, AiderDeleteArgs<ExtArgs>>): Prisma__AiderClient<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aider.
     * @param {AiderUpdateArgs} args - Arguments to update one Aider.
     * @example
     * // Update one Aider
     * const aider = await prisma.aider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiderUpdateArgs>(args: SelectSubset<T, AiderUpdateArgs<ExtArgs>>): Prisma__AiderClient<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aiders.
     * @param {AiderDeleteManyArgs} args - Arguments to filter Aiders to delete.
     * @example
     * // Delete a few Aiders
     * const { count } = await prisma.aider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiderDeleteManyArgs>(args?: SelectSubset<T, AiderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aiders
     * const aider = await prisma.aider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiderUpdateManyArgs>(args: SelectSubset<T, AiderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aiders and returns the data updated in the database.
     * @param {AiderUpdateManyAndReturnArgs} args - Arguments to update many Aiders.
     * @example
     * // Update many Aiders
     * const aider = await prisma.aider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aiders and only return the `id`
     * const aiderWithIdOnly = await prisma.aider.updateManyAndReturn({
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
    updateManyAndReturn<T extends AiderUpdateManyAndReturnArgs>(args: SelectSubset<T, AiderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aider.
     * @param {AiderUpsertArgs} args - Arguments to update or create a Aider.
     * @example
     * // Update or create a Aider
     * const aider = await prisma.aider.upsert({
     *   create: {
     *     // ... data to create a Aider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aider we want to update
     *   }
     * })
     */
    upsert<T extends AiderUpsertArgs>(args: SelectSubset<T, AiderUpsertArgs<ExtArgs>>): Prisma__AiderClient<$Result.GetResult<Prisma.$AiderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiderCountArgs} args - Arguments to filter Aiders to count.
     * @example
     * // Count the number of Aiders
     * const count = await prisma.aider.count({
     *   where: {
     *     // ... the filter for the Aiders we want to count
     *   }
     * })
    **/
    count<T extends AiderCountArgs>(
      args?: Subset<T, AiderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiderAggregateArgs>(args: Subset<T, AiderAggregateArgs>): Prisma.PrismaPromise<GetAiderAggregateType<T>>

    /**
     * Group by Aider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiderGroupByArgs} args - Group by arguments.
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
      T extends AiderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiderGroupByArgs['orderBy'] }
        : { orderBy?: AiderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aider model
   */
  readonly fields: AiderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Aider model
   */
  interface AiderFieldRefs {
    readonly id: FieldRef<"Aider", 'Int'>
    readonly date: FieldRef<"Aider", 'DateTime'>
    readonly nom: FieldRef<"Aider", 'String'>
    readonly prenom: FieldRef<"Aider", 'String'>
    readonly email: FieldRef<"Aider", 'String'>
    readonly telephone: FieldRef<"Aider", 'String'>
    readonly financier: FieldRef<"Aider", 'Boolean'>
    readonly materiel: FieldRef<"Aider", 'Boolean'>
    readonly parrainage: FieldRef<"Aider", 'Boolean'>
    readonly message: FieldRef<"Aider", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aider findUnique
   */
  export type AiderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * Filter, which Aider to fetch.
     */
    where: AiderWhereUniqueInput
  }

  /**
   * Aider findUniqueOrThrow
   */
  export type AiderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * Filter, which Aider to fetch.
     */
    where: AiderWhereUniqueInput
  }

  /**
   * Aider findFirst
   */
  export type AiderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * Filter, which Aider to fetch.
     */
    where?: AiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aiders to fetch.
     */
    orderBy?: AiderOrderByWithRelationInput | AiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aiders.
     */
    cursor?: AiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aiders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aiders.
     */
    distinct?: AiderScalarFieldEnum | AiderScalarFieldEnum[]
  }

  /**
   * Aider findFirstOrThrow
   */
  export type AiderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * Filter, which Aider to fetch.
     */
    where?: AiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aiders to fetch.
     */
    orderBy?: AiderOrderByWithRelationInput | AiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aiders.
     */
    cursor?: AiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aiders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aiders.
     */
    distinct?: AiderScalarFieldEnum | AiderScalarFieldEnum[]
  }

  /**
   * Aider findMany
   */
  export type AiderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * Filter, which Aiders to fetch.
     */
    where?: AiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aiders to fetch.
     */
    orderBy?: AiderOrderByWithRelationInput | AiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aiders.
     */
    cursor?: AiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aiders.
     */
    skip?: number
    distinct?: AiderScalarFieldEnum | AiderScalarFieldEnum[]
  }

  /**
   * Aider create
   */
  export type AiderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * The data needed to create a Aider.
     */
    data: XOR<AiderCreateInput, AiderUncheckedCreateInput>
  }

  /**
   * Aider createMany
   */
  export type AiderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aiders.
     */
    data: AiderCreateManyInput | AiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aider createManyAndReturn
   */
  export type AiderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * The data used to create many Aiders.
     */
    data: AiderCreateManyInput | AiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aider update
   */
  export type AiderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * The data needed to update a Aider.
     */
    data: XOR<AiderUpdateInput, AiderUncheckedUpdateInput>
    /**
     * Choose, which Aider to update.
     */
    where: AiderWhereUniqueInput
  }

  /**
   * Aider updateMany
   */
  export type AiderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aiders.
     */
    data: XOR<AiderUpdateManyMutationInput, AiderUncheckedUpdateManyInput>
    /**
     * Filter which Aiders to update
     */
    where?: AiderWhereInput
    /**
     * Limit how many Aiders to update.
     */
    limit?: number
  }

  /**
   * Aider updateManyAndReturn
   */
  export type AiderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * The data used to update Aiders.
     */
    data: XOR<AiderUpdateManyMutationInput, AiderUncheckedUpdateManyInput>
    /**
     * Filter which Aiders to update
     */
    where?: AiderWhereInput
    /**
     * Limit how many Aiders to update.
     */
    limit?: number
  }

  /**
   * Aider upsert
   */
  export type AiderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * The filter to search for the Aider to update in case it exists.
     */
    where: AiderWhereUniqueInput
    /**
     * In case the Aider found by the `where` argument doesn't exist, create a new Aider with this data.
     */
    create: XOR<AiderCreateInput, AiderUncheckedCreateInput>
    /**
     * In case the Aider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiderUpdateInput, AiderUncheckedUpdateInput>
  }

  /**
   * Aider delete
   */
  export type AiderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
    /**
     * Filter which Aider to delete.
     */
    where: AiderWhereUniqueInput
  }

  /**
   * Aider deleteMany
   */
  export type AiderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aiders to delete
     */
    where?: AiderWhereInput
    /**
     * Limit how many Aiders to delete.
     */
    limit?: number
  }

  /**
   * Aider without action
   */
  export type AiderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aider
     */
    select?: AiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aider
     */
    omit?: AiderOmit<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    adoptantId: number | null
    animalId: number | null
    parrainageId: number | null
    blogId: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    adoptantId: number | null
    animalId: number | null
    parrainageId: number | null
    blogId: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    adresse: string | null
    cp: string | null
    ville: string | null
    role: string | null
    adoptantId: number | null
    animalId: number | null
    parrainageId: number | null
    blogId: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    adresse: string | null
    cp: string | null
    ville: string | null
    role: string | null
    adoptantId: number | null
    animalId: number | null
    parrainageId: number | null
    blogId: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    nom: number
    prenom: number
    motDePasse: number
    telephone: number
    adresse: number
    cp: number
    ville: number
    role: number
    adoptantId: number
    animalId: number
    parrainageId: number
    blogId: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    adoptantId?: true
    animalId?: true
    parrainageId?: true
    blogId?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    adoptantId?: true
    animalId?: true
    parrainageId?: true
    blogId?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    nom?: true
    prenom?: true
    telephone?: true
    adresse?: true
    cp?: true
    ville?: true
    role?: true
    adoptantId?: true
    animalId?: true
    parrainageId?: true
    blogId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    nom?: true
    prenom?: true
    telephone?: true
    adresse?: true
    cp?: true
    ville?: true
    role?: true
    adoptantId?: true
    animalId?: true
    parrainageId?: true
    blogId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    nom?: true
    prenom?: true
    motDePasse?: true
    telephone?: true
    adresse?: true
    cp?: true
    ville?: true
    role?: true
    adoptantId?: true
    animalId?: true
    parrainageId?: true
    blogId?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    nom: string
    prenom: string
    motDePasse: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId: number | null
    animalId: number | null
    parrainageId: number | null
    blogId: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    adresse?: boolean
    cp?: boolean
    ville?: boolean
    role?: boolean
    adoptantId?: boolean
    animalId?: boolean
    parrainageId?: boolean
    blogId?: boolean
    adoptant?: boolean | Users$adoptantArgs<ExtArgs>
    planningBalades?: boolean | Users$planningBaladesArgs<ExtArgs>
    creneaux?: boolean | Users$creneauxArgs<ExtArgs>
    Animal?: boolean | Users$AnimalArgs<ExtArgs>
    Parrainage?: boolean | Users$ParrainageArgs<ExtArgs>
    Blog?: boolean | Users$BlogArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    nom?: boolean
    prenom?: boolean
    motDePasse?: boolean
    telephone?: boolean
    adresse?: boolean
    cp?: boolean
    ville?: boolean
    role?: boolean
    adoptantId?: boolean
    animalId?: boolean
    parrainageId?: boolean
    blogId?: boolean
    adoptant?: boolean | Users$adoptantArgs<ExtArgs>
    Animal?: boolean | Users$AnimalArgs<ExtArgs>
    Parrainage?: boolean | Users$ParrainageArgs<ExtArgs>
    Blog?: boolean | Users$BlogArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    nom?: boolean
    prenom?: boolean
    motDePasse?: boolean
    telephone?: boolean
    adresse?: boolean
    cp?: boolean
    ville?: boolean
    role?: boolean
    adoptantId?: boolean
    animalId?: boolean
    parrainageId?: boolean
    blogId?: boolean
    adoptant?: boolean | Users$adoptantArgs<ExtArgs>
    Animal?: boolean | Users$AnimalArgs<ExtArgs>
    Parrainage?: boolean | Users$ParrainageArgs<ExtArgs>
    Blog?: boolean | Users$BlogArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    adresse?: boolean
    cp?: boolean
    ville?: boolean
    role?: boolean
    adoptantId?: boolean
    animalId?: boolean
    parrainageId?: boolean
    blogId?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "nom" | "prenom" | "telephone" | "adresse" | "cp" | "ville" | "role" | "adoptantId" | "animalId" | "parrainageId" | "blogId", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptant?: boolean | Users$adoptantArgs<ExtArgs>
    planningBalades?: boolean | Users$planningBaladesArgs<ExtArgs>
    creneaux?: boolean | Users$creneauxArgs<ExtArgs>
    Animal?: boolean | Users$AnimalArgs<ExtArgs>
    Parrainage?: boolean | Users$ParrainageArgs<ExtArgs>
    Blog?: boolean | Users$BlogArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptant?: boolean | Users$adoptantArgs<ExtArgs>
    Animal?: boolean | Users$AnimalArgs<ExtArgs>
    Parrainage?: boolean | Users$ParrainageArgs<ExtArgs>
    Blog?: boolean | Users$BlogArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptant?: boolean | Users$adoptantArgs<ExtArgs>
    Animal?: boolean | Users$AnimalArgs<ExtArgs>
    Parrainage?: boolean | Users$ParrainageArgs<ExtArgs>
    Blog?: boolean | Users$BlogArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      adoptant: Prisma.$AdoptantPayload<ExtArgs> | null
      planningBalades: Prisma.$PlanningBaladesPayload<ExtArgs>[]
      creneaux: Prisma.$CreneauxPayload<ExtArgs>[]
      Animal: Prisma.$AnimalPayload<ExtArgs> | null
      Parrainage: Prisma.$ParrainagePayload<ExtArgs> | null
      Blog: Prisma.$BlogPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      nom: string
      prenom: string
      telephone: string
      adresse: string
      cp: string
      ville: string
      role: string
      adoptantId: number | null
      animalId: number | null
      parrainageId: number | null
      blogId: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adoptant<T extends Users$adoptantArgs<ExtArgs> = {}>(args?: Subset<T, Users$adoptantArgs<ExtArgs>>): Prisma__AdoptantClient<$Result.GetResult<Prisma.$AdoptantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    planningBalades<T extends Users$planningBaladesArgs<ExtArgs> = {}>(args?: Subset<T, Users$planningBaladesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creneaux<T extends Users$creneauxArgs<ExtArgs> = {}>(args?: Subset<T, Users$creneauxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Animal<T extends Users$AnimalArgs<ExtArgs> = {}>(args?: Subset<T, Users$AnimalArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Parrainage<T extends Users$ParrainageArgs<ExtArgs> = {}>(args?: Subset<T, Users$ParrainageArgs<ExtArgs>>): Prisma__ParrainageClient<$Result.GetResult<Prisma.$ParrainagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Blog<T extends Users$BlogArgs<ExtArgs> = {}>(args?: Subset<T, Users$BlogArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly nom: FieldRef<"Users", 'String'>
    readonly prenom: FieldRef<"Users", 'String'>
    readonly telephone: FieldRef<"Users", 'String'>
    readonly adresse: FieldRef<"Users", 'String'>
    readonly cp: FieldRef<"Users", 'String'>
    readonly ville: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly adoptantId: FieldRef<"Users", 'Int'>
    readonly animalId: FieldRef<"Users", 'Int'>
    readonly parrainageId: FieldRef<"Users", 'Int'>
    readonly blogId: FieldRef<"Users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.adoptant
   */
  export type Users$adoptantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoptant
     */
    select?: AdoptantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoptant
     */
    omit?: AdoptantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptantInclude<ExtArgs> | null
    where?: AdoptantWhereInput
  }

  /**
   * Users.planningBalades
   */
  export type Users$planningBaladesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    where?: PlanningBaladesWhereInput
    orderBy?: PlanningBaladesOrderByWithRelationInput | PlanningBaladesOrderByWithRelationInput[]
    cursor?: PlanningBaladesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanningBaladesScalarFieldEnum | PlanningBaladesScalarFieldEnum[]
  }

  /**
   * Users.creneaux
   */
  export type Users$creneauxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    where?: CreneauxWhereInput
    orderBy?: CreneauxOrderByWithRelationInput | CreneauxOrderByWithRelationInput[]
    cursor?: CreneauxWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreneauxScalarFieldEnum | CreneauxScalarFieldEnum[]
  }

  /**
   * Users.Animal
   */
  export type Users$AnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
  }

  /**
   * Users.Parrainage
   */
  export type Users$ParrainageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parrainage
     */
    select?: ParrainageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parrainage
     */
    omit?: ParrainageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParrainageInclude<ExtArgs> | null
    where?: ParrainageWhereInput
  }

  /**
   * Users.Blog
   */
  export type Users$BlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model PlanningBalades
   */

  export type AggregatePlanningBalades = {
    _count: PlanningBaladesCountAggregateOutputType | null
    _avg: PlanningBaladesAvgAggregateOutputType | null
    _sum: PlanningBaladesSumAggregateOutputType | null
    _min: PlanningBaladesMinAggregateOutputType | null
    _max: PlanningBaladesMaxAggregateOutputType | null
  }

  export type PlanningBaladesAvgAggregateOutputType = {
    id: number | null
  }

  export type PlanningBaladesSumAggregateOutputType = {
    id: number | null
  }

  export type PlanningBaladesMinAggregateOutputType = {
    id: number | null
    date: Date | null
    heure: Date | null
    chien_chat: string | null
  }

  export type PlanningBaladesMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    heure: Date | null
    chien_chat: string | null
  }

  export type PlanningBaladesCountAggregateOutputType = {
    id: number
    date: number
    heure: number
    chien_chat: number
    _all: number
  }


  export type PlanningBaladesAvgAggregateInputType = {
    id?: true
  }

  export type PlanningBaladesSumAggregateInputType = {
    id?: true
  }

  export type PlanningBaladesMinAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    chien_chat?: true
  }

  export type PlanningBaladesMaxAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    chien_chat?: true
  }

  export type PlanningBaladesCountAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    chien_chat?: true
    _all?: true
  }

  export type PlanningBaladesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanningBalades to aggregate.
     */
    where?: PlanningBaladesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningBalades to fetch.
     */
    orderBy?: PlanningBaladesOrderByWithRelationInput | PlanningBaladesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanningBaladesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningBalades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningBalades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanningBalades
    **/
    _count?: true | PlanningBaladesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanningBaladesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanningBaladesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanningBaladesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanningBaladesMaxAggregateInputType
  }

  export type GetPlanningBaladesAggregateType<T extends PlanningBaladesAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanningBalades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanningBalades[P]>
      : GetScalarType<T[P], AggregatePlanningBalades[P]>
  }




  export type PlanningBaladesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanningBaladesWhereInput
    orderBy?: PlanningBaladesOrderByWithAggregationInput | PlanningBaladesOrderByWithAggregationInput[]
    by: PlanningBaladesScalarFieldEnum[] | PlanningBaladesScalarFieldEnum
    having?: PlanningBaladesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanningBaladesCountAggregateInputType | true
    _avg?: PlanningBaladesAvgAggregateInputType
    _sum?: PlanningBaladesSumAggregateInputType
    _min?: PlanningBaladesMinAggregateInputType
    _max?: PlanningBaladesMaxAggregateInputType
  }

  export type PlanningBaladesGroupByOutputType = {
    id: number
    date: Date
    heure: Date
    chien_chat: string
    _count: PlanningBaladesCountAggregateOutputType | null
    _avg: PlanningBaladesAvgAggregateOutputType | null
    _sum: PlanningBaladesSumAggregateOutputType | null
    _min: PlanningBaladesMinAggregateOutputType | null
    _max: PlanningBaladesMaxAggregateOutputType | null
  }

  type GetPlanningBaladesGroupByPayload<T extends PlanningBaladesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanningBaladesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanningBaladesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanningBaladesGroupByOutputType[P]>
            : GetScalarType<T[P], PlanningBaladesGroupByOutputType[P]>
        }
      >
    >


  export type PlanningBaladesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    chien_chat?: boolean
    users?: boolean | PlanningBalades$usersArgs<ExtArgs>
    creneaux?: boolean | PlanningBalades$creneauxArgs<ExtArgs>
    _count?: boolean | PlanningBaladesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planningBalades"]>

  export type PlanningBaladesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    chien_chat?: boolean
  }, ExtArgs["result"]["planningBalades"]>

  export type PlanningBaladesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    chien_chat?: boolean
  }, ExtArgs["result"]["planningBalades"]>

  export type PlanningBaladesSelectScalar = {
    id?: boolean
    date?: boolean
    heure?: boolean
    chien_chat?: boolean
  }

  export type PlanningBaladesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "heure" | "chien_chat", ExtArgs["result"]["planningBalades"]>
  export type PlanningBaladesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PlanningBalades$usersArgs<ExtArgs>
    creneaux?: boolean | PlanningBalades$creneauxArgs<ExtArgs>
    _count?: boolean | PlanningBaladesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanningBaladesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanningBaladesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanningBaladesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanningBalades"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
      creneaux: Prisma.$CreneauxPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      heure: Date
      chien_chat: string
    }, ExtArgs["result"]["planningBalades"]>
    composites: {}
  }

  type PlanningBaladesGetPayload<S extends boolean | null | undefined | PlanningBaladesDefaultArgs> = $Result.GetResult<Prisma.$PlanningBaladesPayload, S>

  type PlanningBaladesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanningBaladesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanningBaladesCountAggregateInputType | true
    }

  export interface PlanningBaladesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanningBalades'], meta: { name: 'PlanningBalades' } }
    /**
     * Find zero or one PlanningBalades that matches the filter.
     * @param {PlanningBaladesFindUniqueArgs} args - Arguments to find a PlanningBalades
     * @example
     * // Get one PlanningBalades
     * const planningBalades = await prisma.planningBalades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanningBaladesFindUniqueArgs>(args: SelectSubset<T, PlanningBaladesFindUniqueArgs<ExtArgs>>): Prisma__PlanningBaladesClient<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanningBalades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanningBaladesFindUniqueOrThrowArgs} args - Arguments to find a PlanningBalades
     * @example
     * // Get one PlanningBalades
     * const planningBalades = await prisma.planningBalades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanningBaladesFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanningBaladesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanningBaladesClient<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanningBalades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningBaladesFindFirstArgs} args - Arguments to find a PlanningBalades
     * @example
     * // Get one PlanningBalades
     * const planningBalades = await prisma.planningBalades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanningBaladesFindFirstArgs>(args?: SelectSubset<T, PlanningBaladesFindFirstArgs<ExtArgs>>): Prisma__PlanningBaladesClient<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanningBalades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningBaladesFindFirstOrThrowArgs} args - Arguments to find a PlanningBalades
     * @example
     * // Get one PlanningBalades
     * const planningBalades = await prisma.planningBalades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanningBaladesFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanningBaladesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanningBaladesClient<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanningBalades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningBaladesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanningBalades
     * const planningBalades = await prisma.planningBalades.findMany()
     * 
     * // Get first 10 PlanningBalades
     * const planningBalades = await prisma.planningBalades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planningBaladesWithIdOnly = await prisma.planningBalades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanningBaladesFindManyArgs>(args?: SelectSubset<T, PlanningBaladesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanningBalades.
     * @param {PlanningBaladesCreateArgs} args - Arguments to create a PlanningBalades.
     * @example
     * // Create one PlanningBalades
     * const PlanningBalades = await prisma.planningBalades.create({
     *   data: {
     *     // ... data to create a PlanningBalades
     *   }
     * })
     * 
     */
    create<T extends PlanningBaladesCreateArgs>(args: SelectSubset<T, PlanningBaladesCreateArgs<ExtArgs>>): Prisma__PlanningBaladesClient<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanningBalades.
     * @param {PlanningBaladesCreateManyArgs} args - Arguments to create many PlanningBalades.
     * @example
     * // Create many PlanningBalades
     * const planningBalades = await prisma.planningBalades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanningBaladesCreateManyArgs>(args?: SelectSubset<T, PlanningBaladesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanningBalades and returns the data saved in the database.
     * @param {PlanningBaladesCreateManyAndReturnArgs} args - Arguments to create many PlanningBalades.
     * @example
     * // Create many PlanningBalades
     * const planningBalades = await prisma.planningBalades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanningBalades and only return the `id`
     * const planningBaladesWithIdOnly = await prisma.planningBalades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanningBaladesCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanningBaladesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanningBalades.
     * @param {PlanningBaladesDeleteArgs} args - Arguments to delete one PlanningBalades.
     * @example
     * // Delete one PlanningBalades
     * const PlanningBalades = await prisma.planningBalades.delete({
     *   where: {
     *     // ... filter to delete one PlanningBalades
     *   }
     * })
     * 
     */
    delete<T extends PlanningBaladesDeleteArgs>(args: SelectSubset<T, PlanningBaladesDeleteArgs<ExtArgs>>): Prisma__PlanningBaladesClient<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanningBalades.
     * @param {PlanningBaladesUpdateArgs} args - Arguments to update one PlanningBalades.
     * @example
     * // Update one PlanningBalades
     * const planningBalades = await prisma.planningBalades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanningBaladesUpdateArgs>(args: SelectSubset<T, PlanningBaladesUpdateArgs<ExtArgs>>): Prisma__PlanningBaladesClient<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanningBalades.
     * @param {PlanningBaladesDeleteManyArgs} args - Arguments to filter PlanningBalades to delete.
     * @example
     * // Delete a few PlanningBalades
     * const { count } = await prisma.planningBalades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanningBaladesDeleteManyArgs>(args?: SelectSubset<T, PlanningBaladesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanningBalades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningBaladesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanningBalades
     * const planningBalades = await prisma.planningBalades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanningBaladesUpdateManyArgs>(args: SelectSubset<T, PlanningBaladesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanningBalades and returns the data updated in the database.
     * @param {PlanningBaladesUpdateManyAndReturnArgs} args - Arguments to update many PlanningBalades.
     * @example
     * // Update many PlanningBalades
     * const planningBalades = await prisma.planningBalades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanningBalades and only return the `id`
     * const planningBaladesWithIdOnly = await prisma.planningBalades.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanningBaladesUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanningBaladesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanningBalades.
     * @param {PlanningBaladesUpsertArgs} args - Arguments to update or create a PlanningBalades.
     * @example
     * // Update or create a PlanningBalades
     * const planningBalades = await prisma.planningBalades.upsert({
     *   create: {
     *     // ... data to create a PlanningBalades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanningBalades we want to update
     *   }
     * })
     */
    upsert<T extends PlanningBaladesUpsertArgs>(args: SelectSubset<T, PlanningBaladesUpsertArgs<ExtArgs>>): Prisma__PlanningBaladesClient<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanningBalades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningBaladesCountArgs} args - Arguments to filter PlanningBalades to count.
     * @example
     * // Count the number of PlanningBalades
     * const count = await prisma.planningBalades.count({
     *   where: {
     *     // ... the filter for the PlanningBalades we want to count
     *   }
     * })
    **/
    count<T extends PlanningBaladesCountArgs>(
      args?: Subset<T, PlanningBaladesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanningBaladesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanningBalades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningBaladesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanningBaladesAggregateArgs>(args: Subset<T, PlanningBaladesAggregateArgs>): Prisma.PrismaPromise<GetPlanningBaladesAggregateType<T>>

    /**
     * Group by PlanningBalades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningBaladesGroupByArgs} args - Group by arguments.
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
      T extends PlanningBaladesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanningBaladesGroupByArgs['orderBy'] }
        : { orderBy?: PlanningBaladesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanningBaladesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanningBaladesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanningBalades model
   */
  readonly fields: PlanningBaladesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanningBalades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanningBaladesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends PlanningBalades$usersArgs<ExtArgs> = {}>(args?: Subset<T, PlanningBalades$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creneaux<T extends PlanningBalades$creneauxArgs<ExtArgs> = {}>(args?: Subset<T, PlanningBalades$creneauxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PlanningBalades model
   */
  interface PlanningBaladesFieldRefs {
    readonly id: FieldRef<"PlanningBalades", 'Int'>
    readonly date: FieldRef<"PlanningBalades", 'DateTime'>
    readonly heure: FieldRef<"PlanningBalades", 'DateTime'>
    readonly chien_chat: FieldRef<"PlanningBalades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlanningBalades findUnique
   */
  export type PlanningBaladesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    /**
     * Filter, which PlanningBalades to fetch.
     */
    where: PlanningBaladesWhereUniqueInput
  }

  /**
   * PlanningBalades findUniqueOrThrow
   */
  export type PlanningBaladesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    /**
     * Filter, which PlanningBalades to fetch.
     */
    where: PlanningBaladesWhereUniqueInput
  }

  /**
   * PlanningBalades findFirst
   */
  export type PlanningBaladesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    /**
     * Filter, which PlanningBalades to fetch.
     */
    where?: PlanningBaladesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningBalades to fetch.
     */
    orderBy?: PlanningBaladesOrderByWithRelationInput | PlanningBaladesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanningBalades.
     */
    cursor?: PlanningBaladesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningBalades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningBalades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanningBalades.
     */
    distinct?: PlanningBaladesScalarFieldEnum | PlanningBaladesScalarFieldEnum[]
  }

  /**
   * PlanningBalades findFirstOrThrow
   */
  export type PlanningBaladesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    /**
     * Filter, which PlanningBalades to fetch.
     */
    where?: PlanningBaladesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningBalades to fetch.
     */
    orderBy?: PlanningBaladesOrderByWithRelationInput | PlanningBaladesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanningBalades.
     */
    cursor?: PlanningBaladesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningBalades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningBalades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanningBalades.
     */
    distinct?: PlanningBaladesScalarFieldEnum | PlanningBaladesScalarFieldEnum[]
  }

  /**
   * PlanningBalades findMany
   */
  export type PlanningBaladesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    /**
     * Filter, which PlanningBalades to fetch.
     */
    where?: PlanningBaladesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningBalades to fetch.
     */
    orderBy?: PlanningBaladesOrderByWithRelationInput | PlanningBaladesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanningBalades.
     */
    cursor?: PlanningBaladesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningBalades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningBalades.
     */
    skip?: number
    distinct?: PlanningBaladesScalarFieldEnum | PlanningBaladesScalarFieldEnum[]
  }

  /**
   * PlanningBalades create
   */
  export type PlanningBaladesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanningBalades.
     */
    data: XOR<PlanningBaladesCreateInput, PlanningBaladesUncheckedCreateInput>
  }

  /**
   * PlanningBalades createMany
   */
  export type PlanningBaladesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanningBalades.
     */
    data: PlanningBaladesCreateManyInput | PlanningBaladesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanningBalades createManyAndReturn
   */
  export type PlanningBaladesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * The data used to create many PlanningBalades.
     */
    data: PlanningBaladesCreateManyInput | PlanningBaladesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanningBalades update
   */
  export type PlanningBaladesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanningBalades.
     */
    data: XOR<PlanningBaladesUpdateInput, PlanningBaladesUncheckedUpdateInput>
    /**
     * Choose, which PlanningBalades to update.
     */
    where: PlanningBaladesWhereUniqueInput
  }

  /**
   * PlanningBalades updateMany
   */
  export type PlanningBaladesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanningBalades.
     */
    data: XOR<PlanningBaladesUpdateManyMutationInput, PlanningBaladesUncheckedUpdateManyInput>
    /**
     * Filter which PlanningBalades to update
     */
    where?: PlanningBaladesWhereInput
    /**
     * Limit how many PlanningBalades to update.
     */
    limit?: number
  }

  /**
   * PlanningBalades updateManyAndReturn
   */
  export type PlanningBaladesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * The data used to update PlanningBalades.
     */
    data: XOR<PlanningBaladesUpdateManyMutationInput, PlanningBaladesUncheckedUpdateManyInput>
    /**
     * Filter which PlanningBalades to update
     */
    where?: PlanningBaladesWhereInput
    /**
     * Limit how many PlanningBalades to update.
     */
    limit?: number
  }

  /**
   * PlanningBalades upsert
   */
  export type PlanningBaladesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanningBalades to update in case it exists.
     */
    where: PlanningBaladesWhereUniqueInput
    /**
     * In case the PlanningBalades found by the `where` argument doesn't exist, create a new PlanningBalades with this data.
     */
    create: XOR<PlanningBaladesCreateInput, PlanningBaladesUncheckedCreateInput>
    /**
     * In case the PlanningBalades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanningBaladesUpdateInput, PlanningBaladesUncheckedUpdateInput>
  }

  /**
   * PlanningBalades delete
   */
  export type PlanningBaladesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
    /**
     * Filter which PlanningBalades to delete.
     */
    where: PlanningBaladesWhereUniqueInput
  }

  /**
   * PlanningBalades deleteMany
   */
  export type PlanningBaladesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanningBalades to delete
     */
    where?: PlanningBaladesWhereInput
    /**
     * Limit how many PlanningBalades to delete.
     */
    limit?: number
  }

  /**
   * PlanningBalades.users
   */
  export type PlanningBalades$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * PlanningBalades.creneaux
   */
  export type PlanningBalades$creneauxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    where?: CreneauxWhereInput
    orderBy?: CreneauxOrderByWithRelationInput | CreneauxOrderByWithRelationInput[]
    cursor?: CreneauxWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreneauxScalarFieldEnum | CreneauxScalarFieldEnum[]
  }

  /**
   * PlanningBalades without action
   */
  export type PlanningBaladesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningBalades
     */
    select?: PlanningBaladesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningBalades
     */
    omit?: PlanningBaladesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningBaladesInclude<ExtArgs> | null
  }


  /**
   * Model Creneaux
   */

  export type AggregateCreneaux = {
    _count: CreneauxCountAggregateOutputType | null
    _avg: CreneauxAvgAggregateOutputType | null
    _sum: CreneauxSumAggregateOutputType | null
    _min: CreneauxMinAggregateOutputType | null
    _max: CreneauxMaxAggregateOutputType | null
  }

  export type CreneauxAvgAggregateOutputType = {
    id: number | null
    id_users: number | null
    id_planning: number | null
  }

  export type CreneauxSumAggregateOutputType = {
    id: number | null
    id_users: number | null
    id_planning: number | null
  }

  export type CreneauxMinAggregateOutputType = {
    id: number | null
    id_users: number | null
    id_planning: number | null
  }

  export type CreneauxMaxAggregateOutputType = {
    id: number | null
    id_users: number | null
    id_planning: number | null
  }

  export type CreneauxCountAggregateOutputType = {
    id: number
    id_users: number
    id_planning: number
    _all: number
  }


  export type CreneauxAvgAggregateInputType = {
    id?: true
    id_users?: true
    id_planning?: true
  }

  export type CreneauxSumAggregateInputType = {
    id?: true
    id_users?: true
    id_planning?: true
  }

  export type CreneauxMinAggregateInputType = {
    id?: true
    id_users?: true
    id_planning?: true
  }

  export type CreneauxMaxAggregateInputType = {
    id?: true
    id_users?: true
    id_planning?: true
  }

  export type CreneauxCountAggregateInputType = {
    id?: true
    id_users?: true
    id_planning?: true
    _all?: true
  }

  export type CreneauxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creneaux to aggregate.
     */
    where?: CreneauxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creneaux to fetch.
     */
    orderBy?: CreneauxOrderByWithRelationInput | CreneauxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreneauxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creneaux from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creneaux.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Creneaux
    **/
    _count?: true | CreneauxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreneauxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreneauxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreneauxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreneauxMaxAggregateInputType
  }

  export type GetCreneauxAggregateType<T extends CreneauxAggregateArgs> = {
        [P in keyof T & keyof AggregateCreneaux]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreneaux[P]>
      : GetScalarType<T[P], AggregateCreneaux[P]>
  }




  export type CreneauxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreneauxWhereInput
    orderBy?: CreneauxOrderByWithAggregationInput | CreneauxOrderByWithAggregationInput[]
    by: CreneauxScalarFieldEnum[] | CreneauxScalarFieldEnum
    having?: CreneauxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreneauxCountAggregateInputType | true
    _avg?: CreneauxAvgAggregateInputType
    _sum?: CreneauxSumAggregateInputType
    _min?: CreneauxMinAggregateInputType
    _max?: CreneauxMaxAggregateInputType
  }

  export type CreneauxGroupByOutputType = {
    id: number
    id_users: number
    id_planning: number
    _count: CreneauxCountAggregateOutputType | null
    _avg: CreneauxAvgAggregateOutputType | null
    _sum: CreneauxSumAggregateOutputType | null
    _min: CreneauxMinAggregateOutputType | null
    _max: CreneauxMaxAggregateOutputType | null
  }

  type GetCreneauxGroupByPayload<T extends CreneauxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreneauxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreneauxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreneauxGroupByOutputType[P]>
            : GetScalarType<T[P], CreneauxGroupByOutputType[P]>
        }
      >
    >


  export type CreneauxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_users?: boolean
    id_planning?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    planning?: boolean | PlanningBaladesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creneaux"]>

  export type CreneauxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_users?: boolean
    id_planning?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    planning?: boolean | PlanningBaladesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creneaux"]>

  export type CreneauxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_users?: boolean
    id_planning?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    planning?: boolean | PlanningBaladesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creneaux"]>

  export type CreneauxSelectScalar = {
    id?: boolean
    id_users?: boolean
    id_planning?: boolean
  }

  export type CreneauxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_users" | "id_planning", ExtArgs["result"]["creneaux"]>
  export type CreneauxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    planning?: boolean | PlanningBaladesDefaultArgs<ExtArgs>
  }
  export type CreneauxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    planning?: boolean | PlanningBaladesDefaultArgs<ExtArgs>
  }
  export type CreneauxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    planning?: boolean | PlanningBaladesDefaultArgs<ExtArgs>
  }

  export type $CreneauxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Creneaux"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      planning: Prisma.$PlanningBaladesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_users: number
      id_planning: number
    }, ExtArgs["result"]["creneaux"]>
    composites: {}
  }

  type CreneauxGetPayload<S extends boolean | null | undefined | CreneauxDefaultArgs> = $Result.GetResult<Prisma.$CreneauxPayload, S>

  type CreneauxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreneauxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreneauxCountAggregateInputType | true
    }

  export interface CreneauxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Creneaux'], meta: { name: 'Creneaux' } }
    /**
     * Find zero or one Creneaux that matches the filter.
     * @param {CreneauxFindUniqueArgs} args - Arguments to find a Creneaux
     * @example
     * // Get one Creneaux
     * const creneaux = await prisma.creneaux.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreneauxFindUniqueArgs>(args: SelectSubset<T, CreneauxFindUniqueArgs<ExtArgs>>): Prisma__CreneauxClient<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Creneaux that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreneauxFindUniqueOrThrowArgs} args - Arguments to find a Creneaux
     * @example
     * // Get one Creneaux
     * const creneaux = await prisma.creneaux.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreneauxFindUniqueOrThrowArgs>(args: SelectSubset<T, CreneauxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreneauxClient<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creneaux that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreneauxFindFirstArgs} args - Arguments to find a Creneaux
     * @example
     * // Get one Creneaux
     * const creneaux = await prisma.creneaux.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreneauxFindFirstArgs>(args?: SelectSubset<T, CreneauxFindFirstArgs<ExtArgs>>): Prisma__CreneauxClient<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creneaux that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreneauxFindFirstOrThrowArgs} args - Arguments to find a Creneaux
     * @example
     * // Get one Creneaux
     * const creneaux = await prisma.creneaux.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreneauxFindFirstOrThrowArgs>(args?: SelectSubset<T, CreneauxFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreneauxClient<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Creneaux that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreneauxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Creneaux
     * const creneaux = await prisma.creneaux.findMany()
     * 
     * // Get first 10 Creneaux
     * const creneaux = await prisma.creneaux.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creneauxWithIdOnly = await prisma.creneaux.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreneauxFindManyArgs>(args?: SelectSubset<T, CreneauxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Creneaux.
     * @param {CreneauxCreateArgs} args - Arguments to create a Creneaux.
     * @example
     * // Create one Creneaux
     * const Creneaux = await prisma.creneaux.create({
     *   data: {
     *     // ... data to create a Creneaux
     *   }
     * })
     * 
     */
    create<T extends CreneauxCreateArgs>(args: SelectSubset<T, CreneauxCreateArgs<ExtArgs>>): Prisma__CreneauxClient<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Creneaux.
     * @param {CreneauxCreateManyArgs} args - Arguments to create many Creneaux.
     * @example
     * // Create many Creneaux
     * const creneaux = await prisma.creneaux.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreneauxCreateManyArgs>(args?: SelectSubset<T, CreneauxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Creneaux and returns the data saved in the database.
     * @param {CreneauxCreateManyAndReturnArgs} args - Arguments to create many Creneaux.
     * @example
     * // Create many Creneaux
     * const creneaux = await prisma.creneaux.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Creneaux and only return the `id`
     * const creneauxWithIdOnly = await prisma.creneaux.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreneauxCreateManyAndReturnArgs>(args?: SelectSubset<T, CreneauxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Creneaux.
     * @param {CreneauxDeleteArgs} args - Arguments to delete one Creneaux.
     * @example
     * // Delete one Creneaux
     * const Creneaux = await prisma.creneaux.delete({
     *   where: {
     *     // ... filter to delete one Creneaux
     *   }
     * })
     * 
     */
    delete<T extends CreneauxDeleteArgs>(args: SelectSubset<T, CreneauxDeleteArgs<ExtArgs>>): Prisma__CreneauxClient<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Creneaux.
     * @param {CreneauxUpdateArgs} args - Arguments to update one Creneaux.
     * @example
     * // Update one Creneaux
     * const creneaux = await prisma.creneaux.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreneauxUpdateArgs>(args: SelectSubset<T, CreneauxUpdateArgs<ExtArgs>>): Prisma__CreneauxClient<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Creneaux.
     * @param {CreneauxDeleteManyArgs} args - Arguments to filter Creneaux to delete.
     * @example
     * // Delete a few Creneaux
     * const { count } = await prisma.creneaux.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreneauxDeleteManyArgs>(args?: SelectSubset<T, CreneauxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creneaux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreneauxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Creneaux
     * const creneaux = await prisma.creneaux.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreneauxUpdateManyArgs>(args: SelectSubset<T, CreneauxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creneaux and returns the data updated in the database.
     * @param {CreneauxUpdateManyAndReturnArgs} args - Arguments to update many Creneaux.
     * @example
     * // Update many Creneaux
     * const creneaux = await prisma.creneaux.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Creneaux and only return the `id`
     * const creneauxWithIdOnly = await prisma.creneaux.updateManyAndReturn({
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
    updateManyAndReturn<T extends CreneauxUpdateManyAndReturnArgs>(args: SelectSubset<T, CreneauxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Creneaux.
     * @param {CreneauxUpsertArgs} args - Arguments to update or create a Creneaux.
     * @example
     * // Update or create a Creneaux
     * const creneaux = await prisma.creneaux.upsert({
     *   create: {
     *     // ... data to create a Creneaux
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Creneaux we want to update
     *   }
     * })
     */
    upsert<T extends CreneauxUpsertArgs>(args: SelectSubset<T, CreneauxUpsertArgs<ExtArgs>>): Prisma__CreneauxClient<$Result.GetResult<Prisma.$CreneauxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Creneaux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreneauxCountArgs} args - Arguments to filter Creneaux to count.
     * @example
     * // Count the number of Creneaux
     * const count = await prisma.creneaux.count({
     *   where: {
     *     // ... the filter for the Creneaux we want to count
     *   }
     * })
    **/
    count<T extends CreneauxCountArgs>(
      args?: Subset<T, CreneauxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreneauxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Creneaux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreneauxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreneauxAggregateArgs>(args: Subset<T, CreneauxAggregateArgs>): Prisma.PrismaPromise<GetCreneauxAggregateType<T>>

    /**
     * Group by Creneaux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreneauxGroupByArgs} args - Group by arguments.
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
      T extends CreneauxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreneauxGroupByArgs['orderBy'] }
        : { orderBy?: CreneauxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreneauxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreneauxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Creneaux model
   */
  readonly fields: CreneauxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Creneaux.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreneauxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    planning<T extends PlanningBaladesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanningBaladesDefaultArgs<ExtArgs>>): Prisma__PlanningBaladesClient<$Result.GetResult<Prisma.$PlanningBaladesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Creneaux model
   */
  interface CreneauxFieldRefs {
    readonly id: FieldRef<"Creneaux", 'Int'>
    readonly id_users: FieldRef<"Creneaux", 'Int'>
    readonly id_planning: FieldRef<"Creneaux", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Creneaux findUnique
   */
  export type CreneauxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    /**
     * Filter, which Creneaux to fetch.
     */
    where: CreneauxWhereUniqueInput
  }

  /**
   * Creneaux findUniqueOrThrow
   */
  export type CreneauxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    /**
     * Filter, which Creneaux to fetch.
     */
    where: CreneauxWhereUniqueInput
  }

  /**
   * Creneaux findFirst
   */
  export type CreneauxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    /**
     * Filter, which Creneaux to fetch.
     */
    where?: CreneauxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creneaux to fetch.
     */
    orderBy?: CreneauxOrderByWithRelationInput | CreneauxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creneaux.
     */
    cursor?: CreneauxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creneaux from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creneaux.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creneaux.
     */
    distinct?: CreneauxScalarFieldEnum | CreneauxScalarFieldEnum[]
  }

  /**
   * Creneaux findFirstOrThrow
   */
  export type CreneauxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    /**
     * Filter, which Creneaux to fetch.
     */
    where?: CreneauxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creneaux to fetch.
     */
    orderBy?: CreneauxOrderByWithRelationInput | CreneauxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creneaux.
     */
    cursor?: CreneauxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creneaux from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creneaux.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creneaux.
     */
    distinct?: CreneauxScalarFieldEnum | CreneauxScalarFieldEnum[]
  }

  /**
   * Creneaux findMany
   */
  export type CreneauxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    /**
     * Filter, which Creneaux to fetch.
     */
    where?: CreneauxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creneaux to fetch.
     */
    orderBy?: CreneauxOrderByWithRelationInput | CreneauxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Creneaux.
     */
    cursor?: CreneauxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creneaux from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creneaux.
     */
    skip?: number
    distinct?: CreneauxScalarFieldEnum | CreneauxScalarFieldEnum[]
  }

  /**
   * Creneaux create
   */
  export type CreneauxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    /**
     * The data needed to create a Creneaux.
     */
    data: XOR<CreneauxCreateInput, CreneauxUncheckedCreateInput>
  }

  /**
   * Creneaux createMany
   */
  export type CreneauxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Creneaux.
     */
    data: CreneauxCreateManyInput | CreneauxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Creneaux createManyAndReturn
   */
  export type CreneauxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * The data used to create many Creneaux.
     */
    data: CreneauxCreateManyInput | CreneauxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Creneaux update
   */
  export type CreneauxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    /**
     * The data needed to update a Creneaux.
     */
    data: XOR<CreneauxUpdateInput, CreneauxUncheckedUpdateInput>
    /**
     * Choose, which Creneaux to update.
     */
    where: CreneauxWhereUniqueInput
  }

  /**
   * Creneaux updateMany
   */
  export type CreneauxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Creneaux.
     */
    data: XOR<CreneauxUpdateManyMutationInput, CreneauxUncheckedUpdateManyInput>
    /**
     * Filter which Creneaux to update
     */
    where?: CreneauxWhereInput
    /**
     * Limit how many Creneaux to update.
     */
    limit?: number
  }

  /**
   * Creneaux updateManyAndReturn
   */
  export type CreneauxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * The data used to update Creneaux.
     */
    data: XOR<CreneauxUpdateManyMutationInput, CreneauxUncheckedUpdateManyInput>
    /**
     * Filter which Creneaux to update
     */
    where?: CreneauxWhereInput
    /**
     * Limit how many Creneaux to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Creneaux upsert
   */
  export type CreneauxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    /**
     * The filter to search for the Creneaux to update in case it exists.
     */
    where: CreneauxWhereUniqueInput
    /**
     * In case the Creneaux found by the `where` argument doesn't exist, create a new Creneaux with this data.
     */
    create: XOR<CreneauxCreateInput, CreneauxUncheckedCreateInput>
    /**
     * In case the Creneaux was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreneauxUpdateInput, CreneauxUncheckedUpdateInput>
  }

  /**
   * Creneaux delete
   */
  export type CreneauxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
    /**
     * Filter which Creneaux to delete.
     */
    where: CreneauxWhereUniqueInput
  }

  /**
   * Creneaux deleteMany
   */
  export type CreneauxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creneaux to delete
     */
    where?: CreneauxWhereInput
    /**
     * Limit how many Creneaux to delete.
     */
    limit?: number
  }

  /**
   * Creneaux without action
   */
  export type CreneauxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creneaux
     */
    select?: CreneauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creneaux
     */
    omit?: CreneauxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreneauxInclude<ExtArgs> | null
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


  export const AdoptantScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    adresse: 'adresse',
    cp: 'cp',
    ville: 'ville',
    historiqueAdoption: 'historiqueAdoption',
    commentaires: 'commentaires'
  };

  export type AdoptantScalarFieldEnum = (typeof AdoptantScalarFieldEnum)[keyof typeof AdoptantScalarFieldEnum]


  export const AdoptionScalarFieldEnum: {
    id: 'id',
    dateAdoption: 'dateAdoption',
    typeAdoption: 'typeAdoption',
    id_animal: 'id_animal',
    id_adoptant: 'id_adoptant'
  };

  export type AdoptionScalarFieldEnum = (typeof AdoptionScalarFieldEnum)[keyof typeof AdoptionScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    age: 'age',
    sexe: 'sexe',
    espece: 'espece',
    race: 'race',
    N_identification: 'N_identification',
    description: 'description',
    image: 'image',
    statut: 'statut',
    dateArrivee: 'dateArrivee'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const EvolutionScalarFieldEnum: {
    id: 'id',
    id_animal: 'id_animal',
    date: 'date',
    motif: 'motif',
    observations: 'observations'
  };

  export type EvolutionScalarFieldEnum = (typeof EvolutionScalarFieldEnum)[keyof typeof EvolutionScalarFieldEnum]


  export const SuiviVeterinaireScalarFieldEnum: {
    id: 'id',
    id_animal: 'id_animal',
    dateVisite: 'dateVisite',
    motif: 'motif',
    observations: 'observations',
    traitement: 'traitement',
    validationAdoption: 'validationAdoption'
  };

  export type SuiviVeterinaireScalarFieldEnum = (typeof SuiviVeterinaireScalarFieldEnum)[keyof typeof SuiviVeterinaireScalarFieldEnum]


  export const ParrainageScalarFieldEnum: {
    id: 'id',
    id_animal: 'id_animal',
    dateDebutParrainage: 'dateDebutParrainage',
    description: 'description',
    dateFinParrainage: 'dateFinParrainage'
  };

  export type ParrainageScalarFieldEnum = (typeof ParrainageScalarFieldEnum)[keyof typeof ParrainageScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    id: 'id',
    id_animal: 'id_animal',
    date: 'date',
    heure: 'heure',
    titre: 'titre',
    article: 'article',
    image: 'image'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    date: 'date',
    heure: 'heure',
    titre: 'titre',
    article: 'article',
    image: 'image'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const SignalementScalarFieldEnum: {
    id: 'id',
    date: 'date',
    heure: 'heure',
    lieu: 'lieu',
    description: 'description',
    emailFacultatif: 'emailFacultatif'
  };

  export type SignalementScalarFieldEnum = (typeof SignalementScalarFieldEnum)[keyof typeof SignalementScalarFieldEnum]


  export const VitrineProduitsScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    prix: 'prix'
  };

  export type VitrineProduitsScalarFieldEnum = (typeof VitrineProduitsScalarFieldEnum)[keyof typeof VitrineProduitsScalarFieldEnum]


  export const AiderScalarFieldEnum: {
    id: 'id',
    date: 'date',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    financier: 'financier',
    materiel: 'materiel',
    parrainage: 'parrainage',
    message: 'message'
  };

  export type AiderScalarFieldEnum = (typeof AiderScalarFieldEnum)[keyof typeof AiderScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    nom: 'nom',
    prenom: 'prenom',
    motDePasse: 'motDePasse',
    telephone: 'telephone',
    adresse: 'adresse',
    cp: 'cp',
    ville: 'ville',
    role: 'role',
    adoptantId: 'adoptantId',
    animalId: 'animalId',
    parrainageId: 'parrainageId',
    blogId: 'blogId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PlanningBaladesScalarFieldEnum: {
    id: 'id',
    date: 'date',
    heure: 'heure',
    chien_chat: 'chien_chat'
  };

  export type PlanningBaladesScalarFieldEnum = (typeof PlanningBaladesScalarFieldEnum)[keyof typeof PlanningBaladesScalarFieldEnum]


  export const CreneauxScalarFieldEnum: {
    id: 'id',
    id_users: 'id_users',
    id_planning: 'id_planning'
  };

  export type CreneauxScalarFieldEnum = (typeof CreneauxScalarFieldEnum)[keyof typeof CreneauxScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdoptantWhereInput = {
    AND?: AdoptantWhereInput | AdoptantWhereInput[]
    OR?: AdoptantWhereInput[]
    NOT?: AdoptantWhereInput | AdoptantWhereInput[]
    id?: IntFilter<"Adoptant"> | number
    nom?: StringFilter<"Adoptant"> | string
    prenom?: StringFilter<"Adoptant"> | string
    email?: StringFilter<"Adoptant"> | string
    telephone?: StringFilter<"Adoptant"> | string
    adresse?: StringFilter<"Adoptant"> | string
    cp?: StringFilter<"Adoptant"> | string
    ville?: StringFilter<"Adoptant"> | string
    historiqueAdoption?: StringFilter<"Adoptant"> | string
    commentaires?: StringFilter<"Adoptant"> | string
    users?: UsersListRelationFilter
    Adoption?: AdoptionListRelationFilter
  }

  export type AdoptantOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    historiqueAdoption?: SortOrder
    commentaires?: SortOrder
    users?: UsersOrderByRelationAggregateInput
    Adoption?: AdoptionOrderByRelationAggregateInput
  }

  export type AdoptantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdoptantWhereInput | AdoptantWhereInput[]
    OR?: AdoptantWhereInput[]
    NOT?: AdoptantWhereInput | AdoptantWhereInput[]
    nom?: StringFilter<"Adoptant"> | string
    prenom?: StringFilter<"Adoptant"> | string
    telephone?: StringFilter<"Adoptant"> | string
    adresse?: StringFilter<"Adoptant"> | string
    cp?: StringFilter<"Adoptant"> | string
    ville?: StringFilter<"Adoptant"> | string
    historiqueAdoption?: StringFilter<"Adoptant"> | string
    commentaires?: StringFilter<"Adoptant"> | string
    users?: UsersListRelationFilter
    Adoption?: AdoptionListRelationFilter
  }, "id" | "email">

  export type AdoptantOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    historiqueAdoption?: SortOrder
    commentaires?: SortOrder
    _count?: AdoptantCountOrderByAggregateInput
    _avg?: AdoptantAvgOrderByAggregateInput
    _max?: AdoptantMaxOrderByAggregateInput
    _min?: AdoptantMinOrderByAggregateInput
    _sum?: AdoptantSumOrderByAggregateInput
  }

  export type AdoptantScalarWhereWithAggregatesInput = {
    AND?: AdoptantScalarWhereWithAggregatesInput | AdoptantScalarWhereWithAggregatesInput[]
    OR?: AdoptantScalarWhereWithAggregatesInput[]
    NOT?: AdoptantScalarWhereWithAggregatesInput | AdoptantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Adoptant"> | number
    nom?: StringWithAggregatesFilter<"Adoptant"> | string
    prenom?: StringWithAggregatesFilter<"Adoptant"> | string
    email?: StringWithAggregatesFilter<"Adoptant"> | string
    telephone?: StringWithAggregatesFilter<"Adoptant"> | string
    adresse?: StringWithAggregatesFilter<"Adoptant"> | string
    cp?: StringWithAggregatesFilter<"Adoptant"> | string
    ville?: StringWithAggregatesFilter<"Adoptant"> | string
    historiqueAdoption?: StringWithAggregatesFilter<"Adoptant"> | string
    commentaires?: StringWithAggregatesFilter<"Adoptant"> | string
  }

  export type AdoptionWhereInput = {
    AND?: AdoptionWhereInput | AdoptionWhereInput[]
    OR?: AdoptionWhereInput[]
    NOT?: AdoptionWhereInput | AdoptionWhereInput[]
    id?: IntFilter<"Adoption"> | number
    dateAdoption?: DateTimeFilter<"Adoption"> | Date | string
    typeAdoption?: StringFilter<"Adoption"> | string
    id_animal?: IntFilter<"Adoption"> | number
    id_adoptant?: IntFilter<"Adoption"> | number
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    adoptant?: XOR<AdoptantScalarRelationFilter, AdoptantWhereInput>
  }

  export type AdoptionOrderByWithRelationInput = {
    id?: SortOrder
    dateAdoption?: SortOrder
    typeAdoption?: SortOrder
    id_animal?: SortOrder
    id_adoptant?: SortOrder
    animal?: AnimalOrderByWithRelationInput
    adoptant?: AdoptantOrderByWithRelationInput
  }

  export type AdoptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdoptionWhereInput | AdoptionWhereInput[]
    OR?: AdoptionWhereInput[]
    NOT?: AdoptionWhereInput | AdoptionWhereInput[]
    dateAdoption?: DateTimeFilter<"Adoption"> | Date | string
    typeAdoption?: StringFilter<"Adoption"> | string
    id_animal?: IntFilter<"Adoption"> | number
    id_adoptant?: IntFilter<"Adoption"> | number
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    adoptant?: XOR<AdoptantScalarRelationFilter, AdoptantWhereInput>
  }, "id">

  export type AdoptionOrderByWithAggregationInput = {
    id?: SortOrder
    dateAdoption?: SortOrder
    typeAdoption?: SortOrder
    id_animal?: SortOrder
    id_adoptant?: SortOrder
    _count?: AdoptionCountOrderByAggregateInput
    _avg?: AdoptionAvgOrderByAggregateInput
    _max?: AdoptionMaxOrderByAggregateInput
    _min?: AdoptionMinOrderByAggregateInput
    _sum?: AdoptionSumOrderByAggregateInput
  }

  export type AdoptionScalarWhereWithAggregatesInput = {
    AND?: AdoptionScalarWhereWithAggregatesInput | AdoptionScalarWhereWithAggregatesInput[]
    OR?: AdoptionScalarWhereWithAggregatesInput[]
    NOT?: AdoptionScalarWhereWithAggregatesInput | AdoptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Adoption"> | number
    dateAdoption?: DateTimeWithAggregatesFilter<"Adoption"> | Date | string
    typeAdoption?: StringWithAggregatesFilter<"Adoption"> | string
    id_animal?: IntWithAggregatesFilter<"Adoption"> | number
    id_adoptant?: IntWithAggregatesFilter<"Adoption"> | number
  }

  export type AnimalWhereInput = {
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    id?: IntFilter<"Animal"> | number
    nom?: StringFilter<"Animal"> | string
    age?: IntFilter<"Animal"> | number
    sexe?: StringFilter<"Animal"> | string
    espece?: StringFilter<"Animal"> | string
    race?: StringFilter<"Animal"> | string
    N_identification?: StringFilter<"Animal"> | string
    description?: StringFilter<"Animal"> | string
    image?: StringFilter<"Animal"> | string
    statut?: StringFilter<"Animal"> | string
    dateArrivee?: DateTimeFilter<"Animal"> | Date | string
    users?: UsersListRelationFilter
    evolution?: EvolutionListRelationFilter
    suiviVeterinaire?: SuiviVeterinaireListRelationFilter
    parrainage?: ParrainageListRelationFilter
    publication?: PublicationListRelationFilter
    Adoption?: AdoptionListRelationFilter
  }

  export type AnimalOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    age?: SortOrder
    sexe?: SortOrder
    espece?: SortOrder
    race?: SortOrder
    N_identification?: SortOrder
    description?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    dateArrivee?: SortOrder
    users?: UsersOrderByRelationAggregateInput
    evolution?: EvolutionOrderByRelationAggregateInput
    suiviVeterinaire?: SuiviVeterinaireOrderByRelationAggregateInput
    parrainage?: ParrainageOrderByRelationAggregateInput
    publication?: PublicationOrderByRelationAggregateInput
    Adoption?: AdoptionOrderByRelationAggregateInput
  }

  export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    nom?: StringFilter<"Animal"> | string
    age?: IntFilter<"Animal"> | number
    sexe?: StringFilter<"Animal"> | string
    espece?: StringFilter<"Animal"> | string
    race?: StringFilter<"Animal"> | string
    N_identification?: StringFilter<"Animal"> | string
    description?: StringFilter<"Animal"> | string
    image?: StringFilter<"Animal"> | string
    statut?: StringFilter<"Animal"> | string
    dateArrivee?: DateTimeFilter<"Animal"> | Date | string
    users?: UsersListRelationFilter
    evolution?: EvolutionListRelationFilter
    suiviVeterinaire?: SuiviVeterinaireListRelationFilter
    parrainage?: ParrainageListRelationFilter
    publication?: PublicationListRelationFilter
    Adoption?: AdoptionListRelationFilter
  }, "id">

  export type AnimalOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    age?: SortOrder
    sexe?: SortOrder
    espece?: SortOrder
    race?: SortOrder
    N_identification?: SortOrder
    description?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    dateArrivee?: SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _avg?: AnimalAvgOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
    _sum?: AnimalSumOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    OR?: AnimalScalarWhereWithAggregatesInput[]
    NOT?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animal"> | number
    nom?: StringWithAggregatesFilter<"Animal"> | string
    age?: IntWithAggregatesFilter<"Animal"> | number
    sexe?: StringWithAggregatesFilter<"Animal"> | string
    espece?: StringWithAggregatesFilter<"Animal"> | string
    race?: StringWithAggregatesFilter<"Animal"> | string
    N_identification?: StringWithAggregatesFilter<"Animal"> | string
    description?: StringWithAggregatesFilter<"Animal"> | string
    image?: StringWithAggregatesFilter<"Animal"> | string
    statut?: StringWithAggregatesFilter<"Animal"> | string
    dateArrivee?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
  }

  export type EvolutionWhereInput = {
    AND?: EvolutionWhereInput | EvolutionWhereInput[]
    OR?: EvolutionWhereInput[]
    NOT?: EvolutionWhereInput | EvolutionWhereInput[]
    id?: IntFilter<"Evolution"> | number
    id_animal?: IntFilter<"Evolution"> | number
    date?: DateTimeFilter<"Evolution"> | Date | string
    motif?: StringFilter<"Evolution"> | string
    observations?: StringFilter<"Evolution"> | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }

  export type EvolutionOrderByWithRelationInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
    animal?: AnimalOrderByWithRelationInput
  }

  export type EvolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EvolutionWhereInput | EvolutionWhereInput[]
    OR?: EvolutionWhereInput[]
    NOT?: EvolutionWhereInput | EvolutionWhereInput[]
    id_animal?: IntFilter<"Evolution"> | number
    date?: DateTimeFilter<"Evolution"> | Date | string
    motif?: StringFilter<"Evolution"> | string
    observations?: StringFilter<"Evolution"> | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }, "id">

  export type EvolutionOrderByWithAggregationInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
    _count?: EvolutionCountOrderByAggregateInput
    _avg?: EvolutionAvgOrderByAggregateInput
    _max?: EvolutionMaxOrderByAggregateInput
    _min?: EvolutionMinOrderByAggregateInput
    _sum?: EvolutionSumOrderByAggregateInput
  }

  export type EvolutionScalarWhereWithAggregatesInput = {
    AND?: EvolutionScalarWhereWithAggregatesInput | EvolutionScalarWhereWithAggregatesInput[]
    OR?: EvolutionScalarWhereWithAggregatesInput[]
    NOT?: EvolutionScalarWhereWithAggregatesInput | EvolutionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evolution"> | number
    id_animal?: IntWithAggregatesFilter<"Evolution"> | number
    date?: DateTimeWithAggregatesFilter<"Evolution"> | Date | string
    motif?: StringWithAggregatesFilter<"Evolution"> | string
    observations?: StringWithAggregatesFilter<"Evolution"> | string
  }

  export type SuiviVeterinaireWhereInput = {
    AND?: SuiviVeterinaireWhereInput | SuiviVeterinaireWhereInput[]
    OR?: SuiviVeterinaireWhereInput[]
    NOT?: SuiviVeterinaireWhereInput | SuiviVeterinaireWhereInput[]
    id?: IntFilter<"SuiviVeterinaire"> | number
    id_animal?: IntFilter<"SuiviVeterinaire"> | number
    dateVisite?: DateTimeFilter<"SuiviVeterinaire"> | Date | string
    motif?: StringFilter<"SuiviVeterinaire"> | string
    observations?: StringFilter<"SuiviVeterinaire"> | string
    traitement?: StringFilter<"SuiviVeterinaire"> | string
    validationAdoption?: StringFilter<"SuiviVeterinaire"> | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }

  export type SuiviVeterinaireOrderByWithRelationInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateVisite?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
    traitement?: SortOrder
    validationAdoption?: SortOrder
    animal?: AnimalOrderByWithRelationInput
  }

  export type SuiviVeterinaireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuiviVeterinaireWhereInput | SuiviVeterinaireWhereInput[]
    OR?: SuiviVeterinaireWhereInput[]
    NOT?: SuiviVeterinaireWhereInput | SuiviVeterinaireWhereInput[]
    id_animal?: IntFilter<"SuiviVeterinaire"> | number
    dateVisite?: DateTimeFilter<"SuiviVeterinaire"> | Date | string
    motif?: StringFilter<"SuiviVeterinaire"> | string
    observations?: StringFilter<"SuiviVeterinaire"> | string
    traitement?: StringFilter<"SuiviVeterinaire"> | string
    validationAdoption?: StringFilter<"SuiviVeterinaire"> | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }, "id">

  export type SuiviVeterinaireOrderByWithAggregationInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateVisite?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
    traitement?: SortOrder
    validationAdoption?: SortOrder
    _count?: SuiviVeterinaireCountOrderByAggregateInput
    _avg?: SuiviVeterinaireAvgOrderByAggregateInput
    _max?: SuiviVeterinaireMaxOrderByAggregateInput
    _min?: SuiviVeterinaireMinOrderByAggregateInput
    _sum?: SuiviVeterinaireSumOrderByAggregateInput
  }

  export type SuiviVeterinaireScalarWhereWithAggregatesInput = {
    AND?: SuiviVeterinaireScalarWhereWithAggregatesInput | SuiviVeterinaireScalarWhereWithAggregatesInput[]
    OR?: SuiviVeterinaireScalarWhereWithAggregatesInput[]
    NOT?: SuiviVeterinaireScalarWhereWithAggregatesInput | SuiviVeterinaireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SuiviVeterinaire"> | number
    id_animal?: IntWithAggregatesFilter<"SuiviVeterinaire"> | number
    dateVisite?: DateTimeWithAggregatesFilter<"SuiviVeterinaire"> | Date | string
    motif?: StringWithAggregatesFilter<"SuiviVeterinaire"> | string
    observations?: StringWithAggregatesFilter<"SuiviVeterinaire"> | string
    traitement?: StringWithAggregatesFilter<"SuiviVeterinaire"> | string
    validationAdoption?: StringWithAggregatesFilter<"SuiviVeterinaire"> | string
  }

  export type ParrainageWhereInput = {
    AND?: ParrainageWhereInput | ParrainageWhereInput[]
    OR?: ParrainageWhereInput[]
    NOT?: ParrainageWhereInput | ParrainageWhereInput[]
    id?: IntFilter<"Parrainage"> | number
    id_animal?: IntFilter<"Parrainage"> | number
    dateDebutParrainage?: DateTimeFilter<"Parrainage"> | Date | string
    description?: StringFilter<"Parrainage"> | string
    dateFinParrainage?: DateTimeNullableFilter<"Parrainage"> | Date | string | null
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    users?: UsersListRelationFilter
  }

  export type ParrainageOrderByWithRelationInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateDebutParrainage?: SortOrder
    description?: SortOrder
    dateFinParrainage?: SortOrderInput | SortOrder
    animal?: AnimalOrderByWithRelationInput
    users?: UsersOrderByRelationAggregateInput
  }

  export type ParrainageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParrainageWhereInput | ParrainageWhereInput[]
    OR?: ParrainageWhereInput[]
    NOT?: ParrainageWhereInput | ParrainageWhereInput[]
    id_animal?: IntFilter<"Parrainage"> | number
    dateDebutParrainage?: DateTimeFilter<"Parrainage"> | Date | string
    description?: StringFilter<"Parrainage"> | string
    dateFinParrainage?: DateTimeNullableFilter<"Parrainage"> | Date | string | null
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    users?: UsersListRelationFilter
  }, "id">

  export type ParrainageOrderByWithAggregationInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateDebutParrainage?: SortOrder
    description?: SortOrder
    dateFinParrainage?: SortOrderInput | SortOrder
    _count?: ParrainageCountOrderByAggregateInput
    _avg?: ParrainageAvgOrderByAggregateInput
    _max?: ParrainageMaxOrderByAggregateInput
    _min?: ParrainageMinOrderByAggregateInput
    _sum?: ParrainageSumOrderByAggregateInput
  }

  export type ParrainageScalarWhereWithAggregatesInput = {
    AND?: ParrainageScalarWhereWithAggregatesInput | ParrainageScalarWhereWithAggregatesInput[]
    OR?: ParrainageScalarWhereWithAggregatesInput[]
    NOT?: ParrainageScalarWhereWithAggregatesInput | ParrainageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parrainage"> | number
    id_animal?: IntWithAggregatesFilter<"Parrainage"> | number
    dateDebutParrainage?: DateTimeWithAggregatesFilter<"Parrainage"> | Date | string
    description?: StringWithAggregatesFilter<"Parrainage"> | string
    dateFinParrainage?: DateTimeNullableWithAggregatesFilter<"Parrainage"> | Date | string | null
  }

  export type PublicationWhereInput = {
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    id?: IntFilter<"Publication"> | number
    id_animal?: IntFilter<"Publication"> | number
    date?: DateTimeFilter<"Publication"> | Date | string
    heure?: DateTimeFilter<"Publication"> | Date | string
    titre?: StringFilter<"Publication"> | string
    article?: StringFilter<"Publication"> | string
    image?: StringFilter<"Publication"> | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }

  export type PublicationOrderByWithRelationInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
    animal?: AnimalOrderByWithRelationInput
  }

  export type PublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    id_animal?: IntFilter<"Publication"> | number
    date?: DateTimeFilter<"Publication"> | Date | string
    heure?: DateTimeFilter<"Publication"> | Date | string
    titre?: StringFilter<"Publication"> | string
    article?: StringFilter<"Publication"> | string
    image?: StringFilter<"Publication"> | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }, "id">

  export type PublicationOrderByWithAggregationInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
    _count?: PublicationCountOrderByAggregateInput
    _avg?: PublicationAvgOrderByAggregateInput
    _max?: PublicationMaxOrderByAggregateInput
    _min?: PublicationMinOrderByAggregateInput
    _sum?: PublicationSumOrderByAggregateInput
  }

  export type PublicationScalarWhereWithAggregatesInput = {
    AND?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    OR?: PublicationScalarWhereWithAggregatesInput[]
    NOT?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publication"> | number
    id_animal?: IntWithAggregatesFilter<"Publication"> | number
    date?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
    heure?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
    titre?: StringWithAggregatesFilter<"Publication"> | string
    article?: StringWithAggregatesFilter<"Publication"> | string
    image?: StringWithAggregatesFilter<"Publication"> | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    date?: DateTimeFilter<"Blog"> | Date | string
    heure?: DateTimeFilter<"Blog"> | Date | string
    titre?: StringFilter<"Blog"> | string
    article?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    users?: UsersListRelationFilter
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
    users?: UsersOrderByRelationAggregateInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    date?: DateTimeFilter<"Blog"> | Date | string
    heure?: DateTimeFilter<"Blog"> | Date | string
    titre?: StringFilter<"Blog"> | string
    article?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    users?: UsersListRelationFilter
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    date?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    heure?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    titre?: StringWithAggregatesFilter<"Blog"> | string
    article?: StringWithAggregatesFilter<"Blog"> | string
    image?: StringWithAggregatesFilter<"Blog"> | string
  }

  export type SignalementWhereInput = {
    AND?: SignalementWhereInput | SignalementWhereInput[]
    OR?: SignalementWhereInput[]
    NOT?: SignalementWhereInput | SignalementWhereInput[]
    id?: IntFilter<"Signalement"> | number
    date?: DateTimeFilter<"Signalement"> | Date | string
    heure?: DateTimeFilter<"Signalement"> | Date | string
    lieu?: StringFilter<"Signalement"> | string
    description?: StringFilter<"Signalement"> | string
    emailFacultatif?: StringFilter<"Signalement"> | string
  }

  export type SignalementOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    lieu?: SortOrder
    description?: SortOrder
    emailFacultatif?: SortOrder
  }

  export type SignalementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SignalementWhereInput | SignalementWhereInput[]
    OR?: SignalementWhereInput[]
    NOT?: SignalementWhereInput | SignalementWhereInput[]
    date?: DateTimeFilter<"Signalement"> | Date | string
    heure?: DateTimeFilter<"Signalement"> | Date | string
    lieu?: StringFilter<"Signalement"> | string
    description?: StringFilter<"Signalement"> | string
    emailFacultatif?: StringFilter<"Signalement"> | string
  }, "id">

  export type SignalementOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    lieu?: SortOrder
    description?: SortOrder
    emailFacultatif?: SortOrder
    _count?: SignalementCountOrderByAggregateInput
    _avg?: SignalementAvgOrderByAggregateInput
    _max?: SignalementMaxOrderByAggregateInput
    _min?: SignalementMinOrderByAggregateInput
    _sum?: SignalementSumOrderByAggregateInput
  }

  export type SignalementScalarWhereWithAggregatesInput = {
    AND?: SignalementScalarWhereWithAggregatesInput | SignalementScalarWhereWithAggregatesInput[]
    OR?: SignalementScalarWhereWithAggregatesInput[]
    NOT?: SignalementScalarWhereWithAggregatesInput | SignalementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Signalement"> | number
    date?: DateTimeWithAggregatesFilter<"Signalement"> | Date | string
    heure?: DateTimeWithAggregatesFilter<"Signalement"> | Date | string
    lieu?: StringWithAggregatesFilter<"Signalement"> | string
    description?: StringWithAggregatesFilter<"Signalement"> | string
    emailFacultatif?: StringWithAggregatesFilter<"Signalement"> | string
  }

  export type VitrineProduitsWhereInput = {
    AND?: VitrineProduitsWhereInput | VitrineProduitsWhereInput[]
    OR?: VitrineProduitsWhereInput[]
    NOT?: VitrineProduitsWhereInput | VitrineProduitsWhereInput[]
    id?: IntFilter<"VitrineProduits"> | number
    nom?: StringFilter<"VitrineProduits"> | string
    description?: StringFilter<"VitrineProduits"> | string
    prix?: FloatFilter<"VitrineProduits"> | number
  }

  export type VitrineProduitsOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
  }

  export type VitrineProduitsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VitrineProduitsWhereInput | VitrineProduitsWhereInput[]
    OR?: VitrineProduitsWhereInput[]
    NOT?: VitrineProduitsWhereInput | VitrineProduitsWhereInput[]
    nom?: StringFilter<"VitrineProduits"> | string
    description?: StringFilter<"VitrineProduits"> | string
    prix?: FloatFilter<"VitrineProduits"> | number
  }, "id">

  export type VitrineProduitsOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    _count?: VitrineProduitsCountOrderByAggregateInput
    _avg?: VitrineProduitsAvgOrderByAggregateInput
    _max?: VitrineProduitsMaxOrderByAggregateInput
    _min?: VitrineProduitsMinOrderByAggregateInput
    _sum?: VitrineProduitsSumOrderByAggregateInput
  }

  export type VitrineProduitsScalarWhereWithAggregatesInput = {
    AND?: VitrineProduitsScalarWhereWithAggregatesInput | VitrineProduitsScalarWhereWithAggregatesInput[]
    OR?: VitrineProduitsScalarWhereWithAggregatesInput[]
    NOT?: VitrineProduitsScalarWhereWithAggregatesInput | VitrineProduitsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VitrineProduits"> | number
    nom?: StringWithAggregatesFilter<"VitrineProduits"> | string
    description?: StringWithAggregatesFilter<"VitrineProduits"> | string
    prix?: FloatWithAggregatesFilter<"VitrineProduits"> | number
  }

  export type AiderWhereInput = {
    AND?: AiderWhereInput | AiderWhereInput[]
    OR?: AiderWhereInput[]
    NOT?: AiderWhereInput | AiderWhereInput[]
    id?: IntFilter<"Aider"> | number
    date?: DateTimeFilter<"Aider"> | Date | string
    nom?: StringFilter<"Aider"> | string
    prenom?: StringFilter<"Aider"> | string
    email?: StringFilter<"Aider"> | string
    telephone?: StringFilter<"Aider"> | string
    financier?: BoolFilter<"Aider"> | boolean
    materiel?: BoolFilter<"Aider"> | boolean
    parrainage?: BoolFilter<"Aider"> | boolean
    message?: StringFilter<"Aider"> | string
  }

  export type AiderOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    financier?: SortOrder
    materiel?: SortOrder
    parrainage?: SortOrder
    message?: SortOrder
  }

  export type AiderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AiderWhereInput | AiderWhereInput[]
    OR?: AiderWhereInput[]
    NOT?: AiderWhereInput | AiderWhereInput[]
    date?: DateTimeFilter<"Aider"> | Date | string
    nom?: StringFilter<"Aider"> | string
    prenom?: StringFilter<"Aider"> | string
    email?: StringFilter<"Aider"> | string
    telephone?: StringFilter<"Aider"> | string
    financier?: BoolFilter<"Aider"> | boolean
    materiel?: BoolFilter<"Aider"> | boolean
    parrainage?: BoolFilter<"Aider"> | boolean
    message?: StringFilter<"Aider"> | string
  }, "id">

  export type AiderOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    financier?: SortOrder
    materiel?: SortOrder
    parrainage?: SortOrder
    message?: SortOrder
    _count?: AiderCountOrderByAggregateInput
    _avg?: AiderAvgOrderByAggregateInput
    _max?: AiderMaxOrderByAggregateInput
    _min?: AiderMinOrderByAggregateInput
    _sum?: AiderSumOrderByAggregateInput
  }

  export type AiderScalarWhereWithAggregatesInput = {
    AND?: AiderScalarWhereWithAggregatesInput | AiderScalarWhereWithAggregatesInput[]
    OR?: AiderScalarWhereWithAggregatesInput[]
    NOT?: AiderScalarWhereWithAggregatesInput | AiderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aider"> | number
    date?: DateTimeWithAggregatesFilter<"Aider"> | Date | string
    nom?: StringWithAggregatesFilter<"Aider"> | string
    prenom?: StringWithAggregatesFilter<"Aider"> | string
    email?: StringWithAggregatesFilter<"Aider"> | string
    telephone?: StringWithAggregatesFilter<"Aider"> | string
    financier?: BoolWithAggregatesFilter<"Aider"> | boolean
    materiel?: BoolWithAggregatesFilter<"Aider"> | boolean
    parrainage?: BoolWithAggregatesFilter<"Aider"> | boolean
    message?: StringWithAggregatesFilter<"Aider"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    nom?: StringFilter<"Users"> | string
    prenom?: StringFilter<"Users"> | string
    telephone?: StringFilter<"Users"> | string
    adresse?: StringFilter<"Users"> | string
    cp?: StringFilter<"Users"> | string
    ville?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    adoptantId?: IntNullableFilter<"Users"> | number | null
    animalId?: IntNullableFilter<"Users"> | number | null
    parrainageId?: IntNullableFilter<"Users"> | number | null
    blogId?: IntNullableFilter<"Users"> | number | null
    adoptant?: XOR<AdoptantNullableScalarRelationFilter, AdoptantWhereInput> | null
    planningBalades?: PlanningBaladesListRelationFilter
    creneaux?: CreneauxListRelationFilter
    Animal?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    Parrainage?: XOR<ParrainageNullableScalarRelationFilter, ParrainageWhereInput> | null
    Blog?: XOR<BlogNullableScalarRelationFilter, BlogWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    role?: SortOrder
    adoptantId?: SortOrderInput | SortOrder
    animalId?: SortOrderInput | SortOrder
    parrainageId?: SortOrderInput | SortOrder
    blogId?: SortOrderInput | SortOrder
    adoptant?: AdoptantOrderByWithRelationInput
    planningBalades?: PlanningBaladesOrderByRelationAggregateInput
    creneaux?: CreneauxOrderByRelationAggregateInput
    Animal?: AnimalOrderByWithRelationInput
    Parrainage?: ParrainageOrderByWithRelationInput
    Blog?: BlogOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    nom?: StringFilter<"Users"> | string
    prenom?: StringFilter<"Users"> | string
    telephone?: StringFilter<"Users"> | string
    adresse?: StringFilter<"Users"> | string
    cp?: StringFilter<"Users"> | string
    ville?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    adoptantId?: IntNullableFilter<"Users"> | number | null
    animalId?: IntNullableFilter<"Users"> | number | null
    parrainageId?: IntNullableFilter<"Users"> | number | null
    blogId?: IntNullableFilter<"Users"> | number | null
    adoptant?: XOR<AdoptantNullableScalarRelationFilter, AdoptantWhereInput> | null
    planningBalades?: PlanningBaladesListRelationFilter
    creneaux?: CreneauxListRelationFilter
    Animal?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    Parrainage?: XOR<ParrainageNullableScalarRelationFilter, ParrainageWhereInput> | null
    Blog?: XOR<BlogNullableScalarRelationFilter, BlogWhereInput> | null
  }, "id" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    role?: SortOrder
    adoptantId?: SortOrderInput | SortOrder
    animalId?: SortOrderInput | SortOrder
    parrainageId?: SortOrderInput | SortOrder
    blogId?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    nom?: StringWithAggregatesFilter<"Users"> | string
    prenom?: StringWithAggregatesFilter<"Users"> | string
    telephone?: StringWithAggregatesFilter<"Users"> | string
    adresse?: StringWithAggregatesFilter<"Users"> | string
    cp?: StringWithAggregatesFilter<"Users"> | string
    ville?: StringWithAggregatesFilter<"Users"> | string
    role?: StringWithAggregatesFilter<"Users"> | string
    adoptantId?: IntNullableWithAggregatesFilter<"Users"> | number | null
    animalId?: IntNullableWithAggregatesFilter<"Users"> | number | null
    parrainageId?: IntNullableWithAggregatesFilter<"Users"> | number | null
    blogId?: IntNullableWithAggregatesFilter<"Users"> | number | null
  }

  export type PlanningBaladesWhereInput = {
    AND?: PlanningBaladesWhereInput | PlanningBaladesWhereInput[]
    OR?: PlanningBaladesWhereInput[]
    NOT?: PlanningBaladesWhereInput | PlanningBaladesWhereInput[]
    id?: IntFilter<"PlanningBalades"> | number
    date?: DateTimeFilter<"PlanningBalades"> | Date | string
    heure?: DateTimeFilter<"PlanningBalades"> | Date | string
    chien_chat?: StringFilter<"PlanningBalades"> | string
    users?: UsersListRelationFilter
    creneaux?: CreneauxListRelationFilter
  }

  export type PlanningBaladesOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    chien_chat?: SortOrder
    users?: UsersOrderByRelationAggregateInput
    creneaux?: CreneauxOrderByRelationAggregateInput
  }

  export type PlanningBaladesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanningBaladesWhereInput | PlanningBaladesWhereInput[]
    OR?: PlanningBaladesWhereInput[]
    NOT?: PlanningBaladesWhereInput | PlanningBaladesWhereInput[]
    date?: DateTimeFilter<"PlanningBalades"> | Date | string
    heure?: DateTimeFilter<"PlanningBalades"> | Date | string
    chien_chat?: StringFilter<"PlanningBalades"> | string
    users?: UsersListRelationFilter
    creneaux?: CreneauxListRelationFilter
  }, "id">

  export type PlanningBaladesOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    chien_chat?: SortOrder
    _count?: PlanningBaladesCountOrderByAggregateInput
    _avg?: PlanningBaladesAvgOrderByAggregateInput
    _max?: PlanningBaladesMaxOrderByAggregateInput
    _min?: PlanningBaladesMinOrderByAggregateInput
    _sum?: PlanningBaladesSumOrderByAggregateInput
  }

  export type PlanningBaladesScalarWhereWithAggregatesInput = {
    AND?: PlanningBaladesScalarWhereWithAggregatesInput | PlanningBaladesScalarWhereWithAggregatesInput[]
    OR?: PlanningBaladesScalarWhereWithAggregatesInput[]
    NOT?: PlanningBaladesScalarWhereWithAggregatesInput | PlanningBaladesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlanningBalades"> | number
    date?: DateTimeWithAggregatesFilter<"PlanningBalades"> | Date | string
    heure?: DateTimeWithAggregatesFilter<"PlanningBalades"> | Date | string
    chien_chat?: StringWithAggregatesFilter<"PlanningBalades"> | string
  }

  export type CreneauxWhereInput = {
    AND?: CreneauxWhereInput | CreneauxWhereInput[]
    OR?: CreneauxWhereInput[]
    NOT?: CreneauxWhereInput | CreneauxWhereInput[]
    id?: IntFilter<"Creneaux"> | number
    id_users?: IntFilter<"Creneaux"> | number
    id_planning?: IntFilter<"Creneaux"> | number
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    planning?: XOR<PlanningBaladesScalarRelationFilter, PlanningBaladesWhereInput>
  }

  export type CreneauxOrderByWithRelationInput = {
    id?: SortOrder
    id_users?: SortOrder
    id_planning?: SortOrder
    users?: UsersOrderByWithRelationInput
    planning?: PlanningBaladesOrderByWithRelationInput
  }

  export type CreneauxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CreneauxWhereInput | CreneauxWhereInput[]
    OR?: CreneauxWhereInput[]
    NOT?: CreneauxWhereInput | CreneauxWhereInput[]
    id_users?: IntFilter<"Creneaux"> | number
    id_planning?: IntFilter<"Creneaux"> | number
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    planning?: XOR<PlanningBaladesScalarRelationFilter, PlanningBaladesWhereInput>
  }, "id">

  export type CreneauxOrderByWithAggregationInput = {
    id?: SortOrder
    id_users?: SortOrder
    id_planning?: SortOrder
    _count?: CreneauxCountOrderByAggregateInput
    _avg?: CreneauxAvgOrderByAggregateInput
    _max?: CreneauxMaxOrderByAggregateInput
    _min?: CreneauxMinOrderByAggregateInput
    _sum?: CreneauxSumOrderByAggregateInput
  }

  export type CreneauxScalarWhereWithAggregatesInput = {
    AND?: CreneauxScalarWhereWithAggregatesInput | CreneauxScalarWhereWithAggregatesInput[]
    OR?: CreneauxScalarWhereWithAggregatesInput[]
    NOT?: CreneauxScalarWhereWithAggregatesInput | CreneauxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Creneaux"> | number
    id_users?: IntWithAggregatesFilter<"Creneaux"> | number
    id_planning?: IntWithAggregatesFilter<"Creneaux"> | number
  }

  export type AdoptantCreateInput = {
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    historiqueAdoption: string
    commentaires: string
    users?: UsersCreateNestedManyWithoutAdoptantInput
    Adoption?: AdoptionCreateNestedManyWithoutAdoptantInput
  }

  export type AdoptantUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    historiqueAdoption: string
    commentaires: string
    users?: UsersUncheckedCreateNestedManyWithoutAdoptantInput
    Adoption?: AdoptionUncheckedCreateNestedManyWithoutAdoptantInput
  }

  export type AdoptantUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    historiqueAdoption?: StringFieldUpdateOperationsInput | string
    commentaires?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateManyWithoutAdoptantNestedInput
    Adoption?: AdoptionUpdateManyWithoutAdoptantNestedInput
  }

  export type AdoptantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    historiqueAdoption?: StringFieldUpdateOperationsInput | string
    commentaires?: StringFieldUpdateOperationsInput | string
    users?: UsersUncheckedUpdateManyWithoutAdoptantNestedInput
    Adoption?: AdoptionUncheckedUpdateManyWithoutAdoptantNestedInput
  }

  export type AdoptantCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    historiqueAdoption: string
    commentaires: string
  }

  export type AdoptantUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    historiqueAdoption?: StringFieldUpdateOperationsInput | string
    commentaires?: StringFieldUpdateOperationsInput | string
  }

  export type AdoptantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    historiqueAdoption?: StringFieldUpdateOperationsInput | string
    commentaires?: StringFieldUpdateOperationsInput | string
  }

  export type AdoptionCreateInput = {
    dateAdoption: Date | string
    typeAdoption: string
    animal: AnimalCreateNestedOneWithoutAdoptionInput
    adoptant: AdoptantCreateNestedOneWithoutAdoptionInput
  }

  export type AdoptionUncheckedCreateInput = {
    id?: number
    dateAdoption: Date | string
    typeAdoption: string
    id_animal: number
    id_adoptant: number
  }

  export type AdoptionUpdateInput = {
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
    animal?: AnimalUpdateOneRequiredWithoutAdoptionNestedInput
    adoptant?: AdoptantUpdateOneRequiredWithoutAdoptionNestedInput
  }

  export type AdoptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
    id_animal?: IntFieldUpdateOperationsInput | number
    id_adoptant?: IntFieldUpdateOperationsInput | number
  }

  export type AdoptionCreateManyInput = {
    id?: number
    dateAdoption: Date | string
    typeAdoption: string
    id_animal: number
    id_adoptant: number
  }

  export type AdoptionUpdateManyMutationInput = {
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
  }

  export type AdoptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
    id_animal?: IntFieldUpdateOperationsInput | number
    id_adoptant?: IntFieldUpdateOperationsInput | number
  }

  export type AnimalCreateInput = {
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageCreateNestedManyWithoutAnimalInput
    publication?: PublicationCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    id?: number
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionUncheckedCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageUncheckedCreateNestedManyWithoutAnimalInput
    publication?: PublicationUncheckedCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUncheckedUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUncheckedUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUncheckedUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalCreateManyInput = {
    id?: number
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
  }

  export type AnimalUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvolutionCreateInput = {
    date: Date | string
    motif: string
    observations: string
    animal: AnimalCreateNestedOneWithoutEvolutionInput
  }

  export type EvolutionUncheckedCreateInput = {
    id?: number
    id_animal: number
    date: Date | string
    motif: string
    observations: string
  }

  export type EvolutionUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    animal?: AnimalUpdateOneRequiredWithoutEvolutionNestedInput
  }

  export type EvolutionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_animal?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type EvolutionCreateManyInput = {
    id?: number
    id_animal: number
    date: Date | string
    motif: string
    observations: string
  }

  export type EvolutionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type EvolutionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_animal?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type SuiviVeterinaireCreateInput = {
    dateVisite: Date | string
    motif: string
    observations: string
    traitement: string
    validationAdoption: string
    animal: AnimalCreateNestedOneWithoutSuiviVeterinaireInput
  }

  export type SuiviVeterinaireUncheckedCreateInput = {
    id?: number
    id_animal: number
    dateVisite: Date | string
    motif: string
    observations: string
    traitement: string
    validationAdoption: string
  }

  export type SuiviVeterinaireUpdateInput = {
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    traitement?: StringFieldUpdateOperationsInput | string
    validationAdoption?: StringFieldUpdateOperationsInput | string
    animal?: AnimalUpdateOneRequiredWithoutSuiviVeterinaireNestedInput
  }

  export type SuiviVeterinaireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_animal?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    traitement?: StringFieldUpdateOperationsInput | string
    validationAdoption?: StringFieldUpdateOperationsInput | string
  }

  export type SuiviVeterinaireCreateManyInput = {
    id?: number
    id_animal: number
    dateVisite: Date | string
    motif: string
    observations: string
    traitement: string
    validationAdoption: string
  }

  export type SuiviVeterinaireUpdateManyMutationInput = {
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    traitement?: StringFieldUpdateOperationsInput | string
    validationAdoption?: StringFieldUpdateOperationsInput | string
  }

  export type SuiviVeterinaireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_animal?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    traitement?: StringFieldUpdateOperationsInput | string
    validationAdoption?: StringFieldUpdateOperationsInput | string
  }

  export type ParrainageCreateInput = {
    dateDebutParrainage: Date | string
    description: string
    dateFinParrainage?: Date | string | null
    animal: AnimalCreateNestedOneWithoutParrainageInput
    users?: UsersCreateNestedManyWithoutParrainageInput
  }

  export type ParrainageUncheckedCreateInput = {
    id?: number
    id_animal: number
    dateDebutParrainage: Date | string
    description: string
    dateFinParrainage?: Date | string | null
    users?: UsersUncheckedCreateNestedManyWithoutParrainageInput
  }

  export type ParrainageUpdateInput = {
    dateDebutParrainage?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    dateFinParrainage?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    animal?: AnimalUpdateOneRequiredWithoutParrainageNestedInput
    users?: UsersUpdateManyWithoutParrainageNestedInput
  }

  export type ParrainageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_animal?: IntFieldUpdateOperationsInput | number
    dateDebutParrainage?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    dateFinParrainage?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersUncheckedUpdateManyWithoutParrainageNestedInput
  }

  export type ParrainageCreateManyInput = {
    id?: number
    id_animal: number
    dateDebutParrainage: Date | string
    description: string
    dateFinParrainage?: Date | string | null
  }

  export type ParrainageUpdateManyMutationInput = {
    dateDebutParrainage?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    dateFinParrainage?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParrainageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_animal?: IntFieldUpdateOperationsInput | number
    dateDebutParrainage?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    dateFinParrainage?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicationCreateInput = {
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
    animal: AnimalCreateNestedOneWithoutPublicationInput
  }

  export type PublicationUncheckedCreateInput = {
    id?: number
    id_animal: number
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
  }

  export type PublicationUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    animal?: AnimalUpdateOneRequiredWithoutPublicationNestedInput
  }

  export type PublicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_animal?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationCreateManyInput = {
    id?: number
    id_animal: number
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
  }

  export type PublicationUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_animal?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCreateInput = {
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
    users?: UsersCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
    users?: UsersUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    users?: UsersUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: number
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
  }

  export type BlogUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementCreateInput = {
    date: Date | string
    heure: Date | string
    lieu: string
    description: string
    emailFacultatif: string
  }

  export type SignalementUncheckedCreateInput = {
    id?: number
    date: Date | string
    heure: Date | string
    lieu: string
    description: string
    emailFacultatif: string
  }

  export type SignalementUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailFacultatif?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailFacultatif?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementCreateManyInput = {
    id?: number
    date: Date | string
    heure: Date | string
    lieu: string
    description: string
    emailFacultatif: string
  }

  export type SignalementUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailFacultatif?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailFacultatif?: StringFieldUpdateOperationsInput | string
  }

  export type VitrineProduitsCreateInput = {
    nom: string
    description: string
    prix: number
  }

  export type VitrineProduitsUncheckedCreateInput = {
    id?: number
    nom: string
    description: string
    prix: number
  }

  export type VitrineProduitsUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type VitrineProduitsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type VitrineProduitsCreateManyInput = {
    id?: number
    nom: string
    description: string
    prix: number
  }

  export type VitrineProduitsUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type VitrineProduitsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type AiderCreateInput = {
    date: Date | string
    nom: string
    prenom: string
    email: string
    telephone: string
    financier: boolean
    materiel: boolean
    parrainage: boolean
    message: string
  }

  export type AiderUncheckedCreateInput = {
    id?: number
    date: Date | string
    nom: string
    prenom: string
    email: string
    telephone: string
    financier: boolean
    materiel: boolean
    parrainage: boolean
    message: string
  }

  export type AiderUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    financier?: BoolFieldUpdateOperationsInput | boolean
    materiel?: BoolFieldUpdateOperationsInput | boolean
    parrainage?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
  }

  export type AiderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    financier?: BoolFieldUpdateOperationsInput | boolean
    materiel?: BoolFieldUpdateOperationsInput | boolean
    parrainage?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
  }

  export type AiderCreateManyInput = {
    id?: number
    date: Date | string
    nom: string
    prenom: string
    email: string
    telephone: string
    financier: boolean
    materiel: boolean
    parrainage: boolean
    message: string
  }

  export type AiderUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    financier?: BoolFieldUpdateOperationsInput | boolean
    materiel?: BoolFieldUpdateOperationsInput | boolean
    parrainage?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
  }

  export type AiderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    financier?: BoolFieldUpdateOperationsInput | boolean
    materiel?: BoolFieldUpdateOperationsInput | boolean
    parrainage?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptant?: AdoptantCreateNestedOneWithoutUsersInput
    planningBalades?: PlanningBaladesCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxCreateNestedManyWithoutUsersInput
    Animal?: AnimalCreateNestedOneWithoutUsersInput
    Parrainage?: ParrainageCreateNestedOneWithoutUsersInput
    Blog?: BlogCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    animalId?: number | null
    parrainageId?: number | null
    blogId?: number | null
    planningBalades?: PlanningBaladesUncheckedCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptant?: AdoptantUpdateOneWithoutUsersNestedInput
    planningBalades?: PlanningBaladesUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUpdateManyWithoutUsersNestedInput
    Animal?: AnimalUpdateOneWithoutUsersNestedInput
    Parrainage?: ParrainageUpdateOneWithoutUsersNestedInput
    Blog?: BlogUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
    planningBalades?: PlanningBaladesUncheckedUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    animalId?: number | null
    parrainageId?: number | null
    blogId?: number | null
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlanningBaladesCreateInput = {
    date: Date | string
    heure: Date | string
    chien_chat: string
    users?: UsersCreateNestedManyWithoutPlanningBaladesInput
    creneaux?: CreneauxCreateNestedManyWithoutPlanningInput
  }

  export type PlanningBaladesUncheckedCreateInput = {
    id?: number
    date: Date | string
    heure: Date | string
    chien_chat: string
    users?: UsersUncheckedCreateNestedManyWithoutPlanningBaladesInput
    creneaux?: CreneauxUncheckedCreateNestedManyWithoutPlanningInput
  }

  export type PlanningBaladesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    chien_chat?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateManyWithoutPlanningBaladesNestedInput
    creneaux?: CreneauxUpdateManyWithoutPlanningNestedInput
  }

  export type PlanningBaladesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    chien_chat?: StringFieldUpdateOperationsInput | string
    users?: UsersUncheckedUpdateManyWithoutPlanningBaladesNestedInput
    creneaux?: CreneauxUncheckedUpdateManyWithoutPlanningNestedInput
  }

  export type PlanningBaladesCreateManyInput = {
    id?: number
    date: Date | string
    heure: Date | string
    chien_chat: string
  }

  export type PlanningBaladesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    chien_chat?: StringFieldUpdateOperationsInput | string
  }

  export type PlanningBaladesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    chien_chat?: StringFieldUpdateOperationsInput | string
  }

  export type CreneauxCreateInput = {
    users: UsersCreateNestedOneWithoutCreneauxInput
    planning: PlanningBaladesCreateNestedOneWithoutCreneauxInput
  }

  export type CreneauxUncheckedCreateInput = {
    id?: number
    id_users: number
    id_planning: number
  }

  export type CreneauxUpdateInput = {
    users?: UsersUpdateOneRequiredWithoutCreneauxNestedInput
    planning?: PlanningBaladesUpdateOneRequiredWithoutCreneauxNestedInput
  }

  export type CreneauxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_users?: IntFieldUpdateOperationsInput | number
    id_planning?: IntFieldUpdateOperationsInput | number
  }

  export type CreneauxCreateManyInput = {
    id?: number
    id_users: number
    id_planning: number
  }

  export type CreneauxUpdateManyMutationInput = {

  }

  export type CreneauxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_users?: IntFieldUpdateOperationsInput | number
    id_planning?: IntFieldUpdateOperationsInput | number
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

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type AdoptionListRelationFilter = {
    every?: AdoptionWhereInput
    some?: AdoptionWhereInput
    none?: AdoptionWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdoptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdoptantCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    historiqueAdoption?: SortOrder
    commentaires?: SortOrder
  }

  export type AdoptantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdoptantMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    historiqueAdoption?: SortOrder
    commentaires?: SortOrder
  }

  export type AdoptantMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    historiqueAdoption?: SortOrder
    commentaires?: SortOrder
  }

  export type AdoptantSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type AnimalScalarRelationFilter = {
    is?: AnimalWhereInput
    isNot?: AnimalWhereInput
  }

  export type AdoptantScalarRelationFilter = {
    is?: AdoptantWhereInput
    isNot?: AdoptantWhereInput
  }

  export type AdoptionCountOrderByAggregateInput = {
    id?: SortOrder
    dateAdoption?: SortOrder
    typeAdoption?: SortOrder
    id_animal?: SortOrder
    id_adoptant?: SortOrder
  }

  export type AdoptionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    id_adoptant?: SortOrder
  }

  export type AdoptionMaxOrderByAggregateInput = {
    id?: SortOrder
    dateAdoption?: SortOrder
    typeAdoption?: SortOrder
    id_animal?: SortOrder
    id_adoptant?: SortOrder
  }

  export type AdoptionMinOrderByAggregateInput = {
    id?: SortOrder
    dateAdoption?: SortOrder
    typeAdoption?: SortOrder
    id_animal?: SortOrder
    id_adoptant?: SortOrder
  }

  export type AdoptionSumOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    id_adoptant?: SortOrder
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

  export type EvolutionListRelationFilter = {
    every?: EvolutionWhereInput
    some?: EvolutionWhereInput
    none?: EvolutionWhereInput
  }

  export type SuiviVeterinaireListRelationFilter = {
    every?: SuiviVeterinaireWhereInput
    some?: SuiviVeterinaireWhereInput
    none?: SuiviVeterinaireWhereInput
  }

  export type ParrainageListRelationFilter = {
    every?: ParrainageWhereInput
    some?: ParrainageWhereInput
    none?: ParrainageWhereInput
  }

  export type PublicationListRelationFilter = {
    every?: PublicationWhereInput
    some?: PublicationWhereInput
    none?: PublicationWhereInput
  }

  export type EvolutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuiviVeterinaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParrainageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimalCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    age?: SortOrder
    sexe?: SortOrder
    espece?: SortOrder
    race?: SortOrder
    N_identification?: SortOrder
    description?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    dateArrivee?: SortOrder
  }

  export type AnimalAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    age?: SortOrder
    sexe?: SortOrder
    espece?: SortOrder
    race?: SortOrder
    N_identification?: SortOrder
    description?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    dateArrivee?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    age?: SortOrder
    sexe?: SortOrder
    espece?: SortOrder
    race?: SortOrder
    N_identification?: SortOrder
    description?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    dateArrivee?: SortOrder
  }

  export type AnimalSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type EvolutionCountOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
  }

  export type EvolutionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
  }

  export type EvolutionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
  }

  export type EvolutionMinOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
  }

  export type EvolutionSumOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
  }

  export type SuiviVeterinaireCountOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateVisite?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
    traitement?: SortOrder
    validationAdoption?: SortOrder
  }

  export type SuiviVeterinaireAvgOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
  }

  export type SuiviVeterinaireMaxOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateVisite?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
    traitement?: SortOrder
    validationAdoption?: SortOrder
  }

  export type SuiviVeterinaireMinOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateVisite?: SortOrder
    motif?: SortOrder
    observations?: SortOrder
    traitement?: SortOrder
    validationAdoption?: SortOrder
  }

  export type SuiviVeterinaireSumOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParrainageCountOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateDebutParrainage?: SortOrder
    description?: SortOrder
    dateFinParrainage?: SortOrder
  }

  export type ParrainageAvgOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
  }

  export type ParrainageMaxOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateDebutParrainage?: SortOrder
    description?: SortOrder
    dateFinParrainage?: SortOrder
  }

  export type ParrainageMinOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    dateDebutParrainage?: SortOrder
    description?: SortOrder
    dateFinParrainage?: SortOrder
  }

  export type ParrainageSumOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PublicationCountOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
  }

  export type PublicationAvgOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
  }

  export type PublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
  }

  export type PublicationMinOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
  }

  export type PublicationSumOrderByAggregateInput = {
    id?: SortOrder
    id_animal?: SortOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    titre?: SortOrder
    article?: SortOrder
    image?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SignalementCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    lieu?: SortOrder
    description?: SortOrder
    emailFacultatif?: SortOrder
  }

  export type SignalementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SignalementMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    lieu?: SortOrder
    description?: SortOrder
    emailFacultatif?: SortOrder
  }

  export type SignalementMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    lieu?: SortOrder
    description?: SortOrder
    emailFacultatif?: SortOrder
  }

  export type SignalementSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type VitrineProduitsCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
  }

  export type VitrineProduitsAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
  }

  export type VitrineProduitsMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
  }

  export type VitrineProduitsMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
  }

  export type VitrineProduitsSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AiderCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    financier?: SortOrder
    materiel?: SortOrder
    parrainage?: SortOrder
    message?: SortOrder
  }

  export type AiderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AiderMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    financier?: SortOrder
    materiel?: SortOrder
    parrainage?: SortOrder
    message?: SortOrder
  }

  export type AiderMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    financier?: SortOrder
    materiel?: SortOrder
    parrainage?: SortOrder
    message?: SortOrder
  }

  export type AiderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AdoptantNullableScalarRelationFilter = {
    is?: AdoptantWhereInput | null
    isNot?: AdoptantWhereInput | null
  }

  export type PlanningBaladesListRelationFilter = {
    every?: PlanningBaladesWhereInput
    some?: PlanningBaladesWhereInput
    none?: PlanningBaladesWhereInput
  }

  export type CreneauxListRelationFilter = {
    every?: CreneauxWhereInput
    some?: CreneauxWhereInput
    none?: CreneauxWhereInput
  }

  export type AnimalNullableScalarRelationFilter = {
    is?: AnimalWhereInput | null
    isNot?: AnimalWhereInput | null
  }

  export type ParrainageNullableScalarRelationFilter = {
    is?: ParrainageWhereInput | null
    isNot?: ParrainageWhereInput | null
  }

  export type BlogNullableScalarRelationFilter = {
    is?: BlogWhereInput | null
    isNot?: BlogWhereInput | null
  }

  export type PlanningBaladesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreneauxOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    role?: SortOrder
    adoptantId?: SortOrder
    animalId?: SortOrder
    parrainageId?: SortOrder
    blogId?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    adoptantId?: SortOrder
    animalId?: SortOrder
    parrainageId?: SortOrder
    blogId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    role?: SortOrder
    adoptantId?: SortOrder
    animalId?: SortOrder
    parrainageId?: SortOrder
    blogId?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    cp?: SortOrder
    ville?: SortOrder
    role?: SortOrder
    adoptantId?: SortOrder
    animalId?: SortOrder
    parrainageId?: SortOrder
    blogId?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    adoptantId?: SortOrder
    animalId?: SortOrder
    parrainageId?: SortOrder
    blogId?: SortOrder
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

  export type PlanningBaladesCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    chien_chat?: SortOrder
  }

  export type PlanningBaladesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlanningBaladesMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    chien_chat?: SortOrder
  }

  export type PlanningBaladesMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    chien_chat?: SortOrder
  }

  export type PlanningBaladesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PlanningBaladesScalarRelationFilter = {
    is?: PlanningBaladesWhereInput
    isNot?: PlanningBaladesWhereInput
  }

  export type CreneauxCountOrderByAggregateInput = {
    id?: SortOrder
    id_users?: SortOrder
    id_planning?: SortOrder
  }

  export type CreneauxAvgOrderByAggregateInput = {
    id?: SortOrder
    id_users?: SortOrder
    id_planning?: SortOrder
  }

  export type CreneauxMaxOrderByAggregateInput = {
    id?: SortOrder
    id_users?: SortOrder
    id_planning?: SortOrder
  }

  export type CreneauxMinOrderByAggregateInput = {
    id?: SortOrder
    id_users?: SortOrder
    id_planning?: SortOrder
  }

  export type CreneauxSumOrderByAggregateInput = {
    id?: SortOrder
    id_users?: SortOrder
    id_planning?: SortOrder
  }

  export type UsersCreateNestedManyWithoutAdoptantInput = {
    create?: XOR<UsersCreateWithoutAdoptantInput, UsersUncheckedCreateWithoutAdoptantInput> | UsersCreateWithoutAdoptantInput[] | UsersUncheckedCreateWithoutAdoptantInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAdoptantInput | UsersCreateOrConnectWithoutAdoptantInput[]
    createMany?: UsersCreateManyAdoptantInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type AdoptionCreateNestedManyWithoutAdoptantInput = {
    create?: XOR<AdoptionCreateWithoutAdoptantInput, AdoptionUncheckedCreateWithoutAdoptantInput> | AdoptionCreateWithoutAdoptantInput[] | AdoptionUncheckedCreateWithoutAdoptantInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutAdoptantInput | AdoptionCreateOrConnectWithoutAdoptantInput[]
    createMany?: AdoptionCreateManyAdoptantInputEnvelope
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutAdoptantInput = {
    create?: XOR<UsersCreateWithoutAdoptantInput, UsersUncheckedCreateWithoutAdoptantInput> | UsersCreateWithoutAdoptantInput[] | UsersUncheckedCreateWithoutAdoptantInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAdoptantInput | UsersCreateOrConnectWithoutAdoptantInput[]
    createMany?: UsersCreateManyAdoptantInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type AdoptionUncheckedCreateNestedManyWithoutAdoptantInput = {
    create?: XOR<AdoptionCreateWithoutAdoptantInput, AdoptionUncheckedCreateWithoutAdoptantInput> | AdoptionCreateWithoutAdoptantInput[] | AdoptionUncheckedCreateWithoutAdoptantInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutAdoptantInput | AdoptionCreateOrConnectWithoutAdoptantInput[]
    createMany?: AdoptionCreateManyAdoptantInputEnvelope
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsersUpdateManyWithoutAdoptantNestedInput = {
    create?: XOR<UsersCreateWithoutAdoptantInput, UsersUncheckedCreateWithoutAdoptantInput> | UsersCreateWithoutAdoptantInput[] | UsersUncheckedCreateWithoutAdoptantInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAdoptantInput | UsersCreateOrConnectWithoutAdoptantInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutAdoptantInput | UsersUpsertWithWhereUniqueWithoutAdoptantInput[]
    createMany?: UsersCreateManyAdoptantInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutAdoptantInput | UsersUpdateWithWhereUniqueWithoutAdoptantInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutAdoptantInput | UsersUpdateManyWithWhereWithoutAdoptantInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type AdoptionUpdateManyWithoutAdoptantNestedInput = {
    create?: XOR<AdoptionCreateWithoutAdoptantInput, AdoptionUncheckedCreateWithoutAdoptantInput> | AdoptionCreateWithoutAdoptantInput[] | AdoptionUncheckedCreateWithoutAdoptantInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutAdoptantInput | AdoptionCreateOrConnectWithoutAdoptantInput[]
    upsert?: AdoptionUpsertWithWhereUniqueWithoutAdoptantInput | AdoptionUpsertWithWhereUniqueWithoutAdoptantInput[]
    createMany?: AdoptionCreateManyAdoptantInputEnvelope
    set?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    disconnect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    delete?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    update?: AdoptionUpdateWithWhereUniqueWithoutAdoptantInput | AdoptionUpdateWithWhereUniqueWithoutAdoptantInput[]
    updateMany?: AdoptionUpdateManyWithWhereWithoutAdoptantInput | AdoptionUpdateManyWithWhereWithoutAdoptantInput[]
    deleteMany?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUncheckedUpdateManyWithoutAdoptantNestedInput = {
    create?: XOR<UsersCreateWithoutAdoptantInput, UsersUncheckedCreateWithoutAdoptantInput> | UsersCreateWithoutAdoptantInput[] | UsersUncheckedCreateWithoutAdoptantInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAdoptantInput | UsersCreateOrConnectWithoutAdoptantInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutAdoptantInput | UsersUpsertWithWhereUniqueWithoutAdoptantInput[]
    createMany?: UsersCreateManyAdoptantInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutAdoptantInput | UsersUpdateWithWhereUniqueWithoutAdoptantInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutAdoptantInput | UsersUpdateManyWithWhereWithoutAdoptantInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type AdoptionUncheckedUpdateManyWithoutAdoptantNestedInput = {
    create?: XOR<AdoptionCreateWithoutAdoptantInput, AdoptionUncheckedCreateWithoutAdoptantInput> | AdoptionCreateWithoutAdoptantInput[] | AdoptionUncheckedCreateWithoutAdoptantInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutAdoptantInput | AdoptionCreateOrConnectWithoutAdoptantInput[]
    upsert?: AdoptionUpsertWithWhereUniqueWithoutAdoptantInput | AdoptionUpsertWithWhereUniqueWithoutAdoptantInput[]
    createMany?: AdoptionCreateManyAdoptantInputEnvelope
    set?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    disconnect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    delete?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    update?: AdoptionUpdateWithWhereUniqueWithoutAdoptantInput | AdoptionUpdateWithWhereUniqueWithoutAdoptantInput[]
    updateMany?: AdoptionUpdateManyWithWhereWithoutAdoptantInput | AdoptionUpdateManyWithWhereWithoutAdoptantInput[]
    deleteMany?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
  }

  export type AnimalCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<AnimalCreateWithoutAdoptionInput, AnimalUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutAdoptionInput
    connect?: AnimalWhereUniqueInput
  }

  export type AdoptantCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<AdoptantCreateWithoutAdoptionInput, AdoptantUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: AdoptantCreateOrConnectWithoutAdoptionInput
    connect?: AdoptantWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnimalUpdateOneRequiredWithoutAdoptionNestedInput = {
    create?: XOR<AnimalCreateWithoutAdoptionInput, AnimalUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutAdoptionInput
    upsert?: AnimalUpsertWithoutAdoptionInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutAdoptionInput, AnimalUpdateWithoutAdoptionInput>, AnimalUncheckedUpdateWithoutAdoptionInput>
  }

  export type AdoptantUpdateOneRequiredWithoutAdoptionNestedInput = {
    create?: XOR<AdoptantCreateWithoutAdoptionInput, AdoptantUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: AdoptantCreateOrConnectWithoutAdoptionInput
    upsert?: AdoptantUpsertWithoutAdoptionInput
    connect?: AdoptantWhereUniqueInput
    update?: XOR<XOR<AdoptantUpdateToOneWithWhereWithoutAdoptionInput, AdoptantUpdateWithoutAdoptionInput>, AdoptantUncheckedUpdateWithoutAdoptionInput>
  }

  export type UsersCreateNestedManyWithoutAnimalInput = {
    create?: XOR<UsersCreateWithoutAnimalInput, UsersUncheckedCreateWithoutAnimalInput> | UsersCreateWithoutAnimalInput[] | UsersUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAnimalInput | UsersCreateOrConnectWithoutAnimalInput[]
    createMany?: UsersCreateManyAnimalInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type EvolutionCreateNestedManyWithoutAnimalInput = {
    create?: XOR<EvolutionCreateWithoutAnimalInput, EvolutionUncheckedCreateWithoutAnimalInput> | EvolutionCreateWithoutAnimalInput[] | EvolutionUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutAnimalInput | EvolutionCreateOrConnectWithoutAnimalInput[]
    createMany?: EvolutionCreateManyAnimalInputEnvelope
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
  }

  export type SuiviVeterinaireCreateNestedManyWithoutAnimalInput = {
    create?: XOR<SuiviVeterinaireCreateWithoutAnimalInput, SuiviVeterinaireUncheckedCreateWithoutAnimalInput> | SuiviVeterinaireCreateWithoutAnimalInput[] | SuiviVeterinaireUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: SuiviVeterinaireCreateOrConnectWithoutAnimalInput | SuiviVeterinaireCreateOrConnectWithoutAnimalInput[]
    createMany?: SuiviVeterinaireCreateManyAnimalInputEnvelope
    connect?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
  }

  export type ParrainageCreateNestedManyWithoutAnimalInput = {
    create?: XOR<ParrainageCreateWithoutAnimalInput, ParrainageUncheckedCreateWithoutAnimalInput> | ParrainageCreateWithoutAnimalInput[] | ParrainageUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ParrainageCreateOrConnectWithoutAnimalInput | ParrainageCreateOrConnectWithoutAnimalInput[]
    createMany?: ParrainageCreateManyAnimalInputEnvelope
    connect?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
  }

  export type PublicationCreateNestedManyWithoutAnimalInput = {
    create?: XOR<PublicationCreateWithoutAnimalInput, PublicationUncheckedCreateWithoutAnimalInput> | PublicationCreateWithoutAnimalInput[] | PublicationUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutAnimalInput | PublicationCreateOrConnectWithoutAnimalInput[]
    createMany?: PublicationCreateManyAnimalInputEnvelope
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
  }

  export type AdoptionCreateNestedManyWithoutAnimalInput = {
    create?: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput> | AdoptionCreateWithoutAnimalInput[] | AdoptionUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutAnimalInput | AdoptionCreateOrConnectWithoutAnimalInput[]
    createMany?: AdoptionCreateManyAnimalInputEnvelope
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<UsersCreateWithoutAnimalInput, UsersUncheckedCreateWithoutAnimalInput> | UsersCreateWithoutAnimalInput[] | UsersUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAnimalInput | UsersCreateOrConnectWithoutAnimalInput[]
    createMany?: UsersCreateManyAnimalInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type EvolutionUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<EvolutionCreateWithoutAnimalInput, EvolutionUncheckedCreateWithoutAnimalInput> | EvolutionCreateWithoutAnimalInput[] | EvolutionUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutAnimalInput | EvolutionCreateOrConnectWithoutAnimalInput[]
    createMany?: EvolutionCreateManyAnimalInputEnvelope
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
  }

  export type SuiviVeterinaireUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<SuiviVeterinaireCreateWithoutAnimalInput, SuiviVeterinaireUncheckedCreateWithoutAnimalInput> | SuiviVeterinaireCreateWithoutAnimalInput[] | SuiviVeterinaireUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: SuiviVeterinaireCreateOrConnectWithoutAnimalInput | SuiviVeterinaireCreateOrConnectWithoutAnimalInput[]
    createMany?: SuiviVeterinaireCreateManyAnimalInputEnvelope
    connect?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
  }

  export type ParrainageUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<ParrainageCreateWithoutAnimalInput, ParrainageUncheckedCreateWithoutAnimalInput> | ParrainageCreateWithoutAnimalInput[] | ParrainageUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ParrainageCreateOrConnectWithoutAnimalInput | ParrainageCreateOrConnectWithoutAnimalInput[]
    createMany?: ParrainageCreateManyAnimalInputEnvelope
    connect?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
  }

  export type PublicationUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<PublicationCreateWithoutAnimalInput, PublicationUncheckedCreateWithoutAnimalInput> | PublicationCreateWithoutAnimalInput[] | PublicationUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutAnimalInput | PublicationCreateOrConnectWithoutAnimalInput[]
    createMany?: PublicationCreateManyAnimalInputEnvelope
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
  }

  export type AdoptionUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput> | AdoptionCreateWithoutAnimalInput[] | AdoptionUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutAnimalInput | AdoptionCreateOrConnectWithoutAnimalInput[]
    createMany?: AdoptionCreateManyAnimalInputEnvelope
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<UsersCreateWithoutAnimalInput, UsersUncheckedCreateWithoutAnimalInput> | UsersCreateWithoutAnimalInput[] | UsersUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAnimalInput | UsersCreateOrConnectWithoutAnimalInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutAnimalInput | UsersUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: UsersCreateManyAnimalInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutAnimalInput | UsersUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutAnimalInput | UsersUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type EvolutionUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<EvolutionCreateWithoutAnimalInput, EvolutionUncheckedCreateWithoutAnimalInput> | EvolutionCreateWithoutAnimalInput[] | EvolutionUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutAnimalInput | EvolutionCreateOrConnectWithoutAnimalInput[]
    upsert?: EvolutionUpsertWithWhereUniqueWithoutAnimalInput | EvolutionUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: EvolutionCreateManyAnimalInputEnvelope
    set?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    disconnect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    delete?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    update?: EvolutionUpdateWithWhereUniqueWithoutAnimalInput | EvolutionUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: EvolutionUpdateManyWithWhereWithoutAnimalInput | EvolutionUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
  }

  export type SuiviVeterinaireUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<SuiviVeterinaireCreateWithoutAnimalInput, SuiviVeterinaireUncheckedCreateWithoutAnimalInput> | SuiviVeterinaireCreateWithoutAnimalInput[] | SuiviVeterinaireUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: SuiviVeterinaireCreateOrConnectWithoutAnimalInput | SuiviVeterinaireCreateOrConnectWithoutAnimalInput[]
    upsert?: SuiviVeterinaireUpsertWithWhereUniqueWithoutAnimalInput | SuiviVeterinaireUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: SuiviVeterinaireCreateManyAnimalInputEnvelope
    set?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
    disconnect?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
    delete?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
    connect?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
    update?: SuiviVeterinaireUpdateWithWhereUniqueWithoutAnimalInput | SuiviVeterinaireUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: SuiviVeterinaireUpdateManyWithWhereWithoutAnimalInput | SuiviVeterinaireUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: SuiviVeterinaireScalarWhereInput | SuiviVeterinaireScalarWhereInput[]
  }

  export type ParrainageUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<ParrainageCreateWithoutAnimalInput, ParrainageUncheckedCreateWithoutAnimalInput> | ParrainageCreateWithoutAnimalInput[] | ParrainageUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ParrainageCreateOrConnectWithoutAnimalInput | ParrainageCreateOrConnectWithoutAnimalInput[]
    upsert?: ParrainageUpsertWithWhereUniqueWithoutAnimalInput | ParrainageUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: ParrainageCreateManyAnimalInputEnvelope
    set?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
    disconnect?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
    delete?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
    connect?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
    update?: ParrainageUpdateWithWhereUniqueWithoutAnimalInput | ParrainageUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: ParrainageUpdateManyWithWhereWithoutAnimalInput | ParrainageUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: ParrainageScalarWhereInput | ParrainageScalarWhereInput[]
  }

  export type PublicationUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<PublicationCreateWithoutAnimalInput, PublicationUncheckedCreateWithoutAnimalInput> | PublicationCreateWithoutAnimalInput[] | PublicationUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutAnimalInput | PublicationCreateOrConnectWithoutAnimalInput[]
    upsert?: PublicationUpsertWithWhereUniqueWithoutAnimalInput | PublicationUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: PublicationCreateManyAnimalInputEnvelope
    set?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    disconnect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    delete?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    update?: PublicationUpdateWithWhereUniqueWithoutAnimalInput | PublicationUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: PublicationUpdateManyWithWhereWithoutAnimalInput | PublicationUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
  }

  export type AdoptionUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput> | AdoptionCreateWithoutAnimalInput[] | AdoptionUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutAnimalInput | AdoptionCreateOrConnectWithoutAnimalInput[]
    upsert?: AdoptionUpsertWithWhereUniqueWithoutAnimalInput | AdoptionUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: AdoptionCreateManyAnimalInputEnvelope
    set?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    disconnect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    delete?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    update?: AdoptionUpdateWithWhereUniqueWithoutAnimalInput | AdoptionUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: AdoptionUpdateManyWithWhereWithoutAnimalInput | AdoptionUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<UsersCreateWithoutAnimalInput, UsersUncheckedCreateWithoutAnimalInput> | UsersCreateWithoutAnimalInput[] | UsersUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAnimalInput | UsersCreateOrConnectWithoutAnimalInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutAnimalInput | UsersUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: UsersCreateManyAnimalInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutAnimalInput | UsersUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutAnimalInput | UsersUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type EvolutionUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<EvolutionCreateWithoutAnimalInput, EvolutionUncheckedCreateWithoutAnimalInput> | EvolutionCreateWithoutAnimalInput[] | EvolutionUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutAnimalInput | EvolutionCreateOrConnectWithoutAnimalInput[]
    upsert?: EvolutionUpsertWithWhereUniqueWithoutAnimalInput | EvolutionUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: EvolutionCreateManyAnimalInputEnvelope
    set?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    disconnect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    delete?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    update?: EvolutionUpdateWithWhereUniqueWithoutAnimalInput | EvolutionUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: EvolutionUpdateManyWithWhereWithoutAnimalInput | EvolutionUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
  }

  export type SuiviVeterinaireUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<SuiviVeterinaireCreateWithoutAnimalInput, SuiviVeterinaireUncheckedCreateWithoutAnimalInput> | SuiviVeterinaireCreateWithoutAnimalInput[] | SuiviVeterinaireUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: SuiviVeterinaireCreateOrConnectWithoutAnimalInput | SuiviVeterinaireCreateOrConnectWithoutAnimalInput[]
    upsert?: SuiviVeterinaireUpsertWithWhereUniqueWithoutAnimalInput | SuiviVeterinaireUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: SuiviVeterinaireCreateManyAnimalInputEnvelope
    set?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
    disconnect?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
    delete?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
    connect?: SuiviVeterinaireWhereUniqueInput | SuiviVeterinaireWhereUniqueInput[]
    update?: SuiviVeterinaireUpdateWithWhereUniqueWithoutAnimalInput | SuiviVeterinaireUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: SuiviVeterinaireUpdateManyWithWhereWithoutAnimalInput | SuiviVeterinaireUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: SuiviVeterinaireScalarWhereInput | SuiviVeterinaireScalarWhereInput[]
  }

  export type ParrainageUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<ParrainageCreateWithoutAnimalInput, ParrainageUncheckedCreateWithoutAnimalInput> | ParrainageCreateWithoutAnimalInput[] | ParrainageUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ParrainageCreateOrConnectWithoutAnimalInput | ParrainageCreateOrConnectWithoutAnimalInput[]
    upsert?: ParrainageUpsertWithWhereUniqueWithoutAnimalInput | ParrainageUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: ParrainageCreateManyAnimalInputEnvelope
    set?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
    disconnect?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
    delete?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
    connect?: ParrainageWhereUniqueInput | ParrainageWhereUniqueInput[]
    update?: ParrainageUpdateWithWhereUniqueWithoutAnimalInput | ParrainageUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: ParrainageUpdateManyWithWhereWithoutAnimalInput | ParrainageUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: ParrainageScalarWhereInput | ParrainageScalarWhereInput[]
  }

  export type PublicationUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<PublicationCreateWithoutAnimalInput, PublicationUncheckedCreateWithoutAnimalInput> | PublicationCreateWithoutAnimalInput[] | PublicationUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutAnimalInput | PublicationCreateOrConnectWithoutAnimalInput[]
    upsert?: PublicationUpsertWithWhereUniqueWithoutAnimalInput | PublicationUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: PublicationCreateManyAnimalInputEnvelope
    set?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    disconnect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    delete?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    update?: PublicationUpdateWithWhereUniqueWithoutAnimalInput | PublicationUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: PublicationUpdateManyWithWhereWithoutAnimalInput | PublicationUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
  }

  export type AdoptionUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput> | AdoptionCreateWithoutAnimalInput[] | AdoptionUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutAnimalInput | AdoptionCreateOrConnectWithoutAnimalInput[]
    upsert?: AdoptionUpsertWithWhereUniqueWithoutAnimalInput | AdoptionUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: AdoptionCreateManyAnimalInputEnvelope
    set?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    disconnect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    delete?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    update?: AdoptionUpdateWithWhereUniqueWithoutAnimalInput | AdoptionUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: AdoptionUpdateManyWithWhereWithoutAnimalInput | AdoptionUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
  }

  export type AnimalCreateNestedOneWithoutEvolutionInput = {
    create?: XOR<AnimalCreateWithoutEvolutionInput, AnimalUncheckedCreateWithoutEvolutionInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutEvolutionInput
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalUpdateOneRequiredWithoutEvolutionNestedInput = {
    create?: XOR<AnimalCreateWithoutEvolutionInput, AnimalUncheckedCreateWithoutEvolutionInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutEvolutionInput
    upsert?: AnimalUpsertWithoutEvolutionInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutEvolutionInput, AnimalUpdateWithoutEvolutionInput>, AnimalUncheckedUpdateWithoutEvolutionInput>
  }

  export type AnimalCreateNestedOneWithoutSuiviVeterinaireInput = {
    create?: XOR<AnimalCreateWithoutSuiviVeterinaireInput, AnimalUncheckedCreateWithoutSuiviVeterinaireInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutSuiviVeterinaireInput
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalUpdateOneRequiredWithoutSuiviVeterinaireNestedInput = {
    create?: XOR<AnimalCreateWithoutSuiviVeterinaireInput, AnimalUncheckedCreateWithoutSuiviVeterinaireInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutSuiviVeterinaireInput
    upsert?: AnimalUpsertWithoutSuiviVeterinaireInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutSuiviVeterinaireInput, AnimalUpdateWithoutSuiviVeterinaireInput>, AnimalUncheckedUpdateWithoutSuiviVeterinaireInput>
  }

  export type AnimalCreateNestedOneWithoutParrainageInput = {
    create?: XOR<AnimalCreateWithoutParrainageInput, AnimalUncheckedCreateWithoutParrainageInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutParrainageInput
    connect?: AnimalWhereUniqueInput
  }

  export type UsersCreateNestedManyWithoutParrainageInput = {
    create?: XOR<UsersCreateWithoutParrainageInput, UsersUncheckedCreateWithoutParrainageInput> | UsersCreateWithoutParrainageInput[] | UsersUncheckedCreateWithoutParrainageInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutParrainageInput | UsersCreateOrConnectWithoutParrainageInput[]
    createMany?: UsersCreateManyParrainageInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutParrainageInput = {
    create?: XOR<UsersCreateWithoutParrainageInput, UsersUncheckedCreateWithoutParrainageInput> | UsersCreateWithoutParrainageInput[] | UsersUncheckedCreateWithoutParrainageInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutParrainageInput | UsersCreateOrConnectWithoutParrainageInput[]
    createMany?: UsersCreateManyParrainageInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AnimalUpdateOneRequiredWithoutParrainageNestedInput = {
    create?: XOR<AnimalCreateWithoutParrainageInput, AnimalUncheckedCreateWithoutParrainageInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutParrainageInput
    upsert?: AnimalUpsertWithoutParrainageInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutParrainageInput, AnimalUpdateWithoutParrainageInput>, AnimalUncheckedUpdateWithoutParrainageInput>
  }

  export type UsersUpdateManyWithoutParrainageNestedInput = {
    create?: XOR<UsersCreateWithoutParrainageInput, UsersUncheckedCreateWithoutParrainageInput> | UsersCreateWithoutParrainageInput[] | UsersUncheckedCreateWithoutParrainageInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutParrainageInput | UsersCreateOrConnectWithoutParrainageInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutParrainageInput | UsersUpsertWithWhereUniqueWithoutParrainageInput[]
    createMany?: UsersCreateManyParrainageInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutParrainageInput | UsersUpdateWithWhereUniqueWithoutParrainageInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutParrainageInput | UsersUpdateManyWithWhereWithoutParrainageInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutParrainageNestedInput = {
    create?: XOR<UsersCreateWithoutParrainageInput, UsersUncheckedCreateWithoutParrainageInput> | UsersCreateWithoutParrainageInput[] | UsersUncheckedCreateWithoutParrainageInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutParrainageInput | UsersCreateOrConnectWithoutParrainageInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutParrainageInput | UsersUpsertWithWhereUniqueWithoutParrainageInput[]
    createMany?: UsersCreateManyParrainageInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutParrainageInput | UsersUpdateWithWhereUniqueWithoutParrainageInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutParrainageInput | UsersUpdateManyWithWhereWithoutParrainageInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type AnimalCreateNestedOneWithoutPublicationInput = {
    create?: XOR<AnimalCreateWithoutPublicationInput, AnimalUncheckedCreateWithoutPublicationInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutPublicationInput
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalUpdateOneRequiredWithoutPublicationNestedInput = {
    create?: XOR<AnimalCreateWithoutPublicationInput, AnimalUncheckedCreateWithoutPublicationInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutPublicationInput
    upsert?: AnimalUpsertWithoutPublicationInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutPublicationInput, AnimalUpdateWithoutPublicationInput>, AnimalUncheckedUpdateWithoutPublicationInput>
  }

  export type UsersCreateNestedManyWithoutBlogInput = {
    create?: XOR<UsersCreateWithoutBlogInput, UsersUncheckedCreateWithoutBlogInput> | UsersCreateWithoutBlogInput[] | UsersUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutBlogInput | UsersCreateOrConnectWithoutBlogInput[]
    createMany?: UsersCreateManyBlogInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<UsersCreateWithoutBlogInput, UsersUncheckedCreateWithoutBlogInput> | UsersCreateWithoutBlogInput[] | UsersUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutBlogInput | UsersCreateOrConnectWithoutBlogInput[]
    createMany?: UsersCreateManyBlogInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutBlogNestedInput = {
    create?: XOR<UsersCreateWithoutBlogInput, UsersUncheckedCreateWithoutBlogInput> | UsersCreateWithoutBlogInput[] | UsersUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutBlogInput | UsersCreateOrConnectWithoutBlogInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutBlogInput | UsersUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: UsersCreateManyBlogInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutBlogInput | UsersUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutBlogInput | UsersUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<UsersCreateWithoutBlogInput, UsersUncheckedCreateWithoutBlogInput> | UsersCreateWithoutBlogInput[] | UsersUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutBlogInput | UsersCreateOrConnectWithoutBlogInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutBlogInput | UsersUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: UsersCreateManyBlogInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutBlogInput | UsersUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutBlogInput | UsersUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AdoptantCreateNestedOneWithoutUsersInput = {
    create?: XOR<AdoptantCreateWithoutUsersInput, AdoptantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AdoptantCreateOrConnectWithoutUsersInput
    connect?: AdoptantWhereUniqueInput
  }

  export type PlanningBaladesCreateNestedManyWithoutUsersInput = {
    create?: XOR<PlanningBaladesCreateWithoutUsersInput, PlanningBaladesUncheckedCreateWithoutUsersInput> | PlanningBaladesCreateWithoutUsersInput[] | PlanningBaladesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PlanningBaladesCreateOrConnectWithoutUsersInput | PlanningBaladesCreateOrConnectWithoutUsersInput[]
    connect?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
  }

  export type CreneauxCreateNestedManyWithoutUsersInput = {
    create?: XOR<CreneauxCreateWithoutUsersInput, CreneauxUncheckedCreateWithoutUsersInput> | CreneauxCreateWithoutUsersInput[] | CreneauxUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CreneauxCreateOrConnectWithoutUsersInput | CreneauxCreateOrConnectWithoutUsersInput[]
    createMany?: CreneauxCreateManyUsersInputEnvelope
    connect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
  }

  export type AnimalCreateNestedOneWithoutUsersInput = {
    create?: XOR<AnimalCreateWithoutUsersInput, AnimalUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutUsersInput
    connect?: AnimalWhereUniqueInput
  }

  export type ParrainageCreateNestedOneWithoutUsersInput = {
    create?: XOR<ParrainageCreateWithoutUsersInput, ParrainageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ParrainageCreateOrConnectWithoutUsersInput
    connect?: ParrainageWhereUniqueInput
  }

  export type BlogCreateNestedOneWithoutUsersInput = {
    create?: XOR<BlogCreateWithoutUsersInput, BlogUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BlogCreateOrConnectWithoutUsersInput
    connect?: BlogWhereUniqueInput
  }

  export type PlanningBaladesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PlanningBaladesCreateWithoutUsersInput, PlanningBaladesUncheckedCreateWithoutUsersInput> | PlanningBaladesCreateWithoutUsersInput[] | PlanningBaladesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PlanningBaladesCreateOrConnectWithoutUsersInput | PlanningBaladesCreateOrConnectWithoutUsersInput[]
    connect?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
  }

  export type CreneauxUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CreneauxCreateWithoutUsersInput, CreneauxUncheckedCreateWithoutUsersInput> | CreneauxCreateWithoutUsersInput[] | CreneauxUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CreneauxCreateOrConnectWithoutUsersInput | CreneauxCreateOrConnectWithoutUsersInput[]
    createMany?: CreneauxCreateManyUsersInputEnvelope
    connect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
  }

  export type AdoptantUpdateOneWithoutUsersNestedInput = {
    create?: XOR<AdoptantCreateWithoutUsersInput, AdoptantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AdoptantCreateOrConnectWithoutUsersInput
    upsert?: AdoptantUpsertWithoutUsersInput
    disconnect?: AdoptantWhereInput | boolean
    delete?: AdoptantWhereInput | boolean
    connect?: AdoptantWhereUniqueInput
    update?: XOR<XOR<AdoptantUpdateToOneWithWhereWithoutUsersInput, AdoptantUpdateWithoutUsersInput>, AdoptantUncheckedUpdateWithoutUsersInput>
  }

  export type PlanningBaladesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PlanningBaladesCreateWithoutUsersInput, PlanningBaladesUncheckedCreateWithoutUsersInput> | PlanningBaladesCreateWithoutUsersInput[] | PlanningBaladesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PlanningBaladesCreateOrConnectWithoutUsersInput | PlanningBaladesCreateOrConnectWithoutUsersInput[]
    upsert?: PlanningBaladesUpsertWithWhereUniqueWithoutUsersInput | PlanningBaladesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
    disconnect?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
    delete?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
    connect?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
    update?: PlanningBaladesUpdateWithWhereUniqueWithoutUsersInput | PlanningBaladesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PlanningBaladesUpdateManyWithWhereWithoutUsersInput | PlanningBaladesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PlanningBaladesScalarWhereInput | PlanningBaladesScalarWhereInput[]
  }

  export type CreneauxUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CreneauxCreateWithoutUsersInput, CreneauxUncheckedCreateWithoutUsersInput> | CreneauxCreateWithoutUsersInput[] | CreneauxUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CreneauxCreateOrConnectWithoutUsersInput | CreneauxCreateOrConnectWithoutUsersInput[]
    upsert?: CreneauxUpsertWithWhereUniqueWithoutUsersInput | CreneauxUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CreneauxCreateManyUsersInputEnvelope
    set?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    disconnect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    delete?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    connect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    update?: CreneauxUpdateWithWhereUniqueWithoutUsersInput | CreneauxUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CreneauxUpdateManyWithWhereWithoutUsersInput | CreneauxUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CreneauxScalarWhereInput | CreneauxScalarWhereInput[]
  }

  export type AnimalUpdateOneWithoutUsersNestedInput = {
    create?: XOR<AnimalCreateWithoutUsersInput, AnimalUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutUsersInput
    upsert?: AnimalUpsertWithoutUsersInput
    disconnect?: AnimalWhereInput | boolean
    delete?: AnimalWhereInput | boolean
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutUsersInput, AnimalUpdateWithoutUsersInput>, AnimalUncheckedUpdateWithoutUsersInput>
  }

  export type ParrainageUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ParrainageCreateWithoutUsersInput, ParrainageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ParrainageCreateOrConnectWithoutUsersInput
    upsert?: ParrainageUpsertWithoutUsersInput
    disconnect?: ParrainageWhereInput | boolean
    delete?: ParrainageWhereInput | boolean
    connect?: ParrainageWhereUniqueInput
    update?: XOR<XOR<ParrainageUpdateToOneWithWhereWithoutUsersInput, ParrainageUpdateWithoutUsersInput>, ParrainageUncheckedUpdateWithoutUsersInput>
  }

  export type BlogUpdateOneWithoutUsersNestedInput = {
    create?: XOR<BlogCreateWithoutUsersInput, BlogUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BlogCreateOrConnectWithoutUsersInput
    upsert?: BlogUpsertWithoutUsersInput
    disconnect?: BlogWhereInput | boolean
    delete?: BlogWhereInput | boolean
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutUsersInput, BlogUpdateWithoutUsersInput>, BlogUncheckedUpdateWithoutUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlanningBaladesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PlanningBaladesCreateWithoutUsersInput, PlanningBaladesUncheckedCreateWithoutUsersInput> | PlanningBaladesCreateWithoutUsersInput[] | PlanningBaladesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PlanningBaladesCreateOrConnectWithoutUsersInput | PlanningBaladesCreateOrConnectWithoutUsersInput[]
    upsert?: PlanningBaladesUpsertWithWhereUniqueWithoutUsersInput | PlanningBaladesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
    disconnect?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
    delete?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
    connect?: PlanningBaladesWhereUniqueInput | PlanningBaladesWhereUniqueInput[]
    update?: PlanningBaladesUpdateWithWhereUniqueWithoutUsersInput | PlanningBaladesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PlanningBaladesUpdateManyWithWhereWithoutUsersInput | PlanningBaladesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PlanningBaladesScalarWhereInput | PlanningBaladesScalarWhereInput[]
  }

  export type CreneauxUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CreneauxCreateWithoutUsersInput, CreneauxUncheckedCreateWithoutUsersInput> | CreneauxCreateWithoutUsersInput[] | CreneauxUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CreneauxCreateOrConnectWithoutUsersInput | CreneauxCreateOrConnectWithoutUsersInput[]
    upsert?: CreneauxUpsertWithWhereUniqueWithoutUsersInput | CreneauxUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CreneauxCreateManyUsersInputEnvelope
    set?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    disconnect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    delete?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    connect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    update?: CreneauxUpdateWithWhereUniqueWithoutUsersInput | CreneauxUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CreneauxUpdateManyWithWhereWithoutUsersInput | CreneauxUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CreneauxScalarWhereInput | CreneauxScalarWhereInput[]
  }

  export type UsersCreateNestedManyWithoutPlanningBaladesInput = {
    create?: XOR<UsersCreateWithoutPlanningBaladesInput, UsersUncheckedCreateWithoutPlanningBaladesInput> | UsersCreateWithoutPlanningBaladesInput[] | UsersUncheckedCreateWithoutPlanningBaladesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutPlanningBaladesInput | UsersCreateOrConnectWithoutPlanningBaladesInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type CreneauxCreateNestedManyWithoutPlanningInput = {
    create?: XOR<CreneauxCreateWithoutPlanningInput, CreneauxUncheckedCreateWithoutPlanningInput> | CreneauxCreateWithoutPlanningInput[] | CreneauxUncheckedCreateWithoutPlanningInput[]
    connectOrCreate?: CreneauxCreateOrConnectWithoutPlanningInput | CreneauxCreateOrConnectWithoutPlanningInput[]
    createMany?: CreneauxCreateManyPlanningInputEnvelope
    connect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutPlanningBaladesInput = {
    create?: XOR<UsersCreateWithoutPlanningBaladesInput, UsersUncheckedCreateWithoutPlanningBaladesInput> | UsersCreateWithoutPlanningBaladesInput[] | UsersUncheckedCreateWithoutPlanningBaladesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutPlanningBaladesInput | UsersCreateOrConnectWithoutPlanningBaladesInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type CreneauxUncheckedCreateNestedManyWithoutPlanningInput = {
    create?: XOR<CreneauxCreateWithoutPlanningInput, CreneauxUncheckedCreateWithoutPlanningInput> | CreneauxCreateWithoutPlanningInput[] | CreneauxUncheckedCreateWithoutPlanningInput[]
    connectOrCreate?: CreneauxCreateOrConnectWithoutPlanningInput | CreneauxCreateOrConnectWithoutPlanningInput[]
    createMany?: CreneauxCreateManyPlanningInputEnvelope
    connect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutPlanningBaladesNestedInput = {
    create?: XOR<UsersCreateWithoutPlanningBaladesInput, UsersUncheckedCreateWithoutPlanningBaladesInput> | UsersCreateWithoutPlanningBaladesInput[] | UsersUncheckedCreateWithoutPlanningBaladesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutPlanningBaladesInput | UsersCreateOrConnectWithoutPlanningBaladesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutPlanningBaladesInput | UsersUpsertWithWhereUniqueWithoutPlanningBaladesInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutPlanningBaladesInput | UsersUpdateWithWhereUniqueWithoutPlanningBaladesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutPlanningBaladesInput | UsersUpdateManyWithWhereWithoutPlanningBaladesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type CreneauxUpdateManyWithoutPlanningNestedInput = {
    create?: XOR<CreneauxCreateWithoutPlanningInput, CreneauxUncheckedCreateWithoutPlanningInput> | CreneauxCreateWithoutPlanningInput[] | CreneauxUncheckedCreateWithoutPlanningInput[]
    connectOrCreate?: CreneauxCreateOrConnectWithoutPlanningInput | CreneauxCreateOrConnectWithoutPlanningInput[]
    upsert?: CreneauxUpsertWithWhereUniqueWithoutPlanningInput | CreneauxUpsertWithWhereUniqueWithoutPlanningInput[]
    createMany?: CreneauxCreateManyPlanningInputEnvelope
    set?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    disconnect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    delete?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    connect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    update?: CreneauxUpdateWithWhereUniqueWithoutPlanningInput | CreneauxUpdateWithWhereUniqueWithoutPlanningInput[]
    updateMany?: CreneauxUpdateManyWithWhereWithoutPlanningInput | CreneauxUpdateManyWithWhereWithoutPlanningInput[]
    deleteMany?: CreneauxScalarWhereInput | CreneauxScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutPlanningBaladesNestedInput = {
    create?: XOR<UsersCreateWithoutPlanningBaladesInput, UsersUncheckedCreateWithoutPlanningBaladesInput> | UsersCreateWithoutPlanningBaladesInput[] | UsersUncheckedCreateWithoutPlanningBaladesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutPlanningBaladesInput | UsersCreateOrConnectWithoutPlanningBaladesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutPlanningBaladesInput | UsersUpsertWithWhereUniqueWithoutPlanningBaladesInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutPlanningBaladesInput | UsersUpdateWithWhereUniqueWithoutPlanningBaladesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutPlanningBaladesInput | UsersUpdateManyWithWhereWithoutPlanningBaladesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type CreneauxUncheckedUpdateManyWithoutPlanningNestedInput = {
    create?: XOR<CreneauxCreateWithoutPlanningInput, CreneauxUncheckedCreateWithoutPlanningInput> | CreneauxCreateWithoutPlanningInput[] | CreneauxUncheckedCreateWithoutPlanningInput[]
    connectOrCreate?: CreneauxCreateOrConnectWithoutPlanningInput | CreneauxCreateOrConnectWithoutPlanningInput[]
    upsert?: CreneauxUpsertWithWhereUniqueWithoutPlanningInput | CreneauxUpsertWithWhereUniqueWithoutPlanningInput[]
    createMany?: CreneauxCreateManyPlanningInputEnvelope
    set?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    disconnect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    delete?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    connect?: CreneauxWhereUniqueInput | CreneauxWhereUniqueInput[]
    update?: CreneauxUpdateWithWhereUniqueWithoutPlanningInput | CreneauxUpdateWithWhereUniqueWithoutPlanningInput[]
    updateMany?: CreneauxUpdateManyWithWhereWithoutPlanningInput | CreneauxUpdateManyWithWhereWithoutPlanningInput[]
    deleteMany?: CreneauxScalarWhereInput | CreneauxScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCreneauxInput = {
    create?: XOR<UsersCreateWithoutCreneauxInput, UsersUncheckedCreateWithoutCreneauxInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCreneauxInput
    connect?: UsersWhereUniqueInput
  }

  export type PlanningBaladesCreateNestedOneWithoutCreneauxInput = {
    create?: XOR<PlanningBaladesCreateWithoutCreneauxInput, PlanningBaladesUncheckedCreateWithoutCreneauxInput>
    connectOrCreate?: PlanningBaladesCreateOrConnectWithoutCreneauxInput
    connect?: PlanningBaladesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutCreneauxNestedInput = {
    create?: XOR<UsersCreateWithoutCreneauxInput, UsersUncheckedCreateWithoutCreneauxInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCreneauxInput
    upsert?: UsersUpsertWithoutCreneauxInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCreneauxInput, UsersUpdateWithoutCreneauxInput>, UsersUncheckedUpdateWithoutCreneauxInput>
  }

  export type PlanningBaladesUpdateOneRequiredWithoutCreneauxNestedInput = {
    create?: XOR<PlanningBaladesCreateWithoutCreneauxInput, PlanningBaladesUncheckedCreateWithoutCreneauxInput>
    connectOrCreate?: PlanningBaladesCreateOrConnectWithoutCreneauxInput
    upsert?: PlanningBaladesUpsertWithoutCreneauxInput
    connect?: PlanningBaladesWhereUniqueInput
    update?: XOR<XOR<PlanningBaladesUpdateToOneWithWhereWithoutCreneauxInput, PlanningBaladesUpdateWithoutCreneauxInput>, PlanningBaladesUncheckedUpdateWithoutCreneauxInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UsersCreateWithoutAdoptantInput = {
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    planningBalades?: PlanningBaladesCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxCreateNestedManyWithoutUsersInput
    Animal?: AnimalCreateNestedOneWithoutUsersInput
    Parrainage?: ParrainageCreateNestedOneWithoutUsersInput
    Blog?: BlogCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutAdoptantInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    animalId?: number | null
    parrainageId?: number | null
    blogId?: number | null
    planningBalades?: PlanningBaladesUncheckedCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutAdoptantInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAdoptantInput, UsersUncheckedCreateWithoutAdoptantInput>
  }

  export type UsersCreateManyAdoptantInputEnvelope = {
    data: UsersCreateManyAdoptantInput | UsersCreateManyAdoptantInput[]
    skipDuplicates?: boolean
  }

  export type AdoptionCreateWithoutAdoptantInput = {
    dateAdoption: Date | string
    typeAdoption: string
    animal: AnimalCreateNestedOneWithoutAdoptionInput
  }

  export type AdoptionUncheckedCreateWithoutAdoptantInput = {
    id?: number
    dateAdoption: Date | string
    typeAdoption: string
    id_animal: number
  }

  export type AdoptionCreateOrConnectWithoutAdoptantInput = {
    where: AdoptionWhereUniqueInput
    create: XOR<AdoptionCreateWithoutAdoptantInput, AdoptionUncheckedCreateWithoutAdoptantInput>
  }

  export type AdoptionCreateManyAdoptantInputEnvelope = {
    data: AdoptionCreateManyAdoptantInput | AdoptionCreateManyAdoptantInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutAdoptantInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutAdoptantInput, UsersUncheckedUpdateWithoutAdoptantInput>
    create: XOR<UsersCreateWithoutAdoptantInput, UsersUncheckedCreateWithoutAdoptantInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutAdoptantInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutAdoptantInput, UsersUncheckedUpdateWithoutAdoptantInput>
  }

  export type UsersUpdateManyWithWhereWithoutAdoptantInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutAdoptantInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    nom?: StringFilter<"Users"> | string
    prenom?: StringFilter<"Users"> | string
    telephone?: StringFilter<"Users"> | string
    adresse?: StringFilter<"Users"> | string
    cp?: StringFilter<"Users"> | string
    ville?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    adoptantId?: IntNullableFilter<"Users"> | number | null
    animalId?: IntNullableFilter<"Users"> | number | null
    parrainageId?: IntNullableFilter<"Users"> | number | null
    blogId?: IntNullableFilter<"Users"> | number | null
  }

  export type AdoptionUpsertWithWhereUniqueWithoutAdoptantInput = {
    where: AdoptionWhereUniqueInput
    update: XOR<AdoptionUpdateWithoutAdoptantInput, AdoptionUncheckedUpdateWithoutAdoptantInput>
    create: XOR<AdoptionCreateWithoutAdoptantInput, AdoptionUncheckedCreateWithoutAdoptantInput>
  }

  export type AdoptionUpdateWithWhereUniqueWithoutAdoptantInput = {
    where: AdoptionWhereUniqueInput
    data: XOR<AdoptionUpdateWithoutAdoptantInput, AdoptionUncheckedUpdateWithoutAdoptantInput>
  }

  export type AdoptionUpdateManyWithWhereWithoutAdoptantInput = {
    where: AdoptionScalarWhereInput
    data: XOR<AdoptionUpdateManyMutationInput, AdoptionUncheckedUpdateManyWithoutAdoptantInput>
  }

  export type AdoptionScalarWhereInput = {
    AND?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
    OR?: AdoptionScalarWhereInput[]
    NOT?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
    id?: IntFilter<"Adoption"> | number
    dateAdoption?: DateTimeFilter<"Adoption"> | Date | string
    typeAdoption?: StringFilter<"Adoption"> | string
    id_animal?: IntFilter<"Adoption"> | number
    id_adoptant?: IntFilter<"Adoption"> | number
  }

  export type AnimalCreateWithoutAdoptionInput = {
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageCreateNestedManyWithoutAnimalInput
    publication?: PublicationCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutAdoptionInput = {
    id?: number
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionUncheckedCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageUncheckedCreateNestedManyWithoutAnimalInput
    publication?: PublicationUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutAdoptionInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutAdoptionInput, AnimalUncheckedCreateWithoutAdoptionInput>
  }

  export type AdoptantCreateWithoutAdoptionInput = {
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    historiqueAdoption: string
    commentaires: string
    users?: UsersCreateNestedManyWithoutAdoptantInput
  }

  export type AdoptantUncheckedCreateWithoutAdoptionInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    historiqueAdoption: string
    commentaires: string
    users?: UsersUncheckedCreateNestedManyWithoutAdoptantInput
  }

  export type AdoptantCreateOrConnectWithoutAdoptionInput = {
    where: AdoptantWhereUniqueInput
    create: XOR<AdoptantCreateWithoutAdoptionInput, AdoptantUncheckedCreateWithoutAdoptionInput>
  }

  export type AnimalUpsertWithoutAdoptionInput = {
    update: XOR<AnimalUpdateWithoutAdoptionInput, AnimalUncheckedUpdateWithoutAdoptionInput>
    create: XOR<AnimalCreateWithoutAdoptionInput, AnimalUncheckedCreateWithoutAdoptionInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutAdoptionInput, AnimalUncheckedUpdateWithoutAdoptionInput>
  }

  export type AnimalUpdateWithoutAdoptionInput = {
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutAdoptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUncheckedUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUncheckedUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AdoptantUpsertWithoutAdoptionInput = {
    update: XOR<AdoptantUpdateWithoutAdoptionInput, AdoptantUncheckedUpdateWithoutAdoptionInput>
    create: XOR<AdoptantCreateWithoutAdoptionInput, AdoptantUncheckedCreateWithoutAdoptionInput>
    where?: AdoptantWhereInput
  }

  export type AdoptantUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: AdoptantWhereInput
    data: XOR<AdoptantUpdateWithoutAdoptionInput, AdoptantUncheckedUpdateWithoutAdoptionInput>
  }

  export type AdoptantUpdateWithoutAdoptionInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    historiqueAdoption?: StringFieldUpdateOperationsInput | string
    commentaires?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateManyWithoutAdoptantNestedInput
  }

  export type AdoptantUncheckedUpdateWithoutAdoptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    historiqueAdoption?: StringFieldUpdateOperationsInput | string
    commentaires?: StringFieldUpdateOperationsInput | string
    users?: UsersUncheckedUpdateManyWithoutAdoptantNestedInput
  }

  export type UsersCreateWithoutAnimalInput = {
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptant?: AdoptantCreateNestedOneWithoutUsersInput
    planningBalades?: PlanningBaladesCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxCreateNestedManyWithoutUsersInput
    Parrainage?: ParrainageCreateNestedOneWithoutUsersInput
    Blog?: BlogCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutAnimalInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    parrainageId?: number | null
    blogId?: number | null
    planningBalades?: PlanningBaladesUncheckedCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutAnimalInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAnimalInput, UsersUncheckedCreateWithoutAnimalInput>
  }

  export type UsersCreateManyAnimalInputEnvelope = {
    data: UsersCreateManyAnimalInput | UsersCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type EvolutionCreateWithoutAnimalInput = {
    date: Date | string
    motif: string
    observations: string
  }

  export type EvolutionUncheckedCreateWithoutAnimalInput = {
    id?: number
    date: Date | string
    motif: string
    observations: string
  }

  export type EvolutionCreateOrConnectWithoutAnimalInput = {
    where: EvolutionWhereUniqueInput
    create: XOR<EvolutionCreateWithoutAnimalInput, EvolutionUncheckedCreateWithoutAnimalInput>
  }

  export type EvolutionCreateManyAnimalInputEnvelope = {
    data: EvolutionCreateManyAnimalInput | EvolutionCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type SuiviVeterinaireCreateWithoutAnimalInput = {
    dateVisite: Date | string
    motif: string
    observations: string
    traitement: string
    validationAdoption: string
  }

  export type SuiviVeterinaireUncheckedCreateWithoutAnimalInput = {
    id?: number
    dateVisite: Date | string
    motif: string
    observations: string
    traitement: string
    validationAdoption: string
  }

  export type SuiviVeterinaireCreateOrConnectWithoutAnimalInput = {
    where: SuiviVeterinaireWhereUniqueInput
    create: XOR<SuiviVeterinaireCreateWithoutAnimalInput, SuiviVeterinaireUncheckedCreateWithoutAnimalInput>
  }

  export type SuiviVeterinaireCreateManyAnimalInputEnvelope = {
    data: SuiviVeterinaireCreateManyAnimalInput | SuiviVeterinaireCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type ParrainageCreateWithoutAnimalInput = {
    dateDebutParrainage: Date | string
    description: string
    dateFinParrainage?: Date | string | null
    users?: UsersCreateNestedManyWithoutParrainageInput
  }

  export type ParrainageUncheckedCreateWithoutAnimalInput = {
    id?: number
    dateDebutParrainage: Date | string
    description: string
    dateFinParrainage?: Date | string | null
    users?: UsersUncheckedCreateNestedManyWithoutParrainageInput
  }

  export type ParrainageCreateOrConnectWithoutAnimalInput = {
    where: ParrainageWhereUniqueInput
    create: XOR<ParrainageCreateWithoutAnimalInput, ParrainageUncheckedCreateWithoutAnimalInput>
  }

  export type ParrainageCreateManyAnimalInputEnvelope = {
    data: ParrainageCreateManyAnimalInput | ParrainageCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type PublicationCreateWithoutAnimalInput = {
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
  }

  export type PublicationUncheckedCreateWithoutAnimalInput = {
    id?: number
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
  }

  export type PublicationCreateOrConnectWithoutAnimalInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutAnimalInput, PublicationUncheckedCreateWithoutAnimalInput>
  }

  export type PublicationCreateManyAnimalInputEnvelope = {
    data: PublicationCreateManyAnimalInput | PublicationCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type AdoptionCreateWithoutAnimalInput = {
    dateAdoption: Date | string
    typeAdoption: string
    adoptant: AdoptantCreateNestedOneWithoutAdoptionInput
  }

  export type AdoptionUncheckedCreateWithoutAnimalInput = {
    id?: number
    dateAdoption: Date | string
    typeAdoption: string
    id_adoptant: number
  }

  export type AdoptionCreateOrConnectWithoutAnimalInput = {
    where: AdoptionWhereUniqueInput
    create: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput>
  }

  export type AdoptionCreateManyAnimalInputEnvelope = {
    data: AdoptionCreateManyAnimalInput | AdoptionCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutAnimalInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutAnimalInput, UsersUncheckedUpdateWithoutAnimalInput>
    create: XOR<UsersCreateWithoutAnimalInput, UsersUncheckedCreateWithoutAnimalInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutAnimalInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutAnimalInput, UsersUncheckedUpdateWithoutAnimalInput>
  }

  export type UsersUpdateManyWithWhereWithoutAnimalInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutAnimalInput>
  }

  export type EvolutionUpsertWithWhereUniqueWithoutAnimalInput = {
    where: EvolutionWhereUniqueInput
    update: XOR<EvolutionUpdateWithoutAnimalInput, EvolutionUncheckedUpdateWithoutAnimalInput>
    create: XOR<EvolutionCreateWithoutAnimalInput, EvolutionUncheckedCreateWithoutAnimalInput>
  }

  export type EvolutionUpdateWithWhereUniqueWithoutAnimalInput = {
    where: EvolutionWhereUniqueInput
    data: XOR<EvolutionUpdateWithoutAnimalInput, EvolutionUncheckedUpdateWithoutAnimalInput>
  }

  export type EvolutionUpdateManyWithWhereWithoutAnimalInput = {
    where: EvolutionScalarWhereInput
    data: XOR<EvolutionUpdateManyMutationInput, EvolutionUncheckedUpdateManyWithoutAnimalInput>
  }

  export type EvolutionScalarWhereInput = {
    AND?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
    OR?: EvolutionScalarWhereInput[]
    NOT?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
    id?: IntFilter<"Evolution"> | number
    id_animal?: IntFilter<"Evolution"> | number
    date?: DateTimeFilter<"Evolution"> | Date | string
    motif?: StringFilter<"Evolution"> | string
    observations?: StringFilter<"Evolution"> | string
  }

  export type SuiviVeterinaireUpsertWithWhereUniqueWithoutAnimalInput = {
    where: SuiviVeterinaireWhereUniqueInput
    update: XOR<SuiviVeterinaireUpdateWithoutAnimalInput, SuiviVeterinaireUncheckedUpdateWithoutAnimalInput>
    create: XOR<SuiviVeterinaireCreateWithoutAnimalInput, SuiviVeterinaireUncheckedCreateWithoutAnimalInput>
  }

  export type SuiviVeterinaireUpdateWithWhereUniqueWithoutAnimalInput = {
    where: SuiviVeterinaireWhereUniqueInput
    data: XOR<SuiviVeterinaireUpdateWithoutAnimalInput, SuiviVeterinaireUncheckedUpdateWithoutAnimalInput>
  }

  export type SuiviVeterinaireUpdateManyWithWhereWithoutAnimalInput = {
    where: SuiviVeterinaireScalarWhereInput
    data: XOR<SuiviVeterinaireUpdateManyMutationInput, SuiviVeterinaireUncheckedUpdateManyWithoutAnimalInput>
  }

  export type SuiviVeterinaireScalarWhereInput = {
    AND?: SuiviVeterinaireScalarWhereInput | SuiviVeterinaireScalarWhereInput[]
    OR?: SuiviVeterinaireScalarWhereInput[]
    NOT?: SuiviVeterinaireScalarWhereInput | SuiviVeterinaireScalarWhereInput[]
    id?: IntFilter<"SuiviVeterinaire"> | number
    id_animal?: IntFilter<"SuiviVeterinaire"> | number
    dateVisite?: DateTimeFilter<"SuiviVeterinaire"> | Date | string
    motif?: StringFilter<"SuiviVeterinaire"> | string
    observations?: StringFilter<"SuiviVeterinaire"> | string
    traitement?: StringFilter<"SuiviVeterinaire"> | string
    validationAdoption?: StringFilter<"SuiviVeterinaire"> | string
  }

  export type ParrainageUpsertWithWhereUniqueWithoutAnimalInput = {
    where: ParrainageWhereUniqueInput
    update: XOR<ParrainageUpdateWithoutAnimalInput, ParrainageUncheckedUpdateWithoutAnimalInput>
    create: XOR<ParrainageCreateWithoutAnimalInput, ParrainageUncheckedCreateWithoutAnimalInput>
  }

  export type ParrainageUpdateWithWhereUniqueWithoutAnimalInput = {
    where: ParrainageWhereUniqueInput
    data: XOR<ParrainageUpdateWithoutAnimalInput, ParrainageUncheckedUpdateWithoutAnimalInput>
  }

  export type ParrainageUpdateManyWithWhereWithoutAnimalInput = {
    where: ParrainageScalarWhereInput
    data: XOR<ParrainageUpdateManyMutationInput, ParrainageUncheckedUpdateManyWithoutAnimalInput>
  }

  export type ParrainageScalarWhereInput = {
    AND?: ParrainageScalarWhereInput | ParrainageScalarWhereInput[]
    OR?: ParrainageScalarWhereInput[]
    NOT?: ParrainageScalarWhereInput | ParrainageScalarWhereInput[]
    id?: IntFilter<"Parrainage"> | number
    id_animal?: IntFilter<"Parrainage"> | number
    dateDebutParrainage?: DateTimeFilter<"Parrainage"> | Date | string
    description?: StringFilter<"Parrainage"> | string
    dateFinParrainage?: DateTimeNullableFilter<"Parrainage"> | Date | string | null
  }

  export type PublicationUpsertWithWhereUniqueWithoutAnimalInput = {
    where: PublicationWhereUniqueInput
    update: XOR<PublicationUpdateWithoutAnimalInput, PublicationUncheckedUpdateWithoutAnimalInput>
    create: XOR<PublicationCreateWithoutAnimalInput, PublicationUncheckedCreateWithoutAnimalInput>
  }

  export type PublicationUpdateWithWhereUniqueWithoutAnimalInput = {
    where: PublicationWhereUniqueInput
    data: XOR<PublicationUpdateWithoutAnimalInput, PublicationUncheckedUpdateWithoutAnimalInput>
  }

  export type PublicationUpdateManyWithWhereWithoutAnimalInput = {
    where: PublicationScalarWhereInput
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyWithoutAnimalInput>
  }

  export type PublicationScalarWhereInput = {
    AND?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
    OR?: PublicationScalarWhereInput[]
    NOT?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
    id?: IntFilter<"Publication"> | number
    id_animal?: IntFilter<"Publication"> | number
    date?: DateTimeFilter<"Publication"> | Date | string
    heure?: DateTimeFilter<"Publication"> | Date | string
    titre?: StringFilter<"Publication"> | string
    article?: StringFilter<"Publication"> | string
    image?: StringFilter<"Publication"> | string
  }

  export type AdoptionUpsertWithWhereUniqueWithoutAnimalInput = {
    where: AdoptionWhereUniqueInput
    update: XOR<AdoptionUpdateWithoutAnimalInput, AdoptionUncheckedUpdateWithoutAnimalInput>
    create: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput>
  }

  export type AdoptionUpdateWithWhereUniqueWithoutAnimalInput = {
    where: AdoptionWhereUniqueInput
    data: XOR<AdoptionUpdateWithoutAnimalInput, AdoptionUncheckedUpdateWithoutAnimalInput>
  }

  export type AdoptionUpdateManyWithWhereWithoutAnimalInput = {
    where: AdoptionScalarWhereInput
    data: XOR<AdoptionUpdateManyMutationInput, AdoptionUncheckedUpdateManyWithoutAnimalInput>
  }

  export type AnimalCreateWithoutEvolutionInput = {
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageCreateNestedManyWithoutAnimalInput
    publication?: PublicationCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutEvolutionInput = {
    id?: number
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageUncheckedCreateNestedManyWithoutAnimalInput
    publication?: PublicationUncheckedCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutEvolutionInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutEvolutionInput, AnimalUncheckedCreateWithoutEvolutionInput>
  }

  export type AnimalUpsertWithoutEvolutionInput = {
    update: XOR<AnimalUpdateWithoutEvolutionInput, AnimalUncheckedUpdateWithoutEvolutionInput>
    create: XOR<AnimalCreateWithoutEvolutionInput, AnimalUncheckedCreateWithoutEvolutionInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutEvolutionInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutEvolutionInput, AnimalUncheckedUpdateWithoutEvolutionInput>
  }

  export type AnimalUpdateWithoutEvolutionInput = {
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutEvolutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUncheckedUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUncheckedUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalCreateWithoutSuiviVeterinaireInput = {
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageCreateNestedManyWithoutAnimalInput
    publication?: PublicationCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutSuiviVeterinaireInput = {
    id?: number
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionUncheckedCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageUncheckedCreateNestedManyWithoutAnimalInput
    publication?: PublicationUncheckedCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutSuiviVeterinaireInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutSuiviVeterinaireInput, AnimalUncheckedCreateWithoutSuiviVeterinaireInput>
  }

  export type AnimalUpsertWithoutSuiviVeterinaireInput = {
    update: XOR<AnimalUpdateWithoutSuiviVeterinaireInput, AnimalUncheckedUpdateWithoutSuiviVeterinaireInput>
    create: XOR<AnimalCreateWithoutSuiviVeterinaireInput, AnimalUncheckedCreateWithoutSuiviVeterinaireInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutSuiviVeterinaireInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutSuiviVeterinaireInput, AnimalUncheckedUpdateWithoutSuiviVeterinaireInput>
  }

  export type AnimalUpdateWithoutSuiviVeterinaireInput = {
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutSuiviVeterinaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUncheckedUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUncheckedUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUncheckedUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalCreateWithoutParrainageInput = {
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireCreateNestedManyWithoutAnimalInput
    publication?: PublicationCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutParrainageInput = {
    id?: number
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionUncheckedCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedCreateNestedManyWithoutAnimalInput
    publication?: PublicationUncheckedCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutParrainageInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutParrainageInput, AnimalUncheckedCreateWithoutParrainageInput>
  }

  export type UsersCreateWithoutParrainageInput = {
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptant?: AdoptantCreateNestedOneWithoutUsersInput
    planningBalades?: PlanningBaladesCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxCreateNestedManyWithoutUsersInput
    Animal?: AnimalCreateNestedOneWithoutUsersInput
    Blog?: BlogCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutParrainageInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    animalId?: number | null
    blogId?: number | null
    planningBalades?: PlanningBaladesUncheckedCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutParrainageInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutParrainageInput, UsersUncheckedCreateWithoutParrainageInput>
  }

  export type UsersCreateManyParrainageInputEnvelope = {
    data: UsersCreateManyParrainageInput | UsersCreateManyParrainageInput[]
    skipDuplicates?: boolean
  }

  export type AnimalUpsertWithoutParrainageInput = {
    update: XOR<AnimalUpdateWithoutParrainageInput, AnimalUncheckedUpdateWithoutParrainageInput>
    create: XOR<AnimalCreateWithoutParrainageInput, AnimalUncheckedCreateWithoutParrainageInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutParrainageInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutParrainageInput, AnimalUncheckedUpdateWithoutParrainageInput>
  }

  export type AnimalUpdateWithoutParrainageInput = {
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutParrainageInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUncheckedUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUncheckedUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type UsersUpsertWithWhereUniqueWithoutParrainageInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutParrainageInput, UsersUncheckedUpdateWithoutParrainageInput>
    create: XOR<UsersCreateWithoutParrainageInput, UsersUncheckedCreateWithoutParrainageInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutParrainageInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutParrainageInput, UsersUncheckedUpdateWithoutParrainageInput>
  }

  export type UsersUpdateManyWithWhereWithoutParrainageInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutParrainageInput>
  }

  export type AnimalCreateWithoutPublicationInput = {
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutPublicationInput = {
    id?: number
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutAnimalInput
    evolution?: EvolutionUncheckedCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageUncheckedCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutPublicationInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutPublicationInput, AnimalUncheckedCreateWithoutPublicationInput>
  }

  export type AnimalUpsertWithoutPublicationInput = {
    update: XOR<AnimalUpdateWithoutPublicationInput, AnimalUncheckedUpdateWithoutPublicationInput>
    create: XOR<AnimalCreateWithoutPublicationInput, AnimalUncheckedCreateWithoutPublicationInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutPublicationInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutPublicationInput, AnimalUncheckedUpdateWithoutPublicationInput>
  }

  export type AnimalUpdateWithoutPublicationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutPublicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutAnimalNestedInput
    evolution?: EvolutionUncheckedUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUncheckedUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type UsersCreateWithoutBlogInput = {
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptant?: AdoptantCreateNestedOneWithoutUsersInput
    planningBalades?: PlanningBaladesCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxCreateNestedManyWithoutUsersInput
    Animal?: AnimalCreateNestedOneWithoutUsersInput
    Parrainage?: ParrainageCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutBlogInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    animalId?: number | null
    parrainageId?: number | null
    planningBalades?: PlanningBaladesUncheckedCreateNestedManyWithoutUsersInput
    creneaux?: CreneauxUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutBlogInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBlogInput, UsersUncheckedCreateWithoutBlogInput>
  }

  export type UsersCreateManyBlogInputEnvelope = {
    data: UsersCreateManyBlogInput | UsersCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutBlogInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutBlogInput, UsersUncheckedUpdateWithoutBlogInput>
    create: XOR<UsersCreateWithoutBlogInput, UsersUncheckedCreateWithoutBlogInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutBlogInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutBlogInput, UsersUncheckedUpdateWithoutBlogInput>
  }

  export type UsersUpdateManyWithWhereWithoutBlogInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutBlogInput>
  }

  export type AdoptantCreateWithoutUsersInput = {
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    historiqueAdoption: string
    commentaires: string
    Adoption?: AdoptionCreateNestedManyWithoutAdoptantInput
  }

  export type AdoptantUncheckedCreateWithoutUsersInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    historiqueAdoption: string
    commentaires: string
    Adoption?: AdoptionUncheckedCreateNestedManyWithoutAdoptantInput
  }

  export type AdoptantCreateOrConnectWithoutUsersInput = {
    where: AdoptantWhereUniqueInput
    create: XOR<AdoptantCreateWithoutUsersInput, AdoptantUncheckedCreateWithoutUsersInput>
  }

  export type PlanningBaladesCreateWithoutUsersInput = {
    date: Date | string
    heure: Date | string
    chien_chat: string
    creneaux?: CreneauxCreateNestedManyWithoutPlanningInput
  }

  export type PlanningBaladesUncheckedCreateWithoutUsersInput = {
    id?: number
    date: Date | string
    heure: Date | string
    chien_chat: string
    creneaux?: CreneauxUncheckedCreateNestedManyWithoutPlanningInput
  }

  export type PlanningBaladesCreateOrConnectWithoutUsersInput = {
    where: PlanningBaladesWhereUniqueInput
    create: XOR<PlanningBaladesCreateWithoutUsersInput, PlanningBaladesUncheckedCreateWithoutUsersInput>
  }

  export type CreneauxCreateWithoutUsersInput = {
    planning: PlanningBaladesCreateNestedOneWithoutCreneauxInput
  }

  export type CreneauxUncheckedCreateWithoutUsersInput = {
    id?: number
    id_planning: number
  }

  export type CreneauxCreateOrConnectWithoutUsersInput = {
    where: CreneauxWhereUniqueInput
    create: XOR<CreneauxCreateWithoutUsersInput, CreneauxUncheckedCreateWithoutUsersInput>
  }

  export type CreneauxCreateManyUsersInputEnvelope = {
    data: CreneauxCreateManyUsersInput | CreneauxCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type AnimalCreateWithoutUsersInput = {
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    evolution?: EvolutionCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageCreateNestedManyWithoutAnimalInput
    publication?: PublicationCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutUsersInput = {
    id?: number
    nom: string
    age: number
    sexe: string
    espece: string
    race: string
    N_identification: string
    description: string
    image: string
    statut: string
    dateArrivee: Date | string
    evolution?: EvolutionUncheckedCreateNestedManyWithoutAnimalInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedCreateNestedManyWithoutAnimalInput
    parrainage?: ParrainageUncheckedCreateNestedManyWithoutAnimalInput
    publication?: PublicationUncheckedCreateNestedManyWithoutAnimalInput
    Adoption?: AdoptionUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutUsersInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutUsersInput, AnimalUncheckedCreateWithoutUsersInput>
  }

  export type ParrainageCreateWithoutUsersInput = {
    dateDebutParrainage: Date | string
    description: string
    dateFinParrainage?: Date | string | null
    animal: AnimalCreateNestedOneWithoutParrainageInput
  }

  export type ParrainageUncheckedCreateWithoutUsersInput = {
    id?: number
    id_animal: number
    dateDebutParrainage: Date | string
    description: string
    dateFinParrainage?: Date | string | null
  }

  export type ParrainageCreateOrConnectWithoutUsersInput = {
    where: ParrainageWhereUniqueInput
    create: XOR<ParrainageCreateWithoutUsersInput, ParrainageUncheckedCreateWithoutUsersInput>
  }

  export type BlogCreateWithoutUsersInput = {
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
  }

  export type BlogUncheckedCreateWithoutUsersInput = {
    id?: number
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
  }

  export type BlogCreateOrConnectWithoutUsersInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutUsersInput, BlogUncheckedCreateWithoutUsersInput>
  }

  export type AdoptantUpsertWithoutUsersInput = {
    update: XOR<AdoptantUpdateWithoutUsersInput, AdoptantUncheckedUpdateWithoutUsersInput>
    create: XOR<AdoptantCreateWithoutUsersInput, AdoptantUncheckedCreateWithoutUsersInput>
    where?: AdoptantWhereInput
  }

  export type AdoptantUpdateToOneWithWhereWithoutUsersInput = {
    where?: AdoptantWhereInput
    data: XOR<AdoptantUpdateWithoutUsersInput, AdoptantUncheckedUpdateWithoutUsersInput>
  }

  export type AdoptantUpdateWithoutUsersInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    historiqueAdoption?: StringFieldUpdateOperationsInput | string
    commentaires?: StringFieldUpdateOperationsInput | string
    Adoption?: AdoptionUpdateManyWithoutAdoptantNestedInput
  }

  export type AdoptantUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    historiqueAdoption?: StringFieldUpdateOperationsInput | string
    commentaires?: StringFieldUpdateOperationsInput | string
    Adoption?: AdoptionUncheckedUpdateManyWithoutAdoptantNestedInput
  }

  export type PlanningBaladesUpsertWithWhereUniqueWithoutUsersInput = {
    where: PlanningBaladesWhereUniqueInput
    update: XOR<PlanningBaladesUpdateWithoutUsersInput, PlanningBaladesUncheckedUpdateWithoutUsersInput>
    create: XOR<PlanningBaladesCreateWithoutUsersInput, PlanningBaladesUncheckedCreateWithoutUsersInput>
  }

  export type PlanningBaladesUpdateWithWhereUniqueWithoutUsersInput = {
    where: PlanningBaladesWhereUniqueInput
    data: XOR<PlanningBaladesUpdateWithoutUsersInput, PlanningBaladesUncheckedUpdateWithoutUsersInput>
  }

  export type PlanningBaladesUpdateManyWithWhereWithoutUsersInput = {
    where: PlanningBaladesScalarWhereInput
    data: XOR<PlanningBaladesUpdateManyMutationInput, PlanningBaladesUncheckedUpdateManyWithoutUsersInput>
  }

  export type PlanningBaladesScalarWhereInput = {
    AND?: PlanningBaladesScalarWhereInput | PlanningBaladesScalarWhereInput[]
    OR?: PlanningBaladesScalarWhereInput[]
    NOT?: PlanningBaladesScalarWhereInput | PlanningBaladesScalarWhereInput[]
    id?: IntFilter<"PlanningBalades"> | number
    date?: DateTimeFilter<"PlanningBalades"> | Date | string
    heure?: DateTimeFilter<"PlanningBalades"> | Date | string
    chien_chat?: StringFilter<"PlanningBalades"> | string
  }

  export type CreneauxUpsertWithWhereUniqueWithoutUsersInput = {
    where: CreneauxWhereUniqueInput
    update: XOR<CreneauxUpdateWithoutUsersInput, CreneauxUncheckedUpdateWithoutUsersInput>
    create: XOR<CreneauxCreateWithoutUsersInput, CreneauxUncheckedCreateWithoutUsersInput>
  }

  export type CreneauxUpdateWithWhereUniqueWithoutUsersInput = {
    where: CreneauxWhereUniqueInput
    data: XOR<CreneauxUpdateWithoutUsersInput, CreneauxUncheckedUpdateWithoutUsersInput>
  }

  export type CreneauxUpdateManyWithWhereWithoutUsersInput = {
    where: CreneauxScalarWhereInput
    data: XOR<CreneauxUpdateManyMutationInput, CreneauxUncheckedUpdateManyWithoutUsersInput>
  }

  export type CreneauxScalarWhereInput = {
    AND?: CreneauxScalarWhereInput | CreneauxScalarWhereInput[]
    OR?: CreneauxScalarWhereInput[]
    NOT?: CreneauxScalarWhereInput | CreneauxScalarWhereInput[]
    id?: IntFilter<"Creneaux"> | number
    id_users?: IntFilter<"Creneaux"> | number
    id_planning?: IntFilter<"Creneaux"> | number
  }

  export type AnimalUpsertWithoutUsersInput = {
    update: XOR<AnimalUpdateWithoutUsersInput, AnimalUncheckedUpdateWithoutUsersInput>
    create: XOR<AnimalCreateWithoutUsersInput, AnimalUncheckedCreateWithoutUsersInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutUsersInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutUsersInput, AnimalUncheckedUpdateWithoutUsersInput>
  }

  export type AnimalUpdateWithoutUsersInput = {
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    evolution?: EvolutionUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sexe?: StringFieldUpdateOperationsInput | string
    espece?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    N_identification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    dateArrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    evolution?: EvolutionUncheckedUpdateManyWithoutAnimalNestedInput
    suiviVeterinaire?: SuiviVeterinaireUncheckedUpdateManyWithoutAnimalNestedInput
    parrainage?: ParrainageUncheckedUpdateManyWithoutAnimalNestedInput
    publication?: PublicationUncheckedUpdateManyWithoutAnimalNestedInput
    Adoption?: AdoptionUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type ParrainageUpsertWithoutUsersInput = {
    update: XOR<ParrainageUpdateWithoutUsersInput, ParrainageUncheckedUpdateWithoutUsersInput>
    create: XOR<ParrainageCreateWithoutUsersInput, ParrainageUncheckedCreateWithoutUsersInput>
    where?: ParrainageWhereInput
  }

  export type ParrainageUpdateToOneWithWhereWithoutUsersInput = {
    where?: ParrainageWhereInput
    data: XOR<ParrainageUpdateWithoutUsersInput, ParrainageUncheckedUpdateWithoutUsersInput>
  }

  export type ParrainageUpdateWithoutUsersInput = {
    dateDebutParrainage?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    dateFinParrainage?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    animal?: AnimalUpdateOneRequiredWithoutParrainageNestedInput
  }

  export type ParrainageUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_animal?: IntFieldUpdateOperationsInput | number
    dateDebutParrainage?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    dateFinParrainage?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogUpsertWithoutUsersInput = {
    update: XOR<BlogUpdateWithoutUsersInput, BlogUncheckedUpdateWithoutUsersInput>
    create: XOR<BlogCreateWithoutUsersInput, BlogUncheckedCreateWithoutUsersInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutUsersInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutUsersInput, BlogUncheckedUpdateWithoutUsersInput>
  }

  export type BlogUpdateWithoutUsersInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type BlogUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateWithoutPlanningBaladesInput = {
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptant?: AdoptantCreateNestedOneWithoutUsersInput
    creneaux?: CreneauxCreateNestedManyWithoutUsersInput
    Animal?: AnimalCreateNestedOneWithoutUsersInput
    Parrainage?: ParrainageCreateNestedOneWithoutUsersInput
    Blog?: BlogCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutPlanningBaladesInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    animalId?: number | null
    parrainageId?: number | null
    blogId?: number | null
    creneaux?: CreneauxUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutPlanningBaladesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPlanningBaladesInput, UsersUncheckedCreateWithoutPlanningBaladesInput>
  }

  export type CreneauxCreateWithoutPlanningInput = {
    users: UsersCreateNestedOneWithoutCreneauxInput
  }

  export type CreneauxUncheckedCreateWithoutPlanningInput = {
    id?: number
    id_users: number
  }

  export type CreneauxCreateOrConnectWithoutPlanningInput = {
    where: CreneauxWhereUniqueInput
    create: XOR<CreneauxCreateWithoutPlanningInput, CreneauxUncheckedCreateWithoutPlanningInput>
  }

  export type CreneauxCreateManyPlanningInputEnvelope = {
    data: CreneauxCreateManyPlanningInput | CreneauxCreateManyPlanningInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutPlanningBaladesInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutPlanningBaladesInput, UsersUncheckedUpdateWithoutPlanningBaladesInput>
    create: XOR<UsersCreateWithoutPlanningBaladesInput, UsersUncheckedCreateWithoutPlanningBaladesInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutPlanningBaladesInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutPlanningBaladesInput, UsersUncheckedUpdateWithoutPlanningBaladesInput>
  }

  export type UsersUpdateManyWithWhereWithoutPlanningBaladesInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutPlanningBaladesInput>
  }

  export type CreneauxUpsertWithWhereUniqueWithoutPlanningInput = {
    where: CreneauxWhereUniqueInput
    update: XOR<CreneauxUpdateWithoutPlanningInput, CreneauxUncheckedUpdateWithoutPlanningInput>
    create: XOR<CreneauxCreateWithoutPlanningInput, CreneauxUncheckedCreateWithoutPlanningInput>
  }

  export type CreneauxUpdateWithWhereUniqueWithoutPlanningInput = {
    where: CreneauxWhereUniqueInput
    data: XOR<CreneauxUpdateWithoutPlanningInput, CreneauxUncheckedUpdateWithoutPlanningInput>
  }

  export type CreneauxUpdateManyWithWhereWithoutPlanningInput = {
    where: CreneauxScalarWhereInput
    data: XOR<CreneauxUpdateManyMutationInput, CreneauxUncheckedUpdateManyWithoutPlanningInput>
  }

  export type UsersCreateWithoutCreneauxInput = {
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptant?: AdoptantCreateNestedOneWithoutUsersInput
    planningBalades?: PlanningBaladesCreateNestedManyWithoutUsersInput
    Animal?: AnimalCreateNestedOneWithoutUsersInput
    Parrainage?: ParrainageCreateNestedOneWithoutUsersInput
    Blog?: BlogCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCreneauxInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    animalId?: number | null
    parrainageId?: number | null
    blogId?: number | null
    planningBalades?: PlanningBaladesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCreneauxInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCreneauxInput, UsersUncheckedCreateWithoutCreneauxInput>
  }

  export type PlanningBaladesCreateWithoutCreneauxInput = {
    date: Date | string
    heure: Date | string
    chien_chat: string
    users?: UsersCreateNestedManyWithoutPlanningBaladesInput
  }

  export type PlanningBaladesUncheckedCreateWithoutCreneauxInput = {
    id?: number
    date: Date | string
    heure: Date | string
    chien_chat: string
    users?: UsersUncheckedCreateNestedManyWithoutPlanningBaladesInput
  }

  export type PlanningBaladesCreateOrConnectWithoutCreneauxInput = {
    where: PlanningBaladesWhereUniqueInput
    create: XOR<PlanningBaladesCreateWithoutCreneauxInput, PlanningBaladesUncheckedCreateWithoutCreneauxInput>
  }

  export type UsersUpsertWithoutCreneauxInput = {
    update: XOR<UsersUpdateWithoutCreneauxInput, UsersUncheckedUpdateWithoutCreneauxInput>
    create: XOR<UsersCreateWithoutCreneauxInput, UsersUncheckedCreateWithoutCreneauxInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCreneauxInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCreneauxInput, UsersUncheckedUpdateWithoutCreneauxInput>
  }

  export type UsersUpdateWithoutCreneauxInput = {
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptant?: AdoptantUpdateOneWithoutUsersNestedInput
    planningBalades?: PlanningBaladesUpdateManyWithoutUsersNestedInput
    Animal?: AnimalUpdateOneWithoutUsersNestedInput
    Parrainage?: ParrainageUpdateOneWithoutUsersNestedInput
    Blog?: BlogUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCreneauxInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
    planningBalades?: PlanningBaladesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type PlanningBaladesUpsertWithoutCreneauxInput = {
    update: XOR<PlanningBaladesUpdateWithoutCreneauxInput, PlanningBaladesUncheckedUpdateWithoutCreneauxInput>
    create: XOR<PlanningBaladesCreateWithoutCreneauxInput, PlanningBaladesUncheckedCreateWithoutCreneauxInput>
    where?: PlanningBaladesWhereInput
  }

  export type PlanningBaladesUpdateToOneWithWhereWithoutCreneauxInput = {
    where?: PlanningBaladesWhereInput
    data: XOR<PlanningBaladesUpdateWithoutCreneauxInput, PlanningBaladesUncheckedUpdateWithoutCreneauxInput>
  }

  export type PlanningBaladesUpdateWithoutCreneauxInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    chien_chat?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateManyWithoutPlanningBaladesNestedInput
  }

  export type PlanningBaladesUncheckedUpdateWithoutCreneauxInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    chien_chat?: StringFieldUpdateOperationsInput | string
    users?: UsersUncheckedUpdateManyWithoutPlanningBaladesNestedInput
  }

  export type UsersCreateManyAdoptantInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    animalId?: number | null
    parrainageId?: number | null
    blogId?: number | null
  }

  export type AdoptionCreateManyAdoptantInput = {
    id?: number
    dateAdoption: Date | string
    typeAdoption: string
    id_animal: number
  }

  export type UsersUpdateWithoutAdoptantInput = {
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    planningBalades?: PlanningBaladesUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUpdateManyWithoutUsersNestedInput
    Animal?: AnimalUpdateOneWithoutUsersNestedInput
    Parrainage?: ParrainageUpdateOneWithoutUsersNestedInput
    Blog?: BlogUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutAdoptantInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
    planningBalades?: PlanningBaladesUncheckedUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutAdoptantInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdoptionUpdateWithoutAdoptantInput = {
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
    animal?: AnimalUpdateOneRequiredWithoutAdoptionNestedInput
  }

  export type AdoptionUncheckedUpdateWithoutAdoptantInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
    id_animal?: IntFieldUpdateOperationsInput | number
  }

  export type AdoptionUncheckedUpdateManyWithoutAdoptantInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
    id_animal?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateManyAnimalInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    parrainageId?: number | null
    blogId?: number | null
  }

  export type EvolutionCreateManyAnimalInput = {
    id?: number
    date: Date | string
    motif: string
    observations: string
  }

  export type SuiviVeterinaireCreateManyAnimalInput = {
    id?: number
    dateVisite: Date | string
    motif: string
    observations: string
    traitement: string
    validationAdoption: string
  }

  export type ParrainageCreateManyAnimalInput = {
    id?: number
    dateDebutParrainage: Date | string
    description: string
    dateFinParrainage?: Date | string | null
  }

  export type PublicationCreateManyAnimalInput = {
    id?: number
    date: Date | string
    heure: Date | string
    titre: string
    article: string
    image: string
  }

  export type AdoptionCreateManyAnimalInput = {
    id?: number
    dateAdoption: Date | string
    typeAdoption: string
    id_adoptant: number
  }

  export type UsersUpdateWithoutAnimalInput = {
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptant?: AdoptantUpdateOneWithoutUsersNestedInput
    planningBalades?: PlanningBaladesUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUpdateManyWithoutUsersNestedInput
    Parrainage?: ParrainageUpdateOneWithoutUsersNestedInput
    Blog?: BlogUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
    planningBalades?: PlanningBaladesUncheckedUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EvolutionUpdateWithoutAnimalInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type EvolutionUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type EvolutionUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type SuiviVeterinaireUpdateWithoutAnimalInput = {
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    traitement?: StringFieldUpdateOperationsInput | string
    validationAdoption?: StringFieldUpdateOperationsInput | string
  }

  export type SuiviVeterinaireUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    traitement?: StringFieldUpdateOperationsInput | string
    validationAdoption?: StringFieldUpdateOperationsInput | string
  }

  export type SuiviVeterinaireUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    traitement?: StringFieldUpdateOperationsInput | string
    validationAdoption?: StringFieldUpdateOperationsInput | string
  }

  export type ParrainageUpdateWithoutAnimalInput = {
    dateDebutParrainage?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    dateFinParrainage?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersUpdateManyWithoutParrainageNestedInput
  }

  export type ParrainageUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateDebutParrainage?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    dateFinParrainage?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersUncheckedUpdateManyWithoutParrainageNestedInput
  }

  export type ParrainageUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateDebutParrainage?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    dateFinParrainage?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicationUpdateWithoutAnimalInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type PublicationUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    article?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type AdoptionUpdateWithoutAnimalInput = {
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
    adoptant?: AdoptantUpdateOneRequiredWithoutAdoptionNestedInput
  }

  export type AdoptionUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
    id_adoptant?: IntFieldUpdateOperationsInput | number
  }

  export type AdoptionUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateAdoption?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAdoption?: StringFieldUpdateOperationsInput | string
    id_adoptant?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateManyParrainageInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    animalId?: number | null
    blogId?: number | null
  }

  export type UsersUpdateWithoutParrainageInput = {
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptant?: AdoptantUpdateOneWithoutUsersNestedInput
    planningBalades?: PlanningBaladesUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUpdateManyWithoutUsersNestedInput
    Animal?: AnimalUpdateOneWithoutUsersNestedInput
    Blog?: BlogUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutParrainageInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
    planningBalades?: PlanningBaladesUncheckedUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutParrainageInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersCreateManyBlogInput = {
    id?: number
    username: string
    nom: string
    prenom: string
    telephone: string
    adresse: string
    cp: string
    ville: string
    role: string
    adoptantId?: number | null
    animalId?: number | null
    parrainageId?: number | null
  }

  export type UsersUpdateWithoutBlogInput = {
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptant?: AdoptantUpdateOneWithoutUsersNestedInput
    planningBalades?: PlanningBaladesUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUpdateManyWithoutUsersNestedInput
    Animal?: AnimalUpdateOneWithoutUsersNestedInput
    Parrainage?: ParrainageUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    planningBalades?: PlanningBaladesUncheckedUpdateManyWithoutUsersNestedInput
    creneaux?: CreneauxUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CreneauxCreateManyUsersInput = {
    id?: number
    id_planning: number
  }

  export type PlanningBaladesUpdateWithoutUsersInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    chien_chat?: StringFieldUpdateOperationsInput | string
    creneaux?: CreneauxUpdateManyWithoutPlanningNestedInput
  }

  export type PlanningBaladesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    chien_chat?: StringFieldUpdateOperationsInput | string
    creneaux?: CreneauxUncheckedUpdateManyWithoutPlanningNestedInput
  }

  export type PlanningBaladesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: DateTimeFieldUpdateOperationsInput | Date | string
    chien_chat?: StringFieldUpdateOperationsInput | string
  }

  export type CreneauxUpdateWithoutUsersInput = {
    planning?: PlanningBaladesUpdateOneRequiredWithoutCreneauxNestedInput
  }

  export type CreneauxUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_planning?: IntFieldUpdateOperationsInput | number
  }

  export type CreneauxUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_planning?: IntFieldUpdateOperationsInput | number
  }

  export type CreneauxCreateManyPlanningInput = {
    id?: number
    id_users: number
  }

  export type UsersUpdateWithoutPlanningBaladesInput = {
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptant?: AdoptantUpdateOneWithoutUsersNestedInput
    creneaux?: CreneauxUpdateManyWithoutUsersNestedInput
    Animal?: AnimalUpdateOneWithoutUsersNestedInput
    Parrainage?: ParrainageUpdateOneWithoutUsersNestedInput
    Blog?: BlogUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutPlanningBaladesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
    creneaux?: CreneauxUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutPlanningBaladesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    adoptantId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
    parrainageId?: NullableIntFieldUpdateOperationsInput | number | null
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CreneauxUpdateWithoutPlanningInput = {
    users?: UsersUpdateOneRequiredWithoutCreneauxNestedInput
  }

  export type CreneauxUncheckedUpdateWithoutPlanningInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_users?: IntFieldUpdateOperationsInput | number
  }

  export type CreneauxUncheckedUpdateManyWithoutPlanningInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_users?: IntFieldUpdateOperationsInput | number
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