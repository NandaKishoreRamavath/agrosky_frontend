import agroImg from '../Assets/AgroDroneService.png';
import rescueImg from '../Assets/rescueDroneService.png';
import survillenceImg from '../Assets/SurvilenceDroneService.png';
import fireFightImg from '../Assets/firefightDroneService.png';
 
 const ServiceData = {
    AgroService : {
      ImageSrc : agroImg,
      sideHead : "Revolutionizing Farming \n with Smart Spraying Drones",
      desc : "Our agriculture drones empower farmers to monitor crops, spray fertilizers, and increase yields efficiently\n—reducing cost, time, and chemical waste.", 
      Head : "Agricultural Drone Services",
      ul : [
        "Automated crop spraying with uniform coverage",
        "Reduce pesticide use by up to 40%", 
        "Monitor crop health using aerial imaging",
        "Minimize labor dependency and human exposure"
      ],
      rightCard : false
    },
    RescueService : {
      ImageSrc : rescueImg,
      sideHead : "Drones That Deliver Hope in Crisis",
      desc : "AgroSky's drones are built for emergencies. In tough situations like floods or natural disasters, our UAVs help scan danger zones, identify people in need, and deliver essentials quickly and safely — exactly as we did during the recent Vijayawada floods.",
      Head : "Rescue & Relief Drone Services",
      widthH : 150,
         ul : [
        "Aerial scan of flooded/inaccessible zones",
        "Real-time detection of stranded people & damage", 
        "Supply drops: food, water, medicine",
        "Supports rescue teams, reduces human risk"
      ],
      rightCard : false
    },
    SurvillenceService : {
       ImageSrc : survillenceImg,
      sideHead : "Smarter Surveillance for Safer Spaces",
      desc : "AgroSky’s surveillance drones offer real-time monitoring for farmlands, border areas, industrial zones, and public gatherings with high-resolution vision and advanced sensors.", 
      Head : "Surveillance Drone \nServices",
      ul : [
        "Real-time aerial surveillance with HD & thermal imaging",
        "Intrusion detection & alert automation", 
        "Patrolling remote or high-risk zones",
        "Lower cost than traditional security setups"
      ],
      rightCard : true,
    },
    FireFightService : {
      ImageSrc : fireFightImg,
      sideHead : "Drones That Respond \nWhen Every Second Counts",
      desc : "Our rescue UAVs support emergency teams by mapping fire zones, locating victims, and reducing crew risk in disaster situations.", 
      Head : "Firefighting & Rescue \nDrone Services",
      ul : [
        "Thermal cameras to locate victims through smoke",
        "Real-time hazard mapping in wildfire zones",
        "Deliver essentials to unreachable areas",
        "Reduces risk to human firefighters"
      ],
      rightCard : true,
    }
  }


export default ServiceData;