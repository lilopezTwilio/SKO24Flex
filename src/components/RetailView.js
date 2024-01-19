import React from "react";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@twilio-paste/tabs';
import {Grid, Column } from '@twilio-paste/core/grid'
import { Separator } from '@twilio-paste/separator';

import ContactCard from "./ContactCard/ContactCard";
import ConversationSummary from "./ConversationSummary";
import Transcription from "./Transcription/Transcription";

const RetailView = (props) => {

    let layout = (
        <div>
            <Tabs baseId="retail-tabs">
                <TabList aria-label="details-tab">
                    <Tab>Details</Tab>
                    <Tab>CRM</Tab>
                    <Tab>Hello</Tab>
                </TabList>
                <TabPanels>
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
                        {/* <Grid gutter="space30">
                                <Column span={4}><ContactCard /></Column>
                                <Column span={8}><ConversationSummary /></Column>
                        </Grid> */}
                    </TabPanel>
                    <TabPanel>
                        <Grid gutter="space30">
                            <Column span={12}><h1>CRM Panel</h1></Column>
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        <Grid gutter="space30">
                            <Column span={12}><h1>Hello Panel</h1></Column>
                        </Grid>
                    </TabPanel>                                          
                </TabPanels>
            </Tabs>
        </div>
    )
    return layout
}
export default RetailView