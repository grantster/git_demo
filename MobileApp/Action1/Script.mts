
Device("Device").App("Home").MobileButton("Advantage Shopping").Tap
Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 0,0
Device("Device").App("Advantage Shopping").MobileObject("MobileObject").Tap 23,41
Device("Device").App("Advantage Shopping").MobileButton("Menu").Tap
Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 1,0
Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 2,0
Device("Device").App("Advantage Shopping").MobileButton("Menu").Tap
Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 0,0
Device("Device").App("Advantage Shopping").MobileButton("Menu_2").Tap
Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 1,0

AIUtil.SetContext Device("micclass:=Device")
AIUtil("hamburger_menu").Click
AIUtil.FindTextBlock("TABLETS").Click
AIUtil.FindTextBlock("HP ElitePad 1000 62 Tablet").Click
AIUtil.FindTextBlock("ADD TO CART").Click
AIUtil.FindTextBlock("Ok").Click
AIUtil("hamburger_menu").Click
AIUtil.FindTextBlock("HOME").Click
