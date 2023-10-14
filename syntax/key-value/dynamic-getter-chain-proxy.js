const getHandler = {
  get: (target, prop) => {
    return value => {
      if (typeof value !== 'undefined') {
        target[prop] = value;
        return new Proxy(target, getHandler);
      }
      return target[prop];
    };
  }
};

const styles = {};
const proxiedStyles = new Proxy(styles, getHandler);

proxiedStyles.color('#101010').background('#fefefe').margin('4px 8px');

proxiedStyles.color(); // #101010
proxiedStyles.background(); // #fefefe
proxiedStyles.margin(); // 4px 8px
