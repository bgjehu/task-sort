const config = {
    vectors: [{
            name: "importance",
            label: '重要性',
            weight: 0.4,
            options: [{
                    name: "high",
                    label: "高",
                    value: 6
                },
                {
                    name: "medium",
                    label: "中",
                    value: 3
                },
                {
                    name: "low",
                    label: "低",
                    value: 1
                }
            ]
        },
        {
            name: "urgency",
            label: "紧急性",
            weight: 0.3,
            options: [{
                    name: "high",
                    label: "高",
                    value: 6
                },
                {
                    name: "medium",
                    label: "中",
                    value: 3
                },
                {
                    name: "low",
                    label: "低",
                    value: 1
                }
            ]
        },
        {
            name: "difficulty",
            label: "难度",
            weight: 0.2,
            options: [{
                    name: "high",
                    label: "高",
                    value: 6
                },
                {
                    name: "medium",
                    label: "中",
                    value: 3
                },
                {
                    name: "low",
                    label: "低",
                    value: 1
                }
            ]
        },
        {
            name: "timeConsuming",
            label: "耗时",
            weight: 0.1,
            options: [{
                    name: "high",
                    label: "高",
                    value: 6
                },
                {
                    name: "medium",
                    label: "中",
                    value: 3
                },
                {
                    name: "low",
                    label: "低",
                    value: 1
                }
            ]
        }
    ]
}