# My Debian Bookworm Installation

This is my installation of Debian Bookworm. This will use sway for window
manager. This is a very minimal installation.

## Downloading the iso File

Downloading Debian from the official Debian website is straightforward. Here’s a
step-by-step guide to help you:

1. Open the Debian Home Page: Go to [debian.org](https://www.debian.org/).
2. Click `Download` Button: On the homepage, you should see a prominent
   `Download` button or link.

## Buring the iso file

The `dd` command in Linux is a powerful utility for low-level copying and
conversion of data. To burn an ISO image to a disk (such as a CD or DVD) using
`dd`, follow these steps. **Be very careful with `dd`, as it can overwrite any
drive, potentially leading to data loss if used incorrectly.**

1. **Identify the Target Device:** First, you need to identify the correct
   device file for your target disk. You can list the available disks and their
   partitions using `lsblk` or `fdisk -l`.

```bash
lsblk
```

Look for a device that corresponds to your CD/DVD drive or USB drive (e.g.,
`/dev/sdX` or `/dev/sr0`).

2. **Unmount the Device (if necessary):** If the device is mounted, unmount it
   before proceeding. Replace `/dev/sdX1` with your actual partition if it's
   mounted.

```bash
sudo umount /dev/sdX1
```

3. **Use `dd` to Write the ISO Image:** Execute the `dd` command to write the
   ISO image to the device. Replace `/path/to/your.iso` with the path to your
   ISO file and `/dev/sdX` with your target device (make sure it's the whole
   device, not a partition).

```bash
sudo dd if=/path/to/your.iso of=/dev/sdX bs=4M status=progress
```

- `if` (input file) specifies the path to your ISO image.
- `of` (output file) specifies the target device.
- `bs=4M` sets the block size to 4 megabytes (adjust if needed).
- `status=progress` shows the progress of the operation.

4. **Sync and Wait:** After `dd` completes, it's a good idea to sync the disk to
   ensure all data is written.

```bash
sudo sync
```

5. **Eject the Disk (if necessary):** If you're burning to a CD/DVD and want to
   eject the disk, you can do so with:

```bash
sudo eject /dev/sdX
```

**Example Command:**

```bash
sudo dd if=debian.iso of=/dev/sdb bs=4M status=progress
```

**Notes:**

- Double-check the device path (`/dev/sdX`) to ensure you’re writing to the
  correct disk. Mistakenly writing to the wrong device can erase important data.
- `dd` does not perform error checking or verification on the written data. If
  you need to verify the integrity of the written disk, you can use additional
  tools like `md5sum` or `sha256sum` to compare checksums.

By following these steps, you should be able to burn an ISO image to a disk
using `dd`.

## Boot the Pendrive

Boot the iso from Boot Menu.

You need to find your boot menu key for your device.

## Installing Debian

Install the Debian based on your requirement. In Software Selection Screen
select nothing. And then click `Continue`.

## First Boot

Reboot the device and login as `root`. The perform update by typing the command:

```bash
apt update && apt upgrade -y
```

Debian does not install `sudo` by default. So you need to install `sudo`. To
install sudo you need to type:

```bash
apt install sudo --no-install-recommends
```

Then reboot the os with:

```bash
reboot
```

## Add user in sudo

Now we need to add user in sudo list. So, first we need to login as root. Then
type the command below to add user as root:

```bash
sudo usermod -a -G sudo <username>
```

After adding user to sudo we need to reboot. Type

```bash
reboot
```

## Login as user

After logging in as user we need to check whether `sudo` is working or not. To
check if `sudo` is working we need to type the following command:

```bash
sudo apt update && sudo apt upgrade -y
```

If the command works then the `sudo` is working.

### Adding Auto Login

If we want to auto login to our user then we can type the command:

```bash
sudo systemctl edit getty@tty1
```

Then add the following lines after the line that says
`Anything between here and
the comment below will become the new contents of the file`:

```bash
[Service]
ExecStart=
ExecStart=-/sbin/agetty --autologin <username> --noclear %I 38400 linux
```

## Time Sync

To sync time we need to install `systemd-timesyncd`. To install
`systemd-timesyncd` we need to type the following command:

```bash
sudo apt install systemd-timesyncd --no-install-recommends
```

## Sway

Sway is a window manager.

### Installing Sway

To install sway we need to type the following command:

```bash
sudo apt install sway --no-install-recommends
```

### Autostart Sway

Add the following lines in `~/.profile` file:

```bash
if [ -z "$WAYLAND_DISPLAY" ] && [ -n "$XDG_VTNR" ] && [ "$XDG_VTNR" -eq 1 ] ; then
    exec sway
fi
```

## Installing Terminal

We will install `foot` terminal. To install `foot` we need to type the following
command:

```bash
sudo apt install foot --no-install-recommends
```
