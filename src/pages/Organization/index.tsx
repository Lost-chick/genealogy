import React from 'react';
import ReactDOM from 'react-dom';
import { OrganizationGraph, ShapeCfg } from '@ant-design/graphs';
import { PageContainer } from '@ant-design/pro-components';
import data from './data'
import style from './index.less'

const DemoOrganizationGraph = () => {

    const calcStrLen = function calcStrLen(str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
                len++;
            } else {
                len += 2;
            }
        }
        return len;
    };
    return <div className={style['organization-container']}>
        <div className={style['title']}>
            李氏族谱
        </div>
        <OrganizationGraph
            height={800}
            data={data[0]}
            behaviors={['drag-canvas', 'zoom-canvas', 'scroll-canvas']}
            nodeCfg={{
                autoWidth: true,
                padding: 10,
                style: (node) => {
                    return node.id === 'root'
                        ? {
                            fill: '#fff',
                            stroke: '#ccc',
                            cursor: 'pointer',
                        }
                        : { cursor: 'pointer', stroke: '#ccc', };
                },
                label: {
                    style: (node, group, type) => {
                        const styles = {
                            icon: {
                                width: 32,
                                height: 32,
                            },
                            title: {
                                fill: '#666',
                            },
                            name: {
                                fontSize: 16,
                                fontWeight: 'bold',
                                fill: '#333',
                            },
                        };
                        return styles[type];
                    },
                },

            }}
            markerCfg={(cfg) => {
                return {
                    position: 'bottom',
                    show: cfg.children && cfg.children.length
                }
            }}
            autoFit
            onReady={(graph) => {
                graph.on('node:click', (evt) => {
                    console.log(evt!.item!._cfg!.id);
                });
            }}
        />;
    </div>
};
export default DemoOrganizationGraph;
