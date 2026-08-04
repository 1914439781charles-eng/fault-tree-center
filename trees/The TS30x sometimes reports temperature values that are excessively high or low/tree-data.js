// ============================================================
// TROUBLESHOOTING TREE DATA — EN + ZH
// Edit both languages below to match your content
// ============================================================
const treeContent = 
{
  "en": {
    "id": "root",
    "title": "Sometimes, the TS30x may report temperature values that are excessively high or low.",
    "subtitle": "",
    "problem": "",
    "solution": [],
    "children": [
      {
        "id": "root_new_1",
        "title": "Check whether the deployment environment of the TS30x meets the device requirements. The TS30x should be deployed in an environment where the temperature is between -30°C and 70°C, and the relative humidity is between 0% and 95%.",
        "subtitle": "",
        "problem": "",
        "solution": [],
        "children": []
      },
      {
        "id": "root_new_2",
        "title": "Replace the temperature probe with one that works properly on another TS30x device. If the issue is resolved, this indicates that the problem was caused by a fault in the original probe.",
        "subtitle": "",
        "problem": "",
        "solution": [],
        "children": []
      },
      {
        "id": "te",
        "title": "Provide the SN code of the device and the historical data containing the abnormal temperature values to Milesight technical support for troubleshooting.",
        "subtitle": "",
        "problem": "",
        "solution": [],
        "children": []
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
        "children": []
      },
      {
        "id": "root_new_2",
        "title": "",
        "subtitle": "",
        "problem": "",
        "solution": [],
        "children": []
      },
      {
        "id": "te",
        "title": "",
        "subtitle": "",
        "problem": "",
        "solution": [],
        "children": []
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
