/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  learn: [
    'learn/introduction',
    'learn/glossary',
    {
      'type': 'html',
      'value': '<hr/>',
    },
    {
      'type': 'html',
      'value': '<span class=\'menu__link\'><b><small> TON Concepts </small></b></span>',
    },
    {
      type: 'category',
      label: 'TON Blockchain',
      items: [
        'learn/overviews/TON_blockchain_overview',
        'learn/overviews/Cells',
        {
          type: 'category',
          label: 'TON Virtual Machine (TVM)',
          items: [
            'learn/tvm-instructions/tvm_overview',
            'learn/tvm-instructions/tvm_exit_codes',
            'learn/tvm-instructions/instructions',
          ],
        },
        {
          type: 'category',
          label: 'TL-B Language',
          items: [
            'learn/overviews/TL-B',
            'learn/overviews/TL-B_language',
          ],
        },
        {
          type: 'category',
          label: 'TON Networking',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'learn/networking/overview',
            },
            {
              type: 'category',
              label: 'ADNL Protocol',
              items: [
                {
                  type: 'doc',
                  label: 'Overview',
                  id: 'learn/networking/adnl',
                },
                'learn/networking/low-level-adnl',
              ],
            },
            'learn/networking/overlay-subnetworks',
            'learn/networking/rldp',
            'learn/networking/ton-dht',
          ],
        },

        {
          type: 'link',
          label: 'TON Compared to Other L1s',
          href: 'https://ton.org/analysis',
        },
        {
          type: 'link',
          label: 'Open-Source and Decentralization in TON',
          href: 'https://defi.org/ton/',
        },
      ],
    },

    {
      type: 'category',
      label: 'TON Services',
      items: [
        'learn/services/payments',
        {
          type: 'doc',
          label: 'TON DNS',
          id: 'learn/services/dns',
        },
        {
          type: 'doc',
          label: 'TON Sites, WWW, and Proxy',
          id: 'learn/services/sites-www-proxy',
        },
        {
          'type': 'html',
          'value': '<span class=\'menu__link\'>TON Storage [2022 Q4]</span>',
        },
        {
          'type': 'html',
          'value': '<span class=\'menu__link\'>Bitcoin & EVM Crosschain</span>',
        },
      ],
    },
    {
      type: 'category',
      label: 'TON Whitepapers',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'learn/docs',
        },
        {
          type: 'link',
          label: 'TON',
          href: 'https://ton.org/ton.pdf',
        },
        {
          type: 'link',
          label: 'TON Virtual Machine',
          href: 'https://ton.org/tvm.pdf',
        },
        {
          type: 'link',
          label: 'TON Blockchain',
          href: 'https://ton.org/tblkch.pdf',
        },
        {
          type: 'link',
          label: 'Catchain Consensus Protocol',
          href: 'https://ton.org/catchain.pdf',
        },
      ],
    },
  ],
  develop: [

    'develop/getting-started',
    {
      type: 'link',
      label: 'TON Hello World',
      href: 'https://society.ton.org/ton-hello-world-step-by-step-guide-for-writing-your-first-smart-contract-in-func',
    },
    {
      'type': 'html',
      'value': '<hr/>',
    },
    {
      'type': 'html',
      'value': '<span class=\'menu__link\'><b><small> Development </small></b></span>',
    },
    {
      type: 'category',
      label: 'Develop Smart Contracts',
      items: [
        'develop/smart-contracts/README',
        {
          type: 'category',
          label: 'Environment',
          items: [
            'develop/smart-contracts/environment/installation',
            'develop/smart-contracts/environment/ide-plugins',
            'develop/smart-contracts/environment/testnet',
          ],
        },
        {
          type: 'category',
          label: 'Choose Your SDK',
          items: [
            'develop/smart-contracts/sdk/javascript',
            'develop/smart-contracts/sdk/toncli',
          ],
        },
        {
          type: 'category',
          label: 'Testing & Debugging',
          items: [
            'develop/smart-contracts/testing/tonstarter',
            'develop/smart-contracts/testing/toncli',
            {
              type: 'link',
              label: 'PyTVM',
              href: 'https://github.com/disintar/PyTVM',
            }
          ],
        },
        'develop/smart-contracts/compile/README',
        {
          type: 'category',
          label: 'Deploying Contract',
          items: [
            {
              type: 'link',
              label: 'Using tonstarter-contracts',
              href: 'https://github.com/ton-defi-org/tonstarter-contracts',
            },
            {
              type: 'link',
              label: 'Using Online IDE',
              href: 'https://glitch.com/edit/#!/remix/clone-from-repo?&REPO_URL=https%3A%2F%2Fgithub.com%2Fton-defi-org%2Ftonstarter-contracts.git',
            },
            {
              type: 'link',
              label: 'Using toncli',
              href: 'https://github.com/disintar/toncli',
            },
          ],
        },
        {
          type: 'category',
          label: 'Security Rules',
          items: [
            'develop/smart-contracts/security/README',
            'develop/smart-contracts/security/ton-hack-challenge-1',
          ],
        },
        'develop/smart-contracts/libraries',
        {
          type: 'category',
          label: 'Best Practices',
          items: [
            'develop/smart-contracts/guidelines',
            {
              type: 'link',
              label: 'getgems.io NFT Contracts',
              href: 'https://github.com/getgems-io/nft-contracts',
            },
            'develop/smart-contracts/fees',
            'develop/smart-contracts/messages',
            {
              type: 'link',
              label: 'Coming from Solidity',
              href: '/learn/introduction#ethereum-to-ton',
            },
            'develop/smart-contracts/guidelines/internal-messages',
            'develop/smart-contracts/guidelines/external-messages',
            'develop/smart-contracts/guidelines/non-bouncable-messages',
            'develop/smart-contracts/guidelines/get-methods',
            'develop/smart-contracts/guidelines/accept',
            'develop/smart-contracts/guidelines/processing',
            'develop/smart-contracts/governance',
            'develop/smart-contracts/guidelines/tips',
            'develop/smart-contracts/guidelines/nominator-pool-smart-contract-overview',
            {
              type: 'link',
              label: 'How to shard your TON smart contract and why',
              href: 'https://society.ton.org/how-to-shard-your-ton-smart-contract-and-why-studying-theanatomy-of-tons-jettons',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tutorials & Examples',
          items: [
            'develop/smart-contracts/tutorials/multisig'
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Develop dApps & Bots',
      items: [
        'develop/dapps/README',
        {
          type: 'category',
          label: 'API & SDK',
          items: [
            'develop/dapps/apis/README',
            'develop/dapps/apis/toncenter',
            'develop/dapps/apis/adnl',
          ],
        },
        {
          type: 'category',
          label: 'DeFi Development',
          items: [
            'develop/dapps/defi/coins',
            'develop/dapps/defi/tokens',
            'develop/dapps/defi/ton-payments',
            'develop/dapps/defi/subscriptions',
          ],
        },
        {
          type: 'category',
          label: 'Payment Processing',
          items: [
            'develop/dapps/asset-processing/README',
            {
              type: 'link',
              label: 'Create a key pair and a wallet',
              href: 'https://github.com/toncenter/examples/blob/main/common.js',
            },
            {
              type: 'link',
              label: 'Accepting deposits to a single wallet',
              href: 'https://github.com/toncenter/examples/blob/main/deposits-single-wallet.js',
            },
            {
              type: 'link',
              label: 'Accepting deposits to multiple wallets',
              href: 'https://github.com/toncenter/examples/blob/main/deposits-multi-wallet.js',
            },
            {
              type: 'link',
              label: 'Withdrawal processing',
              href: 'https://github.com/toncenter/examples/blob/main/withdrawals.js',
            }
          ],
        },

        {
          type: 'category',
          label: 'Tutorials & Examples',
          items: [
            'develop/dapps/tutorials/overview',
            'develop/dapps/tutorials/jetton-minter',
            {
              type: 'category',
              label: 'Telegram bots',
              items: [
                'develop/dapps/tutorials/accept-payments-in-a-telegram-bot',
                'develop/dapps/tutorials/accept-payments-in-a-telegram-bot-2',
                'develop/dapps/tutorials/accept-payments-in-a-telegram-bot-js',
              ],
            },
            'develop/dapps/tutorials/how-to-run-ton-site'
          ],
        },

      ],
    },
    {
      'type': 'html',
      'value': '<hr/>',
    },
    {
      'type': 'html',
      'value': '<span class=\'menu__link\'><b><small> References & Documentation </small></b></span>',
    },
    {
      type: 'category',
      label: 'FunC language',
      items: [
        {
          type: 'doc',
          id: 'develop/func/overview',
        },
        {
          type: 'category',
          label: 'Documentation',
          items: [
            'develop/func/types',
            'develop/func/comments',
            'develop/func/literals_identifiers',
            'develop/func/functions',
            'develop/func/global_variables',
            'develop/func/compiler_directives',
            'develop/func/statements',
            'develop/func/builtins',
            'develop/func/stdlib',
          ],
        },
      ],
    },
    {
      type: 'link',
      label: 'TON Concepts',
      href: '/learn/introduction',
    },
    {
      type: 'link',
      label: 'TON Services',
      href: '/learn/services/payments',
    },
    {
      type: 'link',
      label: 'TON Whitepapers',
      href: '/learn/docs',
    },
    {
      type: 'category',
      label: 'Network Configs',
      items: [
        {
          type: 'link',
          label: 'Mainnet config',
          href: 'https://ton.org/global-config.json',
        },
        {
          type: 'link',
          label: 'Testnet config',
          href: 'https://ton.org/testnet-global.config.json',
        },
      ],
    },

    {
      type: 'category',
      label: 'Low Level Internals',
      items: [
        'develop/howto/fees-low-level',
        'develop/howto/step-by-step',
        'develop/howto/config-params',
        {
          type: 'category',
          label: 'Archived',
          items: [
            'develop/archive/pow-givers',
            'develop/archive/mining',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Compile from Sources',
      items: [

        {
          type: 'doc',
          label: 'Compilation Instructions',
          id: 'develop/howto/compile',
        },
        {
          type: 'doc',
          label: 'Instructions for low-memory machines',
          id: 'develop/howto/compile-swap',
        },
      ],
    },
  ],
  participate: [
    'participate/README',
    {
      'type': 'html',
      'value': '<hr/>',
    },
    {
      'type': 'html',
      'value': '<span class=\'menu__link\'><b><small> Participate in TON Ecosystem </small></b></span>',
    },
    'participate/explorers',
    {
      type: 'category',
      label: 'Wallets in TON',
      items: [
        'participate/wallets/apps',
        'participate/wallets/contracts',
      ],
    },
    {
      type: 'category',
      label: 'Cross-chain Bridges',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'participate/crosschain/overview',
        },
        {
          type: 'doc',
          label: 'Bridges Addresses',
          id: 'participate/crosschain/bridge-addresses',
        },
      ]
    },
    {
      type: 'doc',
      label: 'Stake with Nominator Pools',
      id: 'participate/nominators',
    },
    {
      type: 'category',
      label: 'Run a Node',
      items: [
        'participate/nodes/node-types',
        'participate/nodes/local-ton',
        'participate/nodes/node-maintenance-and-security',
        'participate/nodes/run-node',
        'participate/nodes/collators',
        {
          type: 'link',
          label: 'Run a Validator Node',
          href: 'https://ton.org/validator',
        },
      ],
    },
    {
      type: 'link',
      label: 'Standards Discussion (TEPs)',
      href: 'https://github.com/ton-blockchain/TEPs',
    },
    {
      type: 'link',
      label: 'Ask a Question about TON',
      href: 'https://answers.ton.org/',
      className: 'noIcons',
    },
    {
      'type': 'html',
      'value': '<hr/>',
    },
    {
      'type': 'html',
      'value': '<span class=\'menu__link\'><b><small> Participate in Web3 </small></b></span>',
    },
    'participate/web3/overview',
    'participate/web3/dns',
    {
      'type': 'category',
      'label': 'Use TON Proxy',
      'items': [
        'participate/web3/how-to-open-any-ton-site',
        'participate/web3/setting-proxy',
        'participate/web3/sites-and-proxy',
      ],
    },
    'participate/web3/site-management',
  ],
  contribute: [
    {
      'type': 'category',
      'label': 'Become a Contributor',
      'items': [
        'contribute/README',
        'contribute/maintainers',
        'contribute/guidelines',
        'contribute/principles-of-a-good-tutorial',
        'contribute/sample-tutorial',
      ],
    },
    {
      'type': 'category',
      'label': 'Hacktoberfest 2022',
      'items': [
        'contribute/hacktoberfest/README',
        'contribute/hacktoberfest/as-contributor',
        'contribute/hacktoberfest/as-maintainer',
      ],
    },
  ],

}

module.exports = sidebars
