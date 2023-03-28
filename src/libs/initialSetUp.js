import Role from "../models/Role";

export const createRoles = async () =>{
    try {
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return;

       const value = await Promise.all([
            new Role({name:'admin'}).save(),
            new Role({name:'doctor'}).save(),
            new Role({name:'patient'}).save()
        ]);
        console.log(value);

    }
    catch (e) {
        console.error(e);
    }
}
