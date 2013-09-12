## PitLab

Post receive web hook for [GitLab](https://github.com/gitlabhq/gitlabhq) to update issues in [PivotalTracker](http://pivotaltracker.com/).  

PitLab does not require or provide an external tool integration to import stories into PivotalTracker from GitLab.  The issues created / updated by PitLab are identified using tags.

### Setup

1. **Install PitLab**  
```
npm install -g pitlab
```

2. **Start PitLab**  
```
PITLAB_PORT=3000 pitlab path/to/config.json
```
To run as a service, place the provided upstart script **pitlab.conf** in /etc/init/pitlab.conf

3. **Configure Pivotal Tracker Project**  
Edit the project you wish to integrate -> Settings -> Hooks  
Fill in the form as follows  
  * **Web Hook URL** url to interact with PitLab, of the form `http://<host>:3000/storyupdate`
      * **host** is the publicly available location pitlab is deployed
  * **API Version** v3

### Configuration
PitLab expects a JSON configuration file when initiated from the command line.  The configuration has the following properties:  
* **pivotal_url**: [Required] URL of Pivotal service
* **pivotal_token**: [Required] usable API token within Pivotal

Example configuration:
```json
{
    "pivotal_url": "http://www.pivotaltracker.com/services/v3/source_commits",
    "pivotal_token": "abcd1234"
}
```

### License

(The MIT License)

Copyright (c) 2013 Ensequence

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.