// https://github.com/HuskyDevClub/DungeonAdventure
import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from "@chakra-ui/react";

import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Hollowscape">
        <Container>
            <Title>
                Dungeon Adventure <Badge>2020</Badge>
            </Title>
            <P>
                Dungeon Adventure is a 2D rougelike dungeon crawler with a game engine built from JavaFX and JDK11.
            </P>
            <P>
                <Link href='https://github.com/HuskyDevClub/DungeonAdventure' target='_blank'>
                    DungeonAdventure <ExternalLinkIcon mx='2px' />
                </Link>
                is open source and can be found on mine/my team's GitHub!
            </P>

            <WorkImage src='/images/works/thumb_dungeon.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
