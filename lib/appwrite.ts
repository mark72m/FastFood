import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";
import {CreateUserParams, SignInParams} from "@/type";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    platform: "com.tts.fastFood",
    databaseId: '6899e1a60038ffbd670d',
    userCollectionId: '6899e1f90020a7114640'
}

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

export  const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async({name, email, password} : CreateUserParams) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, name);
        if (!newAccount) throw Error;

        await signIn({ email, password });

    } catch (error) {
        throw new Error(error as string);
    }
}

export const signIn = async({email, password}: SignInParams) => {

}
