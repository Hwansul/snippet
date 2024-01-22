const data = getDataFromMyAPI();

// Without optional chaining
const userName = data && data.user && data.user.name;
const userType = data && data.user && data.user.type;
data && data.showNotifications && data.showNotifications();

// With optional chaining
const userName = data?.user?.name;
const userType = data?.user?.type;
data.showNotifications?.();

const config = getServerConfig();

// Without nullish coalescing
const port = config.server.port || 8888;
// Oops! This will be true even if we pass it false
const wrongkeepAlive = config.server.keepAlive || true;
// We'll have to explicitly check for nullish values
const keepAlive =
  (config.server.keepAlive !== null & config.server.keepAlive !== undefined)
  ? config.server.keepAlive : true;

// With nullish coalescing
const port = config.server.port ?? 8888;
// This works correctly
const keepAlive = config.server.keepAlive ?? true;
