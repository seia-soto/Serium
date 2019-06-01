# Installation

This documentation will show instruction of Serium installation and adaptation to your own system.

## Table of Contents

- [Requirements](#Requirements)
- [Fork and Install](#Fork-and-Install)

----

## Requirements

First of all, Serium was developed with Node.JS, the server-side javascript engine. As you see codes, you will know that you need to install Node.JS first to your system. The system we're going to use in this tutorial is fresh installed Ubuntu 18.04 LTS. However I'll give you some useful links and comments to launch application in Mac OS X and Windows too.

**If you're using Linux system, let your system as latest as well. Reboot the machine.** Below is in Ubuntu deployment.

```sh
sudo apt update && sudo apt full-upgrade -y
sudo shutdown -r now
```

If you're using Windows and you might updating system will affect to already installed services, updating to latest is not essential process.

### NodeJS Installation

You need to install Node.JS and also need to install build-tool to install some application dependencies. [Download the Node.js pre-built installer for your platform](https://nodejs.org/en/download/) or [Install Node.JS via package manager](https://nodejs.org/en/download/package-manager/).

You can install like below as Nodesource on GitHub described.

```sh
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Install latest Node.JS v10 via package manager. After you do this, you can see Node.JS is installed on you machine. Just type `node -v` and see what is responding.

```sh
node -v
# v10.15.3
```

If you already installed Node.JS in your machine, but **in v12, you'll get error during installation of dependencies. Please remove your Node.JS following below and install again.**

```sh
sudo apt purge nodejs -y && sudo apt autoremove -y
```

If you are not on Ubuntu, reference links below.

- [How do I completely uninstall Node.js, and reinstall from beginning (Mac OS X)](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)
- [How to completely remove node.js from Windows](https://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows)

### Buildtools Installation

One dependency, [sharp](https://www.npmjs.com/package/sharp) needed to build its source during installation. To compile and install native addons from npm you may also need to install build tools like below(also as described in Nodesource on GitHub).

```sh
sudo apt install build-essential -y
```

Reference links for other platform below.

- [How to install build-essential on mac?](https://stackoverflow.com/questions/38086451/how-to-install-build-essential-on-mac)
- [Download Microsoft Build Tools 2015 from Official Microsoft Download Center](https://www.microsoft.com/en-us/download/details.aspx?id=48159)

### Git Installation

You must install Git to fork projects from GitHub. This is not essential step.

```sh
sudo apt install git -y
```

Also git is available to other platform. Pick up yours, or you can search your system on [this tutorial(Install Git | Atlassian)](https://www.atlassian.com/git/tutorials/install-git).

- [Git - Downloads](https://git-scm.com/downloads)

----

## Fork and Install

Now all is ready to launch Node.JS application and we're going to fork Serium from GitHub.

```sh
git clone https://github.com/serium-departments/Serium.git
cd Serium
```

Go to directory cloned and install dependencies.

```sh
npm install --save
```

It will take only 10 seconds roundly. However depends on performance of your machine.

----

All is done, please go to [configuration](configuration.md) section and configure Serium as yours.
