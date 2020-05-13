import { Singleton } from "../../src/base/Singleton";

export default async function () {
    console.log("…………………… test_Singleton ……………………");
    class A { }
    class B { }
    class C { };

    console.log('new Singleton()');
    const singleton = new Singleton();

    singleton.setInstance("A", new A());
    console.log(singleton.getInstance("A"));
    singleton.deleteInstance("A");
    console.log(singleton.getInstance("A"));

    singleton.setSingleton(B, new B());
    console.log(singleton.getSingleton(B));

    console.log(singleton.getSingleton(C));

    console.log('\n');

    console.log('static Singleton');
    Singleton.set("A", new A());
    console.log(Singleton.get("A"));
    Singleton.delete("A");
    console.log(Singleton.get("A"));

    Singleton.set(B, new B());
    console.log(Singleton.get(B));

    console.log(Singleton.get(C));

    console.log("…………………… test_Singleton ……………………");
    console.log("\n\n");
};
