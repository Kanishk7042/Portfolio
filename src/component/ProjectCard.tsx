import {
  Card,
  Group,
  Image,
  Text,
  Badge,
  Button,
  Indicator,
  useMatches,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";

const ProjectCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  const badge = useMatches({
    xsm: "sm",
    md: "md",
    lg: "lg",
  });

  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
  });

  return (
    <>
      {" "}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] xs-mx:w-full"
      >
        {" "}
        <Card
          onClick={open}
          className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] xs-mx:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"
          shadow="lg"
          padding="sm"
          radius="lg"
          withBorder
        >
          <Card.Section className="p-3">
            <Image
              className="!rounded-xl !shadow-[0_0_5px_0_#64ffda] "
              src={props.image}
              alt={props.image}
            />
          </Card.Section>

          <Group justify="space-between" mt="xs" mb="xs">
            <Text className="!text-2xl gap-2 !font-bold !text-white flex  items-center sm-mx:!text-xl">
              {props.title}
              {props.live === true && (
                <Badge
                  className="!px-1"
                  variant="outline"
                  color="red"
                  rightSection={
                    <Indicator
                      className="!mr-0.5 !z-0"
                      color="red"
                      position="middle-end"
                      size={7}
                      processing
                    />
                  }
                >
                  Live{" "}
                </Badge>
              )}
            </Text>
          </Group>

          <Group mb="sm" className="!gap-2">
            {props.technologies.map(
              (tech: string, index: number) =>
                index < 3 && (
                  <Badge
                    key={index}
                    size={badge}
                    variant="light"
                    color="#64ffda"
                  >
                    {tech}
                  </Badge>
                )
            )}
          </Group>

          <Text
            lineClamp={5}
            className="!text-justify !text-sm xs-mx:!text-xs"
            size="sm"
            c="dimmed"
          >
            {props.desc}
          </Text>

          <Button
            onClick={open}
            color="#64ffda"
            variant="outline"
            fullWidth
            mt="md"
            radius="md"
          >
            Show More
          </Button>
        </Card>
        <FullProjectModal
          opened={opened}
          close={close}
          title={props.title}
          desc={props.desc}
          image={props.image}
          live={props.live}
          link={props.link}
          github={props.github}
          technologies={props.technologies}
        />
      </div>
    </>
  );
};
export default ProjectCard;
