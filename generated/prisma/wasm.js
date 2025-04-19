
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role'
};

exports.Prisma.WalletScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  balance: 'balance'
};

exports.Prisma.WalletTransactionScalarFieldEnum = {
  id: 'id',
  walletId: 'walletId',
  amount: 'amount',
  type: 'type',
  reference: 'reference',
  createdAt: 'createdAt'
};

exports.Prisma.TopupScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  amount: 'amount',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.WithdrawalScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  amount: 'amount',
  bankCode: 'bankCode',
  accountNumber: 'accountNumber',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.BusClassScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.BusScalarFieldEnum = {
  id: 'id',
  name: 'name',
  capacity: 'capacity',
  busClassId: 'busClassId'
};

exports.Prisma.RouteScalarFieldEnum = {
  id: 'id',
  origin: 'origin',
  destination: 'destination'
};

exports.Prisma.ScheduleScalarFieldEnum = {
  id: 'id',
  busId: 'busId',
  routeId: 'routeId',
  departure: 'departure',
  arrival: 'arrival',
  price: 'price'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  scheduleId: 'scheduleId',
  totalAmount: 'totalAmount',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.BookingSeatScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  seatNumber: 'seatNumber'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  amount: 'amount',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password'
};

exports.Prisma.WalletOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId'
};

exports.Prisma.WalletTransactionOrderByRelevanceFieldEnum = {
  id: 'id',
  walletId: 'walletId',
  type: 'type',
  reference: 'reference'
};

exports.Prisma.TopupOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  status: 'status'
};

exports.Prisma.WithdrawalOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  bankCode: 'bankCode',
  accountNumber: 'accountNumber',
  status: 'status'
};

exports.Prisma.BusClassOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.BusOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  busClassId: 'busClassId'
};

exports.Prisma.RouteOrderByRelevanceFieldEnum = {
  id: 'id',
  origin: 'origin',
  destination: 'destination'
};

exports.Prisma.ScheduleOrderByRelevanceFieldEnum = {
  id: 'id',
  busId: 'busId',
  routeId: 'routeId'
};

exports.Prisma.BookingOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  scheduleId: 'scheduleId',
  status: 'status'
};

exports.Prisma.BookingSeatOrderByRelevanceFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  seatNumber: 'seatNumber'
};

exports.Prisma.PaymentOrderByRelevanceFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  status: 'status'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER',
  DRIVER: 'DRIVER'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
