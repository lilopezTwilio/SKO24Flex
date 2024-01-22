import React from "react";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@twilio-paste/tabs';
import {Grid, Column } from '@twilio-paste/core/grid'
import { Separator } from '@twilio-paste/separator';

import ContactCard from "./ContactCard/ContactCard";
import ConversationSummary from "./ConversationSummary";
import Transcription from "./Transcription/Transcription";
import Iframe from "./Iframe/Iframe";


const orders = [
    {orderNumber: 12345, orderDate : '12/20/2023', amount : '$100.20', trackingNumber: '12345vx87gh123',orderItems : [
        { item: 1, description: 'Twilio Geometric Chucks', size: '12', amount: '$49.99', quantity: '1'},
        { item: 2, description: 'Twilio Inifinity Watch', size: '', amount: '$49.99', quantity: '1'},
    ]}
]

const styles = {
    table : {
        border : '1px solid #ededed',
    },
    orderRow : { border : '1px solid #ededed', height: 30 },
    orderCell: {width: '25%', border : '1px solid #ededed', padding: 10},
    orderHeading: { fontSize : 24},
    orderTitle: {fontSize : 14 },

    orderItemRow : { border : '1px solid #ededed', height: 30 },
    orderItemCell: {width: '20%', border : '1px solid #ededed', padding: 10, textAlign: 'left'},
    orderItemHeading: { fontSize : 24},
  
}

const RetailView = (props) => {

    let layout = (
        <div>
            <Tabs baseId="retail-tabs">
                <TabList aria-label="details-tab">
                    <Tab>Details</Tab>
                    <Tab>Orders</Tab>                    
                    <Tab>CRM</Tab>

                    <Tab>Search</Tab>
                </TabList>
                <TabPanels>
                    {/* Customer Details Panel Here */}
                    <TabPanel>
                        <Grid gutter="space30">
                                <Column span={4}><ContactCard /></Column>
                                {/* <Column span={8}><ConversationSummary /></Column> */}
                                <Column span={8}>
                                    <Tabs baseId="conversations">
                                        <TabList aria-label="details-tab">
                                            <Tab>Transcript</Tab>
                                            <Tab>Conversation</Tab>
                                            
                                        </TabList>
                                        <TabPanels>
                                        <TabPanel>
                                            <Grid gutter="space30">
                                                    <Column span={12}>
                                                        <Transcription />
                                                    </Column>
                                                </Grid>
                                            </TabPanel>                                            
                                            <TabPanel>
                                                <ConversationSummary/>
                                            </TabPanel>
                                            
                                        </TabPanels>
                                    </Tabs>
                                </Column>                                
                        </Grid>
                        <Separator orientation={'horizontal'} verticalSpacing="space40" />
                    </TabPanel>

                    {/* Orders here */}
                    <TabPanel>
                        <Grid gutter="space30">
                            <Column span={12}><h1 style={styles.orderHeading}>Orders</h1></Column>
                            <p>&nbsp;</p>
                                    {
                                        orders.map((order, index) => (
                                            <table width={'100%'}>
                                                <tr style={styles.orderRow} key={index}>
                                                    <td style={styles.orderCell} width={100}>OrderNo: </td>
                                                    <td style={styles.orderCell}>{order.orderNumber}</td>
                                                    <td style={styles.orderCell}>Total Amount</td>
                                                    <td style={styles.orderCell}>{order.amount}</td>
                                                </tr>
                                                <tr>
                                                    <td style={styles.orderCell}>Tracking Number</td>
                                                    <td style={styles.orderCell}>{order.trackingNumber}</td>
                                                    <td style={styles.orderCell}>Date</td>
                                                    <td style={styles.orderCell}>{order.orderDate}</td>                                                                                                        

                                                </tr>
                                                <tr style={styles.orderRow}><td colSpan={6}>&nbsp;</td></tr>
                                                <tr style={styles.orderRow}>
                                                    <td colSpan={6}>
                                                        <table width={'100%'}>
                                                            <thead>
                                                                <th style={styles.orderItemCell}>Item</th>
                                                                <th style={styles.orderItemCell}>Quantity</th>
                                                                <th style={styles.orderItemCell}>Description</th>
                                                                <th style={styles.orderItemCell}>Size</th>
                                                                <th style={styles.orderItemCell}>Amount</th>
                                                            </thead>
                                                        {
                                                            order.orderItems.map( (item, index) =>(
                                                                    <tr style={styles.orderItemRow}>
                                                                        <td style={styles.orderItemCell}>{item.item}</td>
                                                                        <td style={styles.orderItemCell}>{item.quantity}</td>
                                                                        <td style={styles.orderItemCell}>{item.description}</td>
                                                                        <td style={styles.orderItemCell}>{item.size}</td>
                                                                        <td style={styles.orderItemCell}>{item.amount}</td>
                                                                    </tr>
                                                            ))
                                                        }
                                                            <tr style={styles.orderItemRow}><td></td></tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        ))
                                    }
                        </Grid>
                    </TabPanel>

                    {/* CRM Panel Here */}
                    <TabPanel>
                        <Grid gutter="space30">
                            <Column span={12}>
                                <h1>Implement a CRM iFrame here</h1>
                                <Iframe 
                                    width={'100%'}
                                    height={700}
                                    source={'https://www.bing.com'}
                                />
                            </Column>
                        </Grid>
                    </TabPanel>

  
                    <TabPanel>
                        <Grid gutter="space30">
                            <Column span={12}>
                                <h1>Implement search integration here</h1>
                                <Iframe 
                                    width={'100%'}
                                    height={700}
                                    source={'https://www.bing.com'}
                                />
                            </Column>
                        </Grid>
                    </TabPanel>                                        
                </TabPanels>
            </Tabs>
        </div>
    )
    return layout
}
export default RetailView