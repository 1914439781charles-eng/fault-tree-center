// ============================================================
// TROUBLESHOOTING TREE DATA — EN + ZH
// Edit both languages below to match your content
// ============================================================
const treeContent = 
{
  "en": {
    "id": "root",
    "title": "NFC Troubleshooting for EM300",
    "subtitle": "",
    "problem": "If your EM300 sensor cannot be read properly via NFC on your mobile phone, you can follow this troubleshooting flowchart to identify and resolve the issue.",
    "solution": [],
    "children": [
      {
        "id": "root_new_1",
        "title": "Replace the battery with a battery that works in another EM300 or new 1×4000mAh ER18505 Li-SOCL2 Battery.",
        "subtitle": "",
        "problem": "",
        "solution": [],
        "children": [
          {
            "id": "root_new_1_new_1",
            "title": "If the EM300 sensor can be scanned by NFC after you replace the battery, it means the previous issue was caused by the battery, which prevented the device from being scanned via NFC.",
            "subtitle": "",
            "problem": "",
            "solution": [],
            "children": [
              {
                "id": "root_new_1_new_1_new_1",
                "title": "Put the original battery back into the EM300 device, then use a multimeter to measure the battery’s loaded voltage to see if it is below 3.4V.",
                "subtitle": "",
                "problem": "",
                "solution": [
                  "If the loaded voltage of the original battery is below 3.4V, it indicates that there is an issue with the original battery and you just need to replace it with a new battery of the same model. If the voltage is above 3.4V, it means the battery is functioning normally. In this case, please contact Milesight technical support for further troubleshooting."
                ],
                "children": []
              }
            ]
          },
          {
            "id": "root_new_1_new_2",
            "title": "If the EM300 still cannot be accessed via NFC after you have replaced the battery, please try removing the battery, then press the power button on the device’s mainboard several times to discharge any remaining capacitor charge. After that, reinstall the new battery and see if the EM300 can be scanned by NFC.",
            "subtitle": "",
            "problem": "",
            "solution": [],
            "children": [
              {
                "id": "root_new_1_new_2_new_1",
                "title": "If the EM300 can be scanned by NFC, the issue was likely caused by insufficient power in the original battery or residual charge on the capacitor.",
                "subtitle": "",
                "problem": "",
                "solution": [],
                "children": []
              },
              {
                "id": "root_new_1_new_2_new_2",
                "title": "If the EM300 still cannot be scanned by NFC, the issue may be with the EM300 device itself. Please contact Milesight technical support for further troubleshooting.",
                "subtitle": "",
                "problem": "",
                "solution": [],
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  "zh": {
    "id": "root",
    "title": "",
    "subtitle": "",
    "problem": "",
    "solution": [],
    "children": [
      {
        "id": "root_new_1",
        "title": "",
        "subtitle": "",
        "problem": "",
        "solution": [],
        "children": [
          {
            "id": "root_new_1_new_1",
            "title": "新节点",
            "subtitle": "描述",
            "problem": "问题描述",
            "solution": [
              "步骤 1"
            ],
            "children": [
              {
                "id": "root_new_1_new_1_new_1",
                "title": "",
                "subtitle": "",
                "problem": "",
                "solution": [],
                "children": []
              }
            ]
          },
          {
            "id": "root_new_1_new_2",
            "title": "",
            "subtitle": "",
            "problem": "",
            "solution": [],
            "children": [
              {
                "id": "root_new_1_new_2_new_1",
                "title": "",
                "subtitle": "",
                "problem": "",
                "solution": [],
                "children": []
              },
              {
                "id": "root_new_1_new_2_new_2",
                "title": "",
                "subtitle": "",
                "problem": "",
                "solution": [],
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
}
;

// ============================================================
// UI TEXT (i18n)
// ============================================================
const uiText = 
{
  "en": {
    "badge": {
      "step": "Step",
      "resolved": "Resolved",
      "escalated": "Escalated"
    },
    "minimap": "Overview",
    "solution": "Solution",
    "buttons": {
      "start": "→ Ready, Start Troubleshooting",
      "resolved": "✓ Issue Resolved",
      "next": "→ Not Resolved, Continue",
      "noMore": "→ Still Unresolved",
      "reset": "↺ Restart",
      "copyPath": "📋 Copy Diagnostic Path",
      "copied": "✓ Copied!"
    },
    "banners": {
      "resolved": {
        "title": "Issue Resolved",
        "subtitle": "— resolved"
      },
      "escalated": {
        "title": "Submit a Ticket",
        "subtitle": "The steps above did not resolve your issue. Please contact Milesight Technical Support.<br>Provide: device model, firmware version, symptom screenshots, and steps already attempted.",
        "linkText": "→ Submit Support Ticket"
      }
    }
  },
  "zh": {
    "badge": {
      "step": "步骤",
      "resolved": "已解决",
      "escalated": "已升级"
    },
    "minimap": "总览",
    "solution": "解决方案",
    "buttons": {
      "start": "→ 准备好了，开始排查",
      "resolved": "✓ 问题已解决",
      "next": "→ 未解决，进入下一步",
      "noMore": "→ 仍无法解决",
      "reset": "↺ 重新开始排查",
      "copyPath": "📋 复制排查路径",
      "copied": "✓ 已复制！"
    },
    "banners": {
      "resolved": {
        "title": "问题已解决",
        "subtitle": "— 故障已排除"
      },
      "escalated": {
        "title": "请提交工单",
        "subtitle": "以上步骤未能解决您的问题，请联系 Milesight 技术支持。<br>请提供：设备型号、固件版本、故障截图、已尝试的排查步骤。",
        "linkText": "→ 提交技术支持工单"
      }
    }
  }
}
;
