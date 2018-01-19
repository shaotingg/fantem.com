<template>
  <section class="product">
    <div class="product__pin"></div>
    <div class="product__pin-text">
      <span>Our Products</span>
    </div>
    <div class="product-item flex" v-for="(item, index) in items" :key="item.id">
      <div class="left">
        <div class="inner">
          <div class="textContent" v-if="index%2 == 0">
            <p class="title">{{index+1}}. {{item.title}}</p>
            <p class="subtitle">{{item.subtitle}}</p>
            <div class="productImg">
              <img :src="item.img">
            </div>
            <p class="desc">{{item.description}}</p>
            <div class="icons" v-if="item.icons">
              <div v-for="icon in item.icons" :key="icon.id">
                <img :src="require(`@/assets/images/${icon.toLowerCase()}.svg`)">
                <span>{{icon}}</span>
              </div>
            </div>
            <p class="highlights">Product Highlights:</p>
            <ul>
              <li v-for="highlight in item.productHighlights" :key="highlight.id">
                {{highlight}}  
              </li>
            </ul>
            <a class="learnMore" :href="item.learnMore" target="_blank">Learn More</a>
          </div>
        </div>
      </div>
      <div class="right" :class="{hasSecondary: item.sencondary}">
        <div class="inner">
          <div class="textContent" v-if="index%2 == 1">
            <p class="title">{{index+1}}. {{item.title}}</p>
            <p class="subtitle">{{item.subtitle}}</p>
            <div class="productImg">
              <img :src="item.img">
            </div>
            <p class="desc">{{item.description}}</p>
            <div class="icons" v-if="item.icons">
              <div v-for="icon in item.icons" :key="icon.id">
                <img :src="require(`@/assets/images/${icon.toLowerCase()}.svg`)">
                <span>{{icon}}</span>
              </div>
            </div>
            <p class="highlights">Product Highlights:</p>
            <ul>
              <li v-for="highlight in item.productHighlights" :key="highlight.id">
                {{highlight}}  
              </li>
            </ul>
            <div v-if="item.sencondary" class="secondary">
              <p class="title">{{item.sencondary.title}}</p>
              <p class="subtitle">{{item.sencondary.subtitle}}</p>
              <p class="desc">{{item.sencondary.description}}</p>
              <p class="highlights">Product Highlights:</p>
              <ul>
                <li v-for="highlight in item.sencondary.productHighlights" :key="highlight.id">
                  {{highlight}}  
                </li>
              </ul>
            </div>
            <a class="learnMore" :href="item.learnMore" target="_blank">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.product
  position: relative
  margin-top: 10rem
  &__pin
    position: absolute
    z-index: 1
    width: 0
    height: 0
    top: -130px
    left: 50%
    transform: translateX(-50%)
    border: 65px solid transparent
    border-bottom-color: #4d4d4d
    &:after
      content: ''
      position: absolute
      top: 65px
      left: -65px
      width: 0
      height: 0
      border: 65px solid transparent
      border-top-color: #4d4d4d
    &-text
      position: absolute
      z-index: 2
      top: -18px
      left: 50%
      width: 110px
      transform: translateX(-50%)
      font-size: 15px
      font-weight: 700
      line-height: 17px
      text-align: center
      text-transform: uppercase
      color: #fff
  &-item
    position: relative
    height: 900px
    &.flex
      display: flex
      .title
        color: #512da8
        font-size: 27px
        @media (max-width: 600px)
          font-size: @font-size*.7
      .subtitle
        color: #512da8
        font-size: 20px
        @media (max-width: 600px)
          font-size: @font-size*.7
      .desc
        color: #4d4d4d
      .icons
        margin: 4rem 0 3.25rem
        display: flex
        flex-wrap: wrap
        width: 257px
        justify-content: space-between
        @media (max-width: 600px)
          margin: .5rem 0 0
        &>div
          margin-bottom: .75rem
          @media (max-width: 600px)
            margin-bottom: .5rem
        img
          display: inherit
          margin: 0 auto
      .highlights
        color: #512da8
        font-size: 22px
        &+ul
          color: #4d4d4d
          margin-bottom: 2rem
          padding-left: 1.2rem
          list-style-type: disc
          @media (max-width: 600px)
            margin-bottom: 1rem
      .learnMore
        color: #000
        font-family: 'aileronbold'
        text-transform: uppercase
    &:nth-child(odd)
      .left
        flex: 9
        height: @height
        background: #f1f1f1
        .inner
          display: table
          height: 100%
          .textContent
            display: table-cell
            vertical-align: middle
            padding: 0 20% 0 10%
            @media (max-width: 600px)
              padding: 0 59px 0
            .productImg
              position: absolute
              top: 50%
              left: 60%
              max-width: 640px
              transform: translate(-50%, -50%)
              @media (max-width: 600px)
                margin: -50px auto
                position: static
                transform: none
                width: 100%
      .right
        flex: 7
        display: flex
        height: @height
        background-image: linear-gradient(128deg, #B88EF1 0%, #AE87EE 16%, #9273E7 43%, #6553DA 78%, #463DD2 100%)
        @media (max-width: 600px)
          position: absolute
          transform: rotateY(180deg)
        .inner
          border-width: 0 0 @height 90px
          border-style: solid
          border-color: transparent transparent transparent #f1f1f1
          @media (max-width: 600px)
            border-width: 0 0 @height 59px
    &:nth-child(even)
      @media (max-width: 600px)
        flex-direction: row-reverse
      .left
        flex: 7
        height: @height
        background-image: linear-gradient(128deg, #B88EF1 0%, #AE87EE 16%, #9273E7 43%, #6553DA 78%, #463DD2 100%)
        @media (max-width: 600px)
          transform: rotateY(180deg)
        .inner
          border-width: 0 90px @height 0
          border-style: solid
          border-color: transparent #fff transparent transparent
          @media (max-width: 600px)
            border-width: 0 59px @height 0
      .right
        flex: 9
        height: @height
        background: #fff
        &.hasSecondary
          font-size: 85%
        .inner
          display: table
          height: 100%
          .textContent
            display: table-cell
            vertical-align: middle
            padding: 0 5% 0 20%
            @media (max-width: 600px)
              padding: 0 9px 0 59px
            .productImg
              position: absolute
              top: 50%
              right: 60%
              max-width: 640px
              transform: translate(50%, -50%)
              @media (max-width: 600px)
                margin: -50px auto
                position: static
                transform: none
                width: 100%
</style>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Multi Sensor (6-in-1)',
          subtitle: 'Six sensor in one.',
          description: 'Multi Sensor 6-in-1 has six sensors built into a small unit. Motion, temperature, humidity, ambient light, UV light, and vibration. It can feedback data in real time to your Z-Wave hub. Sits nicely in the corner of any room.',
          icons: [
            'Motion',
            'Temperature',
            'Light',
            'Humidity',
            'Vibration',
            'UV'
          ],
          img: require('@/assets/images/1-Multisensor.png'),
          productHighlights: [
            'Anti-dismantle',
            'Tamper protection',
            'Long battery life - 2 years',
            'Easy installation',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Multi Sensor (3-in-1)',
          subtitle: 'The essential sensors.',
          description: 'Motion Sensor is three sensors in one: motion, temperature and ambient light. It can report the monitored data to in real time. It also has anti-dismantle protection with a built-in vibration sensor.',
          icons: [
            'Motion',
            'Temperature',
            'Light'
          ],
          img: require('@/assets/images/2-Multisensor.png'),
          productHighlights: [
            'Anti-dismantle',
            'Tamper protection',
            'Long battery life - 2 years',
            'Easy installation',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Recessor',
          subtitle: 'Elegantly hide MultiSensor on any surface.',
          description: 'Multi Sensor Recessor is used in conjuction with the Multi Sensor 6-in-1/3-in-1 as a mounting accessory. Secure your Multi Sensor to a ceiling or flat wall.',
          icons: [],
          img: require('@/assets/images/3-Multisensor-Recessor.png'),
          productHighlights: [
            '1.2cm protrusion',
            'Easily installed and removed',
            'Ceiling and Wall',
            '30º adjustable angle'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Door/Window Sensor Fin',
          subtitle: 'Know when something is opened or closed.',
          description: 'Door/Window Sensor Fin provides security and automation functions required for a modern home automation and security system. And It does it all in a small, elegant design crafted to suit any home\'s decor.',
          icons: [],
          img: require('@/assets/images/4-DWSensor.png'),
          productHighlights: [
            'Notifications',
            'Extremely slim',
            'Any door/ window',
            'Highly accurate - Within 2.2cm of magnet',
            'Long battery life',
            'USB charger',
            'Easy installation',
            '150m wireless range',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Door/Window Sensor Pebble',
          subtitle: 'Monitor door access',
          description: 'Door/Window Sensor Pebble provides your Z-Wave network with the intelligence required for a modern home automation and security system. And it does it all in a smaller, more elegant design crafted to suit any home\'s decor',
          icons: [],
          img: require('@/assets/images/5-DWSensor-Gen.png'),
          productHighlights: [
            'Simple installation',
            'Notifications',
            'Anti-tamper detection',
            'Long battery life',
            'Any doors/windows',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Dry Contact Sensor',
          subtitle: 'Monitor heating and water level systems.',
          description: 'Detect a variety of dry contact signals. You just need to connectt he external sensor to something such as the water level sensor, a dry contact switch, a dry contact relay and so on.',
          icons: [],
          img: require('@/assets/images/6-Dry-Contact.png'),
          productHighlights: [
            'Enables Z-Wave communication for a wired dry contact',
            'Terminal accepts wire sizes from 18Awg to 20Awg',
            'Z-wave Plus certified for wide compatibility',
            'Supports over the air (OTA) for firmwave updates t'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Water Sensor',
          subtitle: 'Stop leaks before they happen.',
          description: 'Water Sensor helps you monitor for water leaks and floods then prevent them before they happen. Super accurate, it\'s capatable of measuring as little as 0.003% of an inch of water.',
          icons: [],
          img: require('@/assets/images/7-WaterSensor.png'),
          productHighlights: [
            'Protect againt leaks and floods',
            'Detect 0.003% of an inch of wayer',
            '1-year battery life',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Water Sensor Pro',
          subtitle: 'Prevent a little leak from becoming a big problem',
          description: 'More homes are damaged each year by small leaks than by devastating fires or burglaries.Water Sensor Pro changes that, using Z-Wave Plus to silently monitor areas of your home at risk of water and then taking action when the worst occurs.',
          icons: [],
          img: require('@/assets/images/8-WaterSensorPro.png'),
          productHighlights: [
            'Dectect leaks, bursts, floods and overflows',
            'Get instant alerts',
            'Auto turn off power*',
            'Additional vibration and temperature sensor'
          ],
          sencondary: {
            title: 'Water Sensor Pro Dock',
            subtitle: 'More sensors more safety.',
            description: 'Expand the functionality of Water Sensor Pro with the Water Sensor Pro Dock. Add more sensors and additional charging features to the Water Sensor Pro.',
            productHighlights: [
              'Monitor 2 areas',
              'Monitor an area within lasso sensor',
              'Charge the Water Sensor Pro'
            ]
          },
          learnMore: '//1688.com'
        },
        {
          title: 'Home Energy Meter',
          subtitle: 'Know your utility costs.',
          description: 'Installed in an electricity box, your Home Energy Meter will monitor the total amount of electricity your home uses with accuracy and speed. Using a wireless Z-Wave connection, it\'ll then feed the data it records back to your smart home\'s gateway. In near real-time you\'ll have a full understanding of how much ectricity you use and when you use it.',
          icons: [],
          img: require('@/assets/images/9-Home-Energy-Meter.png'),
          productHighlights: [
            '200amp max measurement',
            '99% accuracy',
            '492 feet wireless range',
            'IP43 for outdoor use',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'In-Wall Dimmer',
          subtitle: 'Turn existing light switch into a smart dimmer.',
          description: 'In-Wall Dimmer is an intelligent dimming device. It\'s functions include turning lights on/off in addition to dimming lights, lamps and other lighting devices. In-Wall Dimmer also has the ability to monitor load power in real-time.',
          icons: [],
          img: require('@/assets/images/10-In-Wall-Dimmer-Bypass.png'),
          productHighlights: [
            'Works with or without neutral wire',
            'Works with existing light switch',
            'Smooth dimming',
            'Extremely small',
            'Supports: LED, CFL, fluorescent, incandescent and halogen lighting',
            'Surge and overload protection',
            'Secure communication - AES 128'
          ],
          sencondary: {
            title: 'Bypass',
            subtitle: 'Remove the flicker from dimmable LEDs.',
            description: 'Bypass is an accessory for the In-Wall Dimmer that solves the problem of lights flickering at a low level.',
            productHighlights: [
              'Supports LED and CFL lighting',
              'Stop dimmed lights flickering',
              'Less than 4 watts energy consumption',
              'Extremely small'
            ]
          },
          learnMore: '//1688.com'
        },
        {
          title: 'In-Wall Shutter',
          subtitle: 'Remotely control special motors.',
          description: 'In-Wall Shutter is a low-cost motor controller specifically used to enable remote control(up/down/stop) of existing motors, such as window covering, window, projector and so on. Once installed, the existing switch can still function to control the motor manually.',
          icons: [],
          img: require('@/assets/images/11-In-Wall-Shutter.png'),
          productHighlights: [
            'With energy metering function',
            'Remote control (up/down/stop)',
            'Overload and overheat protection',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'In-Wall Switch',
          subtitle: 'More convenient lighting control.',
          description: 'In-Wall Switch is a Z-Wave Switch specifically used to allow on/off control of existing wall switches, including lights or power outlets. In the event of power failure, non-volatile memory retains all programmed information relating to the unit\'s operating status.',
          icons: [],
          img: require('@/assets/images/12-In-Wall-Smart-Switch.png'),
          productHighlights: [
            'Control from anywhere',
            'Control power outlets or switches',
            'Automation and scheduling',
            'Extremely small',
            'Perfectly safe (inbuilt surge protection)',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'In-Wall Small Switch',
          subtitle: 'Turn any switch into a smart switch.',
          description: 'In-Wall Switch is a Z-Wave specifically used to allow on/off control of any wall switches, including lights or power outlets. It can report real-time wattage consumption. In the event of power failure, non-volatile memory retains all programmed information relating to the unit\'s operating status.',
          icons: [],
          img: require('@/assets/images/11-In-Wall-Shutter.png'),
          productHighlights: [
            'Control from anywhere',
            'Control power sockets or switches',
            'Energy metering',
            'Automation and scheduling',
            'Extremely small',
            'Perfectly safe (inbuilt surge protection)',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'In-Wall Switch (Dual)',
          subtitle: 'More convenient lighting control.',
          description: 'In-Wall Switch (Dual allows on/off control of any wall switches, including lights or power outlets. It can connect to 2 external switches to control the loads independently.',
          icons: [],
          img: require('@/assets/images/12-In-Wall-Smart-Switch.png'),
          productHighlights: [
            'Control from anywhere',
            'Control sockets or switches',
            'Automation and scheduling',
            'Extremely small',
            'Perfectly safe (inbuilt surge protection)',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'In-Wall Smart Switch (Dual)',
          subtitle: 'Turn any switch into a smart switch.',
          description: 'In-Wall Switch (Dual) allows on/off control of any wall switches, including lights or power outlets. It can connect to 2 external switches to control the loads independently. It can report real-time wattage consumption or kWh over a period of time.',
          icons: [],
          img: require('@/assets/images/11-In-Wall-Shutter.png'),
          productHighlights: [
            'Control from anywhere',
            'Control sockets or switches',
            'Energy metering',
            'Automation and scheduling',
            'Extremely small',
            'Perfectly safe (inbuilt surge protection)',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Touch Switch',
          subtitle: 'Enhance control of your smart switch.',
          description: 'The Touch Switch works in conjuction with any in-wall product to replace your existing wall switch with a cool and attractive touch panel. Simply touch or slide to turn on/off/dim the lights, control your fan, open/close curtains, and start scenes.',
          icons: [],
          img: require('@/assets/images/16-Touch-Switch.png'),
          productHighlights: [
            'Dimming control',
            'Curtain control',
            'Fan control',
            'Scene Control',
            'Secure communication - AES 128',
            'Red and blue lights indicate brightness',
            'RGB indicator for backlight',
            'Click / double click / long press / slide / gesture',
            'Capacitive touch'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Heavy Duty Smart Switch',
          subtitle: 'Energy monitor and smart switch.',
          description: 'Control your heavy duty appliances, turn them on or off remotely or via schedule. Monitor how much your high power appliance is costring you in real time. Works with appliances that require as much as 40 amps.',
          icons: [],
          img: require('@/assets/images/17-Heavy-Duty-Smart-Switch.png'),
          productHighlights: [
            'Secure communication - AES 128',
            'Remotely turn load on/off',
            'Report energy usage in watts or kWh',
            'Bear up to 40 amps current of resistor loads',
            'Overload protection'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Wallmote',
          subtitle: '2 or 4 shortcuts when you need them.',
          description: 'Wallmote is an intelligent Z-Wave remote controller that can be mounted on a wall. It has 2/4 touch buttons to control your Z-Wave devices via touching, long pressing or sliding the button regions. Its surface has a RGB LED to indicate the button actions also accompanied by an optional beep and vibration.',
          icons: [],
          img: require('@/assets/images/18-Wallmote.png'),
          productHighlights: [
            'Simple to install',
            'Portable',
            'Comes out of mount',
            'Any wall, any surface',
            'Device and scene control',
            'Tap and slide control',
            'Controls lights, rooms, devices and more',
            'Haptic feedback',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Smart Plug',
          subtitle: 'Make any outlet smart.',
          description: 'Smart Plug is a smart plug that lets you wirelessly control whatever is plugged into it. You can do that via remote control or a smart phone, and from an automation schedule or from the power outlet itself. Now your wall socket is smarter and connected.',
          icons: [],
          img: require('@/assets/images/19-Smart-Plug.png'),
          productHighlights: [
            'Make any outlet smart',
            'Wireless control',
            'Turn off devices in an emergency',
            'Surge protection',
            'Energy monitoring',
            '16 million color LED ring',
            'All countries',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Doorbell',
          subtitle: 'Connecting indoor and outdoor security.',
          description: 'Every press of Doorbell\'s outdoor button notifies your connected home that someone is at the door, allowing you to receive notifications, a chime in the home, and to activate any devices attached to your Z-Wave system.',
          icons: [],
          img: require('@/assets/images/20-Doorbell.png'),
          productHighlights: [
            'Notifications',
            '5 pre loaded chimes',
            'Upload up to 100 MP3 tones',
            '40 - 80dB alerts',
            'Long battery life - 3 years'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Siren',
          subtitle: 'Sound the alarm. Keep connected.',
          description: 'Siren from Fantem has been crafted to keep you safe and secure when you\'re home. The wellbeing of you and your family is our focus.',
          icons: [],
          img: require('@/assets/images/21-Siren.png'),
          productHighlights: [
            '105dB siren',
            'Visual alerts via 3 powerful LEDs',
            'Emergency backup',
            'Totally wireless',
            'Secure communication - AES 128',
            '150m range'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Range Extender',
          subtitle: 'Extend your smart home signal.',
          description: 'Range Extender is a Z-Wave mesh network repeater which can extend the range of communication between Z-Wave products and assist other devices to reach each other in your Z-Wave network.',
          icons: [],
          img: require('@/assets/images/22-Range-Extender.png'),
          productHighlights: [
            'Repeats wireless signals',
            'Amplifies wireless signals',
            'Small in size',
            'Available worldwide',
            'Fully compatible with all Z-Wave devices',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Z-Wave USB Hub',
          subtitle: 'The heart of your Z-Wave network.',
          description: 'Z-Wave USB Hub is a self-powered Z-Wave USB adapter with remote network creation capabilities (independent from external power and host microprocessor). By being able to remotely include/remove Z-Wave devices, this greatly simplifies Z-Wave network installation.',
          icons: [],
          img: require('@/assets/images/23-Z-Stick.png'),
          productHighlights: [
            'Simple to install',
            'Portable',
            'Small',
            'Zensys API',
            '232 Z-Wave Devices',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'IR Blaster',
          subtitle: 'Take full control of your home entertainment.',
          description: 'IR Blaster allows you to control any IR enabled device. Entertainment systems, TV sets, video consoles, AC units and other popular devices. First teach IR Blaster by letting it learn your original controllers IR commands, then control your IR device through the Blaster.',
          icons: [],
          img: require('@/assets/images/24-TV-IR-Blaster.png'),
          productHighlights: [
            '360º radius',
            'Ability to learn IR devices (TV, AC, audio system)',
            'Secure communication - AES 128',
            '8m IR reach'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'RGBW Controller',
          subtitle: 'Illuminate your life.',
          description: 'RGB Controller is a LED Strip controller used to control a LED strip (on/off/dim/colour change) via wireless Z-Wave commands.',
          icons: [],
          img: require('@/assets/images/25-RGBW-Controller.png'),
          productHighlights: [
            'Low power consumption',
            'Supports different modes (sunset, sunrise, etc)',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Smart Bulb',
          subtitle: 'Any color.Any white.All in one perfect light.',
          description: 'Day light. Candle light. Party lights. Whatever the mood, whatever the setting, whatever the time of day, Smart Bulb is ready to light a room with the perfect shade of light. Plug it in to turn any light in your home into a smart light. From there, Smart Bulb will fill your room with perfect light because Smart Bulb has been designed with 16 million, perfect shades of light.',
          icons: [],
          img: require('@/assets/images/26-Bulb.png'),
          productHighlights: [
            '16 million colors',
            'Daylight',
            'Warm light',
            'All whites 2580K - 4745K',
            '50,000 hours',
            '70 Watts of energy usage',
            '180º beam of light',
            'Indoors or outdoors'
          ],
          learnMore: '//1688.com'
        }
      ]
    }
  }
}
</script>
