/**
 * This file demonstrates how to use conditional types to create a generic function that can extract a sub-set of a union type.
 * The function sendEvent is a generic function that takes a type parameter Type.
 *
 * The function will only accept arguments that are a sub-set of the union type Action.
 *
 * The Extract utility type is used to extract the sub-set of Action that matches the type parameter Type.
 *
 * The extends keyword is used to define the inference of the Payload type.
 *
 * The function is then called with different type parameters to demonstrate that the correct sub-set of Action is inferred.
 *
 * */

type Action =
  | {
      type: 'LOG_IN';
      payload: {
        email: string;
        password: string;
      };
    }
  | {
      type: 'LOG_OUT';
    }
  | {
      type: 'REGISTER';
      payload: {
        email: string;
        password: string;
        name: string;
        age: number;
      };
    };

function sendEvent<Type extends Action['type']>(
  ...args: Extract<Action, { type: Type }> extends { payload: infer Payload }
    ? [Type, Payload]
    : [Type]
) {}

sendEvent('LOG_IN', { email: '', password: '' });
sendEvent('LOG_OUT');
sendEvent('REGISTER', { email: '', password: '', name: '', age: 0 });

const myObj: Record<string, string> = {};
// tsConfig => noUncheckedIndexedAccess = false
myObj.foo.length; // works but could lead to bugs if foo is not in the object
