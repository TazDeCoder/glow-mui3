import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box, SVG, SVGProps } from '../../Utils';
import { Typography } from '../Typography';
import { AppBar } from './AppBar';

export default {
  title: 'Components/UI/AppBar',
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

// https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Amenu%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048
const HamburgerMenu: React.FC<SVGProps> = (props: SVGProps) => (
  <SVG {...props}>
    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
  </SVG>
);

// https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aaccount_circle%3AFILL%401%3Bwght%40400%3BGRAD%400%3Bopsz%4048
const AccountCircle: React.FC<SVGProps> = (props: SVGProps) => (
  <SVG {...props}>
    <path d="M222 801q63-40 124.5-60.5T480 720q72 0 134 20.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142 804 111 731.159 80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.5q-54 54.5-127.129 86T479.595 976Z" />
  </SVG>
);

// https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aarrow_back%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048d
const ArrowBack: React.FC<SVGProps> = (props: SVGProps) => (
  <SVG {...props}>
    <path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z" />
  </SVG>
);

// https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aattach_file%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048
const AttachFile: React.FC<SVGProps> = (props: SVGProps) => (
  <SVG {...props}>
    <path d="M460 976q-91 0-155.5-62.5T240 760V330q0-64 45.5-109T395 176q65 0 110 45t45 110v394q0 38-26 64.5T460 816q-38 0-64-28.5T370 720V328h40v395q0 22 14.5 37.5T460 776q21 0 35.5-15t14.5-36V330q0-48-33.5-81T395 216q-48 0-81.5 33T280 330v432q0 73 53 123.5T460 936q75 0 127.5-51T640 760V328h40v431q0 91-64.5 154T460 976Z" />
  </SVG>
);

// https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Atoday%3AFILL%401%3Bwght%40400%3BGRAD%400%3Bopsz%4048
const CalendarToday: React.FC<SVGProps> = (props: SVGProps) => (
  <SVG {...props}>
    <path d="M352.817 746Q312 746 284 717.817q-28-28.183-28-69T284.183 580q28.183-28 69-28T422 580.183q28 28.183 28 69T421.817 718q-28.183 28-69 28ZM180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Z" />
  </SVG>
);

// https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Amore_vert%3AFILL%401%3Bwght%40400%3BGRAD%400%3Bopsz%4048
const MoreVertical: React.FC<SVGProps> = (props: SVGProps) => (
  <SVG {...props}>
    <path d="M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" />
  </SVG>
);

export const Default: ComponentStory<typeof AppBar> = () => (
  <AppBar
    maxWidth="95%"
    width="40rem"
    mx="auto"
    title="Headline"
    variant="center"
    leadIcon={HamburgerMenu}
    trailIcons={[AccountCircle]}
  />
);

export const Variant: ComponentStory<typeof AppBar> = (args) => (
  <AppBar
    maxWidth="95%"
    width="30rem"
    {...args}
    leadIcon={ArrowBack}
    trailIcons={[AttachFile, CalendarToday, MoreVertical]}
  />
);

Variant.args = {
  title: 'Title Large',
  variant: 'small',
};

export const Elevate: ComponentStory<typeof AppBar> = () => (
  <Box maxWidth="95%" width="40rem">
    <AppBar sx={{ position: 'sticky', top: 0 }} mb={3} title="Elevated Bar" />
    <Typography maxWidth="95%" width="45ch">
      Lorem ipsum dolor sit amet, soluta graeci sed ea, eos solet mandamus
      contentiones ei. Mea an liber dolor dicant. In natum possit mei. Nostro
      epicurei recusabo mei ut. At sea tollit nostro maiestatis, ignota invenire
      id nam, ad amet duis oportere vim. Sale meliore voluptatibus ei eos, ex
      nam posse ornatus omittam, diam salutatus ex has. Ut vis verear menandri
      intellegat. Ne per dicant doming interesset. Ius probatus dissentiunt
      intellegebat ea, nam et nominavi expetendis, et pro congue semper. Vim ut
      adhuc intellegam, in ius alii dicat. Amet commune vituperatoribus at cum.
      Nec velit aeque et. Duo cetero civibus forensibus te. Ex sea lorem vivendo
      rationibus, ex habeo albucius has. Et quo exerci facilisis, has quem
      indoctum et. Scripserit omittantur ei est. Dolorum dolorem tractatos sed
      te, dolorum accumsan ea eos. Et ius virtute conclusionemque, ne appareat
      repudiare mea. Magna ceteros partiendo cum ut, ut his posidonium
      deterruisset, quot molestiae constituto an nec. At saepe philosophia
      definitionem sed. Duo dicat option quaestio ea, ea solum ubique delicata
      nec. Ius affert ornatus id. Ea duo malis nulla repudiandae. Nonumes
      vivendum et mea.
    </Typography>
  </Box>
);
