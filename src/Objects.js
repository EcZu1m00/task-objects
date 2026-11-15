export function personUpdate(person) {
    if (person.gender === 'female') {
        delete person.age;
    }

    if (person.gender === 'male' && !('income' in person)) {
        person.income = 100000;
    }

    return person;
}

export function objectFieldsList(obj1, obj2, obj3) {
    return [
        ...new Set([
            ...Object.keys(obj1),
            ...Object.keys(obj2),
            ...Object.keys(obj3),
        ]),
    ].sort();
}

export function objectClone(obj, count) {
    return Array.from({ length: count }, (_, index) => ({
        ...structuredClone(obj),
        id: index,
    }));
}
