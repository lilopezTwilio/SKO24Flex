import React from "react";

import { Box } from '@twilio-paste/box';
import { Card } from '@twilio-paste/card';
import { Column, Grid } from '@twilio-paste/grid';
import { Heading } from '@twilio-paste/heading';
import { Paragraph } from '@twilio-paste/paragraph';
import { Stack } from '@twilio-paste/stack';
import { Text } from '@twilio-paste/text';



const styles = {
    wrapper: { margin: 20}
}


const NoActiveTask = (props) => {

    let layout = (
        <div style={styles.wrapper}>
            <Stack orientation="vertical" spacing={'space0'}>
            <Grid gutter="space30" marginTop="space100">
                <Column span={[8, 6, 4]} offset={[0, 3, 4]}>
                <Card padding="space70">
                    <Text as="div">
                    <Heading as="h2" variant="heading20">
                        {"No Active Tasks"}
                    </Heading>
                    <Paragraph>
                        “Customer centricity, as the name implies, is creating an organization that constantly self-corrects to
                        put customers at the center of our decisions. Like a gyroscope that resists being moved off-center, a
                        customer-centric organization resists the many forces that attempt to deprioritize customers.”
                    </Paragraph>
                    <Paragraph marginBottom="space0">-- Jeff Lawson, Ask Your Developer</Paragraph>
                    </Text>
                </Card>
                </Column>
            </Grid>
            <Box display="flex" justifyContent="center">
                <img src={"../images/noActiveTask.png"} height={"200px"} />
            </Box>
            </Stack>
        </div>
    )

    return layout
}

export default NoActiveTask