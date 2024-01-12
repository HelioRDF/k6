- PRIMEIROS PASSOS
https://grafana.com/docs/k6/latest/get-started/installation/
https://docs.chocolatey.org/en-us/choco/setup 


- Install Choco CMD
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

- Install Choco PowerShell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

- Instalar k6
choco install k6
ou
winget install k6 --source winget


- Executar
> k6 run .\myk6.js


-k6 web
https://grafana.com/docs/k6/latest/using-k6-browser/

> set "K6_NO_CONNECTION_REUSE=true"
> set "K6_USER_AGENT=MyK6UserAgentString/1.0" 

? Talvez > k6 run --no-connection-reuse --user-agent "MyK6UserAgentString/1.0" script.js

- Abrir navegador
> set "K6_BROWSER_HEADLESS=false" "&" set "K6_BROWSER_TIMEOUT='60s' " "&" k6 run k6_web.js
> k6 run script.js