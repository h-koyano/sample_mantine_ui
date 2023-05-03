import { Button, Card, Group, Image, Text } from '@mantine/core'
import { FC } from 'react'

type Props = {
  title: string
  content: string
  status: string
  postUrl: string
}

export const CustomCard: FC<Props> = ({ title, content, status, postUrl }) => {
  return (
    <Card shadow="md">
      <Card.Section>
        <Image
          src={postUrl}
          height={160}
          alt="With default placeholder"
          withPlaceholder
        />
      </Card.Section>
      <Group position="apart" my="md">
        <Text weight={800}>{title}</Text>
        <Button color="pink" radius="lg" variant="filled">
          {status}
        </Button>
      </Group>
      <Text size="sm">{content}</Text>
      <Button mt="md" size="xs" variant="light" color="indigo" fullWidth>
        Subscribe
      </Button>
    </Card>
  )
}
