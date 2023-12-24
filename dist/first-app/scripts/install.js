FS.rm("C:/system/local/bin/reboot");
    FS.cpfile("C:/system/boot/apps/hello", "C:/system/local/bin")
    FS.rename("C:/system/local/bin/hello", "reboot");