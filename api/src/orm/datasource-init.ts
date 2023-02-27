import { datasource } from "./datasource"

export const dataSourceInit = async () => {
    await datasource.initialize()
    .then(() => {
        console.log("Data Source: with Postgre CubeOrg is UP!")
    })
    .catch((err) =>{
        console.error("Error during Data Source initialization", err)
    })
}