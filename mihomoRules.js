// 定义 Mihomo 配置和规则
const mihomoConfig = {
    "pr": { "type": "select", "proxies": [
        " 节点选择", " 香港故转", " 新加坡故转", " 日本故转", " 香港自动", " 日本自动",
        " 美国自动", " 自动选择", " 香港节点", " 新加坡节点", " 日本节点", " 韩国节点", 
        " 台湾节点", " 美国节点", " 德国节点", " 英国节点", " 全部节点", " 直连"
    ]},
    "proxy-providers": {
        "Airport_01": {
            "type": "http", "interval": 1800, "health-check": {
                "enable": true, "url": "https://www.gstatic.com/generate_204", "interval": 300
            },
            "proxy": " 直连", "url": "https://sub.791218.xyz/1234567890/download/myproxy?target=ClashMeta"
        }
    },
    "proxies": [
        { "name": " 直连", "type": "direct", "udp": true }
    ],
    "rules": [
        { "rule": "RULE-SET", "domain": "private_domain", "proxy": " 直连" },
        { "rule": "RULE-SET", "domain": "direct1", "proxy": " 直连" },
        { "rule": "RULE-SET", "domain": "apple_domain", "proxy": " Apple" },
        { "rule": "RULE-SET", "domain": "proxylite", "proxy": " 节点选择" },
        { "rule": "RULE-SET", "domain": "ai", "proxy": " ChatGPT" },
        { "rule": "RULE-SET", "domain": "github_domain", "proxy": " GitHub" },
        { "rule": "RULE-SET", "domain": "youtube_domain", "proxy": " YouTube" },
        { "rule": "RULE-SET", "domain": "Blizzard_domain", "proxy": " Blizzard" },
        { "rule": "RULE-SET", "domain": "google_domain", "proxy": " Google" }
    ],
    "rule-providers": {
        "private_domain": { "type": "http", "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.mrs" },
        "direct1": { "type": "http", "url": "https://raw.githubusercontent.com/qichiyuhub/rule/master/Direct.list" },
        "proxylite": { "type": "http", "url": "https://raw.githubusercontent.com/qichiyuhub/rule/master/ProxyLite.list" },
        "ai": { "type": "http", "url": "https://raw.githubusercontent.com/qichiyuhub/rule/master/AI.list" }
    }
};

// 直接生成订阅链接
const generateSubscriptionLink = () => {
    const subscriptionLink = `https://sub.791218.xyz/download/your-subscription?config=${encodeURIComponent(JSON.stringify(mihomoConfig))}`;
    console.log('生成的订阅链接:', subscriptionLink);
};

// 生成订阅链接
generateSubscriptionLink();
