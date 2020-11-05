import { GetStaticProps } from "next";
import licenseLs from 'license-ls'
import { Descriptions, Divider, List, PageHeader } from 'antd'


type License = {
    id?: number;
    name: string;
    version: string;
    licenseId?: string;
    licenseFullName: string;
    licnseFilePath: string[];
    license: string;
    repository?: string;
    author?: string;
    homepage?: string;
    path: string;
    dependencyLevel: string;
}
const License = ({licenses}: {licenses: License[]}) => {
    return (
        <>
            <PageHeader
                title="Licenses"
            />
            <Divider />
            <List
                itemLayout="horizontal"
                dataSource={licenses}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <a href={item.homepage} target="_blank" rel="noreferrer">
                                    {item.name}
                                </a>
                            }
                            description={(
                                <>
                                <Descriptions>
                                    {item.licenseFullName ? (
                                        <Descriptions.Item label="License">
                                            {item.licenseFullName}
                                        </Descriptions.Item>
                                    ): null}
                                    {item.version ? (
                                        <Descriptions.Item label="Version">
                                            {item.version}
                                        </Descriptions.Item>
                                    ): null}
                                    {item.author ? (
                                        <Descriptions.Item label="Author">
                                            {item.author}
                                        </Descriptions.Item>
                                    ): null}
                                    </Descriptions>
                                    {item.homepage ? (
                                        <Descriptions>
                                            <Descriptions.Item label="homepage">
                                                <a href={item.homepage} target="_blank" rel="noreferrer">
                                                    {item.homepage}
                                                </a>
                                            </Descriptions.Item>
                                        </Descriptions>
                                    ): null}
                                </>
                            )}
                        />
                    </List.Item>
                )}
            />
        </>
    )
    /*
    return (
        <ion-list>
            {licenses.map(license => (
                <ion-item key={license.id}>
                    <ion-label>
                        <h2>{license.name} <small>version {license.version}</small></h2>
                        <h3>{license.licenseFullName}</h3>
                        {license.author ? <p>Author: {license.author}</p>: null}
                        <p><a href={license.homepage}>
                          Learm More
                        </a></p>
                    </ion-label>
                </ion-item>
            ))}
        </ion-list>
    )
    */
}

export const getStaticProps: GetStaticProps = async () => {
    const options = {
        depth: 1,
        prod: true
    }
     
    const licenses: License[] = await licenseLs(options)
    return {
        props: {
            licenses: licenses.map(license => {
                Object.entries(license).forEach(([key, value]) => {
                    if (value) return
                    license[key] = null
                })
                return license
            })
        }
    }
}

export default License