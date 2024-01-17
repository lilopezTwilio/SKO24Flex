import React from "react";

import { Card } from '@twilio-paste/card';

import { Box } from '@twilio-paste/box';
import {Grid, Column } from '@twilio-paste/core/grid'
import { Heading } from '@twilio-paste/heading';
import { Paragraph } from '@twilio-paste/paragraph';


const styles = {
    wrapper : {
        margin: 20
    }
}

const ConversationSummary = (props) => {

    let layout = (
        <div>
            <Box>
                <Card padding="space70">
                    <Grid gutter="space20">
                        <Column span={12}>
                            <Heading as="h2" variant="heading20" marginBottom="space0">
                                {'Conversation Summary'}
                            </Heading>
                        </Column>

                        <Column span={12}>
                            <Box display="flex" marginLeft="space60" justifyContent="space-between">
                                <Paragraph marginBottom="space0">
                                    {'There is no summary available yet as the agent is about to start a conversation with the customer'}
                                </Paragraph>
                            </Box>
                        </Column>                                  
                    </Grid>
                </Card>
            </Box>
        </div>
    )
    return layout
}
export default ConversationSummary