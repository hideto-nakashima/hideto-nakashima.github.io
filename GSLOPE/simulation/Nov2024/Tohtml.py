# -*- coding: utf-8 -*-
"""
Created on Fri Nov  8 11:34:39 2024

@author: Hideto Nakashima
"""

import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

import pandas as pd
import datetime  # 日時取得のために必要

date = "{}".format(datetime.datetime.now().strftime("%y%m%d"))

files_dir = [
    f for f in os.listdir("./data/") if os.path.isdir(os.path.join("data/", f))
]



df = pd.DataFrame()

for f in files_dir:
    df = pd.concat([df,pd.read_csv("data/{}/{}-information.csv".format(f,f))],axis=0)
    
df = df.set_axis(range(len(df)),axis=0)

scripts = """
    <link href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css" rel="stylesheet"/>
    <link href="https://cdn.datatables.net/v/zf/jq-3.6.0/dt-1.13.4/b-2.3.6/b-html5-2.3.6/date-1.4.1/fh-3.3.2/sb-1.4.2/datatables.min.css" rel="stylesheet"/>
 
    <script src="https://cdn.datatables.net/v/zf/jq-3.6.0/dt-1.13.4/b-2.3.6/b-html5-2.3.6/date-1.4.1/fh-3.3.2/sb-1.4.2/datatables.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.min.js"></script>

    <script>
        $(document).ready(function() {$('.my-table').DataTable({
            select: true,
            displayLength: 25,
            buttons: ['copy'],
            fixedHeader: true,
            dom: 'iQrtBlp',
        });})
    </script>
    """

df["tag"] = df["tag"].map(lambda s: "<a href='data/{}/{}.csv' target='_blank'> {}</a>".format(s,s,s))
df["png"] = df["png"].map(lambda s: "<a href='data/{}/{}_1.png' target='_blank'><img src='data/{}/{}_1.png' width='300' target='_blank' /></a>".format(s,s,s,s))

html = df.to_html(classes='my-table',escape=False)

html = scripts + html
# with open("database_{}.html".format(date), mode='w') as f:
with open("database.html", mode='w') as f:
    f.write(html)